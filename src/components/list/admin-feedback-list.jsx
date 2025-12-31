import { useToast } from "../../context/toast-context"
import { useWarning } from "../../context/warning-context"
import { FeedBack } from "../../model/feedback"

const AdminFeedBackList = ({ list = [], setter }) => {
    return (
        <div className="space-y-4">
          {list.length === 0 && (
            <p className="text-gray-500 text-center py-10">
              No feedback available
            </p>
          )}

          {list.map((fb) => <Row data={fb} setter={setter} />)}
        </div>
    )
}

const Row = ({ data, setter }) => {

    const { showWarning } = useWarning(),
          { addToast } = useToast()
        
    const handleDelete = () => {
        showWarning({
            title: "Delete Feedback",
            message: "Are you sure you want to delete this feedback? This action cannot be undone.",
            onProceed: async () => {
                try {
                    const fb = new FeedBack()
                
                    const d = await fb.delete(data.id)
                    setter(d)
                    addToast('Selected Feedback Deleted Successfully', 'success')
                }catch(err) {
                    console.log(err)
                    addToast('Failed to Delete Selected Feedback', 'error')
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
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition"
        >
            <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-lg font-semibold">{data.name}</h3>
                <p className="text-sm text-gray-400">{data.email}</p>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">
                {new Date(data.created_at).toLocaleDateString()}
                </span>

                {/* Delete Button */}
                <button
                className="text-red-400 hover:text-red-500 transition"
                title="Delete feedback"
                onClick={handleDelete}
                >
                🗑
                </button>
            </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
            {data.description}
            </p>
        </div>
    )
}

export default AdminFeedBackList