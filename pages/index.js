export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6">

      <div className="fade-in text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4 glow-title">criminal.today</h1>
        <p className="text-lg text-gray-300 mb-6">
          🚧 Plataforma em construção — Em breve um ambiente inspirado no TabNews
          focado exclusivamente em Direito Penal, Processo Penal e Criminologia.
        </p>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 box-shadow hover-scale">
          <p className="text-gray-400 text-sm">Aguarde novidades — estamos preparando algo relevante para a área criminal.</p>
        </div>
      </div>
    </div>
  );
}