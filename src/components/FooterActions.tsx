import { Box, CurlyBraces, Eye, Save } from "lucide-react";
import React from "react";
import { usePrice } from "../context/PriceGrid";
import { useBasicInfo } from "../context/BasicInfo";
import { usePrimaryAttribute } from "../context/PrimaryAttributes";
import { useValues } from "../context/ValueSection";

const FooterActions = () => {
  const { prices, setPrices } = usePrice();
  const { basicInfo, setBasicInfo } = useBasicInfo();
  const { primaryAttribute, setPrimaryAttribute } = usePrimaryAttribute();
  const { values, setValues } = useValues();
  const GenerateRandomdata = () => {
    setBasicInfo({
      attributeName: "Cake",
      selectionType: "Single Select",
      attributeStatus: "Active",
      sort: 1,
      requiredStatus: true,
    })
    setPrimaryAttribute({
      shapes: {
        Rectangle: true,
        Round: true,
        Square: false,
        Heart: false,
        Star: false,
        Oval: false,
      },
      size: {
        "0.5Kg": false,
        "1Kg": true,
        "1.5Kg": false,
        "2Kg": false,
        "2.5Kg": false,
        "3Kg": true,
        "4Kg": false,
        "5Kg": false,
      },
    })
    setValues([{
      id: 123,
      name: "Dummy",
      type: "Selection Input",
      status: "active",
      description: "Dummy dummy",
      categories: [{ id: 1763180045726, name: 'Color', childValues: Array("Red", "Green") }]
    }]);
  }
  const Preview = () => {
    let selectedShapes = Object.entries(primaryAttribute.shapes).filter(([key, value]) => value).map(([key]) => key);
    let selectedSizes = Object.entries(primaryAttribute.size).filter(([key, value]) => value).map(([key]) => key);
    console.log(selectedShapes);
    alert(`
------ BASIC INFO ------
Attribute Name: ${basicInfo.attributeName}
Selection Type: ${basicInfo.selectionType}
Status: ${basicInfo.attributeStatus}
Sort Order: ${basicInfo.sort}
Required: ${basicInfo.requiredStatus ? "Yes" : "No"}

------ PRIMARY ATTRIBUTES ------
Shapes: ${selectedShapes.join(", ")}
Sizes: ${selectedSizes.join(", ")}

------ CATEGORY VALUES ------
${values
        .map(
          (v) => `
ID: ${v.id}
Name: ${v.name}
Type: ${v.type}
Status: ${v.status}
Description: ${v.description}
Categories:
${v?.categories
              .map(
                (c) => `  - ${c.name}: ${c.childValues.join(", ")}`
              )
              .join("\n")}
`
        )
        .join("\n")}
`);
  }
  const SaveAttribute = () => {
    console.log("Attribute Saved Successfully")
    console.log("Basic Info:", basicInfo)
    console.log("Primary Attribute:", primaryAttribute)
    console.log("Values:", values)
    console.log("Prices:", prices)
  }
  return (
    <div className="px-5 py-5 flex justify-start text-sm gap-4 shadow-sm border-1 border-gray-200 rounded-xl">

      <button
        onClick={GenerateRandomdata}
        className="flex items-center gap-1 px-4 py-2 bg-green-700 text-white rounded-lg font-medium transition cursor-pointer outline-non outline-none"
      >
        <Box size={18} /> Generate Random Data
      </button>

      <button
        onClick={Preview}
        className="flex items-center gap-1 px-4 py-2 bg-blue-700 hover:bg-blue-600 text-black rounded-lg font-medium transition cursor-pointer outline-none"
      >
        <Eye size={18} /> Preview
      </button>
      <button
        onClick={SaveAttribute}
        className="px-4 py-2 flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-md transition cursor-pointer outline-none"
      >
        <Save size={18} /> Save Attribute
      </button>
    </div>
  );
};

export default FooterActions;
