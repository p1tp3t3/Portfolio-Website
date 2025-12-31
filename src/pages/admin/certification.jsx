import { useState } from "react";
import AdminLayout from "../../layouts/admin-layout";
import SearchBar from "../../components/input/search-bar";
import AdminCertificationList from "../../components/list/admin-certification-list";

const sampleCertifications = [
  {
    id: 1,
    title: "React Developer",
    organization: "Udemy",
    date: "2024-03-15",
    description: "Completed an in-depth course on React.js development.",
  },
  {
    id: 2,
    title: "Node.js Backend",
    organization: "Coursera",
    date: "2024-05-10",
    description: "Learned backend development using Node.js and Express.",
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    organization: "Pluralsight",
    date: "2023-12-20",
    description: "Advanced JavaScript techniques and best practices.",
  },
  {
    id: 4,
    title: "Python for Data Science",
    organization: "edX",
    date: "2024-01-18",
    description: "Focused on Python programming for data analysis and machine learning.",
  },
  {
    id: 5,
    title: "AWS Cloud Practitioner",
    organization: "AWS Training",
    date: "2024-02-28",
    description: "Learned the fundamentals of AWS cloud services and deployment.",
  },
  {
    id: 6,
    title: "Docker Essentials",
    organization: "LinkedIn Learning",
    date: "2024-04-05",
    description: "Basics of containerization and Docker usage for development.",
  },
  {
    id: 7,
    title: "UI/UX Design",
    organization: "Skillshare",
    date: "2024-06-12",
    description: "Learned design principles for creating user-friendly interfaces.",
  },
];

const CertificationPage = () => {
  const [certifications, setCertifications] = useState(sampleCertifications);

  return (
    <AdminLayout>
      <div className="min-h-screen text-white py-10 space-y-6">
        <div className="flex justify-between items-center gap-5 mb-8">
            <div className="w-full">
              <SearchBar />
            </div>

            <div className="flex-shrink-0">
                <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              + Add Certificate
            </button>
            </div>
          </div>
          <AdminCertificationList list={certifications} setter={setCertifications} />
      </div>
    </AdminLayout>
  );
};

export default CertificationPage;
