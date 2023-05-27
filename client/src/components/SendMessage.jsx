import { useState } from "react";

const SendMessage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [reqMessage, setReqMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sets message sending bellow button and disables button
    setReqMessage("Sending...");
    setDisabled(true);

    try {
      const res = await fetch("http://localhost:8000/send", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseMessage = await res.json();
      setReqMessage(responseMessage);
    } catch (err) {
      // If error found, writes the error message below submit
      // button, and button becomes enabled again
      setReqMessage(err.message);
      setDisabled(false);
    }
  };

  return (
    <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          rows="4"
          placeholder="Enter your message"
          value={message}
          onChange={handleMessageChange}
          required
        ></textarea>
      </div>
      <div className="flex items-center justify-center flex-col">
        <button
          className="bg-green-500 disabled:bg-gray-500 hover:bg-green-600 hover:transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={disabled}
        >
          Submit
        </button>
        {reqMessage && <span>{reqMessage}</span>}
      </div>
    </form>
  );
};

export default SendMessage;
