import { useState } from 'react';
import { Search } from 'lucide-react';
import { experiments } from '../data/experiments';
import SimulationModal from '../components/SimulationModal';

export default function Experiments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [activeExperiment, setActiveExperiment] = useState(null);

  const filteredExperiments = experiments.filter((exp) => {
    const matchesSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = selectedGrade === 'all' || exp.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-gray-900/50 border-r border-gray-800 p-6 flex flex-col space-y-8">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Arama</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Deney adı ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-4">Sınıf Filtreleme</h2>
          <div className="space-y-2 flex flex-col">
            <button
              onClick={() => setSelectedGrade('all')}
              className={`text-left px-4 py-3 rounded-lg transition-colors ${
                selectedGrade === 'all'
                  ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-transparent'
              }`}
            >
              Tüm Sınıflar
            </button>
            {['5', '6', '7', '8'].map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`text-left px-4 py-3 rounded-lg transition-colors ${
                  selectedGrade === grade
                    ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/50'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-transparent'
                }`}
              >
                {grade}. Sınıf
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content (Grid) */}
      <main className="flex-1 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Tüm Deneyler</h1>

        {filteredExperiments.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            Aradığınız kriterlere uygun deney bulunamadı.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredExperiments.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setActiveExperiment(exp)}
                className="bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden cursor-pointer group hover:border-neon-blue/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,240,255,0.1)] flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <span className="bg-black/80 text-neon-blue px-4 py-2 rounded-lg font-medium border border-neon-blue/50 backdrop-blur-sm">
                      3D Laboratuvarı Aç
                    </span>
                  </div>
                  <img
                    src={exp.imageUrl}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-neon-blue bg-neon-blue/10 px-2 py-1 rounded border border-neon-blue/20">
                      {exp.grade}. Sınıf
                    </span>
                    <span className="text-xs text-gray-400">{exp.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* 3D Simulation Modal */}
      <SimulationModal
        experiment={activeExperiment}
        onClose={() => setActiveExperiment(null)}
      />
    </div>
  );
}
