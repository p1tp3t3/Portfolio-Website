import AutoTyper from "../../components/others/auto-typer"
import ProfilePic from "../../components/others/picture"
import ClientLayout from "../../layouts/client-layout"
import ContentList from "../../components/list/content-list"
import { toTitleCasePreserveMarkdown } from "../../helper-function"

import project_list from '../../json/project-list.json'
import experience_list from '../../json/experience-list.json'
import skill_list from '../../json/skill-list.json'

import ProjectList from "../../components/list/project-list"
import ExperienceList from "../../components/list/experience-list"
import SkillList from "../../components/list/skill-list"
import EventList from "../../components/list/event-list"
import CertificationList from "../../components/list/certification-list"

import { Profile } from "../../model/profile"
import { useEffect, useState } from "react"
import Reload from "../../components/others/reload"


const Home = () => {

    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileService = new Profile()
                const data = await profileService.getProfile()

                document.title = data.name
                setProfile(data)
                setLoading(false)
            } catch (err) {
                console.error("Failed to load profile:", err)
            }
        }

        fetchProfile()
    }, [])

    return (
        <>
        <Reload loading={loading} />
        <ClientLayout footerData={profile ? profile.contact[0] : null}>

            <div>

                {/* HERO */}
                <Section>
                    <div className="grid place-items-center px-4">
                        <div className="grid place-items-center w-full md:w-[70%] lg:w-[50%] gap-5">

                            <ProfilePic
                                src={new Profile().getProfilePicture()}
                                className="w-[9rem] h-[9rem] md:w-[12rem] md:h-[12rem]"
                            />

                            <div className="text-center grid gap-5">
                                <div className="grid gap-5">
                                    <div>
                                        <h1 className="text-[2rem] md:text-[3em] font-bold">
                                            {profile && profile.name}
                                        </h1>

                                        <AutoTyper
                                            list={profile ? profile.auto_typer_items.item : []}
                                            className="text-[1.4rem] md:text-[2em] font-bold from-blue-700 via-blue-500 to-gray-300"
                                        />
                                    </div>

                                    <div className="text-[0.85em] md:text-[0.9em]">
                                        <ContentList center />
                                    </div>

                                    <div
                                        className="text-[0.95em] md:text-[1em] text-gray-300"
                                        dangerouslySetInnerHTML={{
                                            __html: toTitleCasePreserveMarkdown(
                                                profile
                                                    ? `${profile.short_description}`.replace("\n", "<br>")
                                                    : ""
                                            )
                                        }}
                                    />
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-wrap justify-center gap-3">
                                <button className="px-6 py-3 bg-white rounded-full text-black">
                                    Lets Colab
                                </button>
                                <button
                                    onClick={() => new Profile().getCurriculumVitae()}
                                    className="px-6 py-3 border-white border rounded-full text-white"
                                >
                                    View My Resume
                                </button>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* PROJECT + EXPERIENCE */}
                <Section>
                    <div className="grid w-full px-4">
                        <div className="flex flex-col lg:flex-row gap-5 w-full">
                            <ProjectList list={profile ? profile.project : []} />
                            <ExperienceList list={profile ? profile.experience : []} />
                        </div>
                    </div>
                </Section>

                {/* SKILLS */}
                <Section>
                    <div className="grid px-4">
                        <SkillList list={profile ? profile.skill : []} />
                    </div>
                </Section>

                {/* EVENTS + CERTS */}
                <Section>
                    <div className="grid px-4">
                        <div className="flex flex-col lg:flex-row gap-5 w-full">
                            <EventList list={profile ? profile.event : []} />
                            <CertificationList />
                        </div>
                    </div>
                </Section>

                {/* ABOUT */}
                <Section>
                    <div className="px-4">
                        <About data={profile && profile.about} />
                    </div>
                </Section>

            </div>
        </ClientLayout>
        </>
    )
}



const Section = ({ children }) => {
    return (
        <section className="py-10">
            {children}
        </section>
    )
}

const About = ({ data }) => {
    return (
        <div className="p-5 bg-gray-900/40 rounded-xl border border-gray-700 w-full">
            <div className="grid gap-5">
                <h2 className="text-[1.5em] items-center flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                    <b>About</b>
                </h2>

                <div className="text-white grid gap-5 text-sm text-justify">
                    <p>
                        {data}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home