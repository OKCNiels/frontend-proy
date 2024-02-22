import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = ( data ) => {
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/about-me')
    }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="Email" className="form-label">Email</label>
                <input type="email" className="form-control" {...register('email')} id="Email" placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" {...register('password')} id="password" placeholder="*******" required />
            </div>
            <button className="btn btn-success btn-sm" type="submit" >Ingresar</button>
        </form>
    </>
  )
}

export default Login