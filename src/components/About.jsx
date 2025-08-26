export default function About() {
  return (
    <section
      id="nosotros"
      style={{ scrollMarginTop: "80px" }}
      className="w-full max-w-6xl mx-auto px-6 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagen / ilustración */}
        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          {/* Cambia la imagen por /public/team.jpg o import desde assets */}
          <img
            src="/team.jpg"
            alt="Equipo EcoEnergix"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Nosotros</h3>
          <p className="text-gray-700 mb-4">
            En EcoEnergix trabajamos para crear soluciones energéticas
            sostenibles que impulsen comunidades y empresas. Combinamos
            tecnología, investigación y prácticas responsables con el medio
            ambiente para ofrecer proyectos de energía renovable eficientes y
            asequibles.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Instalación de paneles solares</li>
            <li>Optimización de consumo energético</li>
            <li>Consultoría y mantenimiento</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
