import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import * as yupSchema from "yup";

import { useForm } from "react-hook-form";
import LayoutAuthen from "../layouts/LayoutAuthen";
import YUP from "../constants/yupSchemaValidate";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER_PATCH } from "../routers";
import { Button, ButtonGoogle } from "../components/buttons";
import Label from "../components/label";
import { Input } from "../components/Inputs";
import { IconEyeToogle } from "../components/Icons";
import { Heading } from "../components/heading";
import FormField from "../components/common/FormField";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../store/auth/authSlice";

const schema = yupSchema.object({
  email: YUP.EMAIL,
  password: YUP.PASSWORD,
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // react-hook-form library
  const { handleSubmit, control, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { errors, isSubmitting } = formState;

  // handle login
  const handleSignIn = (data) => {
    const payload = {
      ...data,
      email: data.email.toLowerCase(),
    };
    dispatch(authLogin(payload));
    reset();
  };

  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  }, [user, navigate]);

  return (
    <LayoutAuthen>
      <Heading className="text-center text-lg">Welcome Back!</Heading>

      <p className="text-text3 font-normal text-xs lg:text-sm text-center mb-4 lg:mb-5 ">
        Dont have an account?{" "}
        <Link
          className="text-primary font-medium underline"
          to={ROUTER_PATCH.SIGN_UP.path}
        >
          Sign up
        </Link>
      </p>
      <ButtonGoogle></ButtonGoogle>

      <form onSubmit={handleSubmit(handleSignIn)} autoComplete="off">
        <FormField>
          <Label htmlFor="email">Email *</Label>
          <Input
            error={errors?.email?.message}
            control={control}
            name="email"
            placeholder="example@gmail.com"
          ></Input>
        </FormField>
        <FormField>
          <Label htmlFor="password">Password *</Label>
          <Input
            error={errors?.password?.message}
            control={control}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a password"
          >
            <IconEyeToogle
              handleToogle={() => setShowPassword(!showPassword)}
              isOpen={showPassword}
            ></IconEyeToogle>
          </Input>
        </FormField>
        <p className="text-right">
          <Link
            className="mt-[10px] mb-5 lg:mb-5 lg:mt-[10px] text-primary font-medium text-sm inline-block"
            to={ROUTER_PATCH.FORGOT_PASSWORD.path}
          >
            Forgot password{" "}
          </Link>
        </p>
        <Button type="submit" isLoading={isSubmitting} className="bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthen>
  );
};

export default SignIn;
