"use client";

import {
  ChevronLeftIcon,
  ShareIcon,
  PhoneIcon,
  GlobeAsiaAustraliaIcon,
  QrCodeIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  const [menu, setMenu] = React.useState(1);
  const menuClick = (m: number) => {
    setMenu(m);
  };

  return (
    <>
      <GoBack />
      <div className="relative">
        <div className="relative h-[40vh] min-h-[300px]">
          <Image
            className="absolute top-0 h-[40vh] min-h-[300px] w-full overflow-hidden object-cover"
            src="https://placehold.co/500/png"
            alt="test"
            width="500"
            height="500"
          />

          <div className="absolute bottom-0 flex flex-col gap-2 px-6 py-6 drop-shadow-lg ">
            <div className="text-2xl font-bold">
              롯데 미용실 - Lotte Beauty Salon
            </div>
            <div className="flex flex-col">
              <span className="text-primary">★ 3.5 (123)</span>
              <span>미용/네일/카테고리</span>
              <div className="flex gap-2">
                <span className="flex gap-2 text-red-600">Closed</span>11:00 AM
                - 12:00 AM
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-[56px] flex justify-around border-b-2 bg-background/80 px-2">
        <div
          onClick={() => menuClick(1)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center text-gray-400"
        >
          홈
        </div>
        <div
          onClick={() => menuClick(2)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center text-gray-400"
        >
          시간
        </div>
        <div
          onClick={() => menuClick(3)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center text-gray-400"
        >
          지도
        </div>
        <div
          onClick={() => menuClick(4)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center text-gray-400"
        >
          메뉴
        </div>
        <div
          onClick={() => menuClick(5)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center text-gray-400"
        >
          리뷰
        </div>
      </div>
      <div className="flex flex-col px-6 py-10">
        <div className="flex justify-between px-4">
          <div className="flex flex-col items-center justify-center">
            <div className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300">
              <PhoneIcon width={30} />
            </div>
            <div>Call</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300">
              <GlobeAsiaAustraliaIcon width={30} />
            </div>
            <div>Website</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300">
              <ShareIcon width={30} />
            </div>
            <div>Share</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300">
              <QrCodeIcon width={30} />
            </div>
            <div>Reserve</div>
          </div>
        </div>
        <div className="mt-5 text-2xl font-bold">시간</div>
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex">
            <div className="w-20">Mon</div>
            <div>11:30 AM - 10:00 PM</div>
          </div>
          <div className="flex">
            <div className="w-20">Tue</div>
            <div>11:30 AM - 10:00 PM</div>
          </div>
          <div className="flex">
            <div className="w-20">Wed</div>
            <div>12:00 PM - 10:00 PM</div>
          </div>
          <div className="flex">
            <div className="w-20">Thu</div>
            <div>11:30 AM - 10:00 PM</div>
          </div>
          <div className="flex">
            <div className="w-20">Fri</div>
            <div>11:30 AM - 12:00 AM</div>
          </div>
          <div className="flex">
            <div className="w-20 text-blue-500">Sat</div>
            <div>11:30 AM - 12:00 AM</div>
          </div>
          <div className="flex">
            <div className="w-20 text-red-500">Sun</div>
            <div>11:30 AM - 10:00 PM</div>
          </div>
        </div>
        <div className="mt-5 text-2xl font-bold">지도</div>
        <div className="mt-3 h-96 w-full bg-slate-200">Map</div>
        <div className="my-5 text-2xl font-bold">메뉴</div>{" "}
        <div className="flex items-center gap-3">
          <div className="h-30 w-30  bg-red-500"></div>
          <div className="flex flex-col gap-3">
            <span className="text-xl">커트</span>
          </div>
        </div>
        <div>
          <div className="mt-5 text-2xl font-bold">리뷰</div>
          <div className="mb-10 mt-6 flex items-center gap-10">
            <div>
              <div>Overall rating</div>
              <div className="text-lg">⭐️⭐️⭐️⭐️⭐️</div>
              <div className="text-sm text-slate-400">44 Reviews</div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="text-xs">5</div>
                <div className="h-2 w-[250px] rounded bg-red-500"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs">4</div>
                <div className="h-2 w-[100px] rounded bg-red-400"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs">3</div>
                <div className="h-2 w-[50px] rounded bg-red-300"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs">2</div>
                <div className="h-2 w-[30px] rounded bg-red-200"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs">1</div>
                <div className="h-2 w-[20px] rounded bg-red-100"></div>
              </div>
            </div>
          </div>
          <div className="my-2 mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="https://placehold.co/400/png"
                alt="profile"
                width={25}
                height={25}
                className="rounded-full"
              />
              <div>John</div>
              <div className="text-xs text-slate-400">★3.5 • 5min ago</div>
            </div>
            <div>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </div>
          </div>
          <div className="my-2 mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="https://placehold.co/400/png"
                alt="profile"
                width={25}
                height={25}
                className="rounded-full"
              />
              <div>Amy</div>
              <div className="text-xs text-slate-400">★3.5 • 7 hours ago</div>
            </div>
            <div>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </div>
          </div>
          <div className="my-2 mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="https://placehold.co/400/png"
                alt="profile"
                width={25}
                height={25}
                className="rounded-full"
              />
              <div>Susan</div>
              <div className="text-xs text-slate-400">★4.2 • a day ago</div>
            </div>
            <div>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </div>
          </div>
          <div className="my-2 mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="https://placehold.co/400/png"
                alt="profile"
                width={25}
                height={25}
                className="rounded-full"
              />
              <div>Lauren</div>
              <div className="text-xs text-slate-400">★2 • 2 days ago</div>
            </div>
            <div>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </div>
          </div>
          <div className="my-2 mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="https://placehold.co/400/png"
                alt="profile"
                width={25}
                height={25}
                className="rounded-full"
              />
              <div>Steve</div>
              <div className="text-xs text-slate-400">★5 • a week ago</div>
            </div>
            <div>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function GoBack() {
  return (
    <div className="sticky top-0 z-10 block bg-background/80 py-2">
      <Link href="../" className="flex items-center gap-1 px-2">
        <ChevronLeftIcon width={40} className="cursor-pointer" />
        뒤로가기
      </Link>
    </div>
  );
}
