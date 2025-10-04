// Type definitions for currency swap feature

/**
 * Props for PriceData component
 */
export interface PriceData {
  currency: string;
  date: string;
  price: number;
}

/**
 * Props for Currency component
 */
export interface Currency {
  code: string;
  price: number;
}

/**
 * Props for ValidationResult component
 */
export interface ValidationResult {
  isValid: boolean;
  error: string;
}

/**
 * Props for CurrencyInput component
 */
export interface CurrencyInputProps {
  id: string;
  label: string;
  amount: string;
  currency: string;
  currencies: Currency[];
  onAmountChange?: (value: string) => void;
  onCurrencyChange: (value: string) => void;
  error?: string;
  readOnly?: boolean;
  currencyDisabled?: string;
}

/**
 * Props for ErrorState component
 */
export interface ErrorStateProps {
  error: string;
}

/**
 * Props for ExchangeRateDisplay component
 */
export interface ExchangeRateDisplayProps {
  fromCurrency: string;
  toCurrency: string;
  fromPrice: number;
  toPrice: number;
}

/**
 * Props for SwapButton component
 */
export interface SwapButtonProps {
  onClick: () => void;
}

/**
 * Props for useCurrencyConverter hook
 */
export interface UseCurrencyConverterProps {
  currencies: Currency[];
  initialFromCurrency?: string;
  initialToCurrency?: string;
}
