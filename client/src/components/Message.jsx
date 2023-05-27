const Message = ({ data }) => {
  const { name, message, time } = data;

  return (
    <div className="py-6 px-4 my-6 bg-white rounded-xl shadow-lg w-full lg:w-1/2">
      <p className="text-2xl font-bold">{name}</p>
      <p className="text-xl">{message}</p>
      <span className="text-sm text-gray-700">{time}</span>
    </div>
  );
};

export default Message;
