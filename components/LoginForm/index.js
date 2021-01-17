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
import { login } from "../../stores/user/actions";
import { isLoginPendingSelector } from "../../stores/user/selectors";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export function LoginForm({
  closeAllModals,
  errors,
  handleSubmit,
  isPending,
  setFieldValue,
  values: { email, password },
}) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Form>
      <FormControl id="login-email">
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          onChange={(e) => setFieldValue("email", e.target.value)}
          placeholder="Enter email"
        />
      </FormControl>
      <FormHelperText style={{ color: "red" }}>
        {errors && errors["email"]}
      </FormHelperText>
      <FormControl id="login-password" mt={2}>
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

const mapStateToProps = (state) => ({
  isPending: isLoginPendingSelector(state),
});

export const EnhancedLoginForm = withFormik({
  enabledReinitialize: true,
  handleSubmit: ({ email, password }, { props: { login } }) => {
    login({ email, password });
  },
  mapPropsToValues: (props) => ({
    email: "",
    password: "",
  }),
  validationSchema: () => LoginSchema,
  validateOnBlur: false,
  validateOnChange: false,
})(LoginForm);

const ConnectedLoginForm = connect(mapStateToProps, {
  closeAllModals,
  login,
})(EnhancedLoginForm);

export default ConnectedLoginForm;
