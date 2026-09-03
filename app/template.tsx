import type { ReactNode } from "react";
import { PageTransition } from "@/components/landing/page-transition";

export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
