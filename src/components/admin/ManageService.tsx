import { Service } from '@prisma/client';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch} from '@/states/store';
import handleCreateService from '@/functions/admin/services/handleCreateService';
import handleDeleteService from '@/functions/admin/services/handleDeleteService';
import {useAppSelector} from '@/states/store';
import { setServices } from '@/states/admin/slices/servicesSlice';

const ManageService = () => {

    const dispatch:AppDispatch = useDispatch();
    const services = useAppSelector((state)=>state.combineAdminReducers.services)
    return (<div className='Service border p-2'>
        <h1>Create Service</h1>
        <form onSubmit={async(e) => dispatch(setServices(await handleCreateService(e)))}>
            <label htmlFor="name">Name</label> <br />
            <input className='border' type="text" name="name" id="name" /> <br />
            <label htmlFor="price">Price</label> <br />
            <input className='border' type="number" name="price" id="price" /> <br />
            <button className='border' type="submit">Create a service</button>
        </form>

        <ul>
            {services && services.map((service:Service) => (
                <li key={service.id}><button className='border bg-gray-200 rounded-xl px-2' onClick={async()=>dispatch(setServices(await handleDeleteService(service)))}
                >X</button> {service.name} </li>
            ))
            }
        </ul>

    </div>
    );
};

export default ManageService;