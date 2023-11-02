import "./App.css";
import { Navbar } from "./components/Navbar";
import Cards from "./components/main/Cards";
import PostSection from "./components/main/PostSection";
import Posts from "./components/main/Posts";
import Communities from "./components/main/Communities";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-gray-600 h-[500vh]">
        {/* components */}

        <Navbar className="" title="reddit" />
        <Cards />
        <div className="flex">
          <div>
            <PostSection />
            <Posts />
          </div>
          <Communities />
        </div>
      </div>
    </>
  );
}

export default App;
