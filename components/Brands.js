import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Brands() {
  return (
    <div className="lg:px-52 flex lg:flex-row flex-wrap lg:justify-between pb-6 gap-6 px-20">
      <motion.img
        src="https://nft-29rm65xpk-namyakhan.vercel.app/images/logos/venly-logo.svg"
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.5 }}
      ></motion.img>
      <motion.img
        src="https://nft-29rm65xpk-namyakhan.vercel.app/images/logos/openSea-logo.svg"
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.7 }}
      ></motion.img>
      <motion.img
        src="https://nft-29rm65xpk-namyakhan.vercel.app/images/logos/enjin-logo.svg"
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 0.9 }}
      ></motion.img>
      <motion.img
        src="https://nft-29rm65xpk-namyakhan.vercel.app/images/logos/wazirx-logo.svg"
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 1.1 }}
      ></motion.img>
      <motion.img
        src="https://nft-29rm65xpk-namyakhan.vercel.app/images/logos/trustWallet-logo.svg"
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3, delay: 1.3 }}
      ></motion.img>
      {/* <img src='https://nft-29rm65xpk-namyakhan.vercel.app/images/logos/openSea-logo.svg'></img>
        <img src='https://nft-29rm65xpk-namyakhan.vercel.app/images/logos/enjin-logo.svg'></img>
        <img src='https://nft-29rm65xpk-namyakhan.vercel.app/images/logos/wazirx-logo.svg'></img>
        <img src='https://nft-29rm65xpk-namyakhan.vercel.app/images/logos/wazirx-logo.svg'></img> */}
    </div>
  );
}

export default Brands;
