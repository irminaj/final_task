import { Theme } from "./Theme";
import GlobalCSS from "./globalStyles/GlobalStyles.style";
import { Button } from "./components/button/Button";

const App = () => {
  return (
    <div>
      <Theme>
        <GlobalCSS />
        <h1>Hello</h1>
        <Button text="Submit" />
      </Theme>
    </div>
  );
};

export default App;
