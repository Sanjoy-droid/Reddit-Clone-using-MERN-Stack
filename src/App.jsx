import "./App.css";
// import { Navbar } from "./components/Navbar";
// import Cards from "./components/main/Cards";
// import PostSection from "./components/main/PostSection";
// import PostCards from "./components/main/PostsCards";
// import Communities from "./components/main/Communities";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import PostItems from "./components/main/PostItems";
import Posts from "./components/main/Posts";
import UserState from "./context/userState";
// import Test from "./components/main/Test";
// import Home from "./components/main/Home";
// import PostItems from "./components/main/PostItems";

function App() {
  return (
    <>
      <UserState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="postitems" element={<PostItems />} />

            <Route
              path="postitems/posts"
              element={
                <>
                  <Posts />
                </>
              }
            />
            {/* <Route path="test" element={<Test />} /> */}
          </Routes>
        </Router>
      </UserState>
    </>
  );
}

export default App;
