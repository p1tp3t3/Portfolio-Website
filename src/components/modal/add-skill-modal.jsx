import { useState } from "react";
import TextField from "../input/text-field";

const emptySkill = {
  name: "",
  background_color: "#1f2937",
  text_color: "#ffffff",
  border_color: "#374151",
};

const AddSkillModal = ({ isOpen, onClose, setter }) => {
  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState([emptySkill]);

  const handleSkillChange = (index, field, value) => {
    setSkills((prev) =>
      prev.map((skill, i) =>
        i === index ? { ...skill, [field]: value } : skill
      )
    );
  };

  const addSkill = () => {
    setSkills((prev) => [...prev, { ...emptySkill }]);
  };

  const removeSkill = (index) => {
    if (skills.length === 1) return;
    setSkills((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title,
      items: skills.filter((s) => s.name.trim() !== ""),
    };

    setter?.(payload);

    setTitle("");
    setSkills([emptySkill]);
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-neutral-900 text-white w-full max-w-3xl rounded-xl shadow-lg p-6 relative max-h-[90vh] overflow-hidden overflow-y-auto">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6">Add Skill Group</h2>

        <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">

          {/* Title */}
          <TextField
            label="Category Title"
            name="title"
            plc="Frameworks"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Skill List */}
          <div>
            <button
              type="button"
              onClick={addSkill}
              className="px-4 py-2 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition"
            >
              + Add Item
            </button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-3 items-end bg-neutral-800 p-4 rounded-lg"
              >
                {/* Name */}
                <div className="col-span-4">
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) =>
                      handleSkillChange(index, "name", e.target.value)
                    }
                    placeholder="React"
                    className="w-full px-3 py-2 rounded bg-neutral-900 border border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Background */}
                <div className="col-span-2">
                  <label className="block text-sm mb-1">BG</label>
                  <input
                    type="color"
                    value={skill.background_color}
                    onChange={(e) =>
                      handleSkillChange(index, "background_color", e.target.value)
                    }
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>

                {/* Text */}
                <div className="col-span-2">
                  <label className="block text-sm mb-1">Text</label>
                  <input
                    type="color"
                    value={skill.text_color}
                    onChange={(e) =>
                      handleSkillChange(index, "text_color", e.target.value)
                    }
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>

                {/* Border */}
                <div className="col-span-2">
                  <label className="block text-sm mb-1">Border</label>
                  <input
                    type="color"
                    value={skill.border_color}
                    onChange={(e) =>
                      handleSkillChange(index, "border_color", e.target.value)
                    }
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>

                {/* Remove */}
                <div className="col-span-2">
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    disabled={skills.length === 1}
                    className="w-full px-3 py-2 bg-red-600 rounded hover:bg-red-700 disabled:opacity-40"
                  >
                    Remove
                  </button>
                </div>

                {/* Preview */}
                <div className="col-span-12">
                  <span
                    className="inline-block px-3 py-1 rounded text-sm border"
                    style={{
                      backgroundColor: skill.background_color,
                      color: skill.text_color,
                      borderColor: skill.border_color,
                    }}
                  >
                    {skill.name || "Preview"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex justify-end pt-4 border-t border-neutral-800">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Add Skill
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddSkillModal;
