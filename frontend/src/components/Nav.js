import colorLogo from "../images/color-logo-tinder.png";
import logo from '../images/tinder_logo_white.png';



const Nav = ({minimal,  setShowModal, showModal, setIsSignUp}) => {

  const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
  }

  const authToken = false

  return (
    <nav>
     <div className="logo-container">
      <img className='logo' src={minimal ? colorLogo : logo } alt="logo" />
     </div>

     {!authToken && <button 
     className="nav-btn"
     onClick={handleClick}
     disabled={showModal}
     >
      Log in</button>}
    </nav>
  )

}

export default Nav;