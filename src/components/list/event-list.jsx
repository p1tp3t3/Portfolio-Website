const EventList = ({ list = [] }) => {
    return (
        <div className="p-5 bg-gray-900/40 rounded-xl border border-gray-700 w-full">
            <div className="flex flex-col gap-5 w-full">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-[1.5em] items-center flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M16 3l0 4" /><path d="M8 3l0 4" /><path d="M4 11l16 0" /><path d="M8 15h2v2h-2z" /></svg>
                        <b>Recent Events</b>
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
                <div className="flex flex-col gap-3">
                    <div className="">
                        <h1 className="text-lg font-semibold">
                            {data.title}
                        </h1>
                        <div className="flex gap-3">
                            <p className="text-sm">
                                {data.date}
                            </p>
                            <p className="text-sm">
                                {data.time}
                            </p>
                        </div>
                    </div>
                    {/* Category & Action */}
                    <div className="flex items-center gap-1 flex-wrap w-full whitespace-nowrap">
                        {data.category.item.map((e, i) => 
                        <span key={i} className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-400">
                            {e}
                        </span>
                        )}
                    </div>
                    <p className="text-sm text-gray-500">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    );
};


export default EventList