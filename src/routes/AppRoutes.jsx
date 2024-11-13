import { Routes, Route } from "react-router-dom";
import HomePageLayout from "../components/HomePageLayout";
import NewBlog from "../components/NewBlog";
import NewSingle from "../components/NewSingle";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePageLayout />} />
    <Route path="/blog" element={<NewBlog />} />
    <Route path="/blog/:name" element={<NewSingle />} />
  </Routes>
);

export default AppRoutes;
