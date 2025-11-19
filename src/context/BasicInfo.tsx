import { createContext, useContext, useState, type ReactNode } from "react";

interface AppProvidersProps {
  children: ReactNode;
}

export interface ChildType {
  attributeName: string;
  selectionType: string;
  attributeStatus: string;
  sort: number;
  requiredStatus: boolean;
}

interface AppContextType {
  basicInfo: ChildType;
  setBasicInfo: React.Dispatch<React.SetStateAction<ChildType>>;
}

const BasicInfoContext = createContext<AppContextType | undefined>(undefined);

const BasicInfoProvider = ({ children }: AppProvidersProps) => {
  const [basicInfo, setBasicInfo] = useState<ChildType>({
    attributeName: "",
    selectionType: "Single Select",
    attributeStatus: "Active",
    sort: 0,
    requiredStatus: false,
  });


  return (
    <BasicInfoContext.Provider value={{ basicInfo, setBasicInfo }}>
      {children}
    </BasicInfoContext.Provider>
  );
};

const useBasicInfo = () => {
  const context = useContext(BasicInfoContext);
  if (!context) throw new Error("useBasicInfo must be used within a BasicInfoProvider");
  return context;
};

export { useBasicInfo, BasicInfoProvider };
