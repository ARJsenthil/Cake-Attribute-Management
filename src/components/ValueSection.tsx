import React, { useState } from "react";
import { Trash2, Plus, X } from "lucide-react";
import { useValues } from "../context/ValueSection";
import PriceSection from "./PriceGrid";
import { usePrimaryAttribute } from "../context/PrimaryAttributes";
import { usePrice } from "../context/PriceGrid";
import ImageGrid from "./ImageGrid";

type ValueType = "Selection Input" | "Text Upload" | "Image Upload";

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

const ValuesSection = () => {
  const {
    values,
    addNewValue,
    deleteValue,
    addCategory,
    updateCategoryName,
    addChildValue,
    removeChildValue,
    deleteCategory,
    setValues,
  } = useValues();
  const { primaryAttribute } = usePrimaryAttribute();
  const { prices, setPrices } = usePrice();
  const [images, setImages] = useState<Record<string, string>>({});
  const onChangeValueType = (val_id: string | number, value: string) => {
    let data = values.map(val => ({ ...val, categories: [] }));
    console.log(data);
    setValues(
      data.map((val) =>
        val.id === val_id
          ? { ...val, type: value as ValueType }
          : val
      )
    )

  }
  return (
    <div className="px-5 py-5 shadow-sm border border-gray-200 rounded-xl">
      <div className="grid grid-cols-2 items-center">
        <h1 className="text-gray-700 w-fit text-left mt-2 mb-1 font-medium border-b-2 border-gray-200">
          Values
        </h1>
        <button
          onClick={addNewValue}
          className="bg-gradient-to-r from-blue-500 to-purple-500 w-fit ml-auto hover:bg-indigo-700 text-sm text-white px-2 py-2 rounded-lg shadow outline-none cursor-pointer"
        >
          + Add Value
        </button>
      </div>

      {values.map((val) => (
        <div
          key={val.id}
          className="mt-4 bg-white border border-gray-100 rounded-lg shadow-sm"
        >
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-t-lg">
            <div className="text-sm flex gap-2">

              <h3 className="font-semibold">{val.name || "New Value"}</h3>
              <p>{val.type}</p>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={val.status}
                onChange={(e) => setValues((prev) =>
                  prev.map((v) =>
                    v.id === val.id
                      ? { ...v, status: e.target.value as "active" | "inactive" }
                      : v
                  )
                )}
                className="border border-gray-300 rounded-lg px-2 py-1 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

              <button
                onClick={() => deleteValue(val.id)}
                className="text-red-500 hover:text-red-700 transition"
                title="Delete Value"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <div className="mt-3 p-4 grid grid-cols-3 gap-4 text-left text-sm">
            <div>
              <label className="block mb-2">Value Name</label>

              <input
                type="text"
                placeholder="Value Name"
                value={val.name}
                onChange={(e) =>
                  setValues((prev) =>
                    prev.map((v) =>
                      v.id === val.id ? { ...v, name: e.target.value } : v
                    )
                  )
                }
                className="border border-gray-300 rounded-lg px-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 py-2 w-full outline-none"
              />
            </div>
            <div>
              <label className="block mb-2">Value Type</label>

              <select
                value={val.type}
                onChange={(e) => onChangeValueType(val.id, e.target.value)}
                className="border border-gray-300 rounded-lg px-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 py-2 w-full outline-none"
              >
                <option>Selection Input</option>
                <option>Text Upload</option>
                <option>Image Upload</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">Description (Optional)</label>

              <input
                type="text"
                placeholder="Description (Optional)"
                value={val.description || ""}
                onChange={(e) =>
                  setValues((prev) =>
                    prev.map((v) =>
                      v.id === val.id
                        ? { ...v, description: e.target.value }
                        : v
                    )
                  )
                }
                className="border border-gray-300 rounded-lg px-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 py-2 w-full outline-none"
              />
            </div>
          </div>

          {val.type === "Selection Input" && (
            <div className="p-4 border mx-5 mb-5 rounded- bg-gray-100 border border-gray-100 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-gray-700">Child Values</h4>
                <button
                  onClick={() => addCategory(val.id)}
                  className="border-2 border-blue-900 hover:bg-blue-700 hover:text-white text-blue-900 text-sm px-2 py-1 rounded-md flex items-center gap-1"
                >
                  <Plus size={14} /> Add Category
                </button>
              </div>

              {val.categories?.map((cat) => (
                <div
                  key={cat.id}
                  className="border border-gray-100 rounded-lg p-3 mb-3 bg-white"
                >
                  <div className="flex items-center mb-2">
                    <input
                      value={cat.name}
                      onChange={(e) =>
                        updateCategoryName(val.id, cat.id, e.target.value)
                      }
                      className="border border-gray-300 rounded-lg px-3 py-2 w-1/3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                    <button
                      onClick={() => deleteCategory(val.id, cat.id)}
                      className="text-red-500 hover:text-red-700 ml-2 outline-none"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {cat.childValues.map((child) => (
                      <span
                        key={child}
                        className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-sm flex items-center gap-1"
                      >
                        {child}
                        <X
                          size={14}
                          onClick={() =>
                            removeChildValue(val.id, cat.id, child)
                          }
                          className="cursor-pointer"
                        />
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add child value..."
                      id={`child-${val.id}-${cat.id}`}
                      className="border border-gray-300 rounded-lg px-3 py-2 w-auto focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                    <button
                      onClick={() => {
                        const input = document.getElementById(
                          `child-${val.id}-${cat.id}`
                        ) as HTMLInputElement;
                        if (input) {
                          addChildValue(val.id, cat.id, input.value);
                          input.value = "";
                        }
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 p-1 my-3 text-white rounded-lg outline-none"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="p-4 grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-3 border mx-5 mb-5 rounded- bg-gray-100 border border-gray-100 rounded-lg shadow-sm">
            <div className="col-span-2">
              <PriceSection
                selectedShapes={Object.keys(primaryAttribute.shapes).filter(
                  (key) => primaryAttribute.shapes[key] === true
                )}
                selectedSizes={Object.keys(primaryAttribute.size).filter(
                  (key) => primaryAttribute.size[key]
                )}
                main_key={val.id}
                childCategories={val?.categories || []}
                prices={prices}
                setPrices={setPrices}
              />
            </div>
            <div className="">
              <ImageGrid
                selectedShapes={Object.keys(primaryAttribute.shapes).filter(
                  (key) => primaryAttribute.shapes[key] === true
                )}
                childCategories={val?.categories || []}
                images={images}
                setImages={setImages}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValuesSection;
