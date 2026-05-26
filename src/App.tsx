import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { StatusBar } from "./components/StatusBar";
import { Search } from "./components/Search";
import { Wishlist } from "./components/Wishlist";
import { useWishlist } from "./hooks/useWishlist";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState<"home" | "wishlist">("home");
  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isInWishlist,
    isLoaded,
  } = useWishlist();

  return (
    <div className="min-h-screen bg-background text-on-surface overflow-hidden">
      <Navigation
        onSearch={(q) => setSearchQuery(q)}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
        wishlistCount={wishlist.length}
      />
      {currentPage === "home" ? (
        <Search
          query={searchQuery}
          onAddToWishlist={addToWishlist}
          isInWishlist={isInWishlist}
          isLoaded={isLoaded}
        />
      ) : (
        <Wishlist
          items={wishlist}
          onRemove={removeFromWishlist}
          onClear={clearWishlist}
        />
      )}
      <StatusBar />
    </div>
  );
}

export default App;
