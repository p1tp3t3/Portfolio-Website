const FileUpload = ({ label = [] }) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
                {label[0]}
            </label>

            <div className="relative flex items-center justify-between gap-4 rounded-lg border border-gray-700 bg-neutral-800 px-4 py-2 hover:border-blue-500 transition">
                <label
                    htmlFor="cv-upload"
                    className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
                    >
                    Choose File
                </label>
                <input
                    id="cv-upload"
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                />
                <span className="text-gray-400 text-sm truncate">
                    {label[1]}
                </span>
            </div>

            <p className="text-xs text-gray-500">
                {label[2]}
            </p>
        </div>
    )
}

export default FileUpload