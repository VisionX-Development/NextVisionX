import styled from "styled-components";
import { Spacer, Button } from "@nextui-org/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/client";
import { useStoreActions } from "../../store/GlobalState";
//import { createUser } from "../../utils/auth/auth";

interface NavbarProps {
  onConfirm: () => void;
  onCancel: () => void;
}

interface MyFormValues {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .required("Bitte geben Sie ein Passwort ein.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
      "Muss mindestens 5 Ziffern enthalten, ein Großbuchstabe, ein Kleinbuchstabe und ein Sonderzeichen."
    ),
  email: Yup.string()
    .email("Email ist ungültig. Bitte korrekte Email eingeben.")
    .required("Required"),
});

export const LoginModal: React.FC<NavbarProps> = (props: NavbarProps) => {
  const initialValues: MyFormValues = { email: "", password: "" };
  const setAlert = useStoreActions((state) => state.setAlert);

  // const handleCreateUser = async (email: string, password: string) => {
  //   try {
  //     await createUser(email, password);
  //   } catch (error: any) {
  //     setAlert({ message: error.message, type: "warning" });
  //   }
  // };

  const handleSignIn = async (email: string, password: string) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (result) {
      if (!result.error) {
        console.log(result);
      } else {
        setAlert({ message: result.error, type: "warning" });
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        handleSignIn(values.email, values.password);
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <FormWrapper>
          <Form>
            <Field
              id="email"
              label="Email"
              name="email"
              placeholder="Email"
              size="xl"
              fullWidth={true}
            />

            <ErrorMessage name="email" />
            <Spacer />
            <Field
              id="password"
              label="Passwort"
              name="password"
              type="password"
              placeholder="Passwort"
              size="xl"
              fullWidth={true}
            />
            <ErrorMessage name="password" />
            <Spacer y={2} />
            <Button
              type="submit"
              size="xl"
              css={{ width: "100%", fontSize: "2rem" }}
            >
              Login
            </Button>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

const FormWrapper = styled.div`
  width: 40vw;
  padding: 30px;
  font-size: 1.5rem;

  .nextui-c-hzQjrs {
    color: #fff;
    font-size: 2rem;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 7px;
    color: #000000;
    font-size: 2rem;
  }
`;
