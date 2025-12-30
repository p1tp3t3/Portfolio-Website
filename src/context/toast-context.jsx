import { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1️⃣ Create Context
const ToastContext = createContext();

// 2️⃣ Create Provider
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // Add a new toast
  const addToast = useCallback((message, type = "info", duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Remove automatically after duration
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  // Remove a toast manually
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
        {children}
        {/* Toast container */}
        <div className="fixed top-4 right-4 flex flex-col gap-3 z-50">
            <AnimatePresence>
                {toasts.map((toast) => (
                <motion.div
                    key={toast.id}
                    initial={{ opacity: 0, x: 50 }}       // start off to the right
                    animate={{ opacity: 1, x: 0 }}        // animate to visible
                    exit={{ opacity: 0, x: 50 }}          // animate out to the right
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white ${
                    toast.type === "success"
                        ? "bg-green-500"
                        : toast.type === "error"
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }`}
                >
                    {/* Icon */}
                    <div className="w-6 h-6 flex-shrink-0">
                    {toast.type === "success" && (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                    {toast.type === "error" && (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                    {toast.type === "info" && (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                        </svg>
                    )}
                    </div>

                    {/* Message */}
                    <span className="flex-1 text-sm font-medium">{toast.message}</span>

                    {/* Close Button */}
                    <button
                    onClick={() => removeToast(toast.id)}
                    className="ml-2 text-white hover:text-gray-200"
                    >
                    ✕
                    </button>
                </motion.div>
                ))}
            </AnimatePresence>
        </div>

    </ToastContext.Provider>
  );
};

// 3️⃣ Custom hook for easy access
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
};
