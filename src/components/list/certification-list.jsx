const CertificationList = ({ list = ['data 1', 'data 2'] }) => {
    return (
        <div className="p-5 bg-gray-900/40 rounded-xl border border-gray-700 w-full">
            <div className="flex flex-col gap-5 w-full">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-[1.5em] items-center flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-certificate-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M10 7h4" /><path d="M10 18v4l2 -1l2 1v-4" /><path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" /></svg>
                        <b>Recent Certifications</b>
                    </h1>
                </div>
                <div className="grid gap-5">
                    {list.map((e, i) => <Row key={i} data={e} />)}
                </div>
            </div>
        </div>
    )
}

const Row = ({ data }) => {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-gray-700 text-white pb-5">
            <div>
                {/* Event Info */}
                <div className="">
                    <h1 className="text-md flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-certificate"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" /><path d="M6 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" /></svg>
                        <b>Certificate Title</b>
                    </h1>
                    <div className="grid gap-3">
                        <p className="text-sm text-gray-400">
                            company
                        </p>
                        <p className="text-sm">
                            July 20 2025
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CertificationList