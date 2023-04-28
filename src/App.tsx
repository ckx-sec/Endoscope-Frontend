import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { baselightTheme } from "./theme/DefaultColors";
import Root from "./routes/Root";
import Overview from "./views/Overview/Overview";
import { HelmetProvider } from "react-helmet-async";
import Scanner from "./views/Scanner/Scanner";
import Describer from "./views/Describer/Describer";
import Detector from "./views/Detector/Detector";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/describer",
        element: <Describer />,
      },
      {
        path: "/scanner",
        element: <Scanner />,
      },
      {
        path: "/detector",
        element: <Detector />,
      },
      {
        path: "/evaluator",
        element: <Detector />,
      },
    ],
  }
]);

function App() {
  const theme = baselightTheme;
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
