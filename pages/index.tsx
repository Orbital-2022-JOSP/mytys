import { useSession } from "next-auth/react";
import {useRouter} from "next/router";
import React from "react";
import { Blog } from "../components/Blog/Blog";
import { FAQ } from "../components/FAQ/FAQ";
import { Features } from "../components/Features/Features";
import { Hero } from '../components/Hero/Hero';
import { Hero3 } from "../components/Hero3/Hero3";
import Layout from "../components/Layout";
import { Stats } from "../components/Stats/Stats";
import { Steps } from "../components/Steps/Steps";
import { QuestionAttempt } from '../components/QuestionAttempt/QuestionAttempt';


const Home: React.FC = () => {
    const router = useRouter();
    const isActive: (pathname: string) => boolean = (pathname) =>
        router.pathname === pathname;

    const { data: session, status } = useSession();
    console.log(session)

    return (
        <Layout>
            <Hero3 />
            <Hero />
            <Features />
            <Steps />
            <Stats />
            <Blog />
            <FAQ />
            <QuestionAttempt />
            {/* <div className="container">
                <header className="sticky-top">
                    <div className="row justify-content-between align-items-center bg-dark" style={{
                        backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.webp')`,
                        height: "15vh", borderRadius: "10px", backgroundSize: "cover"
                    }}>
                        <div className="col-4">
                        </div>
                        <div className="col-4 text-center">
                            <h1 className="text-white bg-image font-weight-bold" id="title">MyTYS</h1>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            {
                                session
                                    ?
                                    <>
                                        <a className="btn btn-sm btn-outline-light mr-3" href="#">{session.user.name}</a>
                                        <Link href="/api/auth/signout">
                                            <a data-active={isActive("/signout")} className="btn btn-sm btn-outline-light text-white">Log out</a>
                                        </Link>
                                    </>
                                    : <>
                                        <Link href="/register">
                                            <a data-active={isActive("/register")} className="btn btn-sm btn-outline-light mr-3">Register</a>
                                        </Link>
                                        <Link href="/api/auth/signin">
                                            <a data-active={isActive("/signup")} className="btn btn-sm btn-outline-light">Log in</a>
                                        </Link>
                                    </>
                            }
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#ffffff" }}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav mx-auto">
                                <a className="p-2 text-muted" href="#">Home</a>
                                <a className="p-2 text-muted" href="#">Courses </a>
                                <a className="p-2 text-muted" href="#about">About</a>
                                <a className="p-2 text-muted" href="#">Contact Us</a>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron p-3 p-md-5"
                            style={{
                                backgroundImage: `url('https://assets.teenvogue.com/photos/5e6bffbbdee1770008c6d9bd/16:9/w_2560%2Cc_limit/GettyImages-577674005.jpg')`,
                                backgroundSize: "cover",
                                borderRadius: "10px"
                            }}>
                            <div className="col-12" style={{ backgroundColor: "#291212" }}>
                                <h1 className="display-4 text-white">Tuition
                                    is in your hands</h1>
                                <p className="lead text-light my-3">The MyTYS app provides a simple and convenient way to experience
                                    the benefits of private
                                    tuition</p>
                                <a className="btn btn-sm btn-outline-light" href="#">Enroll for free</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-12 col-md-6">
                        <div className="card mb-4 box-shadow" style={{ borderRadius: "10px" }}>
                            <img className="card-img-top img-fluid"
                                src="images/cheerful-girl-seating-at-class-table-with-book-open.jpg"
                                alt="Card image cap" style={{ borderRadius: "10px" }} />
                            <div className="card-body d-flex flex-column align-items-start">
                                <h3 className="mb-2 text-info font-weight-bold">
                                    For Students
                                </h3>
                                <p className="card-text">Want to excel in your studies but not sure where to start? Take a look at
                                    our courses and academic roadmap here</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="card mb-4 box-shadow" style={{ borderRadius: "10px" }}>
                            <img className="card-img-top img-fluid" style={{ borderRadius: "10px" }}
                                src="https://www.cvexpres.com/teaching-jobs-schools/wp-content/uploads/2021/03/convocatoria-bolsa-docente-maestros-infantil-y-primaria-2.jpg"
                                alt="Card image cap" />
                            <div className="card-body d-flex flex-column align-items-start">
                                <h3 className="mb-2 text-warning font-weight-bold">
                                    For Tutors
                                </h3>
                                <p className="card-text">Looking to inspire and contribute your teaching skills, but not sure how to
                                    start? Take a look at what our current tutors say</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div >
                </div >

                <div className="row">
                    <div className="col-md-4 col-lg-4 w-100 h-50 mx-auto">
                        <div id="about" className="p-3 mb-5" style={{
                            backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.webp')`,
                            height: "40vh", borderRadius: "10px", backgroundSize: "cover"
                        }}>
                            <h4 className="text-light font-weight-bold">About</h4>
                            <p className="lead text-light my-4"><span className="font-italic">Your news fast and accurate!</span> At
                                News, we take the
                                news very
                                seriously. We guarantee real news from certified, experience journalists.</p>
                        </div>
                    </div>

                    <div className="col-md-8 col-lg-8 w-100 h-25 mx-auto">
                        <div id="bootsNstrapExamples" className="carousel slide" data-ride="carousel" style={{ borderRadius: "10px" }}>
                            <ol className="carousel-indicators">
                                <li data-target="#bootsNstrapExamples" data-slide-to="0" className="active"></li>
                                <li data-target="#bootsNstrapExamples" data-slide-to="1"></li>
                                <li data-target="#bootsNstrapExamples" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/images/MYTYS_findpractices.jpg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/MYTYS_receivefeedback.jpg" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/MYTYS_savecosts.jpg" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#bootsNstrapExamples" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#bootsNstrapExamples" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div >
                </div >
            </div> */}
            {/* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous">
            </script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
                integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous">
            </script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
                integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous">
            </script> */}
            {/* <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style> */}
        </Layout >
    );
};

export default Home;