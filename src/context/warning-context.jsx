import { createContext, useContext, useState } from "react";

const WarningContext = createContext();

export const WarningProvider = ({ children }) => {
  const [warning, setWarning] = useState(null);

  /**
   * showWarning({
   *   title,
   *   message,
   *   onProceed,
   *   onCancel
   * })
   */
  const showWarning = ({ title, message, onProceed, onCancel }) => {
    setWarning({ title, message, onProceed, onCancel });
  };

  const closeWarning = () => {
    setWarning(null);
  };

  const proceed = async () => {
    if (warning?.onProceed) await warning.onProceed();
    closeWarning();
  };

  const cancel = () => {
    warning?.onCancel?.();
    closeWarning();
  };

  return (
    <WarningContext.Provider value={{ showWarning }}>
      {children}

      {/* Warning Modal */}
      {warning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-neutral-900 text-white w-full max-w-md rounded-lg shadow-lg p-6 relative">

            {/* Icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500/20">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold">
                {warning.title || "Warning"}
              </h2>
            </div>

            {/* Message */}
            <p className="text-gray-300 mb-6">{warning.message}</p>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={cancel}
                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={proceed}
                className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </WarningContext.Provider>
  );
};

export const useWarning = () => useContext(WarningContext);
