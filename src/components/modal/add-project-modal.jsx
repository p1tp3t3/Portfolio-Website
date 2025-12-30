import { useState } from "react";
import { Project } from "../../model/project";
import { useToast } from "../../context/toast-context";

const AddProjectModal = ({ isOpen, onClose, setter }) => {

    const { addToast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    categories: "",
    date_started: "",
    date_finished: "",
    description: "",
    repo_link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoriesArray = formData.categories
    .split(',')
    .map((c) => c.trim());

    const obj = { item: categoriesArray };

    const data = {
        name: formData.name,
        category: obj,
        date_started: formData.date_started,
        date_finished: formData.date_finished,
        description: formData.description,
        repo_link: formData.repo_link,
        profile_id: 1
    }

    try {
        const project = new Project(data)
        const d = await project.create()

        setter(d)
        setFormData({
      name: "",
      category: "",
      date_started: "",
      date_finished: "",
      description: "",
      repo_link: "",
    });

        addToast(`Project ${formData.name} Has Been Suucessfully Created`, 'success')
        onClose?.();
    }catch(err) {
        console.log(err)
        addToast(`Project ${formData.name} Has Failed to Create`, 'error')
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-black/40 py-5 px-3">
      {/* Modal content wrapper */}
      <div className="bg-neutral-900 text-white w-full max-w-2xl rounded-lg shadow-lg px-6 py-4 max-h-[100vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">Add Project</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}

          <div>
            <label className="block mb-1 text-sm font-medium">Repository Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Project Name"
              required
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block mb-1 text-sm font-medium">Categories (comma-separated)</label>
            <input
              type="text"
              name="categories"
              value={formData.categories}
              onChange={handleChange}
              placeholder="e.g. React, Node.js"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Dates */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium">Date Started</label>
              <input
                type="date"
                name="date_started"
                value={formData.date_started}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium">Date Finished</label>
              <input
                type="date"
                name="date_finished"
                value={formData.date_finished}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Brief description"
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Repo Link */}
          <div>
            <label className="block mb-1 text-sm font-medium">Repository Link</label>
            <input
              type="url"
              name="repo_link"
              value={formData.repo_link}
              onChange={handleChange}
              placeholder="https://github.com/username/repo"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
