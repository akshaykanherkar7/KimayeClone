import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Carousel autoPlay>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Date-launch-post-whatsapp-banner-desktop.jpg?v=1654259038" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Indian-plum-and-peach-banner.jpg?v=1653914762" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Tarty-Sweetness-banner.jpg?v=1653914749" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Delhi-launch-banner.jpg?v=1649917692" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kiwi_bannerArtboard_1.jpg?v=1650952002" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kiwi_bannerAssured_safety_1.jpg?v=1650952014" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kiwi_bannerWe_serve_you_1.jpg?v=1650952015" />
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
                onClick={() => navigate("/collections/all-fruits")}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-1-min_670x.png?v=1614338437"
                alt=""
              />
              <h1>ALL FRUITS</h1>
              <p>Pick and choose from a wide range of delicious fruits</p>
              <button onClick={() => navigate("/collections/all-fruits")}>
                Shop Now
              </button>
            </div>
            <div>
              <img
                onClick={() => navigate("/collections/fresh-cuts")}
                style={{ width: "82.8%" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_670x.png?v=1614338730"
                alt=""
              />
              <h1>FRESH CUTS</h1>
              <p>We want to spoon-feed you… quite literally</p>
              <button onClick={() => navigate("/collections/fresh-cuts")}>
                Shop Now
              </button>
            </div>
          </div>
          <div className={styles.FlexBox1}>
            <div>
              <img
                onClick={() => navigate("/collections/fruit-combos")}
                style={{ width: "90%" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_670x.jpg?v=1614339080"
                alt=""
              />
              <h1>FRUIT COMBOS</h1>
              <p>Indulge in fruit combinations created by us</p>
              <button onClick={() => navigate("/collections/fruit-combos")}>
                Shop Now
              </button>
            </div>
            <div>
              <img
                onClick={() => navigate("/collections/gifts-by-kimaye")}
                style={{ width: "90%" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/2I8A6078_670x.jpg?v=1631516874"
                alt=""
              />
              <h1>GIFTS BY KIMAYE</h1>
              <p>Healthy & memorable gifts for your loved ones</p>
              <button onClick={() => navigate("/collections/gifts-by-kimaye")}>
                Shop Now
              </button>
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
      {/* THE SECRET’S OUT: WE’RE SUPER SAFE  */}
      <div className={styles.secretContainer}>
      
      
        <h1
          style={{ fontSize: "35px", textAlign: "center", fontWeight: "bold" }}
        >
          THE SECRET’S OUT: WE’RE SUPER SAFE
        </h1>
        <h3
          style={{ fontSize: "25px", textAlign: "center", marginTop: "10px" }}
        >
          Witness Our Journey
        </h3>
    
    
        <div className={styles.Carosel}>
          <Carousel autoPlay>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                // border: "1px solid ",
                width: "80%",
                margin: "auto",
              }}
            >
             
             
              <div style={{ marginTop: "100px", marginLeft: "30px" }}>
                <h1 style={{ textAlign: "start", fontSize: "30px" }}>
                  Groen responsibly
                </h1>
                <p
                  style={{
                    textAlign: "start",
                    marginTop: "20px",
                    fontSize: "20px",
                    width: "65%",
                  }}
                >
                  We folloe G.A.P (Good Agricultural Practices)to ensure food
                  safety
                </p>
              </div>
              <img
                style={{ width: "50%", borderRadius: "15px" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-1_guetzli-min.jpg?v=1614755149"
              />
            </div>
          
          
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                // border: "1px solid ",
                width: "80%",
                margin: "auto",
              }}
            >
              
              
              <div style={{ marginTop: "100px", marginLeft: "30px" }}>
                <h1 style={{ textAlign: "start", fontSize: "30px" }}>
                  Handpicked at farms
                </h1>
                <p
                  style={{
                    textAlign: "start",
                    marginTop: "20px",
                    fontSize: "20px",
                    width: "65%",
                  }}
                >
                  Our trainer Harvesting Supervisors ensure only the best fruits
                  are packed
                </p>
                <p style={{ textAlign: "start", fontSize: "20px" }}>
                  #all<label style={{ color: "brown" }}>Safe</label> #all
                  <label style={{ color: "brown" }}>Good</label>
                </p>
              </div>
              <img
                style={{ width: "50%", borderRadius: "15px" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-2_guetzli-min.jpg?v=1622009925"
              />
            </div>
            
            
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                // border: "1px solid ",
                width: "80%",
                margin: "auto",
              }}
            >
             
             
             
              <div style={{ marginTop: "100px", marginLeft: "30px" }}>
                <h1 style={{ textAlign: "start", fontSize: "30px" }}>
                  Earning the Kimaye badge
                </h1>
                <p
                  style={{
                    textAlign: "start",
                    marginTop: "20px",
                    fontSize: "20px",
                    width: "65%",
                  }}
                >
                  Stringent quality checks at our automated pack house ensure
                  only the the best fruits go thrugh
                </p>
              </div>
              <img
                style={{ width: "50%", borderRadius: "15px" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-3_guetzli-min.jpg?v=1614755148"
              />
            </div>
        
        
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                // border: "1px solid ",
                width: "80%",
                margin: "auto",
              }}
            >
           
           
              <div style={{ marginTop: "100px", marginLeft: "30px" }}>
                <h1 style={{ textAlign: "start", fontSize: "30px" }}>
                  Zero-touch procesess
                </h1>
                <p
                  style={{
                    textAlign: "start",
                    marginTop: "20px",
                    fontSize: "20px",
                    width: "65%",
                  }}
                >
                  The fruits are then packages and delivers fresh in
                  acontaimination-free environment
                </p>
              </div>
              <img
                style={{ width: "50%", borderRadius: "15px" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-4_guetzli-min.jpg?v=1622009925"
              />
            </div>
           
           
           
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                // border: "1px solid ",
                width: "80%",
                margin: "auto",
              }}
            >
              <div style={{ marginTop: "100px", marginLeft: "30px" }}>
                <h1 style={{ textAlign: "start", fontSize: "30px" }}>
                  Finally
                </h1>
                <p
                  style={{
                    textAlign: "start",
                    marginTop: "20px",
                    fontSize: "20px",
                    width: "65%",
                  }}
                >
                  Tell us all about hou you enjoy our Fruites using
                </p>
                <p style={{ textAlign: "start", fontSize: "20px" }}>
                  #all<label style={{ color: "brown" }}>Safe</label> #all
                  <label style={{ color: "brown" }}>Good</label>
                </p>
              </div>
              <img
                style={{ width: "50%", borderRadius: "15px" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-5_guetzli-min.jpg?v=1622009925"
              />
            </div>
          </Carousel>
        </div>
      </div>

      {/* JAZZ IT UP WITH FRUITS */}
     
     
      <div
        style={{
          border: "1px solid",
          height: "auto",
          backgroundColor: "#f6d153",
          borderColor: "#f6d153",
        }}
      >
       
        <div style={{ marginTop: "60px", marginBottom: "60px" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            JAZZ IT UP WITH FRUITS
          </h1>
          
          
          <div>
            <Carousel autoPlay>
              <div
                style={{
                 
                  display: "flex",
                  // justifyContent: "space-evenly",
                  justifyContent: "center",
                  gap: "30px",
                  // border: "1px solid",
                  height: "380px",
                  marginTop: "40px",
                }}
              >
                <img
               
               style={{ width: "38%", borderRadius: "30px" }}
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_334275008-2-opt2-1900px_720x.jpg?v=1627119119"
                />
                <img
                  style={{ width: "38%", borderRadius: "30px" }}
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_201343750_copy__66kb-1000px_720x.jpg?v=1626676701"
                />
              </div>
              <div
                style={{
                
                  display: "flex",
                  // justifyContent: "space-evenly",
                  justifyContent: "center",
                  gap: "30px",
                  // border: "1px solid",
                  height: "380px",
                  marginTop: "40px",
                }}
              >
                <img
               
               style={{ width: "38%", borderRadius: "30px" }}
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_77286816-min__1625567830_114.143.85.97_720x.jpg?v=1625638895"
                />
                <img
                  style={{ width: "38%", borderRadius: "30px" }}
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/Blog_-_Benefits_of_fruits_720x.jpg?v=1625147388"
                />
              </div>
              <div
                style={{
               
                  display: "flex",
                  // justifyContent: "space-evenly",
                  justifyContent: "center",
                  gap: "30px",
                  // border: "1px solid",
                  height: "380px",
                  marginTop: "40px",
                }}
              >
                <img
                  style={{ width: "38%", borderRadius: "30px" }}
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/Untitled_design_51-min_720x.png?v=1614341965"
                />
                <img
                  style={{ width: "38%", borderRadius: "30px" }}
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/immune_system_1728x-min_720x.jpg?v=1614342193"
                />
              </div>
              <div
              
              style={{
                  display: "flex",
                  // justifyContent: "space-evenly",
                  justifyContent: "center",
                  gap: "30px",
                  // border: "1px solid",
                  height: "380px",
                  marginTop: "40px",
                }}
              >
              
                <img
                  style={{ width: "38%", borderRadius: "30px" }}
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/pomegranate-min_720x.jpg?v=1614342435"
                />
                <img
                  style={{ width: "38%", borderRadius: "30px" }}
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/healthy_heart-min_720x.jpg?v=1614342271"
                />
              </div>
            </Carousel>
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
