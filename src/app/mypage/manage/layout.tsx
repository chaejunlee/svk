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
    </>
  );
}
