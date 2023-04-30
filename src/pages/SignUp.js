import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yupSchema from "yup";
import { ROUTER_PATCH } from "../routers";
import LayoutAuthen from "../layouts/LayoutAuthen";
import Label from "../components/label";
import { Button, ButtonGoogle } from "../components/buttons/";
import { Input, InputCheckBox } from "../components/Inputs/";
import YUP from "../constants/yupSchemaValidate";
import { IconEyeToogle } from "../components/Icons";
import { useState } from "react";
import { Heading } from "../components/heading";
import FormField from "../components/common/FormField";

const schema = yupSchema.object({
  name: YUP.NAME,
  email: YUP.EMAIL,
  password: YUP.PASSWORD,
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { errors, isSubmitting } = formState;

  const handleSignUp = (data) => {
    console.log("submit", { data });
  };

  return (
    <LayoutAuthen>
      <Heading className="text-center text-lg">sign up</Heading>
      <p className="text-text3 font-normal text-xs lg:text-sm text-center mb-4 lg:mb-5 ">
        Already have an account?{" "}
        <Link
          className="text-primary font-medium underline"
          to={ROUTER_PATCH.SIGN_IN.path}
        >
          Sign in
        </Link>
      </p>

      <ButtonGoogle></ButtonGoogle>

      <p className="text-text2 dark:text-white text-sm m-auto mb-[5px] lg:mb-[10px]">
        Or sign up with email
      </p>

      <form onSubmit={handleSubmit(handleSignUp)} autoComplete="off">
        <FormField>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            error={errors?.name?.message}
            control={control}
            name="name"
            placeholder="Jhon Doe"
          ></Input>
        </FormField>
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

        <InputCheckBox name="term" control={control}>
          <p className="font-normal text-sm text-text2 dark:text-text3 flex-1">
            I agree to the{" "}
            <Link className="text-secondary underline" to={"#"}>
              Terms of Use
            </Link>{" "}
            and have read and understand the{" "}
            <Link className="text-secondary underline" to="#">
              Privacy policy.
            </Link>
          </p>
        </InputCheckBox>

        <Button type="submit" isLoading={isSubmitting} className="bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthen>
  );
};

export default SignUp;
