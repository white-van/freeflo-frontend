import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { Form, withFormik } from "formik";
import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { connect } from "react-redux";
import * as Yup from "yup";

import { closeAllModals } from "../../stores/ui/actions";
import { signup } from "../../stores/user/actions";
import { isSignupPendingSelector } from "../../stores/user/selectors";

export const SignupSchema = Yup.object().shape({
  username: Yup.string().required(),
  full_name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export function SignupForm({
  closeAllModals,
  errors,
  handleSubmit,
  isPending,
  setFieldValue,
  values: { username, full_name, email, password },
}) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Form>
      <FormControl id="username">
        <FormLabel>Username</FormLabel>
        <Input
          value={username}
          onChange={(e) => setFieldValue("username", e.target.value)}
          placeholder="Enter username"
        />
      </FormControl>
      <FormHelperText style={{ color: "red" }}>
        {errors && errors["username"]}
      </FormHelperText>
      <FormControl id="email" mt={2}>
        <FormLabel>Email address</FormLabel>
        <Input
          value={email}
          onChange={(e) => setFieldValue("email", e.target.value)}
          placeholder="Enter email address"
        />
      </FormControl>
      <FormHelperText style={{ color: "red" }}>
        {errors && errors["email"]}
      </FormHelperText>
      <FormControl id="full_name" mt={2}>
        <FormLabel>Full Name</FormLabel>
        <Input
          value={full_name}
          onChange={(e) => setFieldValue("full_name", e.target.value)}
          placeholder="Enter full name"
        />
      </FormControl>
      <FormHelperText style={{ color: "red" }}>
        {errors && errors["full_name"]}
      </FormHelperText>
      <FormControl id="password" mt={2}>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            onChange={(e) => setFieldValue("password", e.target.value)}
            value={password}
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button variant="ghost" h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <AiFillEyeInvisible /> : <AiFillEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormHelperText style={{ color: "red" }}>
          {errors && errors["password"]}
        </FormHelperText>
        <FormHelperText>
          Click on the eye icon to peek at your password.
        </FormHelperText>
      </FormControl>
      <div>
        <Button
          isLoading={isPending}
          m={4}
          type="submit"
          onClick={handleSubmit}
          style={{ float: "right" }}
        >
          Submit
        </Button>
        <Button
          m={4}
          variant="outline"
          onClick={closeAllModals}
          style={{ float: "right" }}
        >
          Close
        </Button>
      </div>
    </Form>
  );
}

export const EnhancedLoginForm = withFormik({
  enabledReinitialize: true,
  handleSubmit: (
    { username, email, full_name, password },
    { props: { signup } }
  ) => {
    signup({ username, email, full_name, password });
  },
  mapPropsToValues: (props) => ({
    username: "",
    email: "",
    full_name: "",
    password: "",
  }),
  validationSchema: () => SignupSchema,
  validateOnBlur: false,
  validateOnChange: false,
})(SignupForm);

const mapStateToProps = (state) => ({
  isPending: isSignupPendingSelector(state),
});

const ConnectedLoginForm = connect(mapStateToProps, {
  closeAllModals,
  signup,
})(EnhancedLoginForm);

export default ConnectedLoginForm;
