export default function About() {
  return (
    <div className="flex-1 flex items-center justify-center p-4 min-h-[calc(100vh-80px)]">
      <div className="max-w-3xl text-center p-12 bg-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-800 shadow-[0_0_30px_rgba(0,240,255,0.05)]">
        <h2 className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed">
          Bu websitesi <span className="text-neon-blue font-medium drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">Öğretim Teknolojileri ve Materyal Tasarım</span> dersi için hazırlanmıştır.
        </h2>
      </div>
    </div>
  );
}
