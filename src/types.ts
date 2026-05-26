export interface Show {
  id: number;
  name: string;
  season?: number;
  episode?: number;
  summary?: string;
  image?: {
    medium?: string;
    original?: string;
  };
  rating?: {
    average?: number | null;
  };
  status?: string;
  premiered?: string;
  network?: {
    id: number;
    name: string;
  };
}

export interface SearchResult {
  score?: number;
  show: Show;
}

export interface WishlistItem {
  id: string;
  title: string;
  image: string;
  rating: number;
  source: "local" | "tvmaze";
  addedAt: number;
}

export interface Wishlist {
  items: WishlistItem[];
}
