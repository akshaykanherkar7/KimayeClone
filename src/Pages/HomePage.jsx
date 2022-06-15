import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div style={{ marginTop: "75px" }}>
        <Carousel autoPlay>
          <div>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/05062022-D-unisex-topbannercarousel-p5-performax-upto70.jpg" />
          </div>
          <div>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/05062022-D-unisex-topbannercarousel-p1-adidas-4060.jpg" />
          </div>
          <div>
            <img src="https://assets.ajio.com/cms/AJIO/WEB/05062022-D-unisex-topbannercarousel-p7-baggit-upto80.jpg" />
          </div>
        </Carousel>
      </div>

      <div
        style={{
          // border: "1px solid",
          height: "auto",
        }}
      >
        <h1
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "38px" }}
        >
          KIMAYE RECCOMENDS
        </h1>
        <h3
          style={{ textAlign: "center", fontSize: "28px", marginTop: "15px" }}
        >
          A Handpicked and Curated Fruit offering
        </h3>
        <div className={styles.gridBox}>
          <div className={styles.FlexBox1}>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-1-min_670x.png?v=1614338437"
                alt=""
              />
              <h1>ALL FRUITS</h1>
              <p>Pick and choose from a wide range of delicious fruits</p>
              <button>Shop Now</button>
            </div>
            <div>
              <img
                style={{ width: "82.8%" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_670x.png?v=1614338730"
                alt=""
              />
              <h1>FRESH CUTS</h1>
              <p>We want to spoon-feed you… quite literally</p>
              <button>Shop Now</button>
            </div>
          </div>
          <div className={styles.FlexBox1}>
            <div>
              <img
                style={{ width: "90%" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_670x.jpg?v=1614339080"
                alt=""
              />
              <h1>FRUIT COMBOS</h1>
              <p>Indulge in fruit combinations created by us</p>
              <button>Shop Now</button>
            </div>
            <div>
              <img
                style={{ width: "90%" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/2I8A6078_670x.jpg?v=1631516874"
                alt=""
              />
              <h1>GIFTS BY KIMAYE</h1>
              <p>Healthy & memorable gifts for your loved ones</p>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid",
          height: "auto",
          marginTop: "70px",
          backgroundColor: "#6e9343",
          borderColor: "#6e9343",
        }}
      >
        <div
          style={{
            // border: "1px solid",
            // height: "900px",
            display: "flex",
            justifyContent: "space-evenly",
            width: "75%",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <div>
            <img
              style={{ width: "80%" }}
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi_570x_2db87855-9260-47c2-a80e-3759af77dbea_570x.png?v=1622009438"
              alt=""
            />
          </div>
          <div
            style={{
              // border: "1px solid",
              width: "50%",
              height: "530px",
            }}
          >
            <h1
              style={{
                fontWeight: "bold",
                color: "white",
                textAlign: "start",
                fontSize: "35px",
              }}
            >
              WE’D LIKE TO SAY <label style={{ color: "brown" }}>KIMA</label>HI…
            </h1>
            <p
              style={{
                marginTop: "15px",
                color: "white",
                textAlign: "start",
                fontSize: "18px",
              }}
            >
              Many of us share common safety concerns about the food we eat.
            </p>
            <p
              style={{
                textAlign: "start",
                marginTop: "20px",
                color: "white",
                fontSize: "18px",
              }}
            >
              When it comes to fruits, these concerns are even more serious in
              terms of the way they are grown and handled throughout their
              farm-to-home journey. We make eating fruits a worry-free and
              enjoyable experience for you.
            </p>
            <p
              style={{
                textAlign: "start",
                marginTop: "20px",
                color: "white",
                fontSize: "18px",
              }}
            >
              Since 2009, we have set the benchmark for fruit safety and quality
              in 35 countries. Kimaye is now expanding its footprint in India,
              bringing you multiple varieties of fruit that are grown, packaged,
              and delivered in the safest and most socially responsible manner.
            </p>
            <h1
              style={{
                // border: "1px solid",
                width: "fit-content",
                marginTop: "30px",
                fontSize: "25px",
                fontWeight: "bold",
                padding: "11px",
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            >
              Kimaye is #all<label style={{ color: "brown" }}>Safe</label>
              #all<label style={{ color: "brown" }}>Good</label>
            </h1>
            <button className={styles.lastbtn}>KNOW MORE</button>
          </div>
        </div>
      </div>

      {/* PSST LOKIN FOR US  */}
      <div className={styles.psstContainer}>
        <h1>PSST… LOOKIN’ FOR US?</h1>
        <h3>We are here</h3>
        <div className={styles.psstImg}>
          <img
            src="https://scontent.cdninstagram.com/v/t51.29350-15/287777520_709043673687257_3035340965363558444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=qcpWAq8zICEAX-Q2OuT&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-kBHq5IsPxY8R0273Juo55Bn561LeRr_aY2o85E6JtjQ&oe=62ADC8BF"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.29350-15/287661335_435396271444075_5269129130906661203_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=chNto7ljN2QAX9RDh8n&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8mpkC0KubyyjICg7iPqsOyJ1UNdvgvBuZO_lniqtsDIA&oe=62AE7244"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.29350-15/286476421_5512742678790182_9133878254313440813_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=lb_ZGm3wyeUAX8jYSln&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-WMwSjODjvdaNp8AtbnA5KMo3ULCAv2S0Hpp-MJyvdXg&oe=62AF0AD5"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.29350-15/286027759_416785993449025_2116452231653606930_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=McoegvQ9PakAX-z_0e5&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8H2YWVmTq6s3CraFMsgzCKZQg1iuNA5tBFJFqpwszo5A&oe=62AD2BB4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
