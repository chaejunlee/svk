import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="grid h-12 w-full place-content-center text-xl font-bold">
        프로필
      </header>
      <main className="p-8">
        <div className="flex items-center gap-3">
          <div className="h-20 w-20  rounded-full bg-blue-100"></div>
          <div>홍길동</div>
        </div>
        <h3 className="my-4 text-lg font-bold">예약</h3>
        <div className="flex flex-col gap-3">
          <Link className="hover:text-gray-500" href={"mypage/book"}>
            예약 현황
          </Link>
          <Link className="hover:text-gray-500" href={"mypage/manage"}>
            예약 관리
          </Link>
        </div>
      </main>
    </>
  );
}
