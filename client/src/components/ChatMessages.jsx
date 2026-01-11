const ChatMessages = ({ messages }) => {
  return (
    <div className="h-[400px] overflow-y-auto p-4 space-y-2">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`px-3 py-2 rounded-md w-fit max-w-[70%]
            ${msg.sender === "me"
              ? "bg-indigo-600 text-white ml-auto"
              : "bg-gray-200 text-black"
            }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
