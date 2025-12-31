const AdminFeedBackList = ({ list = [] }) => {
    return (
        <div className="space-y-4">
          {list.length === 0 && (
            <p className="text-gray-500 text-center py-10">
              No feedback available
            </p>
          )}

          {list.map((fb) => <Row data={fb} />)}
        </div>
    )
}

const Row = ({ data }) => {
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