"use client";
//Generated by GeneratePageFile
import TWButton from "@/components/ui/input/TWButton";
import TWInput from "@/components/ui/input/TWInput";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import {
  Formik,
  Field,
  ErrorMessage,
  FormikProps,
  FormikHelpers,
} from "formik";
import registrationSchema from "@/schema/registration";
import { JSONResponse } from "@/interfaces/interface";
import axiosClient from "@/utils/api";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

// Create a QueryClient instance
const queryClient = new QueryClient();

//@ts-ignore
const Register: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RegisterForm />
    </QueryClientProvider>
  );
};

const RegisterForm: React.FC = () => {
  const router = useRouter();

  const initialValues = {
    username: "jet_pradas",
    email: "jet_pradas@yahoo.com",
    password: "Jetpogi_21",
  };

  const registerUser = async (values: FormValues) => {
    const response = await axiosClient.post("/auth/register", values);
    return response.data;
  };

  const { mutate, isLoading, isError, error, data } = useMutation(
    registerUser,
    {
      onSuccess: (data) => {
        console.log({ data });
        router.push("/dashboard/login?success=Account has been created");
      },
      onError: (error) => {
        console.log({ error });
      },
    }
  );

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    //Use useMutation here from tanstack-query
    mutate(values);
    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {({ isSubmitting, submitForm }: FormikProps<FormValues>) => (
          <form
            className="flex flex-col gap-4 w-[500px]"
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            <Field
              type="text"
              name="username"
              placeholder="username"
              as={TWInput}
              required
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-sm text-red-500"
            />
            <Field
              type="email"
              name="email"
              placeholder="email address"
              as={TWInput}
              required
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-sm text-red-500"
            />

            <Field
              type="password"
              name="password"
              placeholder="password"
              as={TWInput}
              required
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-sm text-red-500 "
            />

            <TWButton
              type="submit"
              variant="contained"
              disabled={isSubmitting || isLoading}
            >
              Register
            </TWButton>

            <Link
              href="/dashboard/login"
              className={twMerge(["text-primary", "text-center"])}
            >
              Login with an existing account
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
