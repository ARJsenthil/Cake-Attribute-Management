import type { JSX, ReactNode } from "react";
import { BasicInfoProvider } from "./BasicInfo";
import { PrimaryAttributeProvider } from "./PrimaryAttributes";
import { ValuesProvider } from "./ValueSection";
import { PriceProvider } from "./PriceGrid";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <BasicInfoProvider>
      <PrimaryAttributeProvider>
        <ValuesProvider>
          <PriceProvider>
          {children}
          </PriceProvider>
        </ValuesProvider>
      </PrimaryAttributeProvider>
    </BasicInfoProvider>
  )
}