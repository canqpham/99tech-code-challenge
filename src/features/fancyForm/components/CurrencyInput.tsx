import { memo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { CurrencyInputProps } from "../types";

/**
 * Currency input component with amount and currency selector
 */
export const CurrencyInput = memo(
  ({
    id,
    label,
    amount,
    currency,
    currencies,
    onAmountChange,
    onCurrencyChange,
    error,
    readOnly = false,
    currencyDisabled = "",
  }: CurrencyInputProps) => {
    return (
      <div className="space-y-2">
        <Label htmlFor={id}>{label}</Label>
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              id={id}
              type="text"
              placeholder="0.00"
              value={amount}
              onChange={
                onAmountChange
                  ? (e) => onAmountChange(e.target.value)
                  : undefined
              }
              readOnly={readOnly}
              className={`text-lg ${
                readOnly
                  ? "bg-muted disabled:text-neutral-800 disabled:opacity-100 disabled:cursor-not-allowed"
                  : ""
              } ${error ? "border-red-500" : ""}`}
              disabled={readOnly}
            />
          </div>
          <Select value={currency} onValueChange={onCurrencyChange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent
              align="end"
              className="relative min-w-[398px] overflow-y-auto"
            >
              {currencies.map((curr) => (
                <SelectItem
                  key={curr.code}
                  value={curr.code}
                  disabled={curr.code === currencyDisabled}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5">
                      <img
                        src={`${import.meta.env.BASE_URL}tokens/${
                          curr.code
                        }.svg`}
                        alt={curr.code}
                        className="w-5 h-5"
                        onError={(e) => {
                          // Fallback to placeholder if icon not found
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <span>{curr.code}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

CurrencyInput.displayName = "CurrencyInput";
