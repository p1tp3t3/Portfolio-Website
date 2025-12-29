import { Link } from "react-router-dom"

const ClientNavigation = (props) => {

    const navInfo = [
        { label: 'Home', icon: 'fa-solid fa-home', route: '/' },
        { label: 'Skills', icon: 'fa-solid fa-home', route: '/skills' },
        { label: 'Projects', icon: 'fa-solid fa-home', route: '/projects' },
        { label: 'Achievements', icon: 'fa-solid fa-home', route: '/achievements' },
        { label: 'About', icon: 'fa-solid fa-home', route: '/about' },
    ]

    return (
        <nav>
            <ul>
                {navInfo.map((e, i) => 
                <li key={i}>
                    <Link to={e.route}>{e.label}</Link>
                </li>)}
            </ul>
            client nav header
        </nav>
    )
}

export default ClientNavigation