import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import CopyRights from "./components/CopyRights";
import Courses from "./components/courses/Courses";
import Events from "./components/Events";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigator from "./components/Navigator";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div className="h-screen">
      <Navigator />
      <Home />
      <Services />
      <About />
      <Courses />
      <Events />
      <Feedback />
      <Contact />
      <Footer />
      <CopyRights />
    </div>
  );
};

export default App;
