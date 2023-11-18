"use client";

import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathnames = usePathname().split("/");
  const pathname = pathnames[1];
  console.log(pathname);

  return (
    <ul className="flex flex-row justify-around">
      <li>
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-1 ${
            pathname === "" ? "text-primary" : "text-gray-400"
          }`}
        >
          <div className="flex aspect-square items-center justify-center">
            <HomeIcon className="w-7" />
          </div>
          <span className="text-xs uppercase">홈</span>
        </Link>
      </li>
      <li>
        <Link
          href="/search"
          className={`flex flex-col items-center justify-center gap-1 ${
            pathname === "search" ? "text-primary" : "text-gray-400"
          }`}
        >
          <div className="flex aspect-square  items-center justify-center">
            <MagnifyingGlassIcon className="w-7" />
          </div>
          <div className="text-xs uppercase">검색</div>
        </Link>
      </li>
      <li>
        <Link
          href="/mypage"
          className={`flex flex-col items-center justify-center gap-1 ${
            pathname === "mypage" ? "text-primary" : "text-gray-400"
          }`}
        >
          <div className="flex aspect-square  items-center justify-center">
            <UserIcon className="w-7" />
          </div>
          <div className="text-xs uppercase">마이페이지</div>
        </Link>
      </li>
    </ul>
  );
}
