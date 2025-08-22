/*"use client"

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;

*/
// app/components/helper/animation-lottie.jsx
"use client"; // mark this as a client component

import dynamic from "next/dynamic";

// dynamically import Lottie so it only runs on client
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function AnimationLottieWrapper({ animationPath }) {
  return <Lottie animationData={animationPath} loop={true} autoplay={true} />;
}



