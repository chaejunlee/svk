import Link from "next/link";

export default function Booking({ id }: { id: string }) {
  return (
    <div className="flex px-2">
      <Link
        href={`/book/${id}`}
        className="flex h-12 w-full items-center justify-center rounded-lg bg-primary font-semibold text-white no-underline transition hover:bg-primary/80"
      >
        예약하기
      </Link>
    </div>
  );
}
