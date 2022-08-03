import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
function App() {
  return (
    <div className="App bd-primary h-screen flex flex-col">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
