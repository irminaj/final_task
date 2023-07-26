import { Theme } from "./Theme";
import GlobalCSS from "./globalStyles/GlobalStyles.style";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";

const App = () => {
  return (
    <div>
      <Theme>
        <GlobalCSS />
        <h1>Hello</h1>
        <Button text="Submit" />
        <Input placeholder="Name" />
      </Theme>
    </div>
  );
};

export default App;
