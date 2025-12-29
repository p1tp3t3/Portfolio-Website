import Footer from "../components/client-footer"
import Header from "../components/client-header"

const ClientLayout = ({ children }) => {
    return (
        <main className="text-white bg-neutral-950">
            {/**<Header /> */}
            <div className="w-[80rem] m-auto">
                {children}
            </div>
            <Footer />
        </main>
    )
}


export default ClientLayout