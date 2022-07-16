import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../redux/authSlice/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: 'onChange'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    } else {
      console.log('Не удалось авторизоваться');
    }
  }

  if (isAuth){ 
    navigate("/", { replace: true });;
  }



  return (
    <div class="hero min-h-screen bg-base ">
      <div class="hero-content flex-col lg:flex-col">
        <div class="flex flex-col align-middle justify-center text-center lg:text-left max-w-[600px]">
          <h1 class="text-5xl font-bold text-center">Login now!</h1>
          <p class="py-6 text-center">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                error={Boolean(errors.email?.message)}
                helperText={errors.email?.message}
                {...register('email', {required: 'Укажите почту'})}
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Password"
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
                {...register('password', {required: 'Enter your password'})}
                class="input input-bordered"
              />
              <label class="label"></label>
            </div>
            <div class="form-control mt-6">
              <button 
              class="btn btn-primary"
              onClick={handleSubmit(onSubmit)}
              >
                Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
