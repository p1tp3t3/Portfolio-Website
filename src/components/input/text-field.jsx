const TextField = ({ label, type = 'text', plc, name, err = null, val }) => {
    return (
        <div>
            <div>
                <label className="block text-sm mb-1 text-gray-300">
                    {label}
                </label>
                <input
                    type={type}
                    required
                    placeholder={plc}
                    name={name}
                    value={val}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
            </div>
            {err && <div className="text-red-600 text-sm font-bold">{err}</div>}
        </div>
    )
}

export default TextField