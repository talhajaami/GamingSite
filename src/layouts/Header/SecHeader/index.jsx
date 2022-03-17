import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/img/icons/logo.png'

const SecHeader = ({MenuInfo }) => {
  return (
    <nav className="navbar navbar-expand-lg" id="banner">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand navbar-logo " href="/"><span><img draggable="false" src={Logo} alt="logo" /></span></a>
        {/* Toggler/collapsibe Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="nav-item">
                    <NavLink className="nav-link" to='/'>Home</NavLink>
              </div>
            {MenuInfo && MenuInfo.map((item , key) => (
              <li className="nav-item" key={key}>
                <a className="nav-link" href={item.path}>{item.nameLink}</a>
              </li>
            ))}
            {/* <li className="lh-55px"><a href="#" className="btn btn-danger login-btn ml-50">Sign Up</a></li> */}
            <li className="lh-55px"><a href="/" className="btn btn-danger login-btn mx-1">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SecHeader
