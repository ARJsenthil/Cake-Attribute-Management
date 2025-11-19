import { usePrimaryAttribute } from "../context/PrimaryAttributes";

const SHAPES = ["Rectangle", "Round", "Square", "Heart", "Star", "Oval"];
const SIZES = ["0.5Kg", "1Kg", "1.5Kg", "2Kg", "2.5Kg", "3Kg", "4Kg", "5Kg"];

export const PrimaryAttributes = () => {
  const { primaryAttribute, setPrimaryAttribute } = usePrimaryAttribute();

  const onChange = (
    attribute: "shapes" | "size",
    name: string,
    checked: boolean
  ) => {
    setPrimaryAttribute((prev) => ({
      ...prev,
      [attribute]: {
        ...prev[attribute],
        [name]: checked,
      },
    }));
  };

  const renderBox = (
    attribute: "shapes" | "size",
    name: string,
    selected: boolean
  ) => (
    <div
      key={name}
      className={`w-full p-2 border border-gray-200 rounded-lg cursor-pointer 
        ${selected ? "bg-blue-500 text-white border-blue-400" : "bg-gray-50"}`}
    >
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name={name}
          checked={selected}
          onChange={(e) => onChange(attribute, name, e.target.checked)}
          className="h-3 w-3 text-blue-600 border-gray-300 rounded-sm"
        />
        <span className="text-sm">{name}</span>
      </label>
    </div>
  );

  return (
    <div className="px-5 py-5 shadow-sm border border-gray-200 rounded-xl">
      <h1 className="text-gray-700 text-left font-medium border-b-2 border-gray-200">
        Primary Attributes
      </h1>

      <form className="text-sm text-left text-gray-700 grid grid-cols-2 gap-5 py-4">

        {/* SHAPES */}
        <div>
          <label className="block mb-2">Shapes</label>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {SHAPES.map((shape) =>
              renderBox("shapes", shape, primaryAttribute.shapes[shape] || false)
            )}
          </div>
        </div>

        {/* SIZES */}
        <div>
          <label className="block mb-2">Size</label>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {SIZES.map((size) =>
              renderBox("size", size, primaryAttribute.size[size] || false)
            )}
          </div>
        </div>

      </form>
    </div>
  );
};
