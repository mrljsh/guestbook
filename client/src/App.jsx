import "./App.css";
import Messages from "./components/Messages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SendMessage from "./components/SendMessage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Messages />,
  },
  {
    path: "send",
    element: <SendMessage />,
  },
]);

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center py-6">Guestbook</h1>
      <div className="flex w-full justify-center">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
