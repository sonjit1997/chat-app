import React, { useState, useEffect } from "react";
import { getDatabase, onChildAdded, push, ref, set } from "firebase/database";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [chats, setChat] = useState([]);
  const [msg, setMsg] = useState("");

  const db = getDatabase();
  const chatListRef = ref(db, "chats");
  const updateHeight = () => {
    const el = document.getElementById("chat");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  };

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChat((chats) => [...chats, data.val()]);
      setTimeout(() => {
        updateHeight();
      }, 100);
    });
  }, [0]);

  const senChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, {
      name,
      message: msg,
    });
    setMsg("");
  };

  return (
    < div className="p-0 m-0 bg-light">
      {name ? null : (
        <div>
          <img
            className="card-img"
            src="https://s3.amazonaws.com/ceblog/wp-content/uploads/2018/09/10131158/live-chat-4.jpg"
            alt="Home page background"
            height="741.9px"
            width="1536px"
          />

          <div className="card-img-overlay">
            <div className="container">
              <div className=" d-flex justify-content-center align-items-center">
                <input
                  className="inputt"
                  type="texts"
                  placeholder="Enter your name"
                  onBlur={(e) => setName(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>
      )}

      {name ? (
        <div className="main" >
         
          <div className="chat-container p-0 m-0" id="chat">
            {chats.map((c, index) => (
              <div
                key={index}
                className={`container ${c.name === name ? "me" : ""}`}
              >
                <p className="chatbox">
                  <strong>{c.name} </strong>
                  <span> {c.message}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="btm">
            <input
              type="text"
              placeholder="Enter your massege"
              value={msg}
              onInput={(e) => setMsg(e.target.value)}
            ></input>
            <button onClick={(e) => senChat()}>Send</button>
          </div>{" "}
        </div>
      ) : null}
    </div>
  );
}

export default App;
