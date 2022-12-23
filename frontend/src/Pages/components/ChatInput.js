import { useState} from 'react';
import axios from 'axios';
import {RiSendPlane2Fill} from 'react-icons/ri';

const ChatInput = ({ user, clickedUser, getUserMessages, getClickedUsersMessages }) => {
    const [textArea, setTextArea] = useState("")
    const userId = user?.user_id
    const clickedUserId = clickedUser?.user_id

    const addMessage = async () => {
        const message = {
            timestamp: new Date().toISOString(),
            from_userId: userId,
            to_userId: clickedUserId,
            message: textArea
        }

        try {
          await axios.post('http://localhost:4000/message', { message })
          getUserMessages()
          getClickedUsersMessages()
          setTextArea("")
      } catch (error) {
          console.log(error)
      }
  }

    return (
        <div className="chat-input">
            <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)} placeholder={'Type Meesage here...'} />
            <button className="send-btn" onClick={addMessage}>Submit</button>
            <button className="mobile-btn" onClick={addMessage}>
                <RiSendPlane2Fill />
            </button>

        </div>
    )
}

export default ChatInput