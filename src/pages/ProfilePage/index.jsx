import React, { useState } from "react";
import { Mail, Phone, Building2, Shield, Camera } from "lucide-react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Amit Patel",
    role: "Employee",
    email: "employee@company.com",
    phone: "+91 98765 43212",
    department: "Sales",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (!file) return;
  if (file.type !== "image/jpeg") {
    alert("Only JPG files are allowed!");
    e.target.value = ""; 
    return;
  }

  const imageUrl = URL.createObjectURL(file);
  setUser({ ...user, profileImage: imageUrl });
};
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const initial = user.name.charAt(0);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        My Profile
      </h1>

      <div className="max-w-3xl bg-white rounded-xl border shadow-sm overflow-hidden">
        
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 flex items-center gap-6 relative">
          
          {/* Avatar */}
          <div className="relative">
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-blue-600 text-3xl font-semibold">
                {initial}
              </div>
            )}

            {isEditing && (
              <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer">
                <Camera size={16} className="text-gray-600" />
                <input
                  type="file"
                  className="hidden"
                   accept=".jpg,.jpeg,image/jpeg"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          {/* Name & Role */}
          <div className="text-white">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="bg-transparent border-b border-white focus:outline-none text-xl font-semibold"
              />
            ) : (
              <h2 className="text-xl font-semibold">{user.name}</h2>
            )}
            <p className="text-blue-100">{user.role}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-gray-400 mt-1" size={20} />
              <div className="w-full">
                <p className="text-sm text-gray-500">Email</p>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1 text-gray-800"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">
                    {user.email}
                  </p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="text-gray-400 mt-1" size={20} />
              <div className="w-full">
                <p className="text-sm text-gray-500">Phone</p>
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1 text-gray-800"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">
                    {user.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Department */}
            <div className="flex items-start gap-4">
              <Building2 className="text-gray-400 mt-1" size={20} />
              <div className="w-full">
                <p className="text-sm text-gray-500">Department</p>
                {isEditing ? (
                  <input
                    type="text"
                    name="department"
                    value={user.department}
                    onChange={handleChange}
                    className="w-full border rounded px-2 py-1 text-gray-800"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">
                    {user.department}
                  </p>
                )}
              </div>
            </div>

            {/* Role (Not Editable) */}
           {/* Role */}
<div className="flex items-start gap-4">
  <Shield className="text-gray-400 mt-1" size={20} />
  <div className="w-full">
    <p className="text-sm text-gray-500">Role</p>

    {isEditing ? (
      <select
        name="role"
        value={user.role}
        onChange={handleChange}
        className="w-full border rounded px-2 py-1 text-gray-800"
      >
        <option value="Employee">Employee</option>
        <option value="Admin">Admin</option>
        <option value="Manager">Manager</option>
        <option value="HR">HR</option>
      </select>
    ) : (
      <p className="text-gray-800 font-medium">
        {user.role}
      </p>
    )}
  </div>
</div>

          </div>

          <hr className="my-8" />

          {/* Buttons */}
          <button
            onClick={toggleEdit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
