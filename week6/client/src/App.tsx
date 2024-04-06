import { useState, useEffect } from "react";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);

  const [latestMsg, setlatestMsg] = useState("");

  const [message, setMessage] = useState("");
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log(`Connected!`);
      setSocket(socket);
    };
    socket.onmessage = (msg) => {
      console.log(`Received: ${msg.data}`);
      setlatestMsg(msg.data);
    };

    //cleanup socket
    return () => {
      socket.close();
    };
  }, []);

  if (!socket) {
    return <div>Loading ... </div>;
  }

  return (
    <>
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          socket.send("send data");
        }}
      >
        Send
      </button>
    </>
  );
}

export default App;
