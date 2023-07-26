import { Theme } from "./Theme";
import GlobalCSS from "./globalStyles/GlobalStyles.style";
import { Form } from "./features/form/Form";

const App = () => {
  return (
    <div>
      <Theme>
        <GlobalCSS />
        <Form />
      </Theme>
    </div>
  );
};

export default App;
