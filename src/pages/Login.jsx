import React from 'react';
import { Button, Container, Input } from '../components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../apis/authApi';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';


function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loginUser, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const response = await loginUser({ email, password }).unwrap();
      if (response.success) {
        console.log(response.data.user);
        dispatch(login({ userData: response.data.user }))
        // navigate('/');
        return;
      }
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <Container className="px-8">
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Email */}
        <Input
          label="Email:"
          type="email"
          labelClassName="text-sm font-medium text-gray-700 mt-3"
          className="mt-0 border-t-0 py-1 rounded-sm border-r-0 focus:bg-amber-100 border-amber-600"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format"
            }
          })}
          error={errors.email?.message}
        />

        {/* Password */}
        <Input
          label="Password:"
          type="password"
          labelClassName="text-sm font-medium text-gray-700 mt-3"
          className="mt-0 border-t-0 py-1 rounded-sm border-r-0 focus:bg-amber-100 border-amber-600"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required"
          })}
          error={errors.password?.message}
        />

        {/* Submit Button */}
        <Button
          text={isLoading ? "Loading..." : "Login"}
          type="submit"
          className="mt-5 w-full text-sm font-medium bg-amber-600 hover:bg-amber-700"
          disabled={isLoading}
        />
        
      </form>

      <p className="text-center mt-5">
        Need an Account?{" "}
        <strong
          className="text-amber-600"
          onClick={() => navigate('/Signup')}
        >
          Signup
        </strong>
      </p>
    </Container>
  );
}

export default Login;
