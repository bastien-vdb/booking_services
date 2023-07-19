import { Service } from '@prisma/client';
import { useDispatch, useSelector } from 'react-redux';

type ManageServiceProps = {
    handleCreateService: (e: any, setServices: React.Dispatch<React.SetStateAction<Service[]>>) => void;
    handleDeleteService: (id: Pick<Service, 'id'>, dispatch: React.Dispatch<React.SetStateAction<Service[]>>) => void;
}
const ManageService = ({ handleCreateService, handleDeleteService }: ManageServiceProps) => {

    const dispatch:any = useDispatch();
    const services = useSelector((state:any)=>state.services)
    return (<div className='Service border p-2'>
        <h1>Create Service</h1>
        <form onSubmit={(e) => handleCreateService(e, dispatch)}>
            <label htmlFor="name">Name</label> <br />
            <input className='border' type="text" name="name" id="name" /> <br />
            <label htmlFor="price">Price</label> <br />
            <input className='border' type="number" name="price" id="price" /> <br />
            <button className='border' type="submit">Create a service</button>
        </form>

        <ul>
            {services && services.map((service:Service) => (
                <li key={service.id}><button className='border bg-gray-200 rounded-xl px-2' onClick={()=>handleDeleteService(service, dispatch)}
                >X</button> {service.name} </li>
            ))
            }
        </ul>

    </div>
    );
};

export default ManageService;