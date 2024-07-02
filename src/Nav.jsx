import ".././node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FaBars } from "react-icons/fa";

const Nav = () => {
  function open() {
    
  }
  return (
    <>
      <section className="main_nav">
        <div className="container d-flex justify-content-between align-items-center height">
            <div className="logo">
                <p className="logo_para">LOGO</p>
            </div>
            <div className="hamburger" onClick={open}>
              <FaBars className="icon" />
            </div>
            <div className="nav_link">
                <ul>
                    <li className="active">Frontend</li>
                    <li>Backend</li>
                    <li>Interview</li>
                    <li>Project</li>
                    <li>Login</li>
                    <li>SignIn</li>
                </ul>
            </div>
            <div className="login_sigin">
                <img src="https://assets.leetcode.com/users/Pqsci1I0oB/avatar_1719493807.png" alt="" className="login_sigin_img"/>
            </div>
            </div>
      </section>
    </>
  )
}

export default Nav
