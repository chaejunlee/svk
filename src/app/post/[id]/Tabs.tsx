"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export function Tabs() {
  const [menu, setMenu] = React.useState(1);
  const menuClick = (m: number) => {
    setMenu(m);
  };

  return (
    <div className="sticky top-[56px] flex justify-around border-b-2 bg-background/80 px-2">
      <Link href={"#home"} scroll={true}>
        <div
          onClick={() => menuClick(1)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center text-gray-400"
          style={{
            color:
              menu == 1 ? "black" : "rgb(156 163 175 / var(--tw-text-opacity))",
          }}
        >
          홈
        </div>
        {menu == 1 && (
          <motion.div layoutId="menu" className="h-[2px] w-12 bg-black" />
        )}
      </Link>
      <Link href={"#hours"} scroll={true}>
        <div
          onClick={() => menuClick(2)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center text-gray-400"
          style={{
            color:
              menu == 2 ? "black" : "rgb(156 163 175 / var(--tw-text-opacity))",
          }}
        >
          시간
        </div>
        {menu == 2 && (
          <motion.div layoutId="menu" className="h-[2px] w-12 bg-black" />
        )}
      </Link>
      <Link href={"#maps"} scroll={true}>
        <div
          onClick={() => menuClick(3)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center text-gray-400"
          style={{
            color:
              menu == 3 ? "black" : "rgb(156 163 175 / var(--tw-text-opacity))",
          }}
        >
          지도
        </div>
        {menu == 3 && (
          <motion.div layoutId="menu" className="h-[2px] w-12 bg-black" />
        )}
      </Link>
      <Link href={"#menu"} scroll={true}>
        <div
          onClick={() => menuClick(4)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center text-gray-400"
          style={{
            color:
              menu == 4 ? "black" : "rgb(156 163 175 / var(--tw-text-opacity))",
          }}
        >
          메뉴
        </div>
        {menu == 4 && (
          <motion.div layoutId="menu" className="h-[2px] w-12 bg-black" />
        )}
      </Link>
      <Link href={"#reviews"} scroll={true}>
        <div
          onClick={() => menuClick(5)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center text-gray-400"
          style={{
            color:
              menu == 5 ? "black" : "rgb(156 163 175 / var(--tw-text-opacity))",
          }}
        >
          리뷰
        </div>
        {menu == 5 && (
          <motion.div layoutId="menu" className="h-[2px] w-12 bg-black" />
        )}
      </Link>
    </div>
  );
}
