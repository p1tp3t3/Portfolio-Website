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


const Home = (props) => {
    return (
        <ClientLayout>
            <div>
                <Section>
                    <div className="grid place-items-center">
                        <div className="grid place-items-center w-[50%] gap-5">
                            <ProfilePic className="w-[12rem] h-[12rem]" />
                            <div className="text-center grid gap-5">
                                <div className="grid gap-5 text-center">
                                    <div>
                                        <h1 className="text-[3em] font-bold">Peter Justin Delos Reyes</h1>
                                        <AutoTyper className={'text-[2em] font-bold from-blue-700 via-blue-500 to-gray-300'} />
                                    </div>
                                    <div className="text-[0.9em]">
                                        <ContentList center={true} />
                                    </div>
                                    <div className="text-[1em] text-gray-300" dangerouslySetInnerHTML={{
                                        __html: toTitleCasePreserveMarkdown(
                                            "I am a ***Full-Stack Web Developer*** skilled in building scalable applications, with expertise in ***Networking*** and ***Ethical Hacking***. I focus on creating secure, high-performance solutions by combining modern web technologies with robust cybersecurity practices."
                                        )
                                    }} />
                                </div>
                            </div>
                            <div className="flex justify-center gap-3">
                                <button className="px-6 py-3 bg-white rounded-full text-black">Lets Colab</button>
                                <button className="px-6 py-3 border-white border rounded-full text-white">View My Resume</button>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="grid w-full">
                        <div className="flex gap-5 w-full">
                            <ProjectList list={project_list} />
                            <ExperienceList />
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="grid">
                        <div className="">
                            <SkillList list={skill_list} />
                        </div>
                    </div>
                </Section>
                <Section>
                    <div className="grid">
                        <div className="flex gap-5 w-full">
                            <EventList />
                            <CertificationList />
                        </div>
                    </div>
                </Section>
                <Section>
                    <About />
                </Section>

            </div>
        </ClientLayout>   
    )
}

const Section = ({ children }) => {
    return (
        <section className="py-10">
            {children}
        </section>
    )
}

const About = () => {
    return (
        <div className="p-5 bg-gray-900/40 rounded-xl border border-gray-700 w-full">
            <div className="grid gap-5">
                <h2 className="text-[1.5em] items-center flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                    <b>About</b>
                </h2>

                <div className="text-white grid gap-5 text-sm text-justify">
                    <p>
                        I’m a web developer who enjoys building clean, responsive, and user-focused
                        applications. I focus on creating interfaces that are not only visually
                        appealing but also intuitive, accessible, and performant across different
                        devices and screen sizes.
                    </p>

                    <p>
                        My journey into web development started with the fundamentals of HTML, CSS,
                        and JavaScript, and gradually expanded into modern frameworks and tools.
                        Along the way, I developed a strong appreciation for writing readable,
                        maintainable code that can scale as projects grow.
                    </p>

                    <p>
                        I’m particularly interested in modern front-end development, where design
                        meets logic. I enjoy translating UI designs into clean code, optimizing
                        performance, and ensuring smooth user interactions through thoughtful
                        component structure and state management.
                    </p>

                    <p>
                        Beyond front-end development, I have a growing interest in web security and
                        networking fundamentals. I enjoy learning how systems communicate, how
                        vulnerabilities arise, and how secure applications can be built with a
                        defensive mindset from the start.
                    </p>

                    <p>
                        I frequently experiment with tools such as virtual machines, Linux
                        environments, and security testing platforms to better understand real-world
                        development and deployment scenarios. This hands-on approach helps me gain
                        practical insight beyond theory.
                    </p>

                    <p>
                        When I’m not coding, I spend time exploring new technologies, improving my
                        problem-solving skills, and working on personal projects that challenge me
                        to think creatively. I’m driven by continuous learning and a desire to grow
                        as a developer with a strong technical foundation.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home