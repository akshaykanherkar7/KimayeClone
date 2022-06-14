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

      <div style={{ border: "1px solid", height: "auto" }}>
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
    </div>
  );
};

export default HomePage;
