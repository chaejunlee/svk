import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { BottomNav } from "../page";

import BookForm from "../_components/book-form";

export default function Page() {
  return (
    <>
      <GoBack />

      <BookForm />

      <BottomNav>
        <Booking />
      </BottomNav>
    </>
  );
}

function Booking() {
  return (
    <div className="flex px-2">
      <Link
        href="/book"
        className="bg-primary hover:bg-primary/80 flex h-12 w-full items-center justify-center rounded-lg font-semibold text-white no-underline transition"
      >
        예약하기
      </Link>
    </div>
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
