import { safeFetch } from "@/sanity/lib/client";
import { allServicesQuery, destinationsQuery } from "@/sanity/queries";
import ServicesClient from "@/components/ServicesClient";

export const revalidate = 60;

export default async function Services() {
  const services = await safeFetch<any>(allServicesQuery, {}, { next: { revalidate: 60 } }) || [];
  const destinations = await safeFetch<any>(destinationsQuery, {}, { next: { revalidate: 60 } }) || [];

  return (
    <ServicesClient data={{ allServices: services, destinations }} />
  );
}
