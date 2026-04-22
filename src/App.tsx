import { Navigation } from "./components/Navigation";
import { Sidebar } from "./components/Sidebar";
import { StatusBar } from "./components/StatusBar";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface overflow-hidden">
      <Navigation />
      <Sidebar />
      <Home />
      <StatusBar />
    </div>
  );
}

export default App;
