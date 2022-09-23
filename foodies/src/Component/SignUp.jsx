import React,{ useState, useEffect } from 'react';

const SignUp = () => {

    const [ userdata, setFormData] = useState({

        id: new Date().getTime().toString(),
        name: "",
        email: "",
        password: "",
        password2:"",

    });

   

    function FormData(e) {

        setFormData({
              ...userdata,
              [e.target.name]: e.target.value,
              id: new Date().getTime().toString(),
        });

    }

    useEffect(() => {
       console.log("here is the value for : ", userdata)
    }, [userdata]);

    console.log(userdata);

    return (
      <div>
            <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div className="col-lg-6 px-5 text-start">
                <small><i className="fa fa-map-marker-alt me-2" />Narol, Ahmedabad, Gujarat</small>
                <small className="ms-4"><i className="fa fa-envelope me-2" />shahdhaval201@gmail.com</small>
            </div>
            <div className="col-lg-6 px-5 text-end">
                <small>Follow us:</small>
                <a className="text-body ms-3" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="text-body ms-3" href="#"><i className="fab fa-twitter" /></a>
                <a className="text-body ms-3" href="#"><i className="fab fa-linkedin-in" /></a>
                <a className="text-body ms-3" href="#"><i className="fab fa-instagram" /></a>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="fw-bold text-primary m-0">F<span className="text-secondary">oo</span>dy</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
            </button>
            </nav>
            </div>

            <div className="container-xxl py-6">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                <h1 className="display-5 mb-3">Sign Up</h1>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-5 justify-content-center">
                {/* <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5">
                        <h5 className="text-white">Call Us</h5>
                        <p className="mb-5"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                        <h5 className="text-white">Email Us</h5>
                        <p className="mb-5"><i className="fa fa-envelope me-3" />info@example.com</p>
                        <h5 className="text-white">Office Address</h5>
                        <p className="mb-5"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                        <h5 className="text-white">Follow Us</h5>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter" /></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube" /></a>
                            <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                </div> */}
                <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    <form>
                        <div className="row g-3">
                            <div className="col-12 ">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name="name" id="name" value={userdata.name} onChange={FormData} placeHolder="Your Name" />
                                    <label htmlFor="name">Enter Your Name</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="email" className="form-control" name="email" id="email" value={userdata.email} onChange={FormData} placeHolder="Your Email" />
                                    <label htmlFor="email">Enter Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" name="password" id="password" value={userdata.password} onChange={FormData} placeHolder="Enter Your Password" />
                                    <label htmlFor="password">Enter Your Password</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="password2" className="form-control" name="password2" id="password2" value={userdata.password2} onChange={FormData} placeHolder="Enter Your Confirm Password" />
                                    <label htmlFor="password2">Enter Your Confirm Password</label>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 200 }} />
                                    <label htmlFor="message">Message</label>
                                </div> */}
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div></div></div> </div>
                <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h1 className="fw-bold text-primary mb-4">F<span className="text-secondary">oo</span>dy</h1>
                    <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter" /></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f" /></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube" /></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in" /></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Address</h4>
                    <p><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                    <p><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                    <p><i className="fa fa-envelope me-3" />info@example.com</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeHolder="Your email" />
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        © <a href="#">Your Site Name</a>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                          Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                        <br />Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>
    </div>         
               
    </div>
  
    );
}

export default SignUp;
