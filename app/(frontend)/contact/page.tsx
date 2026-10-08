import { safeFetch } from "@/sanity/lib/client";
import { contactPageQuery, siteSettingsQuery } from "@/sanity/queries";
import ContactClient from "@/components/ContactClient";

export const revalidate = 60;

export default async function ContactPage() {
  const contactPage = await safeFetch<any>(contactPageQuery, {}, { next: { revalidate: 60 } }) || {};
  const siteSettings = await safeFetch<any>(siteSettingsQuery, {}, { next: { revalidate: 60 } }) || {};

  return (
    <ContactClient data={{ contactPage, siteSettings }} />
  );
}
