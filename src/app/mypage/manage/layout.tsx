import { Navigation } from "@/app/_components/navigation";
import { BottomNav } from "../../_components/bottom-nav";
import GoBack from "@/app/_components/goback";

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
