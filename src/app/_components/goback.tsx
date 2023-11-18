"use client";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-10 block bg-background/80 py-2">
      <div
        onClick={() => router.back()}
        className="flex items-center gap-1 px-2"
      >
        <ChevronLeftIcon width={40} height={40} className="cursor-pointer" />
        뒤로가기
      </div>
    </div>
  );
}
