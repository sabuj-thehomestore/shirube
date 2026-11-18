import type { Session, Website } from '@/generated/prisma/client';
import redis from '@/lib/redis';
import { getWebsite } from '@/queries/prisma';
import { getWebsiteSession } from '@/queries/sql';

export async function fetchWebsite(websiteId: string): Promise<Website> {
  let website = null;

  if (redis.enabled) {
    website = await redis.client.fetch(`website:${websiteId}`, () => getWebsite(websiteId), 86400);
  } else {
    website = await getWebsite(websiteId);
  }

  if (!website || website.deletedAt) {
    return null;
  }

  return website;
}

export async function fetchSession(websiteId: string, sessionId: string): Promise<Session> {
  let session = null;

  if (redis.enabled) {
    session = await redis.client.fetch(
      `session:${sessionId}`,
      () => getWebsiteSession(websiteId, sessionId),
      86400,
    );
  } else {
    session = await getWebsiteSession(websiteId, sessionId);
  }

  if (!session) {
    return null;
  }

  return session;
}

export async function fetchAccount(userId: string) {
  const account = await redis.client.get(`account:${userId}`);

  return account;
}

export async function fetchTeam(teamId: string) {
  const team = await redis.client.get(`team:${teamId}`);

  return team;
}

export type BillingScope = {
  accountId?: string | null;
  teamId?: string | null;
};

export async function getEntityBillingScope({
  userId,
  teamId,
}: Pick<Website, 'userId' | 'teamId'>): Promise<BillingScope> {
  if (!teamId) {
    return { accountId: userId };
  }

  return { teamId };
}

export const getWebsiteBillingScope = getEntityBillingScope;

export async function getTeamBillingScope(teamId: string): Promise<BillingScope> {
  return { teamId };
}

export async function getBillingAccess(scope: BillingScope, userId?: string | null) {
  return { isPastDue: false, isOwner: false };
}

export async function addTeamBillingStatus<T extends { id: string }>(teams: T[]) {
  return teams;
}

export async function getCollectionBlockReason(accountId?: string | null) {
  return null;
}

export async function isCollectionBlocked(accountId?: string | null) {
  return !!(await getCollectionBlockReason(accountId));
}

export async function isWebsiteCollectionBlocked(website: Website) {
  return false;
}

  return isCollectionBlocked(accountId);
}
