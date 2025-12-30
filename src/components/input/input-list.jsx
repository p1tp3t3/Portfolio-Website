import { useEffect, useState } from "react";
import TextField from "./text-field";

const InputList = ({ values = [], onChange, placeholder = "Enter value" }) => {
  const [inputs, setInputs] = useState([""]);

  useEffect(() => {
    setInputs(values.length ? values : [""])
  }, [values])

  const updateInputs = (newInputs) => {
    setInputs(newInputs);
    onChange?.(newInputs);
  };

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    updateInputs(newInputs);
  };

  const addInput = () => {
    updateInputs([...inputs, ""]);
  };

  const removeInput = (index) => {
    if (inputs.length === 1) return;
    updateInputs(inputs.filter((_, i) => i !== index));
  };

  return (
    <div className="flex gap-3 w-full">
        <div>
            <button
                type="button"
                onClick={addInput}
                className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                + Add Item
            </button>
        </div>
        <div className={`grid gap-3 w-full overflow-hidden overflow-y-auto ${inputs.length > 3 ? 'h-[14rem]' : ''}`}>
        {inputs.map((val, index) => (
            <div
                key={index}
                className="flex items-center gap-2 w-full"
            >
                <input
                    type='text'
                    required
                    value={val}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
            <div>
                <button
                    type="button"
                    onClick={() => removeInput(index)}
                    className="px-3 py-2 text-white bg-red-500 rounded hover:bg-red-600 disabled:opacity-40"
                    disabled={inputs.length === 1}
                >
                    ✕
                </button>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default InputList;
