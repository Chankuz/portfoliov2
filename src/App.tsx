import AboutMe from "./sections/AboutMe";
import TechStack from "./sections/TechStack";
import Hobbies from "./sections/Hobbies";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Navigation from "./components/Navigation";
import Snowfall from "react-snowfall";
import LearnPath from "./sections/LearnPath";

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <Snowfall snowflakeCount={70} />
      <Navigation />
      <main>
        <AboutMe />
        <TechStack />
        <Hobbies />
        <Projects />
        <Certificates />
        <LearnPath />
      </main>
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© สร้างเสร็จแล้วเย้ๆ จะได้นอนแบ้ว</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
