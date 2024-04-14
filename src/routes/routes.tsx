import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SimpleLayout } from "../components";
import { SignUpScreen, SignInScreen } from "../screens";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<SimpleLayout />}>
        <Route path="/" element={<div>hi</div>} />
        <Route path="/sign-up" element={<SignUpScreen />} />
        <Route path="/sign-in" element={<SignInScreen />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
