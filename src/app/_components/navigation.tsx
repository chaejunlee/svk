"use client";

import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-row justify-around">
      <li
        className={`flex flex-col items-center justify-center gap-1 ${
          pathname === "/" ? "text-primary" : "text-gray-400"
        }`}
      >
        <Link
          href="/"
          className="1ext-xs flex cursor-pointer flex-col items-center gap-2 uppercase"
        >
          <div className="flex aspect-square items-center justify-center">
            <HomeIcon className="w-7" />
          </div>
          홈
        </Link>
      </li>
      <li
        className={`flex flex-col items-center justify-center gap-1 ${
          pathname === "/search" ? "text-primary" : "text-gray-400"
        }`}
      >
        <Link
          href="/search"
          className="flex cursor-pointer flex-col items-center gap-1 text-xs uppercase"
        >
          <div className="flex aspect-square  items-center justify-center">
            <MagnifyingGlassIcon className="w-7" />
          </div>
          검색
        </Link>
      </li>
      <li
        className={`flex flex-col items-center justify-center gap-1 ${
          pathname === "/mypage" ? "text-primary" : "text-gray-400"
        }`}
      >
        <Link
          href="/mypage"
          className="flex cursor-pointer flex-col items-center gap-1 text-xs uppercase"
        >
          <div className="flex aspect-square  items-center justify-center">
            <UserIcon className="w-7" />
          </div>
          마이페이지
        </Link>
      </li>
    </ul>
  );
}
