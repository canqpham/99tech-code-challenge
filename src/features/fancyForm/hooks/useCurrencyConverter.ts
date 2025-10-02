import { useState, useEffect, useMemo, useCallback } from "react";
import type { UseCurrencyConverterProps } from "../types";
import {
  validateAmount,
  calculateConversion,
  isValidNumberInput,
} from "../utils";

/**
 * Custom hook to manage currency conversion logic and state
 */
export const useCurrencyConverter = ({
  currencies,
  initialFromCurrency = "USD",
  initialToCurrency = "BLUR",
}: UseCurrencyConverterProps) => {
  const [fromAmount, setFromAmount] = useState("1");
  const [toAmount, setToAmount] = useState("0");
  const [fromCurrency, setFromCurrency] = useState(initialFromCurrency);
  const [toCurrency, setToCurrency] = useState(initialToCurrency);
  const [error, setError] = useState("");

  const fromPrice = useMemo(
    () => currencies.find((c) => c.code === fromCurrency)?.price || 1,
    [currencies, fromCurrency]
  );

  const toPrice = useMemo(
    () => currencies.find((c) => c.code === toCurrency)?.price || 1,
    [currencies, toCurrency]
  );

  // Calculate conversion when dependencies change
  useEffect(() => {
    // Skip if currencies not loaded yet
    if (currencies.length === 0) {
      return;
    }

    const validation = validateAmount(fromAmount);

    if (!validation.isValid) {
      setError(validation.error);
      setToAmount("0");
      return;
    }

    if (fromAmount === "" || fromAmount === "0") {
      setToAmount("0");
      setError("");
      return;
    }

    setError("");

    const amount = parseFloat(fromAmount);
    const result = calculateConversion(amount, fromPrice, toPrice);
    setToAmount(result.toFixed(6));
  }, [fromAmount, fromCurrency, toCurrency, currencies, fromPrice, toPrice]);

  // Handle amount input with validation
  const handleAmountChange = useCallback((value: string) => {
    if (isValidNumberInput(value)) {
      setFromAmount(value);
    }
  }, []);

  // Swap currencies
  const handleSwap = useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
  }, [fromCurrency, toCurrency, toAmount]);

  return {
    fromAmount,
    toAmount,
    fromCurrency,
    toCurrency,
    error,
    fromPrice,
    toPrice,
    setFromCurrency,
    setToCurrency,
    handleAmountChange,
    handleSwap,
  };
};
