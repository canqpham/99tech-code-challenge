import { memo } from "react";
import type { ExchangeRateDisplayProps } from "../types";

/**
 * Display current exchange rate between two currencies
 */
const ExchangeRateDisplay = ({
  fromCurrency,
  toCurrency,
  fromPrice,
  toPrice,
}: ExchangeRateDisplayProps) => {
  const rate = fromPrice / toPrice;

  return (
    <div className="pt-4 border-t">
      <p className="text-sm text-muted-foreground text-center">
        1 {fromCurrency} = {rate.toFixed(6)} {toCurrency}
      </p>
      <p className="text-xs text-muted-foreground text-center mt-1">
        Exchange rate is indicative
      </p>
    </div>
  );
};

export default memo(ExchangeRateDisplay);
