import { useState } from "react";
import { Experience } from "../../model/experience";
import { useToast } from "../../context/toast-context";

const AddExperienceModal = ({ isOpen, onClose, setter }) => {

    const { addToast } = useToast()
  const [formData, setFormData] = useState({
    title: "",
    company_name: "",
    date: "",
    short_description: "",
    details: [""],
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDetailChange = (index, value) => {
    const updated = [...formData.details];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, details: updated }));
  };

  const addDetail = () => {
    setFormData((prev) => ({ ...prev, details: [...prev.details, ""] }));
  };

  const removeDetail = (index) => {
    if (formData.details.length === 1) return;
    setFormData((prev) => ({
      ...prev,
      details: prev.details.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const obj = { item: formData.details };


    const data = {
        title: formData.title,
        company_name: formData.company_name,
        date: formData.date,
        description: formData.short_description,
        details: obj,
        profile_id: 1
    }
    
    try {
        const xp = new Experience(data)
        const d = await xp.create()

        console.log(d)

        onClose?.();
        addToast("New Experience Added Successfully", 'success')
        setFormData({
            title: "",
            company_name: "",
            date: "",
            short_description: "",
            details: [""],
        });
    }catch(err) {
        console.log(err)
        addToast("Failed to Add New Experience", 'error')
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-neutral-900 text-white w-full max-w-xl rounded-xl shadow-xl relative max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-800">
          <h2 className="text-xl font-semibold">Add Experience</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-lg"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4 overflow-y-auto max-h-[80vh]"
        >
          {/* Title */}
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Senior Frontend Developer"
              required
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm mb-1">Company Name</label>
            <input
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="Pilar College"
              required
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm mb-1">Date</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Jan 2023 – Present"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm mb-1">Short Description</label>
            <textarea
              name="short_description"
              value={formData.short_description}
              onChange={handleChange}
              rows={2}
              placeholder="Brief overview of your role"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Bullet Details */}
          <div>
            <label className="block text-sm mb-2">Bullet Details</label>

            <div className="space-y-2">
              {formData.details.map((detail, index) => (
                <div key={index} className="flex gap-2">
                  <textarea
                    type="text"
                    value={detail}
                    name={`item${index}`}
                    onChange={(e) =>
                      handleDetailChange(index, e.target.value)
                    }
                    placeholder={`Detail ${index + 1}`}
                    className="flex-1 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <span>
                    <button
                    type="button"
                    onClick={() => removeDetail(index)}
                    disabled={formData.details.length === 1}
                    className="px-3 rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-40"
                  >
                    ✕
                  </button>
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addDetail}
              className="mt-2 text-sm text-blue-400 hover:text-blue-300"
            >
              + Add bullet
            </button>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
            >
              Save Experience
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExperienceModal;
