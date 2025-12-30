import { useState } from "react"
import AdminLayout from "../../layouts/admin-layout"
import { Profile } from "../../model/profile"
import ImageSelect from "../../components/input/image-select"
import TextField from "../../components/input/text-field"
import TextArea from "../../components/input/textarea"
import InputList from "../../components/input/input-list"

const ProfilePage = () => {
    const [profile, setProfile] = useState({
        name: "John Doe",
        role: "Admin • Product Manager • Full-Stack Enthusiast",
        shortBio:
            "I build scalable digital products, design intuitive user experiences, and help teams turn ideas into production-ready solutions.",
        about:
            "I am an experienced administrator and product-focused developer with a passion for clean architecture, performance optimization, and thoughtful design.\n\nOutside of work, I enjoy learning new technologies, contributing to open-source projects, and mentoring junior developers.",
        avatar: "https://i.pravatar.cc/300",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setProfile({ ...profile, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const profileService = new Profile()
            await profileService.update(profile.id) // ✅ await it
        } catch (err) {
            console.error("Failed to load profile:", err)
        }
    }

    return (
        <AdminLayout>
            <form
                onSubmit={handleSubmit}
                className="min-h-screen text-white py-10"
            >
                {/* Hero Section */}
                <div className="flex text-center gap-10">
                    <div className="flex-shrink-0">
                        <ImageSelect type='profile' profilePic={new Profile().getProfilePicture()} />
                    </div>
                    <div className="w-full flex flex-col gap-3">
                        <div className="w-full">
                            <TextField
                                name='name'
                                plc={profile.name}
                            />
                        </div>
                        <div className="w-full">
                            <div>
                                <label htmlFor="">Curriculum Vitae</label>
                            <input type="file" name="" id="" />
                            </div>
                        </div>
                        <div className="w-full">
                            <InputList
                            />
                        </div>     
                    </div>    
                </div>
                <div className="w-full mt-10">
                        <TextArea
                            label='Short Description'
                            name='short_description'
                            onChange={handleChange}
                            plc={profile.shortBio}
                        />
                    </div>  

                {/* About Section */}
                <div className="mt-10">
                    <div className="w-full mt-10">
                        <TextArea
                            name='about'
                            onChange={handleChange}
                            plc={profile.about}
                            label='About'
                        />
                    </div> 
                    <div className="w-full mt-10 flex gap-5">
                        <div className="w-full grid gap-3">
                            <TextField
                                label='Address'
                            />
                            <TextField
                                label='Email'
                            />
                            <TextField
                                label='Contact Number'
                            />
                        </div>
                        <div className="w-full grid gap-3">
                            <TextField
                                label='Facebook Link'
                            />
                            <TextField
                                label='Instagram Link'
                            />
                            <TextField
                                label='GitHub Link'
                            />
                        </div>
                    </div>  

                    {/* Save Button */}
                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium shadow-lg"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </form>
        </AdminLayout>
    )
}

export default ProfilePage
