import AdminFeedBackList from "../../components/list/admin-feedback-list";
import AdminLayout from "../../layouts/admin-layout";
import { useEffect, useState } from "react";
import { FeedBack } from "../../model/feedback";

const initialFeedbacks = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    description:
      "This portfolio looks amazing! The UI is clean, smooth, and very professional.",
    created_at: "2025-08-15T10:30:00Z",
  },
  {
    id: 2,
    name: "Sarah Kim",
    email: "sarah.kim@example.com",
    description:
      "Really impressed with the project section. Everything is easy to navigate.",
    created_at: "2025-08-14T14:12:00Z",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    description:
      "The animations are subtle and elegant. Great attention to detail!",
    created_at: "2025-08-13T09:45:00Z",
  },
  {
    id: 4,
    name: "Aisha Khan",
    email: "aisha.khan@example.com",
    description:
      "Very clean admin panel. It’s intuitive and easy to manage content.",
    created_at: "2025-08-12T18:20:00Z",
  },
  {
    id: 5,
    name: "Carlos Mendoza",
    email: "carlos.mendoza@example.com",
    description:
      "Great structure and layout. The overall experience feels smooth and modern.",
    created_at: "2025-08-11T07:55:00Z",
  },
];

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
        try {
            const fb = new FeedBack()

            const data = await fb.list()
            setFeedbacks(data)
        }catch(err) {
            console.log(err)
        }
    }

    fetchData()
  }, [])

  const handleDelete = (id) => {
    // Later: replace with warning modal + Supabase delete
    setFeedbacks((prev) => prev.filter((fb) => fb.id !== id));
  };

  return (
    <AdminLayout>
      <div className="min-h-screen text-white py-10">
        {/* Feedback List */}
        <AdminFeedBackList list={feedbacks} setter={setFeedbacks} />
      </div>
    </AdminLayout>
  );
};

export default FeedbackPage;
