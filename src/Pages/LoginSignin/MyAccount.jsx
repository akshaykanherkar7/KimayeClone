import React from "react";
import { Box } from "@chakra-ui/react";
import "./MyAccount.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Center,
} from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faHouse, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
const MyAccount = () => {
  return (
    <div className="myaccountmaindiv">
      <div className="myaccountdiv">
        <Box bg="#437111 " w="100%" p={4} color="white" fontSize="30px">
          MY ACCOUNT
          <Breadcrumb fontSize="15px">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                {/* <FontAwesomeIcon
                  icon={faHouseChimney}
                  className="fontawesomehouseicon"
                ></FontAwesomeIcon> */}
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
      <div>
      <Center h="50px" color="black" className="topfirstdivmyaccount">
        <h3>Hello Aman Khan (not Aman Khan ? Signout)</h3>
      </Center>
      <Center h="50px" color="black" className="topfirstdivmyaccount">
        <h3>Order History :</h3>
      </Center>
      <Center h="50px" color="black" className="topthirdtextmyaccount">
        {/* <h3><FontAwesomeIcon className="tickarrow" icon={faCheck}></FontAwesomeIcon>No order has been made yet.</h3> */}
      </Center>
      <Center h="50px" color="black" className="topfirstdivmyaccount">
        <h3>Account details:</h3>
      </Center>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default MyAccount;