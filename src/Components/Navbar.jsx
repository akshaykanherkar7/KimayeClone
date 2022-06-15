import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
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
import { useNavigate } from "react-router-dom";
import AllFruits from "../Pages/Products/AllFruits";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          border: "1px solid",
          textAlign: "center",
          borderRadius: "3px",
          backgroundColor: "#437111",
          padding: "5px",
          color: "white",
        }}
      >
        Delivering in Mumbai and Delhi | Same day delivery!
      </div>
      <div
        style={{
          //   border: "1px solid",
          height: "70px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#f3f4ed",
          padding: "20px",
          //   position: "fixed",
          top: "30",
          zIndex: "5",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", gap: "35px" }}>
          <Menu>
            <MenuButton>
              SHOP
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  navigate("collections/all-fruits");
                }}
              >
                ALL FRUITS
              </MenuItem>
              <MenuItem>FRESH CUTS</MenuItem>
              <MenuItem>FRUIT COMBOS</MenuItem>
              <MenuItem>GIFTS BY KIMAYE</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
              <MenuItem>GRAPE FAMILY BY KIMAYE</MenuItem>
              <MenuItem>RETURN AND REPLACEMENT</MenuItem>
              <MenuItem style={{ color: "lightgray" }}>
                FRUITS X SUBSCRIPTION
              </MenuItem>
              <MenuItem>COMMUNITY BUYYING</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton>
              LEARN
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>OUR STORY</MenuItem>
              <MenuItem>WHY KIMAYE</MenuItem>
              <MenuItem>TRACEABILITY</MenuItem>
              <MenuItem>BEYOND FRUITS</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton>
              GROW
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div style={{ width: "10%" }}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x@2x.png?v=1596288204"
            alt=""
          />
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <div style={{ display: "flex", width: "90%" }}>
            <img
              style={{ width: "30%", height: "30px" }}
              src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png"
              alt=""
            />
            <p>Mumbai</p>
            {/* <Modal
              closeOnOverlayClick={false}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal> */}
          </div>
          <div>
            <button>
              <SearchIcon style={{ fontSize: "20px" }}></SearchIcon>
            </button>
          </div>
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
                <DrawerCloseButton />
                <DrawerHeader> AKSHAY</DrawerHeader>

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
            </Drawer>
          </div>
          <div>
            <button>
              <i
                style={{ fontSize: "20px" }}
                class="fa-solid fa-bag-shopping"
              ></i>
            </button>
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
      </div>
    </div>
  );
};

export default Navbar;
