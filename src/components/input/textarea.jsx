const TextArea = ({ label = null, type = 'text', plc = null, name, err = null, val = '' }) => {
    return (
        <div className="w-full">
            <div className="w-full">
                {label &&
                <label className="block text-sm mb-1 text-gray-300">
                    {label}
                </label>}
                <textarea
                    required
                    placeholder={plc}
                    name={name}
                    value={val}
                    className="w-full h-[11rem] text-sm px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/20"
                ></textarea>
            </div>
            {err && <div className="text-red-600 text-sm font-bold">{err}</div>}
        </div>
    )
}

export default TextArea