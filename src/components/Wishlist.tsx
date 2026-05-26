import { MediaCard } from "./MediaCard";
import type { WishlistItem } from "../types";

interface WishlistProps {
  items: WishlistItem[];
  onRemove: (id: string, source: "local" | "tvmaze") => void;
  onClear: () => void;
}

export const Wishlist = ({ items, onRemove, onClear }: WishlistProps) => {
  const itemCount = items.length;
  const itemsText = itemCount === 1 ? "item" : "items";

  return (
    <main className="ml-0 mr-0 min-h-screen bg-background border-l border-outline-variant/20">
      <div className="p-4 md:p-10 pt-20 md:pt-24 pb-20 md:pb-32">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-tertiary text-xs">■</span>
            <span className="text-[10px] font-label text-tertiary uppercase tracking-[0.4em] animate-pulse">
              Personal collection loaded...
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-4">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black font-headline text-on-surface uppercase tracking-tighter">
              My
            </h1>
            <span className="text-primary drop-shadow-[0_0_20px_rgba(255,177,199,0.5)] italic text-3xl sm:text-5xl md:text-7xl font-black font-headline uppercase tracking-tighter">
              Wishlist
            </span>
          </div>

          {/* Info and Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
            <div className="text-[10px] font-label text-on-surface/60 uppercase tracking-wider">
              {itemCount} {itemsText} saved
            </div>
            {itemCount > 0 && (
              <button
                onClick={onClear}
                className="px-4 py-2 bg-primary/10 border border-primary text-primary hover:bg-primary/20 transition-all duration-300 text-[10px] font-bold tracking-widest uppercase rounded-sm"
              >
                CLEAR_LIST
              </button>
            )}
          </div>
        </header>

        {/* Wishlist Items Grid */}
        {itemCount === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="material-symbols-outlined text-6xl text-outline-variant/30 mb-4">
              favorite_border
            </span>
            <p className="text-on-surface/50 text-sm font-label uppercase tracking-wider mb-2">
              Wishlist is empty
            </p>
            <p className="text-on-surface/30 text-xs font-label">
              Add items from Home or Search results
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
            {items.map((item) => (
              <div key={`${item.source}-${item.id}`} className="relative">
                <MediaCard
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  rating={item.rating}
                />
                <button
                  onClick={() => onRemove(item.id, item.source)}
                  className="absolute top-2 right-2 w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,177,199,0.5)] hover:shadow-[0_0_20px_rgba(255,177,199,0.8)] transition-all duration-300 z-10 group"
                >
                  <span className="material-symbols-outlined text-lg group-hover:rotate-90 transition-transform">
                    close
                  </span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
