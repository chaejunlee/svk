import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function GoBack() {
  return (
    <div className="sticky top-0 z-10 block bg-background/80 py-2">
      <Link href="../" className="flex items-center gap-1 px-2">
        <ChevronLeftIcon width={40} className="cursor-pointer" />
        뒤로가기
      </Link>
    </div>
  );
}
