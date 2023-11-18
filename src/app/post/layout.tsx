import Link from "next/link";
import { BottomNav } from "../_components/bottom-nav";

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
        className="bg-primary hover:bg-primary/80 flex h-12 w-full items-center justify-center rounded-lg font-semibold text-white no-underline transition"
      >
        예약하기
      </Link>
    </div>
  );
}
