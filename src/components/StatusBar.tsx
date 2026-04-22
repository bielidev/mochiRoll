export const StatusBar = () => {
  return (
    <>
      {/* Footer Status Bar */}
      <footer className="fixed bottom-0 left-0 right-0 h-14 bg-background/80 backdrop-blur-md border-t border-outline-variant/20 px-8 ml-48 flex justify-between items-center font-label text-[10px] text-on-surface/50 z-40">
        <div className="flex items-center gap-8">
          {/* Item: Memory */}
          <div className="flex items-center gap-2 tracking-[0.2em]">
            <span className="material-symbols-outlined text-[14px] text-tertiary">
              memory
            </span>
            <span>
              MEMORY_USAGE:{" "}
              <span className="text-tertiary font-bold">42% / 16GB</span>
            </span>
          </div>

          {/* Item: Sector */}
          <div className="hidden lg:flex items-center gap-2 tracking-[0.2em]">
            <span className="material-symbols-outlined text-[14px] text-primary">
              satellite_alt
            </span>
            <span>
              SECTOR_ST: <span className="text-primary font-bold">ACTIVE</span>
            </span>
          </div>

          {/* Item: IP */}
          <div className="hidden lg:flex items-center gap-2 tracking-[0.2em]">
            <span className="material-symbols-outlined text-[14px] text-secondary">
              router
            </span>
            <span>
              LOGGER_IN:{" "}
              <span className="text-secondary font-bold">192.168.9.1</span>
            </span>
          </div>
        </div>

        {/* Copyright / Version */}
        <div className="flex items-center gap-4 tracking-[0.3em] font-black opacity-40">
          <span>© 2026 MOCHI_ROLL_OS</span>
          <span className="text-primary">V.1.0.42</span>
        </div>
      </footer>

      {/* Floating NEW_ENTRY Button */}
      <button className="fixed bottom-20 right-8 w-14 h-14 bg-primary text-background rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,177,199,0.5)] hover:shadow-[0_0_30px_rgba(255,177,199,0.8)] hover:scale-110 transition-all duration-300 z-50 group">
        <span className="material-symbols-outlined text-3xl font-bold group-hover:rotate-90 transition-transform duration-300">
          add
        </span>
        {/* Tooltip for NEW_ENTRY Button */}
        <span className="absolute right-16 bg-background border border-primary text-primary text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-widest">
          NEW_ENTRY
        </span>
      </button>
    </>
  );
};
