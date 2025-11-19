import React, { createContext, useContext, useState, type ReactNode } from "react";

interface AppProvidersProps {
  children: ReactNode;
}
interface PriceContextType {
  prices: Record<number, Record<string, number>>;
  setPrices: React.Dispatch<
    React.SetStateAction<Record<number, Record<string, number>>>
  >;
}


const PriceContext = createContext<PriceContextType | undefined>(undefined);

export const PriceProvider = ({ children }: AppProvidersProps) => {
  const [prices, setPrices] = useState<Record<number, Record<string, number>>>({});

  return (
    <PriceContext.Provider
      value={{
        prices,
        setPrices,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};

export const usePrice = () => {
  const ctx = useContext(PriceContext);
  if (!ctx) throw new Error("usePrice must be used inside PriceProvider");
  return ctx;
};
