import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import "../../style.css";
import { useSignUp } from "./SignUpPage.helpers";

export default function SignUpPage() {
  const [show, setShow] = React.useState(false);
  const handleShowPassword = () => {
    setShow(!show);
  };

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  interface ParamTypes {
    organization: string;
  }
  const { organization } = useParams<ParamTypes>();

  const signUp = useSignUp();

  const handleSubmit = () => {
    signUp({ login: login, password: password });
  };

  return (
    <Box className="AuthorizationPageBox" rounded="lg">
      <Box className="AuthorizationPageBoxContent">
        <Heading as="h3" size="lg" className="AuthorizationPageHeading">
          Sign up
        </Heading>
        <Text fontSize="2xl" className="ClientLogo">
          {organization} logo
        </Text>
        <FormControl isRequired mt={6}>
          <FormLabel textAlign="left" mb="8px">
            {" "}
            Username or email
          </FormLabel>
          <Input
            className="Center"
            pr="4.5rem"
            bgColor="white"
            onChange={(event) => setLogin(event.currentTarget.value)}
          />
        </FormControl>

        <FormControl isRequired mt={6}>
          <FormLabel textAlign="left" mb="8px">
            {" "}
            Password
          </FormLabel>
          <InputGroup className="Center" size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              bgColor="white"
              onChange={(event) => setPassword(event.currentTarget.value)}
            />

            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          onClick={handleSubmit}
          colorScheme="green"
          marginTop="20px"
          size="sm"
        >
          Sign up
        </Button>
      </Box>
      <Text fontSize="1xl" className="AuthorizationServerLogo">
        Auth Server Logo
      </Text>
    </Box>
  );
}