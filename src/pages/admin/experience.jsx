import { useEffect, useState } from "react";
import AddExperienceModal from "../../components/modal/add-experience-modal";
import AdminLayout from "../../layouts/admin-layout";
import SearchBar from "../../components/input/search-bar";
import AdminExperienceList from "../../components/list/admin-experience-list";
import { Experience } from "../../model/experience";

const ExperiencePage = () => {
  const [addExperienceModal, openAddExperienceModal] = useState(false);

  const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const xp = new Experience()

                const data = await xp.list()
                setExperiences(data)
            }catch(err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])


  return (
    <>
      <AddExperienceModal
        isOpen={addExperienceModal}
        onClose={() => openAddExperienceModal(false)}
        setter={(data) => setExperiences((prev) => [...prev, data])}
      />

      <AdminLayout>
        <div className="min-h-screen text-white py-10 max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="flex justify-between items-center gap-5 mb-8">
            <div className="w-full">
              <SearchBar />
            </div>

            <div className="flex-shrink-0">
                <button
              onClick={() => openAddExperienceModal(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              + Add Experience
            </button>
            </div>
          </div>
          <AdminExperienceList list={experiences} setter={setExperiences} />
        </div>
      </AdminLayout>
    </>
  );
};

export default ExperiencePage;
