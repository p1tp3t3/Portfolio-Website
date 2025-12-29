import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/auth-context";

const AdminSideBar = () => {

    const { session, signOut } = UserAuth()

    const user = session.user

    const navInfo = [
        { label: 'Dashboard', icon: 'fa-solid fa-home', route: '/dashboard' },
        { label: 'My Profile', icon: 'fa-solid fa-home', route: '/profile' },
        { label: 'Manage Projects', icon: 'fa-solid fa-home', route: '/project' },
        { label: 'Manage Skills', icon: 'fa-solid fa-home', route: '/skill' },
        { label: 'Manage Events', icon: 'fa-solid fa-home', route: '/event' },
        { label: 'Manage Certifications', icon: 'fa-solid fa-home', route: '/certification' },
        { label: 'Manage Feedbacks', icon: 'fa-solid fa-home', route: '/feedback' },
        { label: 'Logout', icon: 'fa-solid fa-home', route: '/logout' },
    ]

    return (
        <aside className="h-screen w-[16rem] flex-shrink-0 bg-gradient-to-b from-[#0b1220] to-[#050a14] text-gray-300 flex flex-col border-r border-white/5 gap-5">

        <div className="">
            <div className="mt-auto px-6 py-4 border-b border-white/5 flex items-center gap-3">
                <img
                    src="https://i.pravatar.cc/40"
                    alt="user"
                    className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-white">
                    Tom Cook
                </span>
            </div>
        </div>

        {/* Main Navigation */}
        <nav className="px-4 space-y-1">
            {NavInfo().map((e, i) => 
            <SidebarItem icon={e.icon} label={e.label} route={e.route} active={e.route.includes(window.location.pathname)} />)}
        </nav>      
        </aside>
    );
}

const SidebarItem = ({ icon, label, route, active }) => {
    const { session, signOut } = UserAuth()
    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
            await signOut();
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    };
  return (
    route.includes('logout')
    ?
    <div onClick={() => handleSignOut()}>
        <div
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
                ${
                active
                    ? "bg-white/10 text-white"
                    : "hover:bg-white/5 hover:text-white"
                }
            `}
            >
            <span className="w-5 h-5">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
        </div>
    </div>
    :
    <Link to={route}>
        <div
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
                ${
                active
                    ? "bg-white/10 text-white"
                    : "hover:bg-white/5 hover:text-white"
                }
            `}
            >
            <span className="w-5 h-5">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
        </div>
    </Link>
  );
};

const NavInfo = () => {
    return [
        {
            label: "Dashboard",
            route: "/dashboard",
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12l7-7 7 7" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
            </svg>
            ),
        },
        {
            label: "My Profile",
            route: "/profile",
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
            </svg>
            ),
        },
        {
            label: "Manage Projects",
            route: "/project",
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h5l2 3h11v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            ),
        },
        {
            label: "Manage Skills",
            route: "/skill",
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v3" />
                <path d="M18.364 5.636l-2.121 2.121" />
                <path d="M21 12h-3" />
                <path d="M18.364 18.364l-2.121-2.121" />
                <path d="M12 21v-3" />
                <path d="M5.636 18.364l2.121-2.121" />
                <path d="M3 12h3" />
                <path d="M5.636 5.636l2.121 2.121" />
                <circle cx="12" cy="12" r="3" />
            </svg>
            ),
        },
        {
            label: "Manage Events",
            route: "/event",
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            ),
        },
        {
            label: "Manage Certifications",
            route: "/certification",
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7z" />
            </svg>
            ),
        },
        {
            label: "Manage Feedbacks",
            route: "/feedback",
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            </svg>
            ),
        },
        {
            label: "Logout",
            route: "/logout",
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 12H3" />
                <path d="M8 7l-5 5 5 5" />
                <path d="M21 3v18" />
            </svg>
            ),
        },
    ];

}

export default AdminSideBar