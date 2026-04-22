interface MediaCardProps {
  id?: string;
  title: string;
  image: string;
  badge?: "WATCHED" | "QUEUED";
  rating: number;
  isEmpty?: boolean;
}

export const MediaCard = ({
  id,
  title,
  image,
  badge,
  rating,
  isEmpty = false,
}: MediaCardProps) => {
  if (isEmpty) {
    return (
      <div className="relative group cursor-pointer">
        <div className="aspect-[16/10] bg-surface-container-low border-2 border-dashed border-outline-variant/30 rounded-sm flex items-center justify-center hover:border-secondary/50 transition-all duration-300">
          <div className="text-center">
            <span className="material-symbols-outlined text-2xl text-outline-variant/50 mx-auto block mb-2">
              add
            </span>
            <div className="text-[10px] font-headline font-black uppercase tracking-widest text-outline-variant/50">
              INIT_NEW_ENTRY
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Generate a transaction number based on the id
  const transNumber = id ? id.padStart(2, "0") : "00";

  return (
    <div className="group cursor-pointer">
      {/* Contains the image and the overlay */}
      <div className="relative `aspect-[16/10` bg-surface-container-lowest border border-outline-variant/20 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover mix-blend-luminosity opacity-50 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
        />

        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-90" />

        {badge && (
          <div
            className={`absolute top-0 right-0 px-3 py-1 text-[9px] font-black tracking-tighter z-10 ${
              badge === "WATCHED"
                ? "bg-tertiary text-background"
                : "bg-primary text-background"
            }`}
          >
            {badge}
          </div>
        )}

        <button className="absolute right-3 bottom-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(255,177,199,0.5)] group-hover:shadow-[0_0_20px_rgba(255,177,199,0.8)] z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="material-symbols-outlined text-xl text-background font-bold">
            play_arrow
          </span>
        </button>
      </div>

      {/* Card info */}
      <div className="pt-4 px-1">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-label text-primary/50 uppercase tracking-[0.2em] mb-1">
            MOV_TRANS_{transNumber}
          </span>
          <h3 className="text-sm font-headline font-black uppercase tracking-wider text-on-surface group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="material-symbols-outlined text-xs text-tertiary">
              star
            </span>
            <span className="text-[11px] font-label text-tertiary/80 font-bold">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
