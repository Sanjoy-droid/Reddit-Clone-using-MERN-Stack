import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import PostItems from "./components/main/PostItems";
import Posts from "./components/main/Posts";
import PostState from "./context/posts/PostState";
import LoginModal from "./components/main/LoginModal";
import SignupModal from "./components/main/SignupModal";
import { useState } from "react";
import Alert from "./components/main/Alert";
import AddPost from "./components/main/AddPost";
import EditPostModal from "./components/main/EditPostModal";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      console.log("Timeout executed");
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <PostState showAlert={showAlert}>
          <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/postitems/:id" element={<PostItems />} />

            <Route
              exact
              path="/postitems/posts/:id"
              element={
                <>
                  <Posts showAlert={showAlert} />
                </>
              }
            />
            <Route
              exact
              path="/login"
              element={<LoginModal showAlert={showAlert} />}
            />
            <Route
              exact
              path="/signup"
              element={<SignupModal showAlert={showAlert} />}
            />
            <Route
              exact
              path="/addpost"
              element={<AddPost showAlert={showAlert} />}
            />

            <Route
              exact
              path="/editpost"
              element={<EditPostModal showAlert={showAlert} />}
            />
          </Routes>
        </PostState>
      </Router>
    </>
  );
}

export default App;
