import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  // Input,
  Flex,
  Box,
  Spacer,
  Heading,
  // Button,
} from "@chakra-ui/react";
import "../LoginSignin/Signin.css";
//   import Login from "./Login";
//   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//   import { faUser } from "@fortawesome/free-regular-svg-icons";
//   import {
//     faFacebookSquare,
//     faGooglePlusSquare,
//   } from "@fortawesome/free-brands-svg-icons";
import { CloseIcon, MinusIcon } from "@chakra-ui/icons";

const Signin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginpass, setLoginPass] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("lastname", JSON.stringify(lastname));
      localStorage.setItem("firstname", JSON.stringify(firstname));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("Saved into local Storage");
      setLogin(!login);
    }
  }
  //   function handleClick() {
  //     setLogin(!login);
  //   }

  const handleLogin = (loginEmail, loginpass, onClose) => {
    let storedEmail = JSON.parse(localStorage.getItem("Email"));
    let storedPassword = JSON.parse(localStorage.getItem("Password"));

    if (loginEmail === storedEmail && loginpass === storedPassword) {
      alert("Login Successfull");
      setIsAuth(true);
      onClose();
      navigate("/myaccount");
    } else {
      alert("Login Failed");
    }
  };
  return (
    <div>
      {isAuth ? (
        <div onClick={() => navigate("/myaccount")}>
          <button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <i style={{ fontSize: "20px" }} class="fa-regular fa-user"></i>
          </button>
        </div>
      ) : (
        <div>
          <button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <i style={{ fontSize: "20px" }} class="fa-regular fa-user"></i>
          </button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton style={{ color: "white" }} />
              <DrawerHeader>
                <div
                  style={{
                    border: "1px solid",
                    borderColor: "black",
                    height: "80px",
                    width: "320px",
                    marginLeft: "-25px",
                    marginTop: "-16px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  <h1 style={{ marginTop: "20px", marginLeft: "20px" }}>
                    SIGN IN
                  </h1>
                </div>
              </DrawerHeader>

              <DrawerBody>
                {login ? (
                  <div className="mainregisterdiv">
                    <form onSubmit={handleSubmit}>
                      <div className="facebookredirectlink">
                        <Flex
                          minWidth="max-content"
                          alignItems="center"
                          gap="2"
                        >
                          <Box p="2">
                            <Heading
                              size="md"
                              color="white"
                              fontWeight="500"
                              fontSize="15px"
                            >
                              Sign in with Facebook
                            </Heading>
                          </Box>
                          <Spacer />
                          {/* <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="facebooksquareicon"
                ></FontAwesomeIcon> */}
                        </Flex>
                      </div>
                      <div className="googleredirectlink">
                        <Flex
                          minWidth="max-content"
                          alignItems="center"
                          gap="2"
                        >
                          <Box p="2">
                            <Heading
                              size="md"
                              color="white"
                              fontWeight="500"
                              fontSize="15px"
                            >
                              Sign in with Google
                            </Heading>
                          </Box>
                          <Spacer />
                          {/* <FontAwesomeIcon
                  icon={faGooglePlusSquare}
                  className="googleplussquareicon"
                ></FontAwesomeIcon> */}
                        </Flex>
                      </div>
                      <br />
                      <div>
                        <FormControl>
                          <FormLabel
                            htmlFor="first-name"
                            fontWeight="450"
                            color="black"
                          >
                            First Name
                          </FormLabel>
                          <Input
                            id="first-name"
                            placeholder="First name"
                            borderRadius="none"
                            className="form-control"
                            onChange={(event) =>
                              setFirstName(event.target.value)
                            }
                          />
                        </FormControl>
                      </div>
                      <br />
                      <div>
                        <FormControl>
                          <FormLabel
                            htmlFor="first-name"
                            fontWeight="450"
                            color="black"
                          >
                            Last name
                          </FormLabel>
                          <Input
                            id="first-name"
                            placeholder="Last name"
                            borderRadius="none"
                            className="form-control"
                            onChange={(event) =>
                              setLastName(event.target.value)
                            }
                          />
                        </FormControl>
                      </div>
                      <br />
                      <div>
                        <FormControl isRequired>
                          <FormLabel
                            htmlFor="first-name"
                            fontWeight="450"
                            color="black"
                          >
                            Email address
                          </FormLabel>
                          <Input
                            id="first-name"
                            placeholder="Email address"
                            borderRadius="none"
                            className="form-control"
                            onChange={(event) => setEmail(event.target.value)}
                          />
                        </FormControl>
                      </div>
                      <br />
                      <div>
                        <FormControl isRequired>
                          <FormLabel
                            htmlFor="first-name"
                            fontWeight="450"
                            color="black"
                          >
                            Password
                          </FormLabel>
                          <Input
                            id="first-name"
                            placeholder="Password"
                            borderRadius="none"
                            type="password"
                            className="form-control"
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                          />
                        </FormControl>
                      </div>
                      {/* <FontAwesomeIcon icon="fa-solid fa-dash" />
            <FontAwesomeIcon icon="fa-brands fa-youtube" /> */}
                      <br />
                      <br />
                      <Button
                        colorScheme="none"
                        border="2px solid black"
                        borderRadius="none"
                        color="black"
                        width="250px"
                        type="submit"
                        className="register-btn"
                        // onClick={() => <Login />}
                      >
                        REGISTER
                      </Button>
                      <div className="horizontalline"></div>
                      <div>
                        {/* <FontAwesomeIcon
                icon={faUser}
                className="userIcon"
              ></FontAwesomeIcon> */}
                      </div>
                      <h3 className="noaccountyet">No account yet?</h3>
                      <h3 className="welcometokimayetext">
                        Welcome to Kimaye! Help us with a few details to know
                        you better as you take the journey of enjoying our safe
                        and tasty fruits.
                      </h3>
                    </form>
                    <Button
                      colorScheme="none"
                      border="2px solid black"
                      borderRadius="none"
                      color="black"
                      width="fit_content"
                      type="submit"
                      className="first-login-btn"
                      onClick={() => setLogin(false)}
                    >
                      LOGIN
                    </Button>
                  </div>
                ) : (
                  <div>
                    <label>Email address</label>
                    <label style={{ color: "red" }}>*</label>
                    <Input
                      placeholder="enter email"
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <br />
                    <br />
                    <label>Password</label>
                    <label style={{ color: "red" }}>*</label>
                    <Input
                      type="password"
                      placeholder="enter password"
                      onChange={(e) => setLoginPass(e.target.value)}
                    />
                    <button
                      onClick={() =>
                        handleLogin(loginEmail, loginpass, onClose)
                      }
                      style={{
                        border: "1px solid",
                        width: "100%",
                        marginTop: "30px",
                        height: "40px",
                      }}
                    >
                      Login
                    </button>
                    <br />
                    <br />
                    <br />
                    <div
                      style={{
                        display: "flex",
                        border: "1px solid",
                        justifyContent: "center",
                        backgroundColor: "black",
                      }}
                    >
                      <button
                        style={{
                          width: "90%",
                          // marginTop: "10px",
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        Sign in with Facebook
                      </button>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756"
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        border: "1px solid",
                        justifyContent: "center",
                        backgroundColor: "black",
                        marginTop: "10px",
                        height: "45px",
                      }}
                    >
                      <button
                        style={{
                          width: "90%",
                          // marginTop: "5px",
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        Sign in with Google
                      </button>
                      <img
                        style={{ width: "20%" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-uh7VCr5_TuCekl8xf4Lb4uUlVg5sR9eDA&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                      <button
                        // ref={btnRef}
                        // onClick={onOpen}
                        onClick={() => setLogin(true)}
                        style={{
                          border: "1px solid",
                          width: "100%",
                          height: "60px",
                        }}
                      >
                        Create an Account
                      </button>
                      {/* <Signin></Signin> */}
                      {/* <Drawer
                      isOpen={isOpen}
                      placement="right"
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                      <DrawerOverlay />
                      <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Create your account</DrawerHeader>

                        <DrawerBody>
                          <Input placeholder="Type here..." />
                        </DrawerBody>

                        <DrawerFooter>
                          <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                          </Button>
                          <Button colorScheme="blue">Save</Button>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer> */}
                    </div>
                  </div>
                )}
              </DrawerBody>

              <DrawerFooter>
                {/* <Button variant="outline" mr={3} onClick={onClose}>
              Go to Login
            </Button> */}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </div>
  );
};

export default Signin;
