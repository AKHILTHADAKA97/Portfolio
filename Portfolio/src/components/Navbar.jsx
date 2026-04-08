
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<nav>
<div className="container">
  <div className="row">
    <div className="col-lg-4">
      <div className="portlogo porttext">
      <h3 className="logo">My Portfolio</h3>
      </div>

    </div>
    <div className="col-lg-8">
      <div className="navbarlist">
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/work">Work</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/letstart" className="btn">Let's Talk</Link></li>
      </ul>
      </div>
    </div>
  </div>
</div>

</nav>
  )
}

export default Navbar
