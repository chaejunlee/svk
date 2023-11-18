import Link from "next/link";
import { BottomNav } from "../page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
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
        className="flex h-12 w-full items-center justify-center rounded-lg bg-primary font-semibold text-white no-underline transition hover:bg-primary/80"
      >
        예약하기
      </Link>
    </div>
  );
}
