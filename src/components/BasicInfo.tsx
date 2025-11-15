import { useBasicInfo, type ChildType } from "../context/BasicInfo"

export const BasicInfo = () => {
  const { basicInfo, setBasicInfo } = useBasicInfo();


  const onChange = (
    name: string,
    value: string | number | boolean
  ) => {
    console.log(basicInfo);
    setBasicInfo({ ...basicInfo, [name]: value });
  };
  return (
    <div className="px-5 py-5 shadow-sm border-1 border-gray-200 rounded-xl">
      <h1 className="text-gray-700 text-left font-medium border-b-2 border-gray-200">Basic Information</h1>
      <form className="text-sm text-left text-gray-700 grid grid-cols-2 gap-3 py-2">
        <div>
          <label className="block mb-2">Attribute Name</label>
          <input
            type="text"
            name="attributeName"
            value={basicInfo.attributeName}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            placeholder="Enter attribute name"
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 outline-none"
          />
        </div>
        <div className="">
          <label className="block">Selection Type</label>
          <div className="grid shrink-0 grid-cols-1 mt-2 border-1 border-gray-200 rounded-lg">
            <select
              id="currency"
              name="selectionType"
              aria-label="selectionType"
              onChange={(e) => onChange(e.target.name, e.target.value)}
              value={basicInfo.selectionType}
              className="col-start-1 row-start-1 w-full appearance-none rounded-md  py-1.5 pr-7 pl-3 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
              <option>Single Select</option>
              <option>Multiple Select</option>
              <option>Radio Button</option>
              <option>Checkbox</option>
            </select>
            <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4">
              <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="">
          <label className="block">Attribute Status</label>
          <div className="grid shrink-0 grid-cols-1 mt-2 border-1 border-gray-200 rounded-lg">
            <select
              id="attributeStatus"
              name="attributeStatus"
              aria-label="attributeStatus"
              value={basicInfo.attributeStatus}
              onChange={(e) => onChange(e.target.name, e.target.value)}
              className="col-start-1 row-start-1 w-full appearance-none rounded-md  py-1.5 pr-7 pl-3 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
              <option>Active</option>
              <option>InActive</option>
              <option>Draft</option>
            </select>
            <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4">
              <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div>
          <label className="block mb-2">Sort</label>
          <input
            type="number"
            name="sort"
            value={basicInfo.sort}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            placeholder="Enter attribute name"
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 outline-none"
          />
        </div>
        <div>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={basicInfo.requiredStatus}
              onChange={(e) => onChange(e.target.name, e.target.checked)}
              className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="text-gray-700">Required Status</span>
          </label>
        </div>
      </form>


    </div>
  )
}
