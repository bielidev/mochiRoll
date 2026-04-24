import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Sidebar } from "./components/Sidebar";
import { StatusBar } from "./components/StatusBar";
import { Search } from "./components/Search";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background text-on-surface overflow-hidden">
      <Navigation onSearch={(q) => setSearchQuery(q)} />
      <Sidebar />
      <Search query={searchQuery} />
      <StatusBar />
    </div>
  );
}

export default App;
