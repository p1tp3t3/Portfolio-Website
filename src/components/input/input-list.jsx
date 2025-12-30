import { useEffect, useState } from "react";

const InputList = ({
  values = [],
  placeholder = "Enter value",
  name,
  onValuesChange, // optional callback if parent needs values
}) => {
  const [inputs, setInputs] = useState([""]);

  // Initialize from props once / when values change
  useEffect(() => {
    setInputs(
      Array.isArray(values) && values.length
        ? values.map(v => v ?? "")
        : [""]
    );
  }, [values]);

  const handleChange = (index, value) => {
    setInputs(prev => {
      const updated = [...prev];
      updated[index] = value;
      onValuesChange?.(updated); // optional
      return updated;
    });
  };

  const addInput = () => {
    setInputs(prev => [...prev, ""]);
  };

  const removeInput = (index) => {
    setInputs(prev => {
      if (prev.length === 1) return prev;
      return prev.filter((_, i) => i !== index);
    });
  };

  const resetInput = () => {
    setInputs(Array.isArray(values) && values.length
        ? values.map(v => v ?? "")
        : [""])
  }

  return (
    <div className="flex gap-3 w-full">
      {/* Add button */}
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={addInput}
          className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Item
        </button>
        <button
          type="button"
          onClick={resetInput}
          className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Reset Original Items
        </button>
      </div>

      {/* Inputs */}
      <div
        className={`grid gap-3 w-full overflow-y-auto ${
          inputs.length > 3 ? "h-[14rem]" : ""
        }`}
      >
        {inputs.map((val, index) => (
          <div key={index} className="flex items-center gap-2 w-full">
            <input
              type="text"
              required
              value={val}
              name={`${name}[${index}]`}
              placeholder={`${placeholder} ${index + 1}`}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-full px-4 py-3 text-sm rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />

            <button
              type="button"
              onClick={() => removeInput(index)}
              disabled={inputs.length === 1}
              className="px-3 py-2 text-white bg-red-500 rounded hover:bg-red-600 disabled:opacity-40"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputList;
