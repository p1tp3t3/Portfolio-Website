import TextField from "../../components/input/text-field";
import AdminLayout from "../../layouts/admin-layout";
import { useState } from "react";

const Setting = () => {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <AdminLayout>
      <div className="min-h-screen text-white py-10 w-full space-y-10">
        {/* Change Email */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">Change Email</h2>
          <TextField
            plc='New Email Address'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Update Email
          </button>
        </section>

        {/* Change Password */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">Change Password</h2>

            <TextField
                type='password'
                plc='Current password'
                name='current_password'
                onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <TextField
                type='password'
                plc='New password'
                name='password'
                onChange={(e) => setNewPassword(e.target.value)}
            />

          <button className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Update Password
          </button>
        </section>

        {/* Change Website Icon */}
        <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">Website Icon</h2>
          <p className="text-gray-400 text-sm">
            Upload a new favicon (PNG, SVG, or ICO)
          </p>

          <input
            type="file"
            accept="image/png,image/svg+xml,image/x-icon"
            className="block w-full text-sm text-gray-300
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:bg-neutral-800 file:text-white
              hover:file:bg-neutral-700"
          />

          <button className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Update Icon
          </button>
        </section>

      </div>
    </AdminLayout>
  );
};

export default Setting;
