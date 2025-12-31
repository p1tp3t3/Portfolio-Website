const AdminCertificationList = ({ list = [], setter }) => {
    return (
        <ul className="space-y-4">
          {list.map((cert) => <Row data={cert} setter={setter} />)}
        </ul>
    )
}

const Row = ({ data, setter }) => {
    return (
        <li
            key={data.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between bg-neutral-900 rounded-lg p-4 border border-neutral-700 hover:bg-neutral-800 transition"
        >
            <div className="flex-1">
                <h2 className="text-xl font-semibold">{data.title}</h2>
                <p className="text-gray-400">
                    <span className="font-medium">Organization:</span> {data.organization}
                </p>
                <p className="text-gray-400">
                    <span className="font-medium">Date:</span> {data.date}
                </p>
                <p className="text-gray-300 mt-1">{data.description}</p>
            </div>

            <div className="mt-3 md:mt-0 flex gap-2">
                <button className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition">
                    Delete
                </button>
                <button className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 transition">
                    Edit
                </button>
            </div>
        </li>
    )
}
export default AdminCertificationList