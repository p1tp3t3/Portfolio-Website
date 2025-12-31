import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/admin-layout";
import SearchBar from "../../components/input/search-bar";
import AddEventModal from "../../components/modal/add-event-modal";
import { Event } from "../../model/event";
import AdminEventList from "../../components/list/admin-event-list";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [addEventModal, openAddEventModal] = useState(false)

   useEffect(() => {
      const fetchData = async() => {
          try {
              const ev = new Event()
  
              const data = await ev.list()
              setEvents(data)
          }catch(err) {
              console.log(err)
          }
      }
  
      fetchData()
    }, [])

  return (
    <>
    <AddEventModal
        isOpen={addEventModal}
        onClose={openAddEventModal}
        setter={setEvents}
    />
    <AdminLayout>
      <div className="min-h-screen text-white py-10 space-y-6">
        <div className="mb-6 flex gap-5">
            <SearchBar />
            <div className="flex-shrink-0">
                <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
              onClick={() => openAddEventModal(!addEventModal)}
            >
              + Add Event
            </button>
            </div>
        </div>
        <AdminEventList list={events} setter={setEvents} />
      </div>
    </AdminLayout>
    </>
  );
};

export default EventPage;
