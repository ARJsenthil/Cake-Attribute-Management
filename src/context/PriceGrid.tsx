import React, { createContext, useContext, useState, ReactNode } from "react";

// Price section data types
interface PriceContextType {
  shape: string;
  kg: number;
  prices: number;

  setShape: (value: string) => void;
  setKg: (value: number) => void;
  setPrices: (value: number) => void;

  resetPriceData: () => void;
}

// Create context
const PriceContext = createContext<PriceContextType | undefined>(undefined);

// Provider
export const PriceProvider = ({ children }: { children: ReactNode }) => {
  const [shape, setShape] = useState("");
  const [kg, setKg] = useState(0);
  const [prices, setPrices] = useState(0);
console.log(prices)
  const resetPriceData = () => {
    setShape("");
    setKg(0);
    setPrices(0);
  };

  return (
    <PriceContext.Provider
      value={{
        shape,
        kg,
        prices,
        setShape,
        setKg,
        setPrices,
        resetPriceData,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};

// Custom Hook
export const usePrice = () => {
  const ctx = useContext(PriceContext);
  if (!ctx) throw new Error("usePrice must be used inside PriceProvider");
  return ctx;
};
