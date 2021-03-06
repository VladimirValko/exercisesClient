import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, fetchRegister } from '../redux/authSlice/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export const Registration = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit, setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
      navigate("/", { replace: true });
    } else {
      console.log("Somthng goes wrong");
    }
  };

  
  return (

    <div class="hero min-h-screen bg-base max-w-[1440px] mx-auto ">
      <div class="hero-content flex-col lg:flex-col">
        <div class="flex flex-col align-middle justify-center text-center lg:text-left max-w-[600px]">
          <h1 class="text-5xl font-bold text-gray-700 text-center">Sign Up</h1>
          <p class="py-6 text-center text-xl">
            Don't have an account yet? Sign up using your Name and E-mail.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Fullname</span>
              </label>
              <input
                type="text"
                error={Boolean(errors.fullName?.message)}
                {...register("fullName", { required: "Enter your name" })}
                placeholder="Fullname"
                class="input input-bordered"
              />
               <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                error={Boolean(errors.email?.message)}
                helperText={errors.email?.message}
                {...register('email', {required: '?????????????? ??????????'})}
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
                Sing Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>




    // <Paper classes={{ root: styles.root }}>
    //   <Typography classes={{ root: styles.title }} variant="h5">
    //     ???????????????? ????????????????
    //   </Typography>
    //   <div className={styles.avatar}>
    //     <Avatar sx={{ width: 100, height: 100 }} />
    //   </div>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <TextField
    //       error={Boolean(errors.fullName?.message)}
    //       helperText={errors.password?.message}
    //       {...register("fullName", { required: "?????????????? ???????? ??????" })}
    //       className={styles.field}
    //       label="???????????? ??????"
    //       fullWidth
    //     />
    //     <TextField
    //       type="email"
    //       error={Boolean(errors.email?.message)}
    //       helperText={errors.password?.message}
    //       {...register("email", { required: "?????????????? ???????? ??????????" })}
    //       className={styles.field}
    //       label="E-Mail"
    //       fullWidth
    //     />
    //     <TextField
    //       error={Boolean(errors.password?.message)}
    //       helperText={errors.password?.message}
    //       {...register("password", { required: "?????????????? ????????????" })}
    //       className={styles.field}
    //       label="????????????"
    //       fullWidth
    //     />
    //     <Button
    //       disabled={!isValid}
    //       type="submit"
    //       size="large"
    //       variant="contained"
    //       fullWidth
    //     >
    //       ????????????????????????????????????
    //     </Button>
    //   </form>
    // </Paper>
  );
};
