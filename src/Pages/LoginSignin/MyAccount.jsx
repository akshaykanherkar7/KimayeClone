import React, { useEffect } from "react";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import "./MyAccount.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
} from "@chakra-ui/react";

const MyAccount = () => {
  const [lastname, setLastName] = useState([]);
  const [firstname, setFirstName] = useState([]);
  const [email, setEmail] = useState([]);
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("Email"));
    const lastname = JSON.parse(localStorage.getItem("lastname"));
    const firstname = JSON.parse(localStorage.getItem("firstname"));
    if (firstname || lastname) {
      setFirstName(firstname);
      setLastName(lastname);
      setEmail(email);
    }
  }, []);

  return (
    <div className="myaccountmaindiv">
      <div className="myaccountdiv">
        <Box bg="#437111 " w="100%" p={4} color="white" fontSize="30px">
          MY ACCOUNT
          <Breadcrumb fontSize="15px">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <i class="fa-solid fa-house-chimney"></i>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">My Account</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </div>
      <br />
      <div style={{ marginBottom: "70px" }}>
        <Center h="50px" color="black" className="topfirstdivmyaccount">
          <h3>
            <span>Hello {firstname + " " + lastname}</span>
          </h3>
        </Center>
        <Center h="50px" color="black" className="topfirstdivmyaccount">
          <h3>Order History :</h3>
        </Center>
        <Center h="50px" color="black" className="topthirdtextmyaccount">
          <h3>
            <i class="fa-solid fa-check"></i>
            No order has been made yet.
          </h3>
        </Center>
        {/* <Center h="50px" color="black" className="topfirstdivmyaccount">
          <h3>Account details:</h3>
        </Center> */}
      </div>
      <div style={{ marginBottom: "40px" }}>
        <Box
          bg="black"
          w="200px"
          h="50px"
          p={4}
          color="white"
          className="leftsidedashboardmyaccount"
        >
          MY ACCOUNT
        </Box>
        <Box
          bg="#eeeeea"
          w="200px"
          p={4}
          color="grey"
          className="leftsidedashboard"
        >
          DASHBOARD
        </Box>
        <Box
          bg="#eeeeea"
          w="200px"
          p={4}
          color="grey"
          className="leftsidedashboard"
        >
          ADDRESSES
        </Box>
        <Box
          bg="#eeeeea"
          w="200px"
          p={4}
          color="grey"
          className="leftsidedashboard"
        >
          LOG OUT
        </Box>
        {/* <Center h="50px" color="black" className="bottomnamediv">
          <h3 className="boldtagname">Name :</h3>
          <span>{firstname}</span>
        </Center>
        <div className="bordergreyafterdiv"></div>
        <Center h="50px" color="black" className="bottomnamediv1">
          <h3 className="boldtagname">Email :</h3>
          <span>{email}</span>
        </Center>
        <div className="bordergreyafterdiv"></div>
        <Center h="50px" color="black" className=".bottomnamediv">
          <h3>Order Address :</h3>
        </Center>
        <div className="bordergreyafterdiv"></div>
        <Center h="50px" color="black" className=".bottomnamediv">
          <h3>Order Address2 :</h3>
        </Center>
        <div className="bordergreyafterdiv"></div> */}
      </div>
    </div>
  );
};

export default MyAccount;
