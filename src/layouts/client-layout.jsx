import Footer from "../components/client-footer"
import Header from "../components/client-header"

const ClientLayout = ({ footerData, children }) => {
    return (
        <main className="text-white bg-neutral-950">
            {/**<Header /> */}
            <div className="xl:w-[80rem] m-auto">
                {children}
            </div>
            <Footer data={footerData} />
        </main>
    )
}


export default ClientLayout