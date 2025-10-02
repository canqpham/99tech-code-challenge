import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCurrencyData } from "./hooks/useCurrencyData";
import { useCurrencyConverter } from "./hooks/useCurrencyConverter";
import {
  LoadingState,
  ErrorState,
  CurrencyInput,
  SwapButton,
  ExchangeRateDisplay,
} from "./components";

/**
 * Currency swap form
 */
const FancyForm = () => {
  // Fetch currency data from API
  const { currencies, loading, error: fetchError } = useCurrencyData();

  // Manage conversion logic and state
  const {
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
  } = useCurrencyConverter({ currencies });

  // Show loading state while fetching currencies
  if (loading) {
    return <LoadingState />;
  }

  // Show error state if fetch failed
  if (fetchError) {
    return <ErrorState error={fetchError} />;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Currency Swap</CardTitle>
          <CardDescription>
            Exchange assets from one currency to another · {currencies.length}{" "}
            currencies available
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* From Currency Input */}
          <CurrencyInput
            id="from-amount"
            label="From"
            amount={fromAmount}
            currency={fromCurrency}
            currencies={currencies}
            onAmountChange={handleAmountChange}
            onCurrencyChange={setFromCurrency}
            error={error}
          />

          <SwapButton onClick={handleSwap} />

          <CurrencyInput
            id="to-amount"
            label="To"
            amount={toAmount}
            currency={toCurrency}
            currencies={currencies}
            onCurrencyChange={setToCurrency}
            readOnly
          />

          {/* Exchange Rate Display */}
          {!error && fromAmount !== "" && fromAmount !== "0" && (
            <ExchangeRateDisplay
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              fromPrice={fromPrice}
              toPrice={toPrice}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FancyForm;
