interface NavItem {
  id: string;
  label: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { id: "mov-dir", label: "MOV_DIR" },
  { id: "tv-dir", label: "TV_DIR" },
  { id: "anime-src", label: "ANIME_SRC" },
  { id: "neon-sync", label: "NEON_SYNC" },
  { id: "rkgt-ozm", label: "RKGT_OZM", active: true },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-20 bottom-20 w-48 bg-surface-container-low/60 border-r border-outline-variant/30 px-4 py-6 overflow-y-auto font-label text-sm">
      {/* Operator Profile */}
      <div className="mb-8 pb-6 border-b border-outline-variant/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-xs text-background">
              person
            </span>
          </div>
          <div className="font-headline font-black text-xs uppercase tracking-widest text-primary drop-shadow-[0_0_4px_rgba(255,177,199,0.4)]">
            OPERATOR_01
          </div>
        </div>
        <div className="text-xs text-on-surface/50 uppercase tracking-wide ml-8">
          CYBERNETIC_UNIT
        </div>
      </div>

      {/* System Status */}
      <div className="mb-8 pb-6 border-b border-outline-variant/20">
        <div className="text-xs font-headline font-black uppercase tracking-widest text-secondary mb-3">
          SYSTEM_STATUS
        </div>
        <div className="space-y-2 text-xs text-on-surface/70">
          <div className="flex justify-between">
            <span>MEMORY:</span>
            <span className="text-tertiary">42%</span>
          </div>
          <div className="flex justify-between">
            <span>SECTOR:</span>
            <span className="text-tertiary">ACTIVE</span>
          </div>
          <div className="flex justify-between">
            <span>NETWORK:</span>
            <span className="text-primary">ONLINE</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="space-y-1 mt-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`w-full text-left px-4 py-3 transition-all duration-200 text-[11px] font-bold tracking-widest ${
              item.active
                ? "bg-secondary/20 border-l-4 border-secondary text-secondary shadow-[inset_10px_0_15px_-10px_rgba(211,187,255,0.5)]"
                : "text-on-surface/40 hover:text-on-surface hover:bg-surface-container/30"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-sm">
                {item.active ? "folder_open" : "folder"}
              </span>
              {item.label}
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};
