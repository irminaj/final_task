import { Theme } from "./Theme";
import GlobalCSS from "./globalStyles/GlobalStyles.style";
import { Form } from "./features/form/Form";
import { UsersList } from "./pages/users/UsersList";
import { Routes, Route } from "react-router-dom";
import { UpdateForm } from "./pages/update/UpdateForm";

const App = () => {
  return (
    <div>
      <Theme>
        <GlobalCSS />
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/create" element={<Form />} />
          <Route path="/update/:id" element={<UpdateForm />} />
        </Routes>
        {/* <Form />
        <UsersList /> */}
      </Theme>
    </div>
  );
};

export default App;
