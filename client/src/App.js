import { Theme } from "./Theme";
import GlobalCSS from "./globalStyles/GlobalStyles.style";
import { RegistrationPage } from "./pages/registrationPage/RegistrationPage";
import { EditPage } from "./pages/editPage/EditPage";
import { Home } from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Theme>
        <GlobalCSS />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<RegistrationPage />} />
          <Route path="/update/:id" element={<EditPage />} />
        </Routes>
      </Theme>
    </div>
  );
};

export default App;
