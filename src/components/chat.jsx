import React from 'react'
import { useState } from 'react'
import '../css/Chat.css'

const Chat = () => {
    const [messages, setMessages]= useState([])
    const [inputMsg, setInputMsg] = useState('')

    const ws = new WebSocket(`ws://localhost:3000`);

const generateDate = () => {
  return new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
};

//const log = document.getElementById("log");
const inputMessage = (e) =>{
    setInputMsg(e.target.value);
 
}
// Messages sent by me
const sendMessage = () => {
  ws.send(inputMessage);
  //log.innerHTML += generateDate() + " You: " + text + "<br>";
};

/* ws.onmessage = (event) => {
  log.innerHTML += generateDate() + " " + event.data + "<br>";
}; */

ws.onerror = (error) => {
  console.log("Server error message: ", error.message);
};

return(
    <div className="home-view__side-right"> 
    <div id="log">
       { generateDate() + " You: " + inputMessage + "<br>"}
    </div>
    <div id="controls">
      <input type="text" placeholder="Your message here" id="text" onChange={inputMessage}/>
      <button onClick={sendMessage}>Send</button>
    </div>
 
  </div>
)
    //let newArray=[]
    /* const inputMessage = (e) =>{
        setInputMsg(e.target.value);
     
    }
    const updateMessage = (event) =>{
        event.preventDefault();
       const newArray = {
            id: messages.length,
            text: inputMsg
        }
        let listMessage= messages;
        listMessage.push(newArray)
        setMessages(listMessage)
        setInputMsg('')
    }
    
    console.log(messages)
   
  return(
     <div className="home-view__side-right"> 
    <div className="card">
        <div className="card-body">
            <ul>
                {
                    messages.map((elem) => 
                         <li key={elem.id}>{elem.text}</li>
                    )
                }
            </ul>
        </div>
        <div  className="card-footer">
            <input type="text" placeholder="Escriba un mensaje" onChange={inputMessage} />
            <button onClick={updateMessage}>Enviar</button>
        </div>
        <h1>Hola</h1>
        
    </div>
    </div>
  ) */
}
export default Chat