import React, { useMemo } from "react";

interface PriceSectionProps {
  selectedShapes: string[];
  selectedSizes: string[];
  childCategories?: { name: string; childValues: string[] }[];
  prices: Record<number, Record<string, number>>
  setPrices: React.Dispatch<React.SetStateAction<Record<number, Record<string, number>>>>
  main_key: number;
}

const PriceSection: React.FC<PriceSectionProps> = ({
  selectedShapes,
  selectedSizes,
  childCategories = [],
  prices = [],
  setPrices,
  main_key
}) => {

  const combinations = useMemo(() => {
    const base: any[] = [];

    selectedShapes.forEach((shape) => {
      selectedSizes.forEach((size) => {

        // Filter only categories with childValues
        const childData = childCategories.filter(
          (c) => c.childValues && c.childValues.length > 0
        );

        // If no child categories → push simple combination
        if (childData.length === 0) {
          base.push({ shape, size, childCombo: [] });
          return;
        }

        // Recursive function to expand combinations
        const expandCategory = (index: number, current: string[]) => {
          if (index === childData.length) {
            base.push({ shape, size, childCombo: current });
            return;
          }

          childData[index].childValues.forEach((val) => {
            expandCategory(index + 1, [...current, val]);
          });
        };

        expandCategory(0, []);
      });
    });

    return base;
  }, [selectedShapes, selectedSizes, childCategories]);



  const getKey = (shape: string, size: string, combo: string[]) => {
    return `${shape}__${size}__${combo.join("__")}`;
  };

  return (
    <div className="mt-2 text-sm">
      <h2 className="text-gray-700 text-left font-semibold mb-2">
        $ Price Configuration
      </h2>
      {
        combinations.length ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-left">
            {combinations.map(({ shape, size, childCombo }, index) => {
              const key = getKey(shape, size, childCombo);
              const isComplex = childCombo.length > 0;
              const fieldName = isComplex ? shape + " x " + size + " x " + childCombo.join(' x ') : shape + " x " + size;
              return (
                <div
                  key={index}
                  className={`p-2 rounded-lg shadow-sm ${isComplex ? "bg-orange-50 border-s-3 border-orange-500" : "bg-white"
                    }`}
                >
                  <p className="font-medium text-gray-700">
                    {fieldName}
                  </p>
                  <input
                    type="number"
                    className="mt-1 border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter price"
                    value={prices[main_key]?.[key]}
                    onChange={(e) =>
                      setPrices({ ...prices, [main_key]: { ...prices[main_key], [key]: Number(e.target.value) } })
                    }
                  />
                </div>
              );
            })}
          </div> :
          <p className="">Add Primary Attributes to add Price Configurations</p>
      }
    </div>
  );
};

export default PriceSection;
