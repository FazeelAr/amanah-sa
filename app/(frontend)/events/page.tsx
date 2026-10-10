import type { Metadata } from 'next';
import EventsClient from '@/components/EventsClient';

export const metadata: Metadata = {
  title: 'Events & Expos | Amanah Study Abroad',
  description: 'Join upcoming study abroad expos, university admissions fairs, visa masterclasses, and test bootcamps hosted by Amanah Study Abroad.',
};

export default function EventsPage() {
  return <EventsClient />;
}
