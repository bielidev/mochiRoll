import type { SearchResult } from "../types";
import { useEffect, useState } from "react";
import { MediaCard } from "./MediaCard";

export const Search = ({ query }: { query: string }) => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || query.trim().length === 0) {
      return;
    }

    const fetchSeries = async () => {
      setLoading(true);

      try {
        const resp = await fetch(
          `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
        );
        const data = await resp.json();
        setResults(data || []);
      } catch (error) {
        console.error("Error fetching from tvmaze:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, [query]);

  const resultCount = results.length;
  const resultsText = resultCount === 1 ? "result" : "results";
  const hasQuery = query && query.trim().length > 0;
  const showLoadingState = hasQuery && loading;
  const showEmptyState = hasQuery && !loading && resultCount === 0;

  return (
    <main className="ml-48 mr-0 min-h-screen bg-background border-l border-outline-variant/20">
      <div className="p-10 pt-24 pb-32">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-tertiary text-xs">■</span>
            <span className="text-[10px] font-label text-tertiary uppercase tracking-[0.4em] animate-pulse">
              {showLoadingState
                ? "Searching tvmaze database..."
                : `Found ${resultCount} ${resultsText}...`}
            </span>
          </div>

          <div className="flex items-baseline gap-4">
            <h1 className="text-7xl font-black font-headline text-on-surface uppercase tracking-tighter">
              Search
            </h1>
            <span className="text-primary drop-shadow-[0_0_20px_rgba(255,177,199,0.5)] italic ml-4 text-7xl font-black font-headline uppercase tracking-tighter">
              Results
            </span>
          </div>

          {/* Terminal Filters */}
          <nav className="flex items-center gap-4 mt-6">
            <div className="flex gap-1 border border-outline-variant/30 p-1 rounded-sm">
              <button className="bg-tertiary/20 border border-tertiary text-tertiary px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
                [ All Data ]
              </button>
              <button className="hover:bg-surface-container border border-transparent text-on-surface/50 px-4 py-1 text-[10px] font-bold tracking-widest uppercase transition-all">
                [ Series ]
              </button>
              <button className="hover:bg-surface-container border border-transparent text-on-surface/50 px-4 py-1 text-[10px] font-bold tracking-widest uppercase transition-all">
                [ People ]
              </button>
            </div>
          </nav>
        </header>

        {/* Media grid */}
        {showLoadingState && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="material-symbols-outlined text-6xl text-primary/50 mb-4 animate-spin">
              settings
            </span>
            <p className="text-on-surface/50 text-sm font-label uppercase tracking-wider">
              Loading data...
            </p>
          </div>
        )}

        {showEmptyState && (
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
        )}

        {!showLoadingState && !showEmptyState && resultCount > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-12">
            {results.map((result, index) => {
              const show = result.show;
              return (
                <MediaCard
                  key={`${show.id}-${index}`}
                  id={String(show.id)}
                  title={show.name}
                  image={show.image?.medium || show.image?.original || ""}
                  rating={show.rating?.average ? show.rating.average / 2 : 0}
                />
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};
