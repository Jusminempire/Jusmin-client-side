import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { db } from "../Firebase";
import Image from "next/image";
import { useRouter } from "next/router";
// import React from "react";

function Carousely() {
  // FETCHING BANNER SORTED FROM FIREBABSE
  const router = useRouter();
  const [bannerDetails, setBannerDetails] = useState([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "banneritems"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setBannerDetails(snapshot.docs);
      }
    );
  }, [db, router]);

  console.log(bannerDetails[0]?.data().bannercategory);
  return (
    <div className="carousel-con">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        swipeable={true}
        interval={4000}
      >
        {/* </div> */}
        <div className="carousel-items-con">
          <Image
            src={bannerDetails[0]?.data().bannerimage}
            alt=""
            className="img"
            fill
            sizes="100vw"
            style={{
              right: "0",
            }}
          />
        </div>
        <div className="carousel-items-con">
          <Image
            src={bannerDetails[1]?.data().bannerimage}
            alt=""
            className="img"
            fill
            sizes="100vw"
            style={{
              right: "0",
            }}
          />
        </div>
        <div className="carousel-items-con">
          <Image
            src={bannerDetails[2]?.data().bannerimage}
            alt=""
            className="img"
            fill
            sizes="100vw"
            style={{
              right: "0",
            }}
          />
        </div>
        <div className="carousel-items-con">
          <Image
            src={bannerDetails[3]?.data().bannerimage}
            alt=""
            className="img"
            fill
            sizes="100vw"
            style={{
              right: "0",
            }}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousely;
