import { User } from '@prisma/client';
import { useSelector, useDispatch } from 'react-redux';
import handleCreateUser from '@/functions/admin/users/handleCreateUser';
import handleDeleteUser from '@/functions/admin/users/handleDeleteUser';
import { AppDispatch, useAppSelector } from '@/states/store';
import { setUsers } from "@/states/admin/slices/usersSlice";

const ManageUser = () => {

    const users = useAppSelector((state) => state.combineAdminReducers.users);
    const dispatch: AppDispatch = useDispatch();

    return (<div className='User border p-2'>
        <h1>Create User</h1>
        <form onSubmit={async (e) => dispatch(setUsers(await handleCreateUser(e)))}>
            <label htmlFor="name">Name</label> <br />
            <input className='border' type="text" name="name" id="name" /> <br />
            <label htmlFor="email">Email</label> <br />
            <input className='border' type="text" name="email" id="email" /> <br />
            <button className='border' type="submit">Create a user</button>
        </form>

        <ul>
            {users && users.map((user: User) => {
                return (
                    <li key={user.id}><button className='border bg-gray-200 rounded-xl px-2' onClick={async() => dispatch(setUsers(await handleDeleteUser(user.id)))}
                    >X</button> {user.name} </li>
                )
            })
            }
        </ul>

    </div>
    );
};

export default ManageUser;