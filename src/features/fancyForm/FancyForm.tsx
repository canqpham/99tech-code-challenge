import { useState } from "react";
import { motion } from "framer-motion";
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
  const [isSwapping, setIsSwapping] = useState(false);

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

  // Handle swap with animation
  const handleSwapWithAnimation = () => {
    setIsSwapping(true);
    setTimeout(() => {
      handleSwap();
      setTimeout(() => setIsSwapping(false), 300);
    }, 300);
  };

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
          <div className="relative">
            {/* From Currency Input */}
            <motion.div
              key="from-input"
              animate={{
                y: isSwapping ? 100 : 0,
                opacity: isSwapping ? 0.1 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
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
            </motion.div>

            {/* Swap Button */}
            <div className="flex justify-center my-6 relative z-10">
              <motion.div
                animate={{ rotate: isSwapping ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <SwapButton onClick={handleSwapWithAnimation} />
              </motion.div>
            </div>

            {/* To Currency Input */}
            <motion.div
              key="to-input"
              animate={{
                y: isSwapping ? -100 : 0,
                opacity: isSwapping ? 0.1 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <CurrencyInput
                id="to-amount"
                label="To"
                amount={toAmount}
                currency={toCurrency}
                currencies={currencies}
                onCurrencyChange={setToCurrency}
                readOnly
              />
            </motion.div>
          </div>

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
