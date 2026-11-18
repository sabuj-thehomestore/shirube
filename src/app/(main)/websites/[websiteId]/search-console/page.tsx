import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SearchConsolePage } from './SearchConsolePage';

export default async function Page({ params }: { params: Promise<{ websiteId: string }> }) {
  notFound();
}

export const metadata: Metadata = {
  title: 'Searches',
};
