import type { ReactNode } from "react";

interface IBooking {
  status: "pending" | "approved" | "cancelled" | "history";
  children: ReactNode;
}
export default function Booking({ status, children }: IBooking) {
  console.log(status);
  return (
    <div className="border-b-2 p-3">
      <span
        style={{
          color:
            status == "approved"
              ? "green"
              : status == "pending"
                ? "blue"
                : status == "cancelled"
                  ? "red"
                  : "black",
        }}
      >
        {status == "approved"
          ? "예약 확정이 되었습니다."
          : status == "pending"
            ? "예약이 확정 필요합니다"
            : status == "cancelled"
              ? "예약이 취소 되었습니다."
              : "이용이 완료 되었습니다."}
      </span>
      <div className="flex">
        {children}
        {status == "pending" && (
          <button className="absolute right-4 cursor-pointer rounded-lg border-2 border-blue-300 px-2 py-1 text-blue-300 hover:bg-blue-100">
            예약 확정
          </button>
        )}
      </div>
    </div>
  );
}
