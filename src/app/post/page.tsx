import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getServerAuthSession } from "@/server/auth";
import {
  ChevronLeftIcon,
  BookmarkIcon,
  ShareIcon,
  EllipsisVerticalIcon,
  PhoneIcon,
  GlobeAsiaAustraliaIcon,
  QrCodeIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
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

          <div className="absolute bottom-0 flex flex-col gap-2 px-6 py-6 drop-shadow-lg">
            <div className="text-2xl font-bold">
              롯데 미용실 - Lotte Beauty Salon
            </div>
            <div>
              <span className="text-primary">★ 3.5</span>
              <span className="text-primary"> (123)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background/80 sticky top-[56px] flex justify-around border-b-2 px-2 py-4">
        <div className="w-20 text-center">Overview</div>
        <div className="w-20 text-center">Menu</div>
        <div className="w-20 text-center">Pictures</div>
      </div>
      <div className="flex flex-col px-6 py-10">
        <div>미용/네일/카테고리</div>
        <div className="py-10">closed now</div>
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
        <div className="my-10 h-96 w-full bg-slate-200">Map</div>
        <div>
          <div className="text-3xl font-bold">Reviews</div>
          <div className="mt-6 flex items-center gap-10">
            <div>
              <div className="text-sm">Overall rating</div>
              <div className="text-lg">⭐️⭐️⭐️⭐️⭐️</div>
              <div className="text-sm">44 Reviews</div>
            </div>
            <div>
              <div className="text-sm">5</div>
              <div className="text-sm">4</div>
              <div className="text-sm">3</div>
              <div className="text-sm">2</div>
              <div className="text-sm">1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function GoBack() {
  return (
    <div className="bg-background/80 sticky top-0 z-10 block py-2">
      <Link href="../" className="flex items-center gap-1 px-2">
        <ChevronLeftIcon width={40} className="cursor-pointer" />
        뒤로가기
      </Link>
    </div>
  );
}
