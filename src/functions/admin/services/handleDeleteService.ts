import fetcher from "@/lib/fetcher";
import { Service } from "@prisma/client";
import { setServices } from "@/states/admin/slices/servicesSlice";

const handleDeleteService = async (service: Pick<Service, 'id'>, dispatch: any) => {
  try {
    const result =  await fetcher(`${process.env.HOST}/api/admin/services/deleteService`, "DELETE", { service });
    dispatch(setServices(result));
  } catch (error: unknown) {
    console.log(error);
    throw new Error("Impossible to delete the service");
  }
};

export default handleDeleteService;
