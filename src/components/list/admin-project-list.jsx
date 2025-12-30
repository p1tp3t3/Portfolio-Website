import { useWarning } from "../../context/warning-context"
import { useToast } from "../../context/toast-context"
import { Project } from "../../model/project"

const AdminProjectList = ({ list = [], setter }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {list.length != 0
          ?
          list.map((repo) => (
            <Card data={repo} setter={setter} />
          ))
          :<div>No Projects Yet</div>
          }
        </div>
    )
}
const Card = ({ data, setter }) => {

    const { showWarning } = useWarning(),
          { addToast } = useToast()

    const handleDelete = () => {
        showWarning({
            title: "Delete Repository",
            message: "Are you sure you want to delete this repository? This action cannot be undone.",
            onProceed: async () => {
                try {
                    const project = new Project()
                
                    const d = await project.delete(data.id)
                    setter(d)
                    addToast('Repo Deleted Successfully', 'success')
                }catch(err) {
                    console.log(err)
                    addToast('Failed to Delete this Repo', 'error')
                }
            },
            onCancel: () => {
                console.log("Cancelled");
            },
        });
    };
    return (
        <div
            key={data.id}
            className="bg-neutral-800 border border-neutral-700 py-3 px-5 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between"
        >
            <div>
                <h2 className="text-[1.2em] font-semibold mb-2">{data.name}</h2>
                <div>
                    <div className="text-[0.7em] mb-2">
                        <div className="flex items-center gap-1 flex-wrap w-full whitespace-nowrap">
                            {data.category.item.map((e, i) => 
                            <span className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-400">
                                {e}
                            </span>
                            )}
                        </div>
                    </div>
                    <p className="text-gray-300 text-[0.8em] mb-3 text-justify">{data.description}</p>
                    <a href={data.repo_link} target="_blank">Repository</a>
                </div>
            </div>
            <div className="mt-4 flex justify-end items-center">
                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-yellow-500 rounded hover:bg-yellow-600 transition text-sm">
                    Edit
                    </button>
                    <button onClick={handleDelete} className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition text-sm">
                    Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AdminProjectList