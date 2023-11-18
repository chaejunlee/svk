import { BottomNav } from "../_components/bottom-nav";
import { Navigation } from "@/app/_components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <BottomNav>
        <Navigation />
      </BottomNav>
    </>
  );
}
