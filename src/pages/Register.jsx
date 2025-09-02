import { useState } from "react"
import { Link } from "react-router-dom"

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Registro con: ${formData.name} - ${formData.email}`)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl 
        bg-white/20 backdrop-blur-lg border border-white/30">
        
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          Crear Cuenta
        </h2>
        <p className="text-lg text-center text-white/80 mb-6">
         Regístrate y empieza a ahorrar con energía solar
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white 
                placeholder-white/70 focus:ring-2 focus:ring-[#7d5fff] outline-none"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Correo</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu correo"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white 
                placeholder-white/70 focus:ring-2 focus:ring-[#00c9a7] outline-none"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Crea una contraseña"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white 
                placeholder-white/70 focus:ring-2 focus:ring-[#7d5fff] outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00c9a7] text-white py-2 rounded-lg hover:bg-[#7d5fff] transition"
          >
            Registrarme
          </button>
        </form>

        <p className="text-sm text-white text-center mt-4">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-[#7d5fff] hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}
