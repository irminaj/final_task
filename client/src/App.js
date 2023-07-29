import { Theme } from "./Theme";
import GlobalCSS from "./globalStyles/GlobalStyles.style";
import { Form } from "./features/form/Form";
import { UsersList } from "./sections/users/UsersList";

const App = () => {
  return (
    <div>
      <Theme>
        <GlobalCSS />
        <Form />
        <UsersList />
      </Theme>
    </div>
  );
};

export default App;
