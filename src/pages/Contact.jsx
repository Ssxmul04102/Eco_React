import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" })
  const [status, setStatus] = useState({ sending: false, done: false, error: "" })

  function handleChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  function validate() {
    if (!form.name.trim()) return "Escribe tu nombre"
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Email inválido"
    if (form.msg.trim().length < 10) return "Mensaje muy corto"
    return null
  }

  function handleSubmit(e) {
    e.preventDefault()
    const err = validate()
    if (err) {
      setStatus({ sending: false, done: false, error: err })
      return
    }
    setStatus({ sending: true, done: false, error: "" })

    // Simulación de envío (aquí integrarías API real)
    setTimeout(() => {
      setStatus({ sending: false, done: true, error: "" })
      setForm({ name: "", email: "", msg: "" })
    }, 1200)
  }

  return (
    <section
      id="contacto"
      style={{ scrollMarginTop: "80px" }}
      className="w-full max-w-4xl mx-auto px-6 py-16"
    >
      <div className="mb-6 text-center">
        <h3 className="text-3xl font-bold text-gray-900">Contacto</h3>
        <p className="text-gray-700 mt-2">
          ¿Tienes un proyecto o una duda? Escríbenos y te responderemos pronto.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-2xl p-6 shadow-md"
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm text-gray-700 mb-1">Nombre</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none"
              placeholder="Tu nombre"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-700 mb-1">Correo</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none"
              placeholder="tu@correo.com"
            />
          </label>

          <label className="md:col-span-2 flex flex-col">
            <span className="text-sm text-gray-700 mb-1">Mensaje</span>
            <textarea
              name="msg"
              value={form.msg}
              onChange={handleChange}
              rows="5"
              required
              className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none"
              placeholder="Cuéntanos sobre tu proyecto..."
            />
          </label>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <button
            type="submit"
            disabled={status.sending}
            className="px-5 py-2 bg-[#0072ff] text-white rounded-lg shadow-sm hover:bg-[#005ed6] disabled:opacity-60"
          >
            {status.sending ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status.done && (
            <span className="text-green-600">¡Mensaje enviado! Te contactamos pronto.</span>
          )}
          {status.error && <span className="text-red-600">{status.error}</span>}
        </div>
      </form>
    </section>
  )
}
  