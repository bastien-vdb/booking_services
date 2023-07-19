import fetcher from "@/lib/fetcher";
import { setServices } from "@/states/admin/slices/servicesSlice";


const handleCreateService = async (e: any, dispatch: React.Dispatch<React.SetStateAction<any>>) => {
  e.preventDefault();
  const name = e.target.name.value;
  const price = Number(e.target.price.value);

  try {
    const result = await fetcher(`${process.env.HOST}/api/admin/services/createService`, "POST", { name: name, price: price });
    dispatch(setServices(result));
  } catch (error) {
    console.log(error);
  }
};

export default handleCreateService;
