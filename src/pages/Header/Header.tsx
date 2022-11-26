import { NavBar } from '../../components/NavBar/NavBar'
import './Header.scss'
import logo from '../../assets/images/logo.png'

export const Header = () => {
  return(
    <header>

      <img src={logo} alt=""/>
     <NavBar/>
      <button className="btn sign-up">Hello, sign up</button>
      <i className="fa-solid fa-bars"></i>

  </header>
  )
}