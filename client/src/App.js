import { Theme } from "./Theme";
import GlobalCSS from "./globalStyles/GlobalStyles.style";

function App() {
  return (
    <div>
      <Theme>
        <GlobalCSS />
        <h1>Hello</h1>
      </Theme>
    </div>
  );
}

export default App;
