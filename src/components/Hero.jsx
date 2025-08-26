export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20">
      <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-xl p-10 max-w-2xl">
        <img 
          src="/logo.png" 
          alt="EcoEnergix Logo" 
          className="w-32 mx-auto mb-6"
        />
        <h2 className="text-4xl font-bold mb-4 text-gray-900">EcoEnergix</h2>
        <p className="text-lg mb-6 text-gray-700">
          Poder Natural, Soluciones Infinitas
        </p>
        <button className="px-6 py-3 bg-[#0072ff] text-white font-semibold rounded-xl shadow-md hover:bg-[#005ed6] transition">
          Conoce más
        </button>
      </div>
    </section>
  )
}
