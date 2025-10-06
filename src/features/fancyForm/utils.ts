import type { PriceData, Currency, ValidationResult } from "./types";

/**
 * Process raw price data from API
 * Groups by currency code and keeps the most recent price
 */
export const processCurrencyData = (data: PriceData[]): Currency[] => {
  const currencyMap = new Map<string, { price: number; date: Date }>();

  // Group by currency and keep latest price
  data
    .filter((item) => item.price === 0)
    .forEach((item) => {
      const existingEntry = currencyMap.get(item.currency);
      const itemDate = new Date(item.date);

      if (!existingEntry || itemDate > existingEntry.date) {
        currencyMap.set(item.currency, {
          price: item.price,
          date: itemDate,
        });
      }
    });

  // Convert to array and sort alphabetically
  return Array.from(currencyMap.entries())
    .map(([code, { price }]) => ({ code, price }))
    .sort((a, b) => a.code.localeCompare(b.code));
};

/**
 * Validate currency amount input
 */
export const validateAmount = (value: string): ValidationResult => {
  if (value === "" || value === "0") {
    return { isValid: true, error: "" };
  }

  const amount = parseFloat(value);

  if (isNaN(amount)) {
    return { isValid: false, error: "Please enter a valid number" };
  }

  if (amount < 0) {
    return { isValid: false, error: "Amount must be positive" };
  }

  if (amount > 1000000000) {
    return { isValid: false, error: "Amount too large" };
  }

  return { isValid: true, error: "" };
};

/**
 * Check if input string is valid number format
 */
export const isValidNumberInput = (value: string): boolean => {
  return value === "" || /^\d*\.?\d*$/.test(value);
};

/**
 * Calculate converted amount between two currencies
 */
export const calculateConversion = (
  amount: number,
  fromPrice: number,
  toPrice: number
): number => {
  return (amount * fromPrice) / toPrice;
};

/**
 * Format exchange rate display string
 */
export const formatExchangeRate = (
  fromCurrency: string,
  toCurrency: string,
  fromPrice: number,
  toPrice: number
): string => {
  const rate = fromPrice / toPrice;
  return `1 ${fromCurrency} = ${rate.toFixed(6)} ${toCurrency}`;
};
