import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          // border: "1px solid ",
          height: "280px",
          padding: "35px",
          backgroundColor: "#739253",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "75%",
            margin: "auto",
          }}
        >
          <div style={{ textDecoration: "start" }} className={styles.RedHover}>
            <a href="">
              <h1>FAQ's</h1>
            </a>
            <a href="">
              <h1>Contact Us</h1>
            </a>
            <a href="">
              <h1>Shipping & Return Policy</h1>
            </a>
            <a href="">
              <h1>Terms & Conditions</h1>
            </a>
            <a href="">
              <h1>Privacy Policy</h1>
            </a>
          </div>
          <div className={styles.Follow}>
            <h1>Follow us on</h1>
            <div
              style={{ display: "flex", gap: "10px" }}
              className={styles.imgHover}
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756"
                alt=""
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756"
                alt=""
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr
          style={{
            color: "lightgray",
            width: "75%",
            margin: "auto",
            marginTop: "30px",
          }}
        />
        <div
          style={{
            display: "flex",
            // border: "1px solid",

            width: "65%",
            margin: "auto",
            justifyContent: "space-between",
            marginTop: "25px",
          }}
        >
          <p>Copyright©2020. All Rights Reserved</p>
          <img
            style={{ width: "9%" }}
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/ting.png?v=1599565040"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
