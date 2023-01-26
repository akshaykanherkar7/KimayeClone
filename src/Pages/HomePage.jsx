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
                onClick={() => navigate("/collections/allfruits")}
                style={{ width: "90%", marginLeft: "25px" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-1-min_670x.png?v=1614338437"
                alt=""
              />
              <h1>ALL FRUITS</h1>
              <p>Pick and choose from a wide range of delicious fruits</p>
              <button onClick={() => navigate("/collections/allfruits")}>
                Shop Now
              </button>
            </div>
            <div>
              <img
                onClick={() => navigate("/collections/freshcuts")}
                style={{ width: "81.8%", marginLeft: "25px" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_670x.png?v=1614338730"
                alt=""
              />
              <h1>FRESH CUTS</h1>
              <p>We want to spoon-feed you… quite literally</p>
              <button onClick={() => navigate("/collections/freshcuts")}>
                Shop Now
              </button>
            </div>
          </div>
          <div className={styles.FlexBox1}>
            <div>
              <img
                onClick={() => navigate("/collections/fruitcombos")}
                style={{ width: "90%" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_670x.jpg?v=1614339080"
                alt=""
              />
              <h1>FRUIT COMBOS</h1>
              <p>Indulge in fruit combinations created by us</p>
              <button onClick={() => navigate("/collections/fruitcombos")}>
                Shop Now
              </button>
            </div>
            <div>
              <img
                onClick={() => navigate("/collections/giftsbykimaye")}
                style={{ width: "90%" }}
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/2I8A6078_670x.jpg?v=1631516874"
                alt=""
              />
              <h1>GIFTS BY KIMAYE</h1>
              <p>Healthy & memorable gifts for your loved ones</p>
              <button onClick={() => navigate("/collections/giftsbykimaye")}>
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
                  src="https://imgs.search.brave.com/XReMHbbEK4l40X8q7xKYKkn1pcD0B-ftzc12fO2cNTA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/YWljSk4zb3JWNmhv/UkJRMWRRWVhRSGFI/YSZwaWQ9QXBp"
                />
                <img
                  style={{ width: "38%", borderRadius: "30px" }}
                  src="https://imgs.search.brave.com/hw0VxRPXB2HWGW6kz7ywO-n60cOvQ-0GxDnbWdqynls/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/MXFiRlhYMWctRFdz/WVJ1YlotMFJ3SGFI/YSZwaWQ9QXBp"
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
                  src="https://imgs.search.brave.com/AeXX8Cvw4DhRgyhoQO7PNCkqGMGA2RtOzdIajYEZK18/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/OHVobXNlT3g2bmYw/Z2lkU0xmZzlnSGFI/YSZwaWQ9QXBp"
                />
                <img
                  style={{ width: "38%", borderRadius: "30px" }}
                  src="https://imgs.search.brave.com/G9OJdCv_Ab9aUuZqaceMfBEUm1aKb4lid3ySQaKSu4c/rs:fit:542:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/cjZwN2hhZFFLeGpa/d3RJOGE0Q1VnQUFB/QSZwaWQ9QXBp"
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
                  src="https://imgs.search.brave.com/YC0_Y7iof7gAEO_4pc1gevx4zA5NYrCQiOb8lufAZGs/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/N2lmc3NaRDJoVTF3/U3dyTjgwaFBRSGFI/YSZwaWQ9QXBp"
                />
                <img
                  style={{ width: "38%", borderRadius: "30px" }}
                  src="https://imgs.search.brave.com/U_oeVYb1vzWh5SnM61jkUcVMyKx4tzO1ybAmnwmG5fQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/S3ZBLTFFcVgzZkMw/eFRYbjdVWTFRSGFI/YSZwaWQ9QXBp"
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
                  src="https://imgs.search.brave.com/h-1S41xblhIiU8mFMzaQDdg_KswupGvbRKKysv-0N-s/rs:fit:558:225:1/g:ce/aHR0cHM6Ly90c2Uz/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5UWk9wSUVW/cDFSY3Fna2dBNEhI/cHhBSGFHUyZwaWQ9/QXBp"
                />
                <img
                  style={{ width: "38%", borderRadius: "30px" }}
                  src="https://imgs.search.brave.com/7ISp8wZ6qsybpfxExOZI7yHmB_om-twOPtGWc9wGFgs/rs:fit:516:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/bG1iaVEzNF94a0J5/MURScWFNQzZ3SGFH/eiZwaWQ9QXBp"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* PSST LOKIN FOR US  */}
      <div className={styles.psstContainer}>
        <h1>PSST… LOOKIN’S FOR US?</h1>
        <h3>We are here</h3>
        <div className={styles.psstImg}>
          <img
            src="https://scontent.cdninstagram.com/v/t51.29350-15/288729804_1882017905320903_7039153723055100976_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=UToTwewW4PoAX87_n2w&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_Jkw1DlsY2sMvg53-HD2itVG7jBskcakVdWNbyYpAaEA&oe=62B4021E"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.29350-15/288862020_5365198483530834_5780481173234980539_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=GuWb7Om_3lIAX-FR3s3&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9Lbv5i8ADcrdvxo35lDvXrOt0qDRRagZDDNJHAnmmcyw&oe=62B36E7A"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.29350-15/287998135_425802062515036_1538122002023877767_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ARlxlou9v4YAX95BOYN&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_OZc1dJPsPFihJg15wZ--NLenq2IWqGJrKfuqdPqQqKQ&oe=62B41737"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.29350-15/287777520_709043673687257_3035340965363558444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Wpp0wUyC2dkAX_X2IHq&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_tWR0Ng9C_4SvchWOPd1qFHK-B_ZAG8EBsmBxzgGBq7w&oe=62B3B77F"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
