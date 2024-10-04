import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { User } from "./pages/user";
import { MainLayout } from "./layout/main-layout";
import { UserDetail } from "./pages/user-detail";
import ProfileLayout from "./layout/profile-layout";
import { Profile } from "./pages/profile";
import ChangeAddres from "./pages/profile/change-addres";
import { CreateAddres } from "./pages/profile/create-addres";
import { ChangeProfile } from "./pages/profile/change-profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="user" element={<User />} />

          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="change-addres" element={<ChangeAddres />} />
            <Route path="create-addres" element={<CreateAddres />} />
            <Route path="change-profile"element={<ChangeProfile/>} />
          </Route>

          <Route path="user/detail/:userId" element={<UserDetail />} />
          <Route path="*" element={<h1>Pages not fount !!!</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
