import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import BookForm from "../_components/book-form";

export default function Page() {
  return (
    <>
      <GoBack />
      <BookForm />
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
