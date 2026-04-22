export const Navigation = () => {
  return (
    <header className="sticky top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-background/90 backdrop-blur-md border-b-4 border-double border-primary/30 shadow-[0_4px_20px_rgba(255,46,140,0.1)]">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-black italic text-primary drop-shadow-[0_0_8px_rgba(255,177,199,0.6)] font-headline">
          Mochi Roll
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            className="text-secondary font-headline opacity-70 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-black uppercase tracking-widest text-sm"
            href="#"
          >
            Transmissions
          </a>
          <a
            className="text-tertiary font-headline border-b-2 border-tertiary pb-1 font-black uppercase tracking-widest text-sm"
            href="#"
          >
            Archives
          </a>
          <a
            className="text-secondary font-headline opacity-70 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-black uppercase tracking-widest text-sm"
            href="#"
          >
            Sync_Log
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* Usamos las clases que definiste: surface-container, outline-variant, etc. */}
        <div className="bg-surface-container px-3 py-1 flex items-center border border-outline-variant/30 rounded-sm">
          <span className="material-symbols-outlined text-xs text-tertiary mr-2">
            search
          </span>
          <input
            className="bg-transparent border-none focus:ring-0 text-xs font-label text-tertiary placeholder:text-tertiary/30 w-32 md:w-48"
            placeholder="TERMINAL_SEARCH..."
            type="text"
          />
        </div>

        <span className="material-symbols-outlined text-primary cursor-pointer hover:bg-primary/10 p-2 rounded-full transition-all">
          settings
        </span>
        <span className="material-symbols-outlined text-primary cursor-pointer hover:bg-primary/10 p-2 rounded-full transition-all">
          terminal
        </span>
      </div>
    </header>
  );
};
