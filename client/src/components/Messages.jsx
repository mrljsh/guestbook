import { useEffect, useState } from "react";

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
  }, [messages]);
};

export default Messages;
