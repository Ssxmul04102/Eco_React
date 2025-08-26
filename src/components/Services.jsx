function ServiceCard({ title, desc, icon }) {
  return (
    <div className="backdrop-blur-md bg-white/25 border border-white/20 rounded-2xl p-6 shadow-md">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/30">
          {/* icon puede ser un emoji o svg */}
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-700 mt-1">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const services = [
    {
      title: "Energía solar",
      desc: "Diseño e instalación de sistemas fotovoltaicos para hogares y empresas.",
      icon: "☀️",
    },
    {
      title: "Auditoría energética",
      desc: "Análisis de consumo y recomendaciones para reducir costos y huella.",
      icon: "🔎",
    },
    {
      title: "Mantenimiento",
      desc: "Planes de mantenimiento preventivo y correctivo para instalaciones.",
      icon: "🛠️",
    },
    {
      title: "Baterías y almacenamiento",
      desc: "Soluciones de almacenamiento para independencia energética.",
      icon: "🔋",
    },
    {
      title: "Micro redes",
      desc: "Sistemas aislados y redes locales inteligentes.",
      icon: "🌐",
    },
    {
      title: "Consultoría",
      desc: "Proyectos llave en mano y estudios de viabilidad.",
      icon: "📈",
    },
  ]

  return (
    <section
      id="servicios"
      style={{ scrollMarginTop: "80px" }}
      className="w-full max-w-6xl mx-auto px-6 py-16"
    >
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-bold text-gray-900">Servicios</h3>
        <p className="text-gray-700 mt-2">
          Soluciones integrales para cada necesidad energética.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  )
}
