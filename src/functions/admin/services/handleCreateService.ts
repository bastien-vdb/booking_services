import fetcher from "@/lib/fetcher";
import { Service } from "@prisma/client";

const handleCreateService = async (e: any, setServices:React.Dispatch<React.SetStateAction<Service[]>>) => {
  e.preventDefault();
  const name = e.target.name.value;
  const price = Number(e.target.price.value);

  try {
    const result = await fetcher(`${process.env.HOST}/api/admin/services/createService`, "POST", { name: name, price: price });
    setServices(result);
  } catch (error) {
    console.log(error);
  }
};

export default handleCreateService;
