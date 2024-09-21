import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/navbar/Navbar";
import Container from "./components/container/Container";
import { setTheme } from "./store/slice/themeSlice";

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

  const dispatch = useDispatch();

  useEffect(() => {
    // Retrieve the theme from localStorage when the component mounts
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default App;
