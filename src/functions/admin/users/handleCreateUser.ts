import fetcher from "@/lib/fetcher";

const handleCreateUser = async (e: any) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;

  try {
    return await fetcher(`${process.env.HOST}/api/admin/users/createUser`, "POST", { name, email });
  } catch (error) {
    console.log(error);
  }
};

export default handleCreateUser;
