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
import { Button } from "@/components/ui/button";

const FROM_LABEL = "Amount to send";
const TO_LABEL = "Amount to receive";

/**
 * Currency swap form
 */
const FancyForm = () => {
  const [isSwapping, setIsSwapping] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSwapSuccess, setIsSwapSuccess] = useState<string>("");

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

  // Handle swap with animation
  const handleSwapWithAnimation = () => {
    setIsSwapping(true);
    setTimeout(() => {
      handleSwap();
      setIsFlipped(!isFlipped);
      setIsSwapping(false);
    }, 300);
  };

  const confirmSwap = () => {
    setIsConfirming(true);
    setTimeout(() => {
      setIsSwapSuccess(toAmount);
      setIsConfirming(false);
    }, 1000);
    setTimeout(() => {
      setIsSwapSuccess("");
    }, 5000);
  };

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
          <div className="relative flex flex-col gap-6">
            {/* From Currency Input */}
            <motion.div
              layout
              initial={false}
              animate={{
                y: isFlipped ? 140 : 0,
                opacity: isSwapping ? 0.7 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                opacity: { duration: 0.2 },
              }}
              className=" w-full"
            >
              <CurrencyInput
                id="from-amount"
                label={isFlipped ? FROM_LABEL : TO_LABEL}
                amount={isFlipped ? toAmount : fromAmount}
                currencyDisabled={isFlipped ? fromCurrency : toCurrency}
                currency={isFlipped ? toCurrency : fromCurrency}
                currencies={currencies}
                onAmountChange={isFlipped ? undefined : handleAmountChange}
                onCurrencyChange={isFlipped ? setToCurrency : setFromCurrency}
                error={error}
                readOnly={isFlipped}
              />
            </motion.div>

            {/* Swap Button */}
            <div className="">
              <motion.div
                animate={{ rotate: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <SwapButton
                  disabled={isSwapping || isConfirming}
                  onClick={handleSwapWithAnimation}
                />
              </motion.div>
            </div>

            {/* To Currency Input */}
            <motion.div
              layout
              initial={false}
              animate={{
                y: isFlipped ? -140 : 0,
                opacity: isSwapping ? 0.7 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                opacity: { duration: 0.2 },
              }}
              className=""
            >
              <CurrencyInput
                id="to-amount"
                label={isFlipped ? TO_LABEL : FROM_LABEL}
                amount={isFlipped ? fromAmount : toAmount}
                currencyDisabled={isFlipped ? toCurrency : fromCurrency}
                currency={isFlipped ? fromCurrency : toCurrency}
                currencies={currencies}
                onAmountChange={isFlipped ? handleAmountChange : undefined}
                onCurrencyChange={isFlipped ? setFromCurrency : setToCurrency}
                readOnly={!isFlipped}
              />
            </motion.div>

            <Button
              disabled={isConfirming || isSwapping}
              onClick={confirmSwap}
              className="cursor-pointer"
            >
              {isConfirming ? "Swapping..." : "Confirm Swap"}
            </Button>
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
          {isSwapSuccess !== "" && (
            <div className="flex flex-col items-center justify-center border border-green-500 p-4 bg-green-50 rounded-md">
              <p className="text-lg font-semibold text-green-900">
                Congratulations!
              </p>
              <p className="text-green-900">
                You have swapped {fromAmount} {fromCurrency} to {isSwapSuccess}{" "}
                {toCurrency}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FancyForm;
