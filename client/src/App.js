import { Theme } from "./Theme";
import GlobalCSS from "./globalStyles/GlobalStyles.style";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { Label } from "./components/label/Label";

const App = () => {
  return (
    <div>
      <Theme>
        <GlobalCSS />
        <h1>Hello</h1>
        <Button text="Submit" />
        <Label text="Name" />
        <Input placeholder="Name" />
      </Theme>
    </div>
  );
};

export default App;
