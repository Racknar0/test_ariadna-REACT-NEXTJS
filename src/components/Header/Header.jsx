import './Header.scss';

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src='/assets/logo.png' alt="logo" width="30" height="24" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#">HOME</a>
                        <a className="nav-link" aria-current="page" href="#">CATEGORIES</a>
                        <a className="nav-link" aria-current="page" href="#">MY FAVORITES</a>
                        <a className="nav-link sign_in" aria-current="page" href="#">SIGN IN</a>
                    </div>
                </div>
            </div>
        </nav>

        

    </header>
  )
}

export default Header