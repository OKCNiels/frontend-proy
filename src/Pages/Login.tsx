import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { iniciarSession } from "../Services/Auth/Login";
import '../assets/css/bootstrap.min.css';
import '../assets/css/icons.min.css';
import '../assets/css/app.min.css';
import logoSM from '../assets/images/logo-sm.svg';
import AuthIMG from '../assets/images/auth-img.png';

// import '../assets/libs/bootstrap/js/bootstrap.bundle.min.js';
// import '../assets/libs/metismenujs/metismenujs.min.js';
// import '../assets/libs/simplebar/simplebar.min.js';
// import '../assets/libs/feather-icons/feather.min.js';
// import '../assets/js/pages/pass-addon.init.js';
{/*  */}

const Login = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();


    const onSubmit = async (data: object) => {
        let response = await iniciarSession(data);
        console.log(response.data);
        localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
        localStorage.setItem('token', JSON.stringify(response.data.token));
        navigate('/about-me')
    }
    return (
        <>
            <div className="auth-page d-flex align-items-center min-vh-100">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-xxl-3 col-lg-4 col-md-5">
                            <div className="d-flex flex-column h-100 py-5 px-4">
                                <div className="text-center text-muted mb-2">
                                    <div className="pb-3">
                                        <a href="index.html">
                                            <span className="logo-lg">
                                                <img src={logoSM} alt="" height="24" /> <span className="logo-txt">Vuesy</span>
                                            </span>
                                        </a>
                                        <p className="text-muted font-size-15 w-75 mx-auto mt-3 mb-0">User Experience & Interface Design Strategy Saas Solution</p>
                                    </div>
                                </div>

                                <div className="my-auto">
                                    <div className="p-3 text-center">
                                        <img src={AuthIMG} alt="" className="img-fluid" />
                                    </div>
                                </div>

                                <div className="mt-4 mt-md-5 text-center">
                                    <p className="mb-0">© <script>document.write(new Date().getFullYear())</script> Vuesy. Crafted with <i className="mdi mdi-heart text-danger"></i> by <a href="https://1.envato.market/themesdesign" target="_blank">Themesdesign</a></p>
                                </div>
                            </div>

                        </div>

                        <div className="col-xxl-9 col-lg-8 col-md-7">
                            <div className="auth-bg bg-light py-md-5 p-4 d-flex">
                                <div className="bg-overlay-gradient"></div>
                                <div className="row justify-content-center g-0 align-items-center w-100">
                                    <div className="col-xl-4 col-lg-8">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="px-3 py-3">
                                                    <div className="text-center">
                                                        <h5 className="mb-0">Welcome Back !</h5>
                                                        <p className="text-muted mt-2">Sign in to continue to Vuesy.</p>
                                                    </div>
                                                    <form className="mt-4 pt-2" onSubmit={handleSubmit(onSubmit)}>
                                                        <div className="form-floating form-floating-custom mb-3">
                                                            <input type="email" className="form-control" id="input-username" placeholder="Enter User Name" {...register('email')} required />
                                                            <label htmlFor="input-username">Username</label>
                                                            <div className="form-floating-icon">
                                                                <i className="uil uil-users-alt"></i>
                                                            </div>
                                                        </div>
                                                        <div className="form-floating form-floating-custom mb-3 auth-pass-inputgroup">
                                                            <input type="password" className="form-control" id="password-input" placeholder="Enter Password" {...register('password')} required />
                                                            <button type="button" className="btn btn-link position-absolute h-100 end-0 top-0" id="password-addon">
                                                                <i className="mdi mdi-eye-outline font-size-18 text-muted"></i>
                                                            </button>
                                                            <label htmlFor="password-input">Password</label>
                                                            <div className="form-floating-icon">
                                                                <i className="uil uil-padlock"></i>
                                                            </div>
                                                        </div>
                                                        <div className="form-check form-check-primary font-size-16 py-1">
                                                            <input className="form-check-input" type="checkbox" id="remember-check" />
                                                            <div className="float-end">
                                                                <a href="auth-resetpassword-basic.html" className="text-muted text-decoration-underline font-size-14">Forgot your password?</a>
                                                            </div>
                                                            <label className="form-check-label font-size-14" htmlFor="remember-check">
                                                                Remember me
                                                            </label>
                                                        </div>

                                                        <div className="mt-3">
                                                            <button className="btn btn-primary w-100" type="submit">Log In</button>
                                                        </div>

                                                        <div className="mt-4 text-center">
                                                            <div className="signin-other-title">
                                                                <h5 className="font-size-15 mb-4 text-muted fw-medium">- Or you can join with -</h5>
                                                            </div>

                                                            <div className="d-flex gap-2">
                                                                <button type="button" className="btn btn-soft-primary waves-effect waves-light w-100">
                                                                    <i className="bx bxl-facebook font-size-16 align-middle"></i>
                                                                </button>
                                                                <button type="button" className="btn btn-soft-info waves-effect waves-light w-100">
                                                                    <i className="bx bxl-linkedin font-size-16 align-middle"></i>
                                                                </button>
                                                                <button type="button" className="btn btn-soft-danger waves-effect waves-light w-100">
                                                                    <i className="bx bxl-google font-size-16 align-middle"></i>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="mt-4 pt-3 text-center">
                                                            <p className="text-muted mb-0">Don't have an account ? <a href="auth-signup-cover.html" className="fw-semibold text-decoration-underline"> Signup Now </a> </p>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script src="../assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="../assets/libs/metismenujs/metismenujs.min.js"></script>
            <script src="../assets/libs/simplebar/simplebar.min.js"></script>
            <script src="../assets/libs/feather-icons/feather.min.js"></script>

            <script src="../assets/js/pages/pass-addon.init.js"></script>
        </>
    )
}

export default Login