import { getServerAuthSession } from "@/server/auth";
import { Navigation } from "@/app/_components/navigation";
import { BottomNav } from "../_components/bottom-nav";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const session = await getServerAuthSession();

  // if (!session?.user) {
  //   return (
  //     <div className="flex h-[100dvh] flex-col items-center justify-center">
  //       <h1 className="text-3xl font-bold">Welcome to SVK Shop</h1>
  //       <p className="text-lg">Please log in to continue.</p>
  //       <Link
  //         href="/api/auth/signin"
  //         className="rounded-full bg-gray-50/10 px-10 py-3 font-semibold no-underline transition hover:bg-gray-50/20"
  //       >
  //         Sign in
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <>
      <h3 className="px-6 py-6 text-xl font-semibold">예약 현황</h3>
      <div className="flex flex-col gap-4 px-6">
        <div className="flex w-full overflow-hidden rounded-lg border">
          <div className="relative">
            <Badge variant="secondary" className="absolute left-4 top-4">
              확인 중
            </Badge>
            <Image
              className="h-48 w-full origin-center overflow-hidden object-cover"
              src="https://placehold.co/400/png"
              width="400"
              height="400"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-1 bg-gray-50 p-4 p-4">
            <h4 className="text-lg font-semibold">
              롯데 미용실 - Lotte Beauty Salon
            </h4>
            <p className="text-sm text-gray-400">
              1860 Fillmore St, San Francisco
            </p>
            <p className="text-sm">2021년 10월 10일 10:00</p>
            <p className="text-sm">1명</p>
          </div>
        </div>
        <div className="flex w-full  overflow-hidden rounded-lg border">
          <div className="relative">
            <Badge variant="destructive" className="absolute left-4 top-4">
              취소
            </Badge>
            <Image
              className="h-48 w-full origin-center overflow-hidden object-cover"
              src="https://placehold.co/400/png"
              width="400"
              height="400"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-1 bg-gray-50 p-4 p-4">
            <h4 className="text-lg font-semibold">
              롯데 미용실 - Lotte Beauty Salon
            </h4>
            <p className="text-sm text-gray-400">
              1860 Fillmore St, San Francisco
            </p>
            <p className="text-sm">2021년 10월 10일 10:00</p>
            <p className="text-sm">1명</p>
          </div>
        </div>
        <div className="flex w-full overflow-hidden rounded-lg border">
          <div className="relative">
            <Badge variant="default" className="absolute left-4 top-4">
              예약 완료
            </Badge>
            <Image
              className="h-48 w-full origin-center overflow-hidden object-cover"
              src="https://placehold.co/400/png"
              width="400"
              height="400"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-1 bg-gray-50 p-4">
            <h4 className="text-lg font-semibold">
              롯데 미용실 - Lotte Beauty Salon
            </h4>
            <p className="text-sm text-gray-400">
              1860 Fillmore St, San Francisco
            </p>
            <p className="text-sm">2021년 10월 10일 10:00</p>
            <p className="text-sm">1명</p>
          </div>
        </div>
        <div className="flex w-full overflow-hidden rounded-lg border">
          <div className="relative">
            <Badge variant="outline" className="absolute left-4 top-4">
              방문 완료
            </Badge>
            <Image
              className="h-48 w-full origin-center overflow-hidden object-cover"
              src="https://placehold.co/400/png"
              width="400"
              height="400"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-1 bg-gray-50 p-4">
            <h4 className="text-lg font-semibold">
              롯데 미용실 - Lotte Beauty Salon
            </h4>
            <p className="text-sm text-gray-400">
              1860 Fillmore St, San Francisco
            </p>
            <p className="text-sm">2021년 10월 10일 10:00</p>
            <p className="text-sm">1명</p>
          </div>
        </div>
      </div>
    </>
  );
}
