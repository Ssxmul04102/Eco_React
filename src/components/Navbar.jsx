import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/Services", label: "Servicios" },
    { to: "/About", label: "Nosotros" },
    { to: "/Contact", label: "Contacto" },
    { to: "/login", label: "Iniciar Sesion  " },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          EcoEnergix
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="hover:text-[#0072ff] transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil deslizando desde arriba */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white/95 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <span className="text-xl font-bold text-gray-900">Menú</span>
          <button onClick={() => setOpen(false)}>
            <X size={24} className="text-gray-900" />
          </button>
        </div>

        <ul className="flex flex-col gap-8 p-8 text-gray-900 font-medium text-lg">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="block hover:text-[#0072ff] transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
