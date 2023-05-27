import "./App.css";
import Messages from "./components/Messages";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center py-6">Guestbook</h1>
      <Messages />
    </>
  );
};

export default App;
