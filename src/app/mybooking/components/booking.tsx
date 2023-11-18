import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";
import Image from "next/image";

interface IBooking {
  status: "pending" | "approved" | "cancelled" | "history";
  children: ReactNode;
}
export default function Booking({ status, children }: IBooking) {
  console.log(status);
  return (
    <div className="relative flex w-full overflow-hidden rounded-lg border">
      <div>
        <Badge
          variant={
            status == "approved"
              ? "default"
              : status == "pending"
                ? "secondary"
                : status == "cancelled"
                  ? "destructive"
                  : "outline"
          }
          className="absolute left-4 top-4"
        >
          {status == "approved"
            ? "승인 완료"
            : status == "pending"
              ? "승인 대기"
              : status == "cancelled"
                ? "취소"
                : "방문 완료"}
        </Badge>
        <Image
          className="h-48 w-full origin-center overflow-hidden object-cover"
          src="https://placehold.co/400/png"
          width="400"
          height="400"
          alt=""
        />
      </div>

      {children}
      {status == "pending" && (
        <div className="absolute bottom-2 right-2 flex gap-2">
          <button className=" cursor-pointer rounded-lg border-2 border-blue-300 px-2 py-1 text-blue-400 hover:bg-blue-100">
            예약 확정
          </button>
          <button className=" cursor-pointer rounded-lg border-2 border-red-300 px-2 py-1 text-red-400 hover:bg-red-100">
            취소
          </button>
        </div>
      )}
    </div>
  );
}
