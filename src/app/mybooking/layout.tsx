import Booking from "../_components/bookingBtn";
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
