import fetcher from "@/lib/fetcher";
import { User } from "@prisma/client";

const handleDeleteUser = async (id: string, setUsers: React.Dispatch<React.SetStateAction<User[]>>) => {
  try {
    const response = await fetcher(`${process.env.HOST}/api/admin/users/deleteUser`, "DELETE", { id });
    setUsers(response);
  } catch (error: unknown) {
    alert("user cannot be deleted");
  }
};

export default handleDeleteUser;
