import { useEffect, useState } from "react";
import { sb_db } from "../supabase-config";
import TextField from "./input/text-field";
import Feedback from "../pages/admin/feedback";
import { FeedBack } from "../model/feedback";
import { useToast } from "../context/toast-context";

const Footer = ({ data }) => {

    const { addToast } = useToast()
    const list = {
        contact_list: [
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-current-location"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" /><path d="M12 2l0 2" /><path d="M12 20l0 2" /><path d="M20 12l2 0" /><path d="M2 12l2 0" /></svg>,
                label: 'Address',
                value: data ? data.address : ''
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>,
                label: 'Email',
                value: data ? data.email : ''
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>,
                label: 'Phone Number',
                value: data ? data.contact_number : ''
            }
        ],
        follow_list: [
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>,
                label: 'Facebook',
                value: data ? data.facebook_link : ''
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>,
                label: 'Instagram',
                value: data ? data.instagram_link : ''
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>,
                label: 'GitHub',
                value: data ? data.github_link : ''
            }
        ]
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const f = new FormData(e.target)
        
        const feedbackData = {
            name: f.get('name'),
            email: f.get('email'),
            description: f.get('description')
        }

        try {
            const feedback = new FeedBack(feedbackData);
            const created = await feedback.create();
            addToast('Your Feedback Has Been Send Sucessfully to the Admin', 'success')
            document.querySelectorAll('input').forEach(e => e.value = '')
            document.querySelector('textarea').value = ''
        } catch (err) {
            console.error("Failed to create feedback:", err);
            addToast('There Was An Error In Sending Your Feedback', 'error')
        }
    }


    return (
        <footer className="border-t border-gray-700 bg-gray-950 text-white">
            <div className="mx-auto max-w-7xl px-6 py-12">
                
                {/* Top Section */}
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide">
                            Contact
                        </h4>
                        <ul className="mt-4 space-y-5 text-sm">
                            {list.contact_list.map((e, i) =>
                            <li className="grid gap-1">
                                <div className="flex gap-1 items-center">
                                    {e.icon}
                                    <span className="text-sm"><b>{e.label}</b></span>
                                </div>
                                <div>{e.value}</div>
                            </li>)}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide">
                            Follow
                        </h4>
                        <ul className="mt-4 flex gap-4 items-center">
                            {list.follow_list.map((e, i) =>
                            <a href={e.value} target="__blank">
                                <li className="grid gap-1">
                                    <div className="flex gap-1 items-center">
                                        {e.icon}
                                        <span className="text-sm"><b>{e.label}</b></span>
                                    </div>
                                </li>
                            </a>)}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wide">
                            Feedback
                        </h4>
                        <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
                            <div>
                                <label htmlFor="" className="block text-sm mb-1 text-gray-300">Name</label>
                                <input
                                    type='text'
                                    required
                                    placeholder='Juan Boy'
                                    name='name'
                                    className="w-full px-4 py-2 rounded-lg text-sm bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
                                />
                            </div>
                            <div>
                                <label htmlFor="" className="block text-sm mb-1 text-gray-300">Email</label>
                                <input
                                    type='email'
                                    required
                                    placeholder='name123@example.com'
                                    name='email'
                                    className="w-full px-4 py-2 rounded-lg text-sm bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
                                />
                            </div>
                            <div className="w-full h-[9rem]">
                                <textarea 
                                    name="description" 
                                    placeholder="Your Feedback" 
                                    id=""
                                    className="w-full h-full px-4 py-2 rounded-lg text-sm bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-900 transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-gray-700 pt-6">
                    <p className="text-sm text-gray-500 text-center">
                        © {new Date().getFullYear()} Peter Justin Delos Reyes. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};


export default Footer