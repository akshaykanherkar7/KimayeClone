import React from "react";

const Login = () => {
  return <div></div>;
};

export default Login;

// import React from "react";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   Input,
//   useDisclosure,
// } from "@chakra-ui/react";
// import Signin from "./Signin";

// const Login = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = React.useRef();
//   return (
//     <div>
//       <button ref={btnRef} colorScheme="teal" onClick={onOpen}>
//         <i style={{ fontSize: "20px" }} class="fa-regular fa-user"></i>
//       </button>
//       <Drawer
//         isOpen={isOpen}
//         placement="right"
//         onClose={onClose}
//         finalFocusRef={btnRef}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton style={{ color: "white" }} />
//           <DrawerHeader>
//             <div
//               style={{
//                 border: "1px solid",
//                 borderColor: "black",
//                 height: "80px",
//                 width: "320px",
//                 marginLeft: "-25px",
//                 marginTop: "-16px",
//                 color: "white",
//                 backgroundColor: "black",
//               }}
//             >
//               <h1 style={{ marginTop: "20px", marginLeft: "20px" }}>Login</h1>
//             </div>
//           </DrawerHeader>

//           <DrawerBody>
//             <label>Email address</label>
//             <label style={{ color: "red" }}>*</label>
//             <Input placeholder="" />
//             <br />
//             <br />
//             <label>Password</label>
//             <label style={{ color: "red" }}>*</label>
//             <Input placeholder="" />
//             <button
//               style={{
//                 border: "1px solid",
//                 width: "100%",
//                 marginTop: "30px",
//                 height: "40px",
//               }}
//             >
//               Login
//             </button>
//             <br />
//             <br />
//             <br />
//             <div
//               style={{
//                 display: "flex",
//                 border: "1px solid",
//                 justifyContent: "center",
//                 backgroundColor: "black",
//               }}
//             >
//               <button
//                 style={{
//                   width: "90%",
//                   // marginTop: "10px",
//                   textAlign: "center",
//                   color: "white",
//                 }}
//               >
//                 Sign in with Facebook
//               </button>
//               <img
//                 src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756"
//                 alt=""
//               />
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 border: "1px solid",
//                 justifyContent: "center",
//                 backgroundColor: "black",
//                 marginTop: "10px",
//                 height: "45px",
//               }}
//             >
//               <button
//                 style={{
//                   width: "90%",
//                   // marginTop: "5px",
//                   textAlign: "center",
//                   color: "white",
//                 }}
//               >
//                 Sign in with Google
//               </button>
//               <img
//                 style={{ width: "20%" }}
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-uh7VCr5_TuCekl8xf4Lb4uUlVg5sR9eDA&usqp=CAU"
//                 alt=""
//               />
//             </div>
//             <br />
//             <br />
//             <br />
//             <div>
//               {/* <button
//                 // ref={btnRef}
//                 // onClick={onOpen}
//                 style={{
//                   border: "1px solid",
//                   width: "100%",
//                   height: "60px",
//                 }}
//               >
//                 Create an Account
//               </button> */}
//               <Signin></Signin>
//               {/* <Drawer
//                       isOpen={isOpen}
//                       placement="right"
//                       onClose={onClose}
//                       finalFocusRef={btnRef}
//                     >
//                       <DrawerOverlay />
//                       <DrawerContent>
//                         <DrawerCloseButton />
//                         <DrawerHeader>Create your account</DrawerHeader>

//                         <DrawerBody>
//                           <Input placeholder="Type here..." />
//                         </DrawerBody>

//                         <DrawerFooter>
//                           <Button variant="outline" mr={3} onClick={onClose}>
//                             Cancel
//                           </Button>
//                           <Button colorScheme="blue">Save</Button>
//                         </DrawerFooter>
//                       </DrawerContent>
//                     </Drawer> */}
//             </div>
//           </DrawerBody>

//           {/* <DrawerFooter>
//                   <Button variant="outline" mr={3} onClick={onClose}>
//                     Cancel
//                   </Button>
//                   <Button colorScheme="blue">Save</Button>
//                 </DrawerFooter> */}
//         </DrawerContent>
//       </Drawer>
//     </div>
//   );
// };

// export default Login;
