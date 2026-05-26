import { useState } from "react";

export const Navigation = ({
  onSearch,
  onPageChange,
  currentPage,
  wishlistCount,
}: {
  onSearch: (query: string) => void;
  onPageChange: (page: "home" | "wishlist") => void;
  currentPage: "home" | "wishlist";
  wishlistCount: number;
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(inputValue);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-3 md:py-4 bg-background/80 backdrop-blur-md border-b-4 border-double border-primary/20 shadow-[0_4px_30px_rgba(255,177,199,0.1)]">
      <div className="flex items-center gap-4 md:gap-12 flex-1 md:flex-none">
        {/* Logo  */}
        <button
          onClick={() => onPageChange("home")}
          className="flex flex-col hover:opacity-80 transition-opacity"
        >
          <div className="text-xs font-label text-primary/50 tracking-[0.3em] -mb-1 hidden sm:block">
            Series Finder
          </div>
          <div className="text-sm md:text-xl font-black text-primary drop-shadow-[0_0_10px_rgba(255,177,199,0.5)] font-headline tracking-tighter italic">
            MOCHI_ROLL
            <span className="text-on-surface/50 text-xs md:text-base">.v1</span>
          </div>
        </button>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <button
            onClick={() => onPageChange("home")}
            className={`font-headline font-black uppercase tracking-[0.2em] text-[10px] border-b-2 transition-all duration-300 pb-1 ${
              currentPage === "home"
                ? "text-secondary border-secondary"
                : "text-secondary/60 hover:text-secondary border-transparent hover:border-secondary"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onPageChange("wishlist")}
            className={`font-headline font-black uppercase tracking-[0.2em] text-[10px] border-b-2 transition-all duration-300 pb-1 relative ${
              currentPage === "wishlist"
                ? "text-tertiary border-tertiary"
                : "text-tertiary/60 hover:text-tertiary border-transparent hover:border-tertiary"
            }`}
          >
            My Wishlist
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-primary text-background text-[8px] font-black px-1.5 py-0.5 rounded-full">
                {wishlistCount}
              </span>
            )}
          </button>
        </nav>
      </div>

      {/* Search and tools */}
      <div className="flex items-center gap-2 md:gap-6 ml-auto">
        <div className="bg-surface-container/50 px-2 md:px-4 py-2 flex items-center border border-outline-variant/30 rounded-sm group focus-within:border-primary/50 transition-all">
          <span className="material-symbols-outlined text-sm text-tertiary mr-2 md:mr-3 group-focus-within:animate-pulse">
            terminal
          </span>
          <input
            className="bg-transparent border-none focus:ring-0 text-[10px] font-label text-tertiary placeholder:text-tertiary/20 w-24 md:w-48 tracking-widest outline-none"
            placeholder="EXECUTE_SEARCH..."
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              onSearch(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <button className="material-symbols-outlined text-primary hover:bg-primary/10 p-1.5 md:p-2 rounded-full transition-all text-lg md:text-xl">
            settings
          </button>
          <button className="material-symbols-outlined text-primary hover:bg-primary/10 p-1.5 md:p-2 rounded-full transition-all text-lg md:text-xl hidden sm:block">
            notifications
          </button>
        </div>
      </div>
    </header>
  );
};
