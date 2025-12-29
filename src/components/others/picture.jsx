const ProfilePic = ({ 
    src = "assets/img/8a1862cd-c211-496a-b498-741dd389ae03.jpg", 
    className = "w-[20rem] h-[20rem]" }) => {
    return (
        <div className={`object-cover overflow-hidden rounded-full ${className}`}>
            <img src={src} alt="" />
        </div>
    )
}

export default ProfilePic