import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import PostItems from "./components/main/PostItems";
import Posts from "./components/main/Posts";
import PostState from "./context/posts/PostState";
import Test from "./components/main/Test";
import LoginModal from "./components/main/LoginModal";
import SignupModal from "./components/main/SignupModal";

function App() {
  return (
    <>
      <PostState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/postitems/:id" element={<PostItems />} />

            <Route
              exact
              path="/postitems/posts/:id"
              element={
                <>
                  <Posts />
                </>
              }
            />
            <Route exact path="/login" element={<LoginModal />} />
            <Route exact path="/signup" element={<SignupModal />} />

            <Route exact path="/togin" element={<Test />} />
          </Routes>
        </Router>
      </PostState>
    </>
  );
}

export default App;
