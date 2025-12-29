const AdminNavigation = () => {

    const navInfo = [
        { label: 'My Profile', icon: 'fa-solid fa-home', route: '/me' },
        { label: 'Manage Skills', icon: 'fa-solid fa-home', route: '/skills' },
        { label: 'Manage Projects', icon: 'fa-solid fa-home', route: '/projects' },
        { label: 'Manage Achievements', icon: 'fa-solid fa-home', route: '/achievements' },
        { label: 'Manage Messages', icon: 'fa-solid fa-home', route: '/messages' },
        { label: 'Manage Feedbacks', icon: 'fa-solid fa-home', route: '/feedbacks' },
        { label: 'Logout', icon: 'fa-solid fa-home', route: '/logout' },
    ]

    return (
        <aside>
            <ul>
                {navInfo.map((e, i) => 
                <li key={i}>
                    <Link to={e.route}>{e.label}</Link>
                </li>)}
            </ul>
            admin nav
        </aside>
    )
}