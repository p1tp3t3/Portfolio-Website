import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillList = ({ list }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="grid gap-5">
            {/* Title + Global Toggle */}
            <div className="flex items-center justify-between">
                <h1 className="text-[1.5em] items-center flex gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                        <path d="M9 12a3 3 0 1 0 6 0" />
                    </svg>
                    <b>Technical Tools</b>
                </h1>

                <button
                    onClick={() => setOpen(!open)}
                    className="text-xs text-gray-400 hover:text-white transition"
                >
                    {open ? "Show less" : "Show more"}
                </button>
            </div>

            {/* Skill Categories */}
            <div className="grid gap-5">
                {list.map((e, i) => (
                    <div key={i}>
                        <h1 className="mb-2 text-[0.9em] font-medium">
                            {e.title}
                        </h1>

                        <motion.div
                            className="flex gap-2 flex-wrap"
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={{
                                show: { transition: { staggerChildren: 0.05 } },   // stagger when opening
                                hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } } // stagger when closing
                            }}
                            >
                                <AnimatePresence>
                                    {(open ? e.list.item : e.list.item.slice(0, 6)).map((f) => (
                                    <motion.span
                                        key={f.label}
                                        variants={{
                                        show: { opacity: 1, scale: 1 },
                                        hidden: { opacity: 0, scale: 0.8 }
                                        }}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        transition={{ duration: 0.2, ease: "linear" }}
                                        className={`px-3 py-1 rounded-full border text-[0.7em] flex gap-1 items-center whitespace-nowrap ${f.color}`}
                                    >
                                        <b>{f.label}</b>
                                    </motion.span>
                                    ))}
                                </AnimatePresence>
                            </motion.div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillList;
