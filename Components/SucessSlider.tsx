import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
// import { Text, Title } from "@mantine/core";

const successes = [
  {
    category: "Wigs ",
  },
  {
    category: "Toys",
  },
  {
    category: "Beauty",
  },
  {
    category: "Fashion",
  },
  {
    category: "Accessories",
  },
  {
    category: "Merch",
  },
];
function SucessSlider() {
  return (
    <div className="topbar-scroll">
      <Marquee pauseOnHover speed={50} autoFill>
        {successes.map((list) => (
          <div key={list.category}>
            <p>{list.category}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default SucessSlider;
