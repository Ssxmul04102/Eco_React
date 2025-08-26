import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav className="w-full top-0 left-0 backdrop-blur-lg bg-white/20 border-b border-white/30 shadow-lg px-6 py-3 fixed z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#inicio" className="text-2xl font-bold text-gray-900">EcoEnergix</a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#0072ff] transition">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-40 transition-transform ${open ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="backdrop-blur-lg bg-white/95 p-6 shadow-lg">
          <ul className="flex flex-col gap-4 text-gray-900">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-lg font-medium hover:text-[#0072ff] transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
