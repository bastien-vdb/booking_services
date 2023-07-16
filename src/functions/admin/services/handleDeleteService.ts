import fetcher from "@/lib/fetcher";
import { Service } from "@prisma/client";

const handleDeleteService = async (service: Service, setServices: React.Dispatch<React.SetStateAction<Service[]>>) => {
  try {
    const result =  await fetcher(`${process.env.HOST}/api/admin/services/deleteService`, "DELETE", { service });
    setServices(result);
  } catch (error: unknown) {
    console.log(error);
    throw new Error("Impossible to delete the service");
  }
};

export default handleDeleteService;
