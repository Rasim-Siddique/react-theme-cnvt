import { Link, useLocation } from "react-router-dom"



const Navbar=()=>{
  const location=useLocation()
  const classes = location.pathname === '/' ? 'nav__dropdown active' : 'nav__dropdown';
  const classesPro = location.pathname === '/search-result' ? 'nav__dropdown active' : 'nav__dropdown';
  // const classesPages = location.pathname === ('/about-us' ||  '/contact-us' || '/single-product' || '/shortcodes' || '/categories') ? 'nav__dropdown active' : 'nav__dropdown';
  // const classesContact = location.pathname === '/contact-us' ? 'nav__dropdown active' : 'nav__dropdown';
  // const classessingleProduct = location.pathname === '/single-product' ? 'nav__dropdown active' : 'nav__dropdown';
  // const classessShortCode = location.pathname === '/shortcodes' ? 'nav__dropdown active' : 'nav__dropdown';
  // const classessCategories = location.pathname === '/categories' ? 'nav__dropdown active' : 'nav__dropdown';



  

  
 
    return(
        <>
      

<div className="top-bar d-none d-lg-block">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <ul className="top-menu">
          <li><Link to="/about-us">About</Link></li>
          <li><a href="#">Advertise</a></li>
          <li><Link to="/contact-us">Contact</Link></li>

        </ul>
      </div>

      <div className="col-lg-6">
        <div className="socials nav__socials socials--nobase socials--white justify-content-end">
          <a className="social social-facebook" href="#" target="_blank" aria-label="facebook">
            <i className="ui-facebook"></i>
          </a>
          <a className="social social-twitter" href="#" target="_blank" aria-label="twitter">
            <i className="ui-twitter"></i>
          </a>
          <a className="social social-google-plus" href="#" target="_blank" aria-label="google">
            <i className="ui-google"></i>
          </a>
          <a className="social social-youtube" href="#" target="_blank" aria-label="youtube">
            <i className="ui-youtube"></i>
          </a>
          <a className="social social-instagram" href="#" target="_blank" aria-label="instagram">
            <i className="ui-instagram"></i>
          </a>
        </div>
      </div>

    </div>
  </div>
</div>

<header className="nav">

  <div className="nav__holder nav--sticky">
    <div className="container relative">
      <div className="flex-parent">

       

        <Link to="/" className="logo">
          <img className="logo__img" src="/img/logo_default.png" alt="logo" />
        </Link>

        <nav className="flex-child nav__wrap d-none d-lg-block">
          <ul className="nav__menu">

            <li
              
            className={classes}>
              <Link to="/">Home</Link>
              
            </li>

            <li className={classesPro} style={{display:'flex'}}>
              <Link to="/search-result">Products</Link>
          
            </li>
            <li className="nav__dropdown">
              <a href="#">Pages</a>
              <ul className="nav__dropdown-menu">
                <li><Link to="/about-us">About</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>

                <li><Link to="/search-result">Search Results</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/404">404</Link></li>

              </ul>
            </li>

            <li className="nav__dropdown">
              <a href="#">Features</a>
              <ul className="nav__dropdown-menu">
                <li><Link to="/shortcodes">Shortcodes</Link></li>
                <li className="nav__dropdown">
                  <Link to="/single-product">Single Product</Link>
              
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Purchase</a>
            </li>


          </ul>
        </nav>

        <div className="nav__right">

          <div className="nav__right-item nav__search">
            <a href="#" className="nav__search-trigger" id="nav__search-trigger">
              <i className="ui-search nav__search-trigger-icon"></i>
            </a>
            <div className="nav__search-box" id="nav__search-box">
              <form className="nav__search-form">
                <input type="text" placeholder="Search an article" className="nav__search-input" />
                <button type="submit" className="search-button btn btn-lg btn-color btn-button">
                  <i className="ui-search nav__search-icon"></i>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</header>

        </>
    )


}

export default Navbar