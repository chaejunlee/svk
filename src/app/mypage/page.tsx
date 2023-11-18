import { getServerAuthSession } from "@/server/auth";
import Image from "next/image";
import Link from "next/link";

async function Profile() {
  const session = await getServerAuthSession();

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex h-20 w-20 rounded-full bg-blue-100">
        <Image
          src={session?.user.image ?? "/avatar.png"}
          alt=""
          height="100"
          width="100"
          className="block overflow-hidden rounded-full"
        />
      </div>
      <div className="text-xl">{session?.user.name ?? "홍길동"}</div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <header className="grid w-full place-content-center py-4 text-xl font-bold">
        프로필
      </header>
      <main className="min-h-screen p-8">
        <Profile />
        <h3 className="my-4 text-lg font-bold">예약</h3>
        <div className="flex flex-col gap-3">
          <Link className="text-xl hover:text-gray-500" href={"mypage/book"}>
            예약 현황
          </Link>
          <Link className="text-xl hover:text-gray-500" href={"mypage/manage"}>
            예약 관리
          </Link>
        </div>
        <Link className="text-xl " href="/api/auth/signout">
          로그아웃
        </Link>
      </main>
    </>
  );
}
