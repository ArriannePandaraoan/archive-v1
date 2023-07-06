import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import HomePage from "./components/Homepage";
import AboutPage from "./components/Aboutpage";
import CreateContent from "./components/CreateContent";
import Login from "./components/Login";
import Register from "./components/Register";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/create-content" element={<CreateContent />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/post/:id" element={<BlogPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/post/:id",
//         element: <BlogPage />,
//       },
//       {
//         path: "/write",
//         element: <Write />,
//       },
//     ],
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);

export default App;
