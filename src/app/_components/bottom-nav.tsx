import { ReactNode } from "react";

export function BottomNav({ children }: { children?: ReactNode }) {
  return (
    <nav className="bg-background text-primary fixed bottom-0 mx-auto w-full max-w-lg border-t-2 pb-3 pt-2">
      {children}
    </nav>
  );
}
