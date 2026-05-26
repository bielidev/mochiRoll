export const StatusBar = () => {
  return (
    <>
      {/* Footer Status Bar */}
      <footer className="fixed bottom-0 left-0 right-0 h-14 md:h-14 bg-background/80 backdrop-blur-md border-t border-outline-variant/20 px-4 md:px-8 ml-0 flex justify-between items-center font-label text-[9px] md:text-[10px] text-on-surface/50 z-40">
        <div className="flex items-center gap-2 md:gap-8">
          {/* Item: Memory */}
          <div className="flex items-center gap-1 md:gap-2 tracking-[0.2em]">
            <span className="material-symbols-outlined text-[12px] md:text-[14px] text-tertiary">
              memory
            </span>
            <span className="hidden sm:inline">
              MEMORY_USAGE:{" "}
              <span className="text-tertiary font-bold">42% / 16GB</span>
            </span>
            <span className="sm:hidden">
              <span className="text-tertiary font-bold">42%</span>
            </span>
          </div>

          {/* Item: Sector */}
          <div className="hidden 2xl:flex items-center gap-2 tracking-[0.2em]">
            <span className="material-symbols-outlined text-[12px] md:text-[14px] text-primary">
              satellite_alt
            </span>
            <span>
              SECTOR_ST: <span className="text-primary font-bold">ACTIVE</span>
            </span>
          </div>

          {/* Item: IP */}
          <div className="hidden 2xl:flex items-center gap-2 tracking-[0.2em]">
            <span className="material-symbols-outlined text-[12px] md:text-[14px] text-secondary">
              router
            </span>
            <span>
              LOGGER_IN:{" "}
              <span className="text-secondary font-bold">192.168.9.1</span>
            </span>
          </div>
        </div>

        {/* Copyright / Version */}
        <div className="flex items-center gap-2 md:gap-4 tracking-[0.3em] font-black opacity-40">
          <span className="hidden md:inline">© 2026 MOCHI_ROLL_OS</span>
          <span className="md:hidden">© MOCHI</span>
          <span className="text-primary">V.1.0</span>
        </div>
      </footer>

      {/* Floating NEW_ENTRY Button */}
      <button className="fixed bottom-20 right-4 md:right-8 w-12 md:w-14 h-12 md:h-14 bg-primary text-background rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,177,199,0.5)] hover:shadow-[0_0_30px_rgba(255,177,199,0.8)] hover:scale-110 transition-all duration-300 z-50 group">
        <span className="material-symbols-outlined text-2xl md:text-3xl font-bold group-hover:rotate-90 transition-transform duration-300">
          add
        </span>
        {/* Tooltip for NEW_ENTRY Button */}
        <span className="absolute right-14 md:right-16 bg-background border border-primary text-primary text-[9px] md:text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-widest">
          NEW_ENTRY
        </span>
      </button>
    </>
  );
};
