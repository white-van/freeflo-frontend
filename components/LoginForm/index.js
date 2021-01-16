import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Form, withFormik } from "formik";
import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { connect } from "react-redux";
import * as Yup from "yup";

import { closeAllModals } from "../../stores/ui/actions";

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export function LoginForm({
  closeAllModals,
  errors,
  handleSubmit,
  setFieldValue,
  values: { username, password },
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
        />
      </FormControl>
      <FormHelperText style={{ color: "red" }}>
        {errors && errors["username"]}
      </FormHelperText>
      <FormControl id="password">
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
          m={4}
          type="submit"
          onClick={handleSubmit}
          style={{ float: "right" }}
        >
          Login
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
  handleSubmit: ({ username, password }, { props: {} }) => {
    console.log({ username, password });
  },
  mapPropsToValues: (props) => ({
    username: "",
    password: "",
  }),
  validationSchema: () => LoginSchema,
  validateOnBlur: false,
  validateOnChange: false,
})(LoginForm);

const ConnectedLoginForm = connect(null, {
  closeAllModals,
})(EnhancedLoginForm);

export default ConnectedLoginForm;
