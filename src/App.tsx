import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Sidebar } from "./components/Sidebar";
import { StatusBar } from "./components/StatusBar";
import { Search } from "./components/Search";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-surface overflow-hidden">
      <Navigation
        onSearch={(q) => setSearchQuery(q)}
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Search query={searchQuery} />
      <StatusBar />
    </div>
  );
}

export default App;
