import { createContext, useContext, useState, type ReactNode } from "react";

interface AppProvidersProps {
  children: ReactNode;
}

interface ChildType {
  shapes: Record<string, boolean>;
  size: Record<string, boolean>;
}

interface AppContextType {
  primaryAttribute: ChildType;
  setPrimaryAttribute: React.Dispatch<React.SetStateAction<ChildType>>;
}

const PrimaryAttributeContext = createContext<AppContextType | undefined>(undefined);

const PrimaryAttributeProvider = ({ children }: AppProvidersProps) => {
  const [primaryAttribute, setPrimaryAttribute] = useState<ChildType>({
    shapes: {
      Rectangle: false,
      Round: false,
      Square: false,
      Heart: false,
      Star: false,
      Oval: false,
    },
    size: {
      "0.5Kg": false,
      "1Kg": false,
      "1.5Kg": false,
      "2Kg": false,
      "2.5Kg": false,
      "3Kg": false,
      "4Kg": false,
      "5Kg": false,
    },
  });

  return (
    <PrimaryAttributeContext.Provider value={{ primaryAttribute, setPrimaryAttribute }}>
      {children}
    </PrimaryAttributeContext.Provider>
  );
};

const usePrimaryAttribute = () => {
  const context = useContext(PrimaryAttributeContext);
  if (!context) throw new Error("usePrimaryAttribute must be used within a PrimaryAttributeProvider");
  return context;
};

export { usePrimaryAttribute, PrimaryAttributeProvider };
