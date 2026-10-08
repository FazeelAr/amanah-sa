import { safeFetch } from "@/sanity/lib/client";
import { heroQuery, featuredServicesQuery, testimonialsQuery } from "@/sanity/queries";
import HomeClient from "@/components/HomeClient";

export const revalidate = 60; // ISR revalidation

export default async function Home() {
  const hero = await safeFetch<any>(heroQuery, {}, { next: { revalidate: 60 } }) || {};
  const featuredServices = await safeFetch<any>(featuredServicesQuery, {}, { next: { revalidate: 60 } }) || [];
  const testimonials = await safeFetch<any>(testimonialsQuery, {}, { next: { revalidate: 60 } }) || [];

  return (
    <HomeClient data={{ 
      hero: hero, 
      featuredServices: featuredServices,
      testimonials: testimonials 
    }} />
  );
}
