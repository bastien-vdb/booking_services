import { prisma } from "@/db/prisma";

const getServerTable = async(table:keyof typeof prisma) =>{
    try {
        return await prisma[table].findMany();
    }
    catch(error:unknown) {
        throw new    Error("cannot get newList");
    }
};

export default getServerTable;