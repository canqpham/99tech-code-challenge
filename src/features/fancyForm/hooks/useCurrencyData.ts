import { useState, useEffect, useRef } from "react";
import type { Currency, PriceData } from "../types";
import { processCurrencyData } from "../utils";

const API_URL = import.meta.env.VITE_CURRENCY_API_URL;

/**
 * Custom hook to fetch and manage currency data from API
 */
export const useCurrencyData = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Track if fetch has been initiated to prevent double calls
  const hasFetched = useRef(false);

  useEffect(() => {
    // Prevent duplicate fetches
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchCurrencies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch currency data");
        }

        const data: PriceData[] = await response.json();
        const processedCurrencies = processCurrencyData(data);

        setCurrencies(processedCurrencies);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load currencies";
        setError(errorMessage);
        console.error("Error fetching currencies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  return { currencies, loading, error };
};
