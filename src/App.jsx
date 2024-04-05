import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Stats from "./pages/Stats";
import Feedback from "./pages/Feedback";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="">
      <div className="clamp-container mt-10">
        <Navbar />
        <Home />
        <Explore />
        <Stats />
        <Feedback />
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default App;
