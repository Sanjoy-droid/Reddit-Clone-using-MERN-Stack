import "./App.css";
// import { Navbar } from "./components/Navbar";
// import Cards from "./components/main/Cards";
// import PostSection from "./components/main/PostSection";
// import PostCards from "./components/main/PostsCards";
// import Communities from "./components/main/Communities";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import PostItems from "./components/main/PostItems";
// import Test from "./components/main/Test";
// import Home from "./components/main/Home";
// import PostItems from "./components/main/PostItems";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="postitems" element={<PostItems />} />

          <Route
            path="postitems/posts"
            element={
              <>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Obcaecati explicabo maiores in eum beatae accusamus nostrum
                  soluta dolorem, libero consectetur quas laborum delectus
                  asperiores, inventore quaerat, sed enim rerum at!
                </p>
              </>
            }
          />
          {/* <Route path="test" element={<Test />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
