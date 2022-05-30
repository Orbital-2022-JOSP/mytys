import Link from "next/link"

const RegisterPage = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 mx-auto">
                    <main className="form-signin w-100 m-auto">
                        <form>
                            <h1 className="h3 mb-3 fw-normal">User Registration</h1>

                            <div className="form-floating mb-3">
                                <label htmlFor="floatingInput">Username</label>
                                <input type="text" className="form-control" id="floatingInput" placeholder="jsmith" />

                            </div>
                            <div className="form-floating mb-3">
                                <label htmlFor="floatingPassword">Password</label>
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />

                            </div>

                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <div className="text-center">
                                <Link href="/api/auth/signin">
                                    <a className="w-50 btn btn-lg btn-primary">Register</a>
                                </Link>
                                {/* <button className="w-50 btn btn-lg btn-primary" onClick={() => window.location.replace('/api/auth/signin')}>Register</button> */}
                            </div>

                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage