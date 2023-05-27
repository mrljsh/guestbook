const Message = ({ data }) => {
  const { name, message, time } = data;

  if (data) {
    return (
      <div>
        <p>{name}</p>
        <p>{message}</p>
        <span>{time}</span>
      </div>
    );
  }
};

export default Message;
