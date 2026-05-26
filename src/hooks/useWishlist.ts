import { useState, useEffect } from "react";
import type { WishlistItem } from "../types";

const WISHLIST_KEY = "mochi_roll_wishlist";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(WISHLIST_KEY);
    if (stored) {
      try {
        setWishlist(JSON.parse(stored));
      } catch (error) {
        console.error("Error loading wishlist:", error);
        setWishlist([]);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    }
  }, [wishlist, isLoaded]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      // Check if item already exists
      if (prev.some((w) => w.id === item.id && w.source === item.source)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: string, source: "local" | "tvmaze") => {
    setWishlist((prev) =>
      prev.filter((w) => !(w.id === id && w.source === source)),
    );
  };

  const isInWishlist = (id: string, source: "local" | "tvmaze") => {
    return wishlist.some((w) => w.id === id && w.source === source);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
    isLoaded,
  };
};
