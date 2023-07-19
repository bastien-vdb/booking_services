import { User } from '@prisma/client';
import { useSelector, useDispatch } from 'react-redux';

type ManageUserProps = {
    handleCreateUser: (e: any, setUsers: React.Dispatch<React.SetStateAction<User[]>>) => void;
    handleDeleteUser: (id: string, setUsers: React.Dispatch<React.SetStateAction<User[]>>) => void;
}
const ManageUser = ({ handleCreateUser, handleDeleteUser }: ManageUserProps) => {

    const users = useSelector((state:any)=>state.users);
    const dispatch:any = useDispatch();

    return (<div className='User border p-2'>
        <h1>Create User</h1>
        <form onSubmit={(e) => handleCreateUser(e, dispatch)}>
            <label htmlFor="name">Name</label> <br />
            <input className='border' type="text" name="name" id="name" /> <br />
            <label htmlFor="email">Email</label> <br />
            <input className='border' type="text" name="email" id="email" /> <br />
            <button className='border' type="submit">Create a user</button>
        </form>

        <ul>
            {users && users.map((user: User) => {
                return (
                    <li key={user.id}><button className='border bg-gray-200 rounded-xl px-2' onClick={() => handleDeleteUser(user.id, dispatch)}
                    >X</button> {user.name} </li>
                )
            })
            }
        </ul>

    </div>
    );
};

export default ManageUser;