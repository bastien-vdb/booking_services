import fetcher from "@/lib/fetcher";

const handleCreateService = async (e: any) => {
  e.preventDefault();
  const name = e.target.name.value;
  const price = Number(e.target.price.value);

  try {
    return await fetcher(`${process.env.HOST}/api/admin/services/createService`, "POST", { name: name, price: price });
  } catch (error) {
    console.log(error);
  }
};

export default handleCreateService;
