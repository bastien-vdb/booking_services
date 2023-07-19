import fetcher from "@/lib/fetcher";

const handleDeleteUser = async (id: string) => {
  try {
    return await fetcher(`${process.env.HOST}/api/admin/users/deleteUser`, "DELETE", { id });
  } catch (error: unknown) {
    alert("user cannot be deleted");
  }
};

export default handleDeleteUser;
