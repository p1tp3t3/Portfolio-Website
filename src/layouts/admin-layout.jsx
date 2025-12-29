import AdminSideBar from "../components/admin-sidebar"

const AdminLayout = ({ children }) => {
    return (
        <main className="text-white bg-neutral-950">
            <div className="flex">
                <AdminSideBar />
                <div className="w-full">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AdminLayout