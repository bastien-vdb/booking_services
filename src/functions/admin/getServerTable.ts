import { PrismaClient } from '@prisma/client';
import { prisma } from '@/db/prisma';

const getServerTable = async (table: keyof PrismaClient<any>) => {
  try {
    return await (prisma[table] as any).findMany();
  } catch (error: unknown) {
    throw new Error('Cannot get newList');
  }
};

export default getServerTable;
