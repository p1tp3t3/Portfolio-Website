import TextField from "../../components/input/text-field";
import { useState } from "react";
import { UserAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { sb_db } from "../../supabase-config";

const Login = () => {
    
    const navigate = useNavigate(),
          { signInUser, signInUser0Auth } = UserAuth()

    const [err, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const f = new FormData(e.target)
        const data = {
            email: f.get('email'),
            password: f.get('password')
        }
        const { session, error } = await signInUser(data.email, data.password)

        if (error) {
            setError(error)

            setTimeout(() => {
                setError("")
            }, 3000)
        } else {
            navigate("/profile")
        }

        if (session) {
            setError("")
        }
    }

    return (
        <main className="text-white min-h-screen flex w-full justify-center grid grid-cols-1 md:grid-cols-2 bg-neutral-900 overflow-hidden shadow-xl">
            <div className="hidden md:relative md:flex h-full">
                <img
                    src="/assets/img/0e5539190af37f955bd25c1127c0e97a.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="p-10 flex flex-col justify-center h-full">
                <h2 className="text-2xl font-semibold mb-2 flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                    <b>Admin Login</b>
                </h2>
                <p className="text-gray-400 mb-8">
                    Enter your credentials to continue
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <TextField
                        label='Email'
                        type="email"
                        plc='name123@example.com'
                        name='email'
                    />
                    <TextField
                        label='Password'
                        type="password"
                        plc='••••••••'
                        name='password'
                        err={err}
                    />

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">
                            Forgot password?
                        </a>
                    </div>

                    <div className="grid gap-2">
                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-900 transition"
                        >
                            Sign In
                        </button>
                        <div className="flex gap-3 items-center">
                            <div className="w-full h-[0.5px] bg-white"/><span>Or</span><div className="w-full h-[0.5px] bg-white"/>
                        </div>
                        <button
                            onClick={signInUser0Auth}
                            type="button"
                            className="w-full py-3 rounded-lg border-blue-800 border-2 text-white font-semibold hover:bg-blue-900 transition"
                        >
                            Sign In With Google
                        </button>
                    </div>
                    
                </form>
            </div>
        </main>
    );
};

export default Login;
