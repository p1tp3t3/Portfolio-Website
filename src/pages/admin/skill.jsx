import { useState } from "react";
import AddSkillModal from "../../components/modal/add-skill-modal";
import AdminLayout from "../../layouts/admin-layout";
import SearchBar from "../../components/input/search-bar";
const sampleSkills = [
  {
    title: "Frontend Frameworks",
    items: [
      { name: "React", background_color: "#61dafb", text_color: "#000", border_color: "#21a1f1" },
      { name: "Vue", background_color: "#42b883", text_color: "#fff", border_color: "#1f8f6f" },
      { name: "Angular", background_color: "#dd0330", text_color: "#fff", border_color: "#a80020" },
    ],
  },
  {
    title: "Backend Technologies",
    items: [
      { name: "Node.js", background_color: "#3c873a", text_color: "#fff", border_color: "#2d6128" },
      { name: "Express", background_color: "#000", text_color: "#fff", border_color: "#333" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", background_color: "#336791", text_color: "#fff", border_color: "#224466" },
      { name: "MongoDB", background_color: "#47a248", text_color: "#fff", border_color: "#2c6e30" },
    ],
  },
  {
    title: "DevOps Tools",
    items: [
      { name: "Docker", background_color: "#2496ed", text_color: "#fff", border_color: "#1b6fc2" },
      { name: "Kubernetes", background_color: "#326ce5", text_color: "#fff", border_color: "#1f4bb5" },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { name: "JavaScript", background_color: "#f7df1e", text_color: "#000", border_color: "#e5c800" },
      { name: "Python", background_color: "#3776ab", text_color: "#fff", border_color: "#255a7b" },
      { name: "TypeScript", background_color: "#3178c6", text_color: "#fff", border_color: "#1f4e8c" },
    ],
  },
];


const Skill = () => {
  const [addSkillModal, openAddSkillModal] = useState(false);
  const [skills, setSkills] = useState(sampleSkills);

  const handleAddSkill = (payload) => {
    setSkills((prev) => [...prev, payload]);
  };

  return (
    <>
      <AddSkillModal
        isOpen={addSkillModal}
        onClose={() => openAddSkillModal(false)}
        setter={handleAddSkill}
      />

      <AdminLayout>
        <div className="min-h-screen text-white py-10">

          {/* Header */}
          <div className="flex gap-5 items-center justify-between mb-8">
            <div className="w-full">
              <SearchBar />
            </div>

            <div className="flex-shrink-0">
                <button
                    onClick={() => openAddSkillModal(true)}
                    className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                    + Add Skill Group
                </button>
            </div>
          </div>

          {/* Content */}
          {skills.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 border border-dashed border-neutral-700 rounded-lg text-neutral-400">
              <p className="text-lg">No skills added yet</p>
              <p className="text-sm mt-1">
                Click <span className="text-white">Add Skill Group</span> to get started
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {skills.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900 border border-neutral-800 rounded-xl p-6"
                >
                  {/* Group Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">
                      {group.title}
                    </h2>

                    <button className="text-sm text-red-400 hover:text-red-300">
                      Delete
                    </button>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-md border text-sm"
                        style={{
                          backgroundColor: skill.background_color,
                          color: skill.text_color,
                          borderColor: skill.border_color,
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </AdminLayout>
    </>
  );
};

export default Skill;
