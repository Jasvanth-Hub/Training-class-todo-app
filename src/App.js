import Counter from "./components/Counter";
import Todo from "./components/Todo";
import ToggleTheme from "./components/ToggleTheme";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/Navbar";
import Cards from "./components/cards/Cards";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/todo",
    element:<Todo/>,
  },
  {
    path: "/cards",
    element:<Cards/>,
  },
  {
    path: "/counter",
    element: <Counter/>,
  },
  {
    path: "/toggleTheme",
    element: <ToggleTheme/>,
  },
]);



function App() {
  return (
    <div>
      <NavbarComponent/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
