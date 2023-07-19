import fetcher from "@/lib/fetcher";
import { Service } from "@prisma/client";

const handleDeleteService = async (service: Pick<Service, 'id'>) => {
  try {
    return await fetcher(`${process.env.HOST}/api/admin/services/deleteService`, "DELETE", { service });
  } catch (error: unknown) {
    console.log(error);
    throw new Error("Impossible to delete the service");
  }
};

export default handleDeleteService;
