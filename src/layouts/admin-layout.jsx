import AdminSideBar from "../components/admin-sidebar"

const AdminLayout = ({ children }) => {
    return (
        <main className="text-white bg-neutral-900">
            <div className="flex">
                <AdminSideBar />
                <div className="w-full px-10">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AdminLayout