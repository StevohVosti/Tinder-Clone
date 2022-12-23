import ChatHeader from '../components/ChatHeader.js'
import MatchesDisplay from '../components/MatchesDisplay.js'
import ChatDisplay from '../components/ChatDisplay.js'
import { useState } from 'react'


const ChatContainer = ({user}) => {

  const [clickedUser, setClickedUser] = useState(null)
  return (
    <>
    <div className="chat-container">
          <ChatHeader user={user}/>

              <div>
                <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
                <button className="option" disabled={!clickedUser}>Chat</button>
              </div>

          {!clickedUser && <MatchesDisplay matches={user.matches} setClickedUser={setClickedUser}/>}

          {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser}/>}

    </div>

    {/* <div className='mobile-btn'>
    <Link to='/MatchesDisplay'>
      <MdStarRate color='black' fontSize='30px'/>
    </Link>
    <Link to='/ChatDisplay'>
      <BsChatDotsFill color='black' fontSize='30px'/>
    </Link>

    </div> */}

  
   
    </>
  )
}

export default ChatContainer;