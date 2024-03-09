import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Blockquote } from "@mantine/core";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../Firebase";
const defaultAdImg =
  "https://res.cloudinary.com/isreal/image/upload/v1682609506/E-Commerce%20Project/advert_ehvsy1.png";

function Advert() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  // FETCHING ADVERT SORTED FROM FIREBABSE
  const [advertDetails, setAdvertDetails] = useState([]);
  const [advertImg, setAdvertImg] = useState([]);
  const [advertLink, setAdvertLink] = useState("");
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "advert"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setAdvertDetails(snapshot.docs);
      }
    );
  }, [db]);
  useEffect(() => {
    setAdvertImg(advertDetails.map((item) => item.data().image));
  }, [db, advertDetails]);

  useEffect(() => {
    setAdvertLink(advertDetails.map((item) => item.data().adlink));
  }, [db, advertDetails]);

  return (
    <div className="ad-con">
      <Carousel
        slideSize="33.333333%"
        slideGap="md"
        dragFree
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        plugins={[autoplay.current]}
      >
        <Carousel.Slide>
          <div className="ad-img">
            {advertImg.length > 0 ? (
              <img src={advertImg[0][0]} lazy alt="add" />
            ) : (
              <img src={defaultAdImg} lazy alt="add" />
            )}
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="ad-img">
            {advertImg?.length > 0 ? (
              <img src={advertImg[0][1]} lazy alt="add" />
            ) : (
              <img src={defaultAdImg} lazy alt="add" />
            )}
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="ad-img">
            {advertImg.length > 0 ? (
              <img src={advertImg[0][2]} lazy alt="add" />
            ) : (
              <img src={defaultAdImg} lazy alt="add" />
            )}
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="ad-img">
            {advertImg.length > 0 ? (
              <img src={advertImg[0][3]} lazy alt="add" />
            ) : (
              <img src={defaultAdImg} lazy alt="add" />
            )}
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}

export default Advert;
