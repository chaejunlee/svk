import GoBack from "@/app/_components/goback";
import { BottomNav } from "../../_components/bottom-nav";
import { Navigation } from "@/app/_components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GoBack />
      {children}
      <BottomNav>
        <Navigation />
      </BottomNav>
    </>
  );
}
