import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Course from "./components/course";
import Favorite from "./components/favorite";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <div className="App">
      {/* routes-> it is use to bind multiple routes into it */}
      <MainHeader />
      <Routes>
        {/* single data render karna ho */}
        {/* <Route path="/" element={<div>this is home page</div>} />
        <Route path="/about-us" element={<div>this is about us page</div>} />
        <Route path="/courses" element={<div>this is courses page</div>} />
        <Route path="/favorite" element={<div>this is favorite page</div>} /> */}

        {/* component rendering */}

        <Route path="/" element={<Home />} />
        <Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/favorite" element={<Favorite />} />

          {/* 404 - Page not found */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
