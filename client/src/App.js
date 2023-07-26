import { Theme } from "./Theme";
import GlobalCSS from "./globalStyles/GlobalStyles.style";
import { Button } from "./components/button/Button";
import { FormInput } from "./components/formInput/FormInput";

const App = () => {
  return (
    <div>
      <Theme>
        <GlobalCSS />
        <h1>Hello</h1>
        <FormInput placeholder={"Name"} text={"Name"} />
        <Button text="Submit" />
      </Theme>
    </div>
  );
};

export default App;
