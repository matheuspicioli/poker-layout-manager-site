export default function Navbar() {
  const downloadText: string = 'Download'

  return (
    <>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <p className="navbar-brand p-0">
            <h1 className="m-0">
              {/* <i className="fa fa-user-tie me-2"></i> */}
              Poker layout manager
            </h1>
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              {/* <p className="nav-item nav-link active">
                Home
              </p>
              <p className="nav-item nav-link">
                About
              </p>
              <p className="nav-item nav-link">
                Services
              </p>
              {/* <div className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Blog
                </p>
                <div className="dropdown-menu m-0">
                  <p className="dropdown-item">
                    Blog Grid
                  </p>
                  <p className="dropdown-item">
                    Blog Detail
                  </p>
                </div>
              </div> */}
              {/* <div className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </p>
                <div className="dropdown-menu m-0">
                  <p className="dropdown-item">
                    Pricing Plan
                  </p>
                  <p className="dropdown-item">
                    Our features
                  </p>
                  <p className="dropdown-item">
                    Team Members
                  </p>
                  <p className="dropdown-item">
                    Testimonial
                  </p>
                  <p className="dropdown-item">
                    Free Quote
                  </p>
                </div>
              </div>
              <p className="nav-item nav-link">
                Contact
              </p>*/}
            </div>
            {/* <button
              type="button"
              className="btn text-primary ms-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search"></i>
            </button> */}
            <p
              className="btn btn-primary py-2 px-4 ms-3"
            >
              {downloadText}
            </p>
          </div>
        </nav>

        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Poker layout solution
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Organize your screens
                  </h1>
                  <p
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    {downloadText}
                  </p>
                  {/* <p
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Free quote
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
