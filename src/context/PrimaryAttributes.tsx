import { createContext, useContext, useState, type ReactNode } from "react";

interface AppProvidersProps {
  children: ReactNode;
}
interface ChildType {
  shapes: {
    rectangle: boolean,
    round: boolean,
    square: boolean,
    heart: boolean,
    star: boolean,
    oval: boolean,
  };
  size: {
    "0.5Kg": boolean,
    "1Kg": boolean,
    "1.5Kg": boolean,
    "2Kg": boolean,
    "2.5Kg": boolean,
    "3Kg": boolean,
    "4Kg": boolean,
    "5Kg": boolean,
  };
}


interface AppContextType {
  primaryAttribute: ChildType;
  handleInputChange: (attributeName: keyof ChildType, name: string, value: string | number | boolean) => void;
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

  const handleInputChange = (
    attributeName: keyof ChildType,
    name: string,
    value: string | number | boolean
  ) => {
    console.log(primaryAttribute);
    setPrimaryAttribute({ ...primaryAttribute, [attributeName]: { ...primaryAttribute[attributeName], [name]: value } });
    // setPrimaryAttribute((prev) => ({
    //   ...prev,
    //   [attributeName]: {
    //     ...prev[attributeName],
    //     [name]: value,
    //   },
    // }));

  };

  return (
    <PrimaryAttributeContext.Provider
      value={{ primaryAttribute, handleInputChange, setPrimaryAttribute }}
    >
      {children}
    </PrimaryAttributeContext.Provider>
  );
};

const usePrimaryAttribute = () => {
  const context = useContext(PrimaryAttributeContext);
  if (!context) throw new Error("useprimaryAttribute must be used within a PrimaryAttributeProvider");
  return context;
};

export { usePrimaryAttribute, PrimaryAttributeProvider };

