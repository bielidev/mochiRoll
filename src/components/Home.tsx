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
    rating: 5.0,
  },
];

export const Home = () => {
  return (
    <main className="ml-48 mr-0 min-h-screen bg-background border-l border-outline-variant/20">
      <div className="p-10 pt-24 pb-32">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-tertiary text-xs">■</span>
            <span className="text-[10px] font-label text-tertiary uppercase tracking-[0.4em] animate-pulse">
              LOCATING_FILES...
            </span>
          </div>

          <div className="flex items-baseline gap-4">
            <h1 className="text-7xl font-black font-headline text-on-surface uppercase tracking-tighter">
              SYSTEM_
            </h1>
            <h1 className="text-7xl font-black font-headline text-primary drop-shadow-[0_0_20px_rgba(255,177,199,0.5)] uppercase tracking-tighter italic">
              LIBRARY
            </h1>
          </div>

          {/* Terminal Filters */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex gap-1 border border-outline-variant/30 p-1 rounded-sm">
              <button className="bg-tertiary/20 border border-tertiary text-tertiary px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
                [ ALL_DATA ]
              </button>
              <button className="hover:bg-surface-container border border-transparent text-on-surface/50 px-4 py-1 text-[10px] font-bold tracking-widest uppercase transition-all">
                [ MOVIES ]
              </button>
              <button className="hover:bg-surface-container border border-transparent text-on-surface/50 px-4 py-1 text-[10px] font-bold tracking-widest uppercase transition-all">
                [ SERIES ]
              </button>
            </div>
          </div>
        </div>

        {/* Media grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-12">
          {systemLibrary.map((media) => (
            <MediaCard
              key={media.id}
              id={media.id}
              title={media.title}
              image={media.image}
              badge={media.badge}
              rating={media.rating}
            />
          ))}

          {/* New entry button*/}
          <MediaCard isEmpty={true} title="" image="" rating={0} />
        </div>
      </div>
    </main>
  );
};
