import SearchBar from "../../components/input/search-bar";
import AdminProjectList from "../../components/list/admin-project-list";
import AddProjectModal from "../../components/modal/add-project-modal";
import AdminLayout from "../../layouts/admin-layout";
import { useEffect, useState } from "react";
import { Project } from "../../model/project";

const RepositoryPage = () => {
    const [projectAddModal, openAddProjectModal] = useState(false)
    const [repositories, setRepositories] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            try {
                const project = new Project()

                const data = await project.list()
                setRepositories(data)
            }catch(err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])
  
  return (
    <>
    <AddProjectModal
        isOpen={projectAddModal}
        onClose={() => openAddProjectModal(!projectAddModal)}
        setter={setRepositories}
    />
    <AdminLayout>
      <div className="min-h-screen text-white py-10">
        {/* Header */}
        <div className="flex items-center gap-5 mb-8">
          <SearchBar />
          <div className="flex-shrink-0">
            <button onClick={() => openAddProjectModal(!projectAddModal)} className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                + Add New Project
            </button>
          </div>
        </div>
        <AdminProjectList list={repositories} setter={setRepositories} />
      </div>
    </AdminLayout>
    </>
  );
};

export default RepositoryPage;
