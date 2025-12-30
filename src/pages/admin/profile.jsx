import { useEffect, useState } from "react"
import AdminLayout from "../../layouts/admin-layout"
import { Profile } from "../../model/profile"
import ImageSelect from "../../components/input/image-select"
import TextField from "../../components/input/text-field"
import TextArea from "../../components/input/textarea"
import InputList from "../../components/input/input-list"
import { checkNull } from "../../helper-function"
import FileUpload from "../../components/input/file-upload"
import { useToast } from "../../context/toast-context"

const ProfilePage = () => {
    const [temp_profile, setTempProfile] = useState(null)
    const [profile, setProfile] = useState({})

    const { addToast } = useToast()

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileService = new Profile()
                const data = await profileService.getProfile() // ✅ await it

                document.title = data.name

                setTempProfile(data) // set the resolved data
                setProfile((prev) => ({
                    ...data,
                    address: data.contact[0].address,
                    email: data.contact[0].email,
                    contact_number: data.contact[0].contact_number,
                    facebook_link: data.contact[0].facebook_link,
                    instagram_link: data.contact[0].instagram_link,
                    github_link: data.contact[0].github_link,
                }))
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
        const f = new FormData(e.target)
        const items = []
        
        f.forEach((e, key) => {
            if(key.includes('item')) {
                if(e != '') items.push(e)
            }
        })


        const data = {
            profile: {
                name: f.get('name'),
                auto_typer_items: { item: items },
                short_description: f.get('short_description'),
                about: f.get('about')
            },
            contact: {
                address: f.get('address'),
                contact_number: f.get('contact_number'),
                email: f.get('email'),
                facebook_link: f.get('facebook_link'),
                instagram_link: f.get('instagram_link'),
                github_link: f.get('github_link'),
            }
        }
        
        try {
            const profileService = new Profile(data)
            await profileService.updateProfile(temp_profile.id) // ✅ await it

            addToast('Your Profile Has Been Successfully Updated', 'success')
        } catch (err) {
            addToast('There Was An Error In Updating Your Profile', 'error')
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
                                val={profile?.name}
                                onChange={handleChange}
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
                                name={'item'}
                                onChange={handleChange}
                            />
                        </div>     
                    </div>    
                </div>
                <div className="w-full mt-10">
                        <TextArea
                            label='Short Description'
                            name='short_description'
                            onChange={handleChange}
                            val={profile?.short_description}
                        />
                    </div>  

                {/* About Section */}
                <div className="mt-10">
                    <div className="w-full mt-10">
                        <TextArea
                            name='about'
                            val={profile?.about}
                            label='About'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full mt-10 flex gap-5">
                        <div className="w-full grid gap-3">
                            <TextField
                                label='Address'
                                name='address'
                                val={profile?.address}
                                onChange={handleChange}
                            />
                            <TextField
                                label='Email'
                                name='email'
                                val={profile?.email}
                                onChange={handleChange}
                            />
                            <TextField
                                label='Contact Number'
                                name='contact_number'
                                val={profile?.contact_number}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full grid gap-3">
                            <TextField
                                label='Facebook Link'
                                name='facebook_link'
                                val={profile?.facebook_link}
                                onChange={handleChange}
                            />
                            <TextField
                                label='Instagram Link'
                                name='instagram_link'
                                val={profile?.instagram_link}
                                onChange={handleChange}
                            />
                            <TextField
                                label='GitHub Link'
                                name='github_link'
                                val={profile?.github_link}
                                onChange={handleChange}
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
