import { createContext, useContext, useState, type ReactNode } from "react";

interface ChildCategory {
  id: number;
  name: string;
  childValues: string[];
}

interface ValueItem {
  id: number;
  name: string;
  type: "Selection Input" | "Text Upload" | "Image Upload";
  status: "active" | "inactive";
  description?: string;
  categories?: ChildCategory[];
}

interface ValuesContextType {
  values: ValueItem[];
  addNewValue: () => void;
  deleteValue: (id: number) => void;
  addCategory: (valId: number) => void;
  updateCategoryName: (valId: number, catId: number, newName: string) => void;
  addChildValue: (valId: number, catId: number, child: string) => void;
  removeChildValue: (valId: number, catId: number, child: string) => void;
  deleteCategory: (valId: number, catId: number) => void;
  setValues: React.Dispatch<React.SetStateAction<ValueItem[]>>;
}

const ValuesContext = createContext<ValuesContextType | undefined>(undefined);

const ValuesProvider = ({ children }: { children: ReactNode }) => {
  const [values, setValues] = useState<ValueItem[]>([]);
  console.log(values);
  const addNewValue = () => {
    const newValue: ValueItem = {
      id: Date.now(),
      name: "",
      type: "Selection Input",
      status: "active",
      categories: [],
    };
    setValues((prev) => [...prev, newValue]);
  };

  const deleteValue = (id: number) => {
    setValues((prev) => prev.filter((v) => v.id !== id));
  };

  const addCategory = (valId: number) => {
    setValues((prev) =>
      prev.map((v) =>
        v.id === valId
          ? {
              ...v,
              categories: [
                ...(v.categories || []),
                { id: Date.now(), name: "New Category", childValues: [] },
              ],
            }
          : v
      )
    );
  };

  const updateCategoryName = (valId: number, catId: number, newName: string) => {
    setValues((prev) =>
      prev.map((v) =>
        v.id === valId
          ? {
              ...v,
              categories: v.categories?.map((c) =>
                c.id === catId ? { ...c, name: newName } : c
              ),
            }
          : v
      )
    );
  };

  const addChildValue = (valId: number, catId: number, child: string) => {
    if (!child.trim()) return;
    setValues((prev) =>
      prev.map((v) =>
        v.id === valId
          ? {
              ...v,
              categories: v.categories?.map((c) =>
                c.id === catId
                  ? { ...c, childValues: [...c.childValues, child] }
                  : c
              ),
            }
          : v
      )
    );
  };

  const removeChildValue = (valId: number, catId: number, child: string) => {
    setValues((prev) =>
      prev.map((v) =>
        v.id === valId
          ? {
              ...v,
              categories: v.categories?.map((c) =>
                c.id === catId
                  ? {
                      ...c,
                      childValues: c.childValues.filter((cv) => cv !== child),
                    }
                  : c
              ),
            }
          : v
      )
    );
  };

  const deleteCategory = (valId: number, catId: number) => {
    setValues((prev) =>
      prev.map((v) =>
        v.id === valId
          ? {
              ...v,
              categories: v.categories?.filter((c) => c.id !== catId),
            }
          : v
      )
    );
  };

  return (
    <ValuesContext.Provider
      value={{
        values,
        setValues,
        addNewValue,
        deleteValue,
        addCategory,
        updateCategoryName,
        addChildValue,
        removeChildValue,
        deleteCategory,
      }}
    >
      {children}
    </ValuesContext.Provider>
  );
};

const useValues = () => {
  const context = useContext(ValuesContext);
  if (!context)
    throw new Error("useValues must be used within a ValuesProvider");
  return context;
};

export { ValuesProvider, useValues };