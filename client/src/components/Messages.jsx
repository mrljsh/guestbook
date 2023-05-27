import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("http://localhost:8000/messages", {
          method: "GET",
        });
        setMessages(await res.json());
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div className="px-6 flex flex-col items-center">
      <Link
        to="/send"
        className="bg-green-500 hover:bg-green-600 hover:transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Leave a feedback
      </Link>
      {messages &&
        messages.map((message, index) => (
          <Message data={message} key={index} />
        ))}
    </div>
  );
};

export default Messages;
