import { Metadata } from "next";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: pageSeo.schedule.title,
  description: pageSeo.schedule.description,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
