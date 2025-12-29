import ProfilePic from "./others/picture"

const Header = (props) => {
    return (
        <header className="bg-gray-900 w-full py-3 fixed z-1 flex justify-center items-center">
            <div className="w-[80rem]">
                <div className="flex gap-3 items-center">
                    <div>
                        <ProfilePic className="w-[5rem] h-[5rem]" />
                    </div>
                    <div>
                        My Name
                    </div>
                </div>
                <div>
                </div>
            </div>
        </header>
    )
}

export default Header