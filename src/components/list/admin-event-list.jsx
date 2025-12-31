const AdminEventList = ({ list = [], setter }) => {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {list.map((e) => <Card data={e} setter={setter} />)}
        </div>
    )
}

const Card = ({ data, setter }) => {
    return (
        <div
            key={data.id}
            className="bg-neutral-800 rounded-lg p-4 shadow hover:shadow-lg transition"
        >
            <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
                <p className="text-gray-400 mb-1">
                    <span className="font-medium">Date:</span> {data.date}
                </p>
                <p className="text-gray-400 mb-1">
                    <span className="font-medium">Time:</span> {data.time}
                </p>
                <div className="flex gap-2 flex-wrap mb-2">
                    {data.category.item.map((cat, i) => (
                        <span
                            key={i}
                            className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
                        >
                            {cat}
                        </span>
                    ))}
                </div>
                <p className="text-gray-300">{data.description}</p>
                <div className="mt-4 flex justify-end gap-2">
                <button className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition">
                    Delete
                </button>
                <button className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 transition">
                    Edit
                </button>
            </div>
        </div>
    )
}

export default AdminEventList