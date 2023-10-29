import "./App.css";
import { Navbar } from "./components/Navbar";
import Cards from "./components/main/Cards";
import PostSection from "./components/main/PostSection";
import Posts from "./components/main/Posts";

function App() {
  return (
    <>
      <div className=" bg-gradient-to-r from-gray-900 to-gray-600 h-screen">
        <Navbar title="reddit" />
        <Cards />
        <PostSection />
        <Posts />
      </div>
    </>
  );
}

export default App;
