import { useEffect } from "react";
import { useSelector } from "react-redux";

import Navbar from "./components/navbar/Navbar";
import Container from "./components/container/Container";
import Intro from "./section/Home/Intro";
import Projects from "./section/Home/Projects";

function App() {
  const theme = useSelector(
    (state: { theme: { theme: string } }) => state.theme.theme
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [theme]);

  return (
    <Container>
      <Navbar />
      <Intro />
      <Projects />
    </Container>
  );
}

export default App;
