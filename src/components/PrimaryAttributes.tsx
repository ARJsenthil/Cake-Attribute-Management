import { usePrimaryAttribute } from '../context/PrimaryAttributes';
export const PrimaryAttributes = () => {
  const { handleInputChange, primaryAttribute } = usePrimaryAttribute();
  const onChange = (attributeName: "shapes" | "size", name: string, value: boolean) => {
    handleInputChange(attributeName, name, value);
  }
  return (
    <div className="px-5 py-5 shadow-sm border-1 border-gray-200 rounded-xl">
      <h1 className="text-gray-700 text-left font-medium border-b-2 border-gray-200">Primary Attributes</h1>
      <form className="text-sm text-left text-gray-700 grid grid-cols-2 gap-3 py-2">
        <div>
          <label className="block mb-1">Shapes</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-2 p- justify-around">
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.shapes["Rectangle"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="Rectangle"
                  checked={primaryAttribute?.shapes["Rectangle"] || false}
                  onChange={(e) => onChange("shapes", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">Rectangle</span>
              </label>

            </div>
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.shapes["Round"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="Round"
                  checked={primaryAttribute?.shapes["Round"] || false}
                  onChange={(e) => onChange("shapes", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">Round</span>
              </label>

            </div>
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.shapes["Square"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="Square"
                  checked={primaryAttribute?.shapes["Square"] || false}
                  onChange={(e) => onChange("shapes", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">Square</span>
              </label>

            </div>
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.shapes["Heart"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="Heart"
                  checked={primaryAttribute?.shapes["Heart"] || false}
                  onChange={(e) => onChange("shapes", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">Heart</span>
              </label>

            </div>
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.shapes["Star"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="Star"
                  checked={primaryAttribute?.shapes["Star"] || false}
                  onChange={(e) => onChange("shapes", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">Star</span>
              </label>

            </div>
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.shapes["oval"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="Oval"
                  checked={primaryAttribute?.shapes["oval"] || false}
                  onChange={(e) => onChange("shapes", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">Oval</span>
              </label>

            </div>
          </div>
        </div>
        <div>
          <label className="block mb-1">Size</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-2 p- justify-around">
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.size["0.5Kg"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="0.5Kg"
                  checked={primaryAttribute?.size["0.5Kg"] || false}
                  onChange={(e) => onChange("size", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">0.5Kg</span>
              </label>

            </div>
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.size["1Kg"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="1Kg"
                  checked={primaryAttribute?.size["1Kg"] || false}
                  onChange={(e) => onChange("size", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">1Kg</span>
              </label>

            </div>
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.size["1.5Kg"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="1.5Kg"
                  checked={primaryAttribute?.size["1.5Kg"] || false}
                  onChange={(e) => onChange("size", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">1.5Kg</span>
              </label>

            </div>
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.size["2Kg"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="2Kg"
                  checked={primaryAttribute?.size["2Kg"] || false}
                  onChange={(e) => onChange("size", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">2Kg</span>
              </label>

            </div>
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.size["2.5Kg"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="2.5Kg"
                  checked={primaryAttribute?.size["2.5Kg"] || false}
                  onChange={(e) => onChange("size", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">2.5Kg</span>
              </label>

            </div>
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.size["3Kg"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="3Kg"
                  checked={primaryAttribute?.size["3Kg"] || false}
                  onChange={(e) => onChange("size", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">3Kg</span>
              </label>

            </div>
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.size["4Kg"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="4Kg"
                  checked={primaryAttribute?.size["4Kg"] || false}
                  onChange={(e) => onChange("size", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">4Kg</span>
              </label>

            </div>
            <div
              className={`w-full max-w-sm mx-auto mt-1 p-2 border border-gray-200 rounded-lg text-gray-700
    ${primaryAttribute?.size["5Kg"] ? "bg-blue-500 border-blue-400 text-white" : "bg-gray-50 text-blacke"}`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="5Kg"
                  checked={primaryAttribute?.size["5Kg"] || false}
                  onChange={(e) => onChange("size", e.target.name, e.target.checked)}
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 hover:border-blue-500 border-gray-300 rounded-sm outline-none"
                />
                <span className=" text-sm">5Kg</span>
              </label>

            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
