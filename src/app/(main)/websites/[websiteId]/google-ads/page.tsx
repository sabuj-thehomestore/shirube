import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GoogleAdsPage } from './GoogleAdsPage';

export default async function Page({ params }: { params: Promise<{ websiteId: string }> }) {
  notFound();
}

export const metadata: Metadata = {
  title: 'Ads',
};
