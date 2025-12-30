import { useEffect, useState } from "react"
import AdminLayout from "../../layouts/admin-layout"
import { Profile } from "../../model/profile"
import ImageSelect from "../../components/input/image-select"
import TextField from "../../components/input/text-field"
import TextArea from "../../components/input/textarea"
import InputList from "../../components/input/input-list"
import { checkNull } from "../../helper-function"
import FileUpload from "../../components/input/file-upload"

const ProfilePage = () => {
    const [temp_profile, setTempProfile] = useState(null)
    const [profile, setProfile] = useState({
        name: "John Doe",
        role: "Admin • Product Manager • Full-Stack Enthusiast",
        shortBio:
            "I build scalable digital products, design intuitive user experiences, and help teams turn ideas into production-ready solutions.",
        about:
            "I am an experienced administrator and product-focused developer with a passion for clean architecture, performance optimization, and thoughtful design.\n\nOutside of work, I enjoy learning new technologies, contributing to open-source projects, and mentoring junior developers.",
        avatar: "https://i.pravatar.cc/300",
    })

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileService = new Profile()
                const data = await profileService.getProfile() // ✅ await it

                document.title = data.name

                setTempProfile(data) // set the resolved data
                console.log(data)
            } catch (err) {
                console.error("Failed to load profile:", err)
            }
        }

        fetchProfile() // call the async function
    }, [])
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
                <div className="flex gap-10">
                    <div className="flex-shrink-0">
                        <ImageSelect type='profile' profilePic={new Profile().getProfilePicture()} />
                    </div>
                    <div className="w-full flex flex-col gap-3">
                        <div className="w-full">
                            <TextField
                                name='name'
                                val={temp_profile?.name}
                            />
                        </div>
                        <div className="w-full">
                            <FileUpload
                                label={['', 'Upload Your Curriculum Vitae Pdf File', 'Maximum of 10 MB']}
                            />
                        </div>
                        <div className="w-full text-sm">
                            <InputList
                                values={temp_profile?.auto_typer_items.item}
                            />
                        </div>     
                    </div>    
                </div>
                <div className="w-full mt-10">
                        <TextArea
                            label='Short Description'
                            name='short_description'
                            onChange={handleChange}
                            val={temp_profile?.short_description}
                        />
                    </div>  

                {/* About Section */}
                <div className="mt-10">
                    <div className="w-full mt-10">
                        <TextArea
                            name='about'
                            val={temp_profile?.about}
                            label='About'
                        />
                    </div>
                    <div className="w-full mt-10 flex gap-5">
                        <div className="w-full grid gap-3">
                            <TextField
                                label='Address'
                                val={temp_profile?.contact[0].address}
                            />
                            <TextField
                                label='Email'
                                val={temp_profile?.contact[0].email}
                            />
                            <TextField
                                label='Contact Number'
                                val={temp_profile?.contact[0].contact_number}
                            />
                        </div>
                        <div className="w-full grid gap-3">
                            <TextField
                                label='Facebook Link'
                                val={temp_profile?.contact[0].facebook_link}
                            />
                            <TextField
                                label='Instagram Link'
                                val={temp_profile?.contact[0].instagram_link}
                            />
                            <TextField
                                label='GitHub Link'
                                val={temp_profile?.contact[0].github_link}
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
