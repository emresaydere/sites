import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-neon-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-extrabold text-neon-blue tracking-wider drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
              DeneyMerkezi
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-neon-blue transition-colors text-lg font-medium">Anasayfa</Link>
            <Link to="/hakkinda" className="text-gray-300 hover:text-neon-blue transition-colors text-lg font-medium">Hakkında</Link>
            <Link to="/deneyler" className="text-gray-300 hover:text-neon-blue transition-colors text-lg font-medium">Deneyler</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
