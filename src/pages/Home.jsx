import { experiments } from '../data/experiments';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Fen Bilimleri Dersi Deney Platformu
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
          Ortaokul öğrencileri için fen bilimleri deneylerini keşfet.
        </p>
      </section>

      {/* Blog-like Experiments List */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {experiments.map((exp) => (
          <article
            key={exp.id}
            className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-neon-blue/50 transition-colors shadow-lg hover:shadow-neon-blue/20 flex flex-col md:flex-row"
          >
            <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
              <img
                src={exp.imageUrl}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue rounded-full text-sm font-medium border border-neon-blue/30">
                  {exp.grade}. Sınıf
                </span>
                <span className="text-gray-400 text-sm">{exp.category}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 hover:text-neon-blue transition-colors">
                {exp.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
