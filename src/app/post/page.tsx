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

export default async function Page() {
  const session = await getServerAuthSession();

  return (
    <main className="relative mx-auto flex min-h-[100svh] max-w-lg flex-col border-2 bg-gray-50">
      <div
        className="relative h-[500px] w-[500px] object-cover"
        style={{
          background:
            "url('https://www.helpinhearing.co.uk/wp-content/uploads/2019/01/image-placeholder-500x500.jpg')",
        }}
      >
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <ChevronLeftIcon width={40} className="cursor-pointer" /> Search
          </div>
          <div className="flex items-center gap-3">
            <BookmarkIcon width={20} className="cursor-pointer" />
            <ShareIcon width={20} className="cursor-pointer" />
            <EllipsisVerticalIcon width={25} className="cursor-pointer" />
          </div>
        </div>
        <div className=" absolute bottom-10 left-10 flex flex-col gap-2">
          <div className="text-2xl font-bold">보까 미용실</div>
          <div className="flex gap-5">
            <div>⭐️⭐️⭐️⭐️⭐️</div>
            <div>44 Reviews</div>
          </div>
        </div>
        <div className="absolute bottom-2 flex w-full justify-center gap-2">
          <div className="h-2 w-2 rounded bg-white"></div>
          <div className="h-2 w-2 rounded bg-slate-400"></div>
          <div className="h-2 w-2 rounded bg-slate-400"></div>
          <div className="h-2 w-2 rounded bg-slate-400"></div>
        </div>
      </div>
      <div className="flex justify-between border-b-2 border-slate-500  px-10 py-4">
        <div className="w-20 text-center">Overview</div>
        <div className="w-20 text-center">Menu</div>
        <div className="w-20 text-center">Pictures</div>
      </div>
      <div className="my-10 flex flex-col px-6">
        <div>미용/네일/카테고리</div>
        <div className="my-10">closed now</div>
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
    </main>
  );
}
