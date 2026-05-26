import { MediaCard } from "./MediaCard";

interface Media {
  id: string;
  title: string;
  image: string;
  badge?: "WATCHED" | "QUEUED";
  rating: number;
}

const systemLibrary: Media[] = [
  {
    id: "1",
    title: "NEON_DRIFT_2049",
    image:
      "https://images.unsplash.com/photo-1606386619343-fd6b0ee0b8d0?w=400&h=300&fit=crop",
    badge: "WATCHED",
    rating: 4.8,
  },
  {
    id: "2",
    title: "GHOST_SHELL_S2",
    image:
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=300&fit=crop",
    badge: "QUEUED",
    rating: 4.5,
  },
  {
    id: "3",
    title: "DATA_STREAM_X",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop",
    rating: 4.2,
  },
  {
    id: "4",
    title: "OUTRUN_PROTO",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    badge: "QUEUED",
    rating: 4.8,
  },
  {
    id: "5",
    title: "VOID_PROTOCOL",
    image:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=300&fit=crop",
    badge: "WATCHED",
    rating: 5,
  },
];

interface HomeProps {
  query: string;
}

export const Home = ({ query }: HomeProps) => {
  // Filter by search
  const filteredLibrary = systemLibrary.filter((media) =>
    media.title.toLowerCase().includes(query.toLowerCase()),
  );

  const hasSearch = query.trim().length > 0;
  const resultCount = filteredLibrary.length;
  const resultsText = resultCount === 1 ? "result" : "results";
  const statusText = hasSearch
    ? `Found ${resultCount} ${resultsText}...`
    : "Locating underrated gems you can't miss...";

  return (
    <main className="ml-0 mr-0 min-h-screen bg-background border-l border-outline-variant/20">
      <div className="p-4 md:p-10 pt-20 md:pt-24 pb-20 md:pb-32">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-tertiary text-xs">■</span>
            <span className="text-[10px] font-label text-tertiary uppercase tracking-[0.4em] animate-pulse">
              {statusText}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-4">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black font-headline text-on-surface uppercase tracking-tighter">
              {hasSearch ? "Search" : "Hidden"}
            </h1>
            <span className="text-primary drop-shadow-[0_0_20px_rgba(255,177,199,0.5)] italic text-3xl sm:text-5xl md:text-7xl font-black font-headline uppercase tracking-tighter">
              {hasSearch ? "Results" : "Bites"}
            </span>
          </div>

          {/* Terminal Filters */}
          <nav className="flex items-center gap-4 mt-6">
            <div className="flex gap-1 border border-outline-variant/30 p-1 rounded-sm">
              <button className="bg-tertiary/20 border border-tertiary text-tertiary px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
                [ All Data ]
              </button>
              <button className="hover:bg-surface-container border border-transparent text-on-surface/50 px-4 py-1 text-[10px] font-bold tracking-widest uppercase transition-all">
                [ Actors ]
              </button>
              <button className="hover:bg-surface-container border border-transparent text-on-surface/50 px-4 py-1 text-[10px] font-bold tracking-widest uppercase transition-all">
                [ Series ]
              </button>
            </div>
          </nav>
        </header>

        {/* Media grid */}
        {filteredLibrary.length === 0 && hasSearch ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="material-symbols-outlined text-6xl text-outline-variant/30 mb-4">
              search_off
            </span>
            <p className="text-on-surface/50 text-sm font-label uppercase tracking-wider mb-2">
              No series found
            </p>
            <p className="text-on-surface/30 text-xs font-label">
              Try a different search query
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
            {filteredLibrary.map((media) => (
              <MediaCard
                key={media.id}
                {...media} // Spread operator
              />
            ))}

            {!hasSearch && (
              <MediaCard id="new-item" title="Add New" image="" rating={0} />
            )}
          </div>
        )}
      </div>
    </main>
  );
};
