"use client";

import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <ul className="flex flex-row justify-around">
      <li
        className={`flex flex-col items-center justify-center gap-1 ${
          pathname === "/" ? "text-primary" : "text-gray-400"
        }`}
      >
        <div className="flex aspect-square items-center justify-center">
          <HomeIcon className="w-7" />
        </div>
        <span className="text-xs uppercase">홈</span>
      </li>
      <li
        className={`flex flex-col items-center justify-center gap-1 ${
          pathname === "/search" ? "text-primary" : "text-gray-400"
        }`}
      >
        <div className="flex aspect-square  items-center justify-center">
          <MagnifyingGlassIcon className="w-7" />
        </div>
        <span className="text-xs uppercase">검색</span>
      </li>
      <li
        className={`flex flex-col items-center justify-center gap-1 ${
          pathname === "/mypage" ? "text-primary" : "text-gray-400"
        }`}
      >
        <div className="flex aspect-square  items-center justify-center">
          <UserIcon className="w-7" />
        </div>
        <span className="text-xs uppercase">마이페이지</span>
      </li>
    </ul>
  );
}
