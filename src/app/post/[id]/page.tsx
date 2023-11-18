import { Badge } from "@/components/ui/badge";
import {
  ShareIcon,
  PhoneIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import GoBack from "../../_components/goback";
import { Tabs } from "./Tabs";
import { api } from "@/trpc/server";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await api.post.getPost.query({ id: Number.parseInt(params.id) });
  const rating = Math.round(Math.random() * 5 * 10) / 10;
  const reviews = Math.round(Math.random() * 1000);

  return (
    <>
      <GoBack />
      <div className="relative">
        <div className="relative h-[40vh] min-h-[300px]">
          <Image
            className="absolute top-0 -z-0 h-[40vh] min-h-[300px] w-full overflow-hidden object-cover"
            src={`https://picsum.photos/id/44${params.id}/400/400`}
            alt="test"
            width="500"
            height="500"
          />

          <div className="absolute bottom-0 flex w-full flex-col gap-2 bg-gradient-to-t from-gray-50/80 via-gray-50/50 to-transparent px-6 py-6 drop-shadow-lg">
            <Badge variant="default" className="w-fit">
              {post.post[0]?.storePost.price}
            </Badge>
            <div className="text-2xl font-bold">
              {post.post[0]?.storePost.title}
            </div>
            <div className="flex flex-col">
              <span className="text-primary">
                ★ {rating} ({reviews})
              </span>
              <span>{post.post[0]?.storePost.description}</span>
              <div className="flex gap-2">
                <span className="flex gap-2 text-destructive">Closed</span>11:00
                AM - 12:00 AM
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs />
      <div className="flex flex-col px-6 py-10">
        <div className="flex scroll-mt-32 justify-between  px-4 " id="home">
          <div className="flex flex-col items-center justify-center">
            <div className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200">
              <PhoneIcon width={30} />
            </div>
            <div>Call</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200">
              <GlobeAsiaAustraliaIcon width={30} />
            </div>
            <div>Website</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200">
              <ShareIcon width={30} />
            </div>
            <div>Share</div>
          </div>
        </div>
        <div className="mt-10 scroll-mt-32 text-2xl font-bold" id="hours">
          시간
        </div>
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
            <div className="w-20 text-red-500">Sat</div>
            <div>11:30 AM - 12:00 AM</div>
          </div>
          <div className="flex">
            <div className="w-20 text-blue-500">Sun</div>
            <div>11:30 AM - 10:00 PM</div>
          </div>
        </div>
        <div className="mt-10 scroll-mt-32 text-2xl  font-bold " id="maps">
          지도
        </div>
        <div className="mt-3 h-96 w-full rounded-lg bg-blue-100"></div>
        <div className="mb-5 mt-10 scroll-mt-32 text-2xl  font-bold " id="menu">
          메뉴
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-5">
            <div className="h-24 w-24  rounded-lg bg-blue-100"></div>
            <div className="flex w-60 flex-col gap-1">
              <span className="text-lg">커트</span>
              <span className="break text-sm">
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명
              </span>
              <span className=" text-base font-bold">$30.00</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="h-24 w-24  rounded-lg bg-blue-100"></div>
            <div className="flex w-60 flex-col gap-1">
              <span className="text-lg">커트</span>
              <span className="break text-sm">
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명
              </span>
              <span className=" text-base font-bold">$30.00</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="h-24 w-24  rounded-lg bg-blue-100"></div>
            <div className="flex w-60 flex-col gap-1">
              <span className="text-lg">커트</span>
              <span className="break text-sm">
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명
              </span>
              <span className=" text-base font-bold">$30.00</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="h-24 w-24  rounded-lg bg-blue-100"></div>
            <div className="flex w-60 flex-col gap-1">
              <span className="text-lg">커트</span>
              <span className="break text-sm">
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명
              </span>
              <span className=" text-base font-bold">$30.00</span>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-10 scroll-mt-32 text-2xl  font-bold " id="reviews">
            리뷰
          </div>
          <div className="mb-10 mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-10 ">
            <div>
              <div>Overall rating</div>
              <div className="text-lg">⭐️⭐️⭐️⭐️⭐️</div>
              <div className="text-sm text-slate-400">44 Reviews</div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="text-xs">5</div>
                <div className="h-2 w-[250px] rounded bg-blue-500"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs">4</div>
                <div className="h-2 w-[100px] rounded bg-blue-400"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs">3</div>
                <div className="h-2 w-[50px] rounded bg-blue-300"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs">2</div>
                <div className="h-2 w-[30px] rounded bg-blue-200"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs">1</div>
                <div className="h-2 w-[20px] rounded bg-blue-100"></div>
              </div>
            </div>
          </div>
          <div className="my-2 mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={`https://picsum.photos/seed/${new Date()
                  .toDateString()
                  .split(" ")
                  .join("-")}/400/400?random`}
                alt="profile"
                width={25}
                height={25}
                className="rounded-full"
              />
              <div>hnu***</div>
              <div className="text-xs text-slate-400">★3.5 • 5min ago</div>
            </div>
            <div className="text-sm">뷰맛집 미용실.</div>
          </div>
          <div className="my-2 mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={`https://picsum.photos/seed/${new Date()
                  .toDateString()
                  .split(" ")
                  .join("-")}/400/400?random`}
                alt="profile"
                width={25}
                height={25}
                className="rounded-full"
              />
              <div>enu***</div>
              <div className="text-xs text-slate-400">★3.5 • 7 hours ago</div>
            </div>
            <div className="text-sm">
              허리내려오는 긴머리라 머리결 좋아질까 해서 수분케어했는데 스팀
              한번말고는 다른케어는 없었어요 ~~^^ 근데 머리컷이 넘 맘에드네요
              드라이도 이쁘게 해주었고 설명도 친절하게 해주셨어요~
            </div>
          </div>
          <div className="my-2 mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={`https://picsum.photos/seed/svk/400/400?random=${params.id}`}
                alt="profile"
                width={25}
                height={25}
                className="rounded-full"
              />
              <div>sus***</div>
              <div className="text-xs text-slate-400">★4.2 • a day ago</div>
            </div>
            <div className="text-sm">뷰맛집 미용실.</div>
          </div>
          <div className="my-2 mb-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={`https://picsum.photos/seed/${new Date()
                  .toDateString()
                  .split(" ")
                  .join("-")}/400/400?random`}
                alt="profile"
                width={25}
                height={25}
                className="rounded-full"
              />
              <div>skk***</div>
              <div className="text-xs text-slate-400">★2 • 2 days ago</div>
            </div>
            <div className="text-sm">
              허리내려오는 긴머리라 머리결 좋아질까 해서 수분케어했는데 스팀
              한번말고는 다른케어는 없었어요 ~~^^ 근데 머리컷이 넘 맘에드네요
              드라이도 이쁘게 해주었고 설명도 친절하게 해주셨어요~
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
