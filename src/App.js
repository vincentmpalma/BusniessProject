import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Feedback from "./Screens/Feedback";
import About from "./Screens/About";
import Topics from "./Screens/Topics";
import Budgeting from "./Screens/Budgeting";
import Templates from "./Screens/Templates";
import Videos from "./Screens/Videos";
import FAQ from "./Screens/FAQ";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budgeting" element={<Budgeting />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;
