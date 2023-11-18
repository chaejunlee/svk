import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const bookingStats = {
  pending: "승인 대기",
  confirmed: "승인 완료",
  cancelled: "취소",
  archive: "방문 완료",
} as const;

export const bookingStatusColor = {
  pending: "secondary",
  confirmed: "default",
  cancelled: "destructive",
  archive: "outline",
} as const;

export function Book({
  props,
}: {
  props: {
    storePost: {
      id: number;
      description: string | null;
      title: string | null;
      owner: string | null;
      location: string | null;
      price: string | null;
    };
    books: {
      id: number;
      date: Date;
      postId: number | null;
      customer: string | null;
      time: string | null;
      people: number | null;
      status: string | null;
    };
  };
}) {
  const statusKey = props.books.status as keyof typeof bookingStats;
  const status = bookingStats[statusKey];

  return (
    <div className="flex w-full overflow-hidden rounded-lg border">
      <div className="relative w-[33%]">
        <Badge
          variant={bookingStatusColor[statusKey]}
          className="absolute left-4 top-4"
        >
          {status}
        </Badge>
        <Image
          className="h-full grow origin-center overflow-hidden object-cover"
          src={`https://picsum.photos/id/44${props.books.postId}/400/400`}
          width="400"
          height="400"
          alt=""
        />
      </div>

      <div className="flex w-[67%] flex-col gap-1 bg-gray-50 p-4">
        <h4 className="truncate text-lg font-bold">{props.storePost.title}</h4>
        <p className="truncate text-sm text-gray-400">
          {props.storePost.location}
        </p>
        <p className="text-sm">
          {props.books.date.toLocaleDateString("ko", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          {props.books.time}
        </p>
        <p className="text-sm">{props.books.people}명</p>
      </div>
    </div>
  );
}
