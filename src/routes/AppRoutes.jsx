import { Routes, Route } from "react-router-dom";
import HomePageLayout from "../components/HomePageLayout";
// import List from "../components/BlogList";
// import SinglePage from "../components/SinglePage";
import NewBlog from "../components/NewBlog";
import NewSingle from "../components/NewSingle";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePageLayout />} />
    {/* <Route path="/blog" element={<List />} />
    <Route path="/blog/:name" element={<SinglePage />} /> */}
    <Route path="/blog" element={<NewBlog />} />
    <Route path="/blog/:name" element={<NewSingle />} />
  </Routes>
);

export default AppRoutes;
