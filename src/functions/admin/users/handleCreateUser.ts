import fetcher from "@/lib/fetcher";
import { User } from "@prisma/client";

const handleCreateUser = async (e: any, setUsers: React.Dispatch<React.SetStateAction<User[]>>) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;

  try {
    const result = await fetcher(`${process.env.HOST}/api/admin/users/createUser`, "POST", { name, email });
    setUsers(result);
  } catch (error) {
    console.log(error);
  }
};

export default handleCreateUser;
