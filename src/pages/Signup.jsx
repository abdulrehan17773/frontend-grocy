import React from 'react';
import { Button, Container, Input } from '../components';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../apis/authApi';

function Signup() {
  const { register, handleSubmit, formState: { errors }, control } = useForm();
  const password = useWatch({ control, name: "password" });
  const navigate = useNavigate();
  const [registerUser, { isLoading, error }] = useRegisterMutation();

  const onSubmit = async (data) => {
    const { fullname, email, phone, password } = data;

    try {
      const response = await registerUser({ fullname, email, phone, password }).unwrap();
      if (response.success) {
        navigate('/login');
        return;
      }
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <Container className="px-8">
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Full Name */}
        <Input
          label="Full Name:"
          type="text"
          labelClassName="text-sm font-medium text-gray-700 mt-3"
          className="mt-0 border-t-0 py-1 rounded-sm border-r-0 focus:bg-amber-100 border-amber-600"
          placeholder="Enter your full name"
          {...register("fullname", { required: "Full name is required" })}
          error={errors.fullname?.message}
        />

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

        {/* Phone */}
        <Input
          label="Phone:"
          type="tel"
          labelClassName="text-sm font-medium text-gray-700 mt-3"
          className="mt-0 border-t-0 py-1 rounded-sm border-r-0 focus:bg-amber-100 border-amber-600"
          placeholder="Enter your phone"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^0\d{9,10}$/,
              message: "Phone number must start with 0 and be 10 to 11 digits long"
            }
          })}
          error={errors.phone?.message}
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

        {/* Confirm Password */}
        <Input
          label="Confirm Password:"
          type="password"
          labelClassName="text-sm font-medium text-gray-700 mt-3"
          className="mt-0 border-t-0 py-1 rounded-sm border-r-0 focus:bg-amber-100 border-amber-600"
          placeholder="Confirm your password"
          {...register("cPassword", {
            required: "Confirm password is required",
            validate: (value) => value === password || "Passwords do not match"
          })}
          error={errors.cPassword?.message}
        />

        {/* Submit Button */}
        <Button
          text={isLoading ? "Loading..." : "Sign Up"}
          type="submit"
          className="mt-5 w-full text-sm font-medium bg-amber-600 hover:bg-amber-700"
          disabled={isLoading}
        />
        
      </form>

      <p className="text-center mt-5">
        Already have an Account?{" "}
        <strong
          className="text-amber-600"
          onClick={() => navigate('/login')}
        >
          Login
        </strong>
      </p>
    </Container>
  );
}

export default Signup;
