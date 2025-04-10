// Este archivo debe llamarse `page.js` y estar dentro de una carpeta llamada `app` para funcionar correctamente en Vercel con Next.js 13+
export default function Page() {
  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans">
      <section className="p-10 md:p-20 text-center bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">MG Media Resources LLC</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Drones. Datos. Decisiones inteligentes. Servicios aéreos para construcción, agricultura, inspección y más.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a href="https://calendly.com/mgmediaresourcesllc/orientacion-de-mg-media-resources-llc" target="_blank" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-xl transition">Agendar Orientación</a>
          <a href="https://wa.me/17879941632" target="_blank" className="border border-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-2xl transition">Habla con nosotros</a>
        </div>
      </section>

      <section className="p-10 md:p-20 grid md:grid-cols-2 gap-10 bg-black">
        <div>
          <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Fotogrametría y modelado 3D</li>
            <li>Inspecciones técnicas con drones</li>
            <li>Agricultura de precisión</li>
            <li>Mapeo de terrenos y análisis topográficos</li>
            <li>Servicios visuales para bienes raíces</li>
            <li>Monitoreo en manejo de emergencias</li>
            <li>Aplicaciones en arqueología y conservación</li>
          </ul>
        </div>
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-semibold mb-2">¿Qué nos hace diferentes?</h3>
          <p className="text-gray-400">
            Combinamos la última tecnología en drones con análisis inteligente para entregar información precisa y visualmente impactante que transforma la forma en que tomas decisiones.
          </p>
          <p className="mt-4 text-gray-400">
            Cada proyecto es tratado con atención humana, visión estratégica y un compromiso inquebrantable con la excelencia.
          </p>
        </div>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500 bg-gray-900">
        &copy; {new Date().getFullYear()} MG Media Resources LLC. Todos los derechos reservados.
      </footer>
    </main>
  );
}