import { BottomNav } from "../_components/bottom-nav";
import Booking from "../_components/bookingBtn";

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
