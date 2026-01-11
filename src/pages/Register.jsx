import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  FaUser,
  FaIdCard,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaHeartbeat,
  FaExclamationTriangle,
} from "react-icons/fa";
import { supabase } from "../supabaseClient";

const Register = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    email: "",
    phone: "",
    angkatan: "2025",
    riwayat_penyakit: "",
    alergi: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("registrations").insert([
      {
        nama: formData.nama,
        nim: formData.nim,
        email: formData.email,
        phone: formData.phone,
        angkatan: formData.angkatan,
        riwayat_penyakit: formData.riwayat_penyakit || null,
        alergi: formData.alergi || null,
      },
    ]);

    if (error) {
      toast.error("Gagal menyimpan data");
      return;
    }

    toast.success("Pendaftaran berhasil");

    setFormData({
      nama: "",
      nim: "",
      email: "",
      phone: "",
      angkatan: "2025",
      riwayat_penyakit: "",
      alergi: "",
    });
  };

  const fields = [
    { name: "nama", label: "Nama Mahasiswa", icon: <FaUser />, type: "text" },
    { name: "nim", label: "NIM", icon: <FaIdCard />, type: "text" },
    { name: "email", label: "Email", icon: <FaEnvelope />, type: "email" },
    { name: "phone", label: "No HP", icon: <FaPhone />, type: "tel" },
    {
      name: "riwayat_penyakit",
      label: "Riwayat Penyakit",
      icon: <FaHeartbeat />,
      type: "text",
    },
    {
      name: "alergi",
      label: "Alergi",
      icon: <FaExclamationTriangle />,
      type: "text",
    },
  ];

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-slate-800 border border-slate-600 rounded-md p-6 shadow-lg">
        <Toaster position="top-center" />

        <h1 className="text-3xl font-bold text-center text-white mb-10">
          Daftar ICC Season IV
        </h1>

        <form onSubmit={handleSubmit}>
          {fields.map(({ name, label, icon, type }) => (
            <div className="relative mb-8" key={name}>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                placeholder=" "
                className="
                  peer w-full bg-transparent border-b-2 border-gray-400
                  text-white text-base py-2 pr-8 outline-none
                  focus:border-blue-500
                "
              />

              <label
                className="
                  absolute left-0 top-2 text-gray-400 text-sm
                  transition-all duration-200
                  peer-placeholder-shown:top-2
                  peer-placeholder-shown:text-sm
                  peer-focus:-top-4
                  peer-focus:text-xs
                  peer-focus:text-blue-400
                  peer-not-placeholder-shown:-top-4
                  peer-not-placeholder-shown:text-xs
                "
              >
                {label}
              </label>

              <span className="absolute right-2 top-2 text-gray-400">
                {icon}
              </span>
            </div>
          ))}

          <div className="mb-8">
            <label className="text-white flex items-center gap-2 mb-1">
              <FaUniversity /> Angkatan
            </label>
            <input
              value="2025"
              readOnly
              className="w-full p-2 bg-slate-600 text-white rounded opacity-70 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded"
          >
            Daftar Sekarang
          </button>

          <div className="text-center mt-4">
            <Link to="/data-register" className="text-blue-300 text-sm">
              Lihat mahasiswa terdaftar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
