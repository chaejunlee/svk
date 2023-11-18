import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { bookingStatus, bookingStatusColor } from "../../book/page";

interface IBooking {
  props: {
    storePost: {
      id: number;
      title: string | null;
      description: string | null;
      owner: string | null;
      location: string | null;
      price: string | null;
    };
    books: {
      date: Date;
      id: number;
      postId: number | null;
      customer: string | null;
      time: string | null;
      people: number | null;
      status: string | null;
    };
  };
}

export default function Booking({ props: { storePost, books } }: IBooking) {
  return (
    <div className="relative flex w-full overflow-hidden rounded-lg border">
      <div className="w-[33%]">
        <Badge
          variant={
            bookingStatusColor[books.status as keyof typeof bookingStatusColor]
          }
          className="absolute left-4 top-4"
        >
          {bookingStatus[books.status as keyof typeof bookingStatus]}
        </Badge>
        <Image
          className="h-full origin-center overflow-hidden object-cover"
          src={`https://picsum.photos/id/44${storePost.id}/400/400`}
          width="400"
          height="400"
          alt=""
        />
      </div>

      <div className="flex w-[67%] flex-col p-4">
        <div className="truncate text-lg font-bold">{storePost.title}</div>
        <div>
          {books.date.toLocaleDateString("ko", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          {books.time}
        </div>
        <div>{books.people}명</div>
        {books.status == "pending" && (
          <div className="relative flex justify-end gap-2 pt-4">
            <button className="cursor-pointer rounded-lg border-2 border-blue-300 px-2 py-1 text-blue-400 hover:bg-blue-100">
              예약 확정
            </button>
            <button className=" cursor-pointer rounded-lg border-2 border-red-300 px-2 py-1 text-red-400 hover:bg-red-100">
              취소
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
