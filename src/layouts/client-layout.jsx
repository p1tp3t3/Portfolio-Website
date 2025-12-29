import Footer from "../components/client-footer"
import Header from "../components/client-header"

const ClientLayout = ({ children }) => {
    return (
        <main className="text-white" style={{
            background: "radial-gradient(125% 125% at 50% 100%, #010100 20%, #010125 100%)",
        }}>
            {/**<Header /> */}
            <div className="w-[80rem] m-auto">
                {children}
            </div>
            <Footer />
        </main>
    )
}


export default ClientLayout