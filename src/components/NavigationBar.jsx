import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
<nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
  
  <div className="container-fluid">
     <Link className="navbar-brand" to="/">Book Finder</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
              <Link className="nav-link" to="/">Explore</Link></li>
       <li className="nav-item">
        <Link className="nav-link" to="/favorites">Reading List</Link></li>
        </ul>   
    </div>  
    </div>      
</nav>      
    )   
}

export default NavigationBar