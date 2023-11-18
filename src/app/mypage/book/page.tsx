import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { api } from "@/trpc/server";

const bookingStatus = {
  pending: "승인 대기",
  approved: "승인 완료",
  cancelled: "취소",
  archive: "방문 완료",
};

const bookingStatusColor = {
  pending: "secondary",
  approved: "default",
  cancelled: "destructive",
  archive: "outline",
} as const;

function Book({
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
  const statusKey = props.books.status as keyof typeof bookingStatus;
  const status = bookingStatus[statusKey];

  return (
    <div className="flex min-h-screen w-full overflow-hidden rounded-lg border">
      <div className="relative">
        <Badge
          variant={bookingStatusColor[statusKey]}
          className="absolute left-4 top-4"
        >
          {status}
        </Badge>
        <Image
          className="h-48 w-full origin-center overflow-hidden object-cover"
          src={`https://picsum.photos/id/44${props.books.postId}/400/400`}
          width="400"
          height="400"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-1 bg-gray-50 p-4">
        <h4 className="text-lg font-semibold">
          롯데 미용실 - Lotte Beauty Salon
        </h4>
        <p className="text-sm text-gray-400">1860 Fillmore St, San Francisco</p>
        <p className="text-sm">2021년 10월 10일 10:00</p>
        <p className="text-sm">1명</p>
      </div>
    </div>
  );
}

export default async function Page() {
  const books = await api.book.getBooks.query();

  return (
    <>
      <MyBooking />
    </>
  );
}

async function MyBooking() {
  const books = await api.book.getBooks.query();

  return (
    <section className="min-h-screen py-6">
      <h3 className="px-6 py-6 text-xl font-semibold">예약 현황</h3>
      <div className="flex flex-col gap-4 px-6">
        {books.map((book) => {
          return (
            <Book
              key={book.books.id}
              props={{
                books: book.books!,
                storePost: book.storePost!,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
