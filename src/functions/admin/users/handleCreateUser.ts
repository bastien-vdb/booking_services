import fetcher from "@/lib/fetcher";
import { setUsers } from "@/states/admin/slices/usersSlice";

const handleCreateUser = async (e: any, dispatch:any) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;

  try {
    const result = await fetcher(`${process.env.HOST}/api/admin/users/createUser`, "POST", { name, email });
    dispatch(setUsers(result));
  } catch (error) {
    console.log(error);
  }
};

export default handleCreateUser;
