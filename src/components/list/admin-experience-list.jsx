import { Experience } from "../../model/experience";
import { useToast } from "../../context/toast-context";
import { useWarning } from "../../context/warning-context";

const AdminExperienceList = ({ list = [], setter }) => {
    return list.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center justify-center mt-32 text-gray-400">
            <svg
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            className="mb-4 text-gray-600"
            >
            <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            </svg>
            <p className="mb-3">No experiences added yet</p>
        </div>
        ) : (
        /* Experience List */
        <div className="grid gap-4">
            {list.map((e, i) => <Row data={e} setter={setter} />)}
        </div>
        )
}

const Row = ({ data, setter }) => {
    const { showWarning } = useWarning(),
              { addToast } = useToast()
    
    const handleDelete = () => {
        showWarning({
            title: "Delete Experience",
            message: "Are you sure you want to delete this experience? This action cannot be undone.",
            onProceed: async () => {
                try {
                    const xp = new Experience()
                
                    const d = await xp.delete(data.id)
                    setter(d)
                    addToast('Selected Experience Deleted Successfully', 'success')
                }catch(err) {
                    console.log(err)
                    addToast('Failed to Delete Selected Experience', 'error')
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
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition"
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-400">{data.date}</p>
                </div>

                <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm bg-neutral-800 hover:bg-neutral-700 rounded">
                    Edit
                    </button>
                    <button 
                        onClick={handleDelete}
                        className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 rounded"
                    >
                    Delete
                    </button>
                </div>
            </div>

            {data.description && (
            <p className="mt-3 text-gray-300">
                {data.description}
            </p>
            )}

            {data.details?.item?.length > 0 && (
            <ul className="list-disc list-inside mt-3 text-gray-400 space-y-1">
                {data.details.item.map((d, i) => (
                <li key={i}>{d}</li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default AdminExperienceList