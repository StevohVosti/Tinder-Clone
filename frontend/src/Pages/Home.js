import { useState } from "react";
import Nav from "../components/Nav.js";
import AuthModal from "../components/AuthModal.js";

const Home = () => {

  const [showModal, setShowModal ] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const authToken = false

  const handleClick = () => {
    console.log("Clicked")
    setShowModal(true)
    setIsSignUp(true)
  }

  return (
  <>
  <div className="overlay">
    <Nav minimal={false} 
    setShowModal={setShowModal} 
    showModal={showModal}
    setIsSignUp={ setIsSignUp}
    />
        <div className="home">
            <h1 className="primary-title">Swipe Right®</h1>
            <button className="primary-button" onClick={handleClick}>
            {authToken? "SignOut" : "Create an Account"}
            </button>

            {showModal && (
              <AuthModal setShowModal={setShowModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp}/>
            )}
        </div>
  </div>      
  </>
  )
}

export default Home;