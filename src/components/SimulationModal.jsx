import { X, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SimulationModal({ experiment, onClose }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;
    if (experiment) {
      // Avoid calling setIsLoading(true) in the effect, since the user expects the
      // loading spinner first. Instead, set it up so that we wait for the timeout
      // and then turn it to false.
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
    return () => {
      if (timer) clearTimeout(timer);
      setIsLoading(true); // Reset state when modal closes or experiment changes
    };
  }, [experiment]);

  if (!experiment) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
      <div className="relative w-full max-w-5xl bg-gray-900 rounded-2xl border border-neon-blue/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h3 className="text-xl font-bold text-neon-blue">{experiment.title} - 3D Laboratuvar</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-gray-800 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* 3D Simulation Canvas Area */}
        <div className="relative w-full h-[60vh] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
          {/* Simulated 3D Grid Environment */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom"></div>

          {isLoading ? (
            <div className="z-10 text-center animate-pulse">
              <div className="w-32 h-32 mx-auto mb-6 border-4 border-neon-blue rounded-full border-t-transparent animate-spin"></div>
              <p className="text-2xl font-light text-neon-blue">Simülasyon Yükleniyor...</p>
              <p className="text-gray-400 mt-2 text-sm">{experiment.category} - {experiment.grade}. Sınıf</p>
            </div>
          ) : (
            <div className="z-10 text-center">
              <CheckCircle size={80} className="mx-auto mb-6 text-green-500" />
              <p className="text-2xl font-light text-green-500">Simülasyon Hazır</p>
              <p className="text-gray-400 mt-2 text-sm">{experiment.category} - {experiment.grade}. Sınıf</p>
            </div>
          )}
        </div>

        {/* Instructions/Controls Area */}
        <div className="p-6 bg-gray-950 border-t border-gray-800">
          <h4 className="text-white font-medium mb-2">Deney Yönergesi:</h4>
          <p className="text-gray-400 text-sm">{experiment.description}</p>
        </div>
      </div>
    </div>
  );
}
