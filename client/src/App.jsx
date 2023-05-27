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
      <h1 className="text-3xl font-bold text-center my-4">Guestbook</h1>
      <h2 className="text-center text-xl my-4">
        See what people wrote about us and feel free to leave a message.
      </h2>
      <div className="flex w-full justify-center flex-col">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
