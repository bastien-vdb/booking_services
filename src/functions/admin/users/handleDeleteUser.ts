import fetcher from "@/lib/fetcher";
import { setUsers } from "@/states/admin/slices/usersSlice";

const handleDeleteUser = async (id: string, dispatch: any) => {
  try {
    const response = await fetcher(`${process.env.HOST}/api/admin/users/deleteUser`, "DELETE", { id });
    dispatch(setUsers(response));
  } catch (error: unknown) {
    alert("user cannot be deleted");
  }
};

export default handleDeleteUser;
