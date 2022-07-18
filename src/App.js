import { ThemeProvider } from "styled-components";
import Menu from "./components/layout/Menu";
import Normalize from "./components/styled/Normalize";
import theme from "./components/styled/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Normalize />
        <Menu />
      </div>
    </ThemeProvider>
  );
}

export default App;
