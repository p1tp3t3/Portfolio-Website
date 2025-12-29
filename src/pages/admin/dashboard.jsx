import { UserAuth } from "../../context/auth-context"
import AdminLayout from "../../layouts/admin-layout"

const DashBoard = () => {
    const { session } = UserAuth()

    const user = session.user

    return (
        <AdminLayout>
            <div>
                this is the dashboard {user.email}
            </div>
        </AdminLayout>
    )
}

export default DashBoard