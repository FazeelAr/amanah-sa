import { safeFetch } from "@/sanity/lib/client";
import { aboutPageQuery, teamMembersQuery } from "@/sanity/queries";
import AboutClient from "@/components/AboutClient";

export const revalidate = 60;

export default async function About() {
  const aboutPage = await safeFetch<any>(aboutPageQuery, {}, { next: { revalidate: 60 } }) || {};
  const teamMembers = await safeFetch<any>(teamMembersQuery, {}, { next: { revalidate: 60 } }) || [];

  return (
    <AboutClient data={{ aboutPage, teamMembers }} />
  );
}
