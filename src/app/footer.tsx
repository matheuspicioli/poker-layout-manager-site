export default function Footer() {

  return <>
  <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 col-md-6 footer-about">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                        <p className="navbar-brand">
                            <h1 className="m-0 text-white">Poker layout manager</h1>
                        </p>
                        <p className="mt-3 mb-4">Organize your screens to 100% focus on grind</p>
                        {/* <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                <button className="btn btn-dark">Sign Up</button>
                            </div>
                        </form> */}
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-12 pt-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Contact</h3>
                            </div>
                            {/* <div className="d-flex mb-2">
                                <i className="bi bi-geo-alt text-primary me-2"></i>
                                <p className="mb-0">123 Street, New York, USA</p>
                            </div> */}
                            <div className="d-flex mb-2">
                                <i className="bi bi-envelope-open text-primary me-2"></i>
                                <p className="mb-0">contact@pokerlayoutmanager.com</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-telephone text-primary me-2"></i>
                                <p className="mb-0">+55 17 98206-4024</p>
                            </div>
                            {/* <div className="d-flex mt-4">
                                <p className="btn btn-primary btn-square me-2"><i className="fab fa-twitter fw-normal"></i></p>
                                <p className="btn btn-primary btn-square me-2"><i className="fab fa-facebook-f fw-normal"></i></p>
                                <p className="btn btn-primary btn-square me-2"><i className="fab fa-linkedin-in fw-normal"></i></p>
                                <p className="btn btn-primary btn-square"><i className="fab fa-instagram fw-normal"></i></p>
                            </div> */}
                        </div>
                        {/* <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Quick Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <p className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2"></i>Home</p>
                                <p className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</p>
                                <p className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</p>
                                <p className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</p>
                                <p className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</p>
                                <p className="text-light"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Popular Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <p className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2"></i>Home</p>
                                <p className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</p>
                                <p className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</p>
                                <p className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</p>
                                <p className="text-light mb-2"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</p>
                                <p className="text-light"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid text-white" style={{background: "#061429"}}>
        <div className="container text-center">
            <div className="row justify-content-end">
                <div className="col-lg-8 col-md-6">
                    <div className="d-flex align-items-center justify-content-center" style={{height: "75px"}}>
                        <p className="mb-0 text-white border-bottom">
                            &copy;Poker layout manager.
                            <p>All Rights Reserved.</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}