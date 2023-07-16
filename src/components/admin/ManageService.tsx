import { Service } from '@prisma/client';

type ManageServiceProps = {
    handleCreateService: (e: any, setServices: React.Dispatch<React.SetStateAction<Service[]>>) => void;
    handleDeleteService: (id: Pick<Service, 'id'>, setServices: React.Dispatch<React.SetStateAction<Service[]>>) => void;
    services?: Service[],
    setServices: React.Dispatch<React.SetStateAction<Service[]>>;
}
const ManageService = ({ handleCreateService, handleDeleteService, services, setServices }: ManageServiceProps) => {

    return (<div className='Service border p-2'>
        <h1>Create Service</h1>
        <form onSubmit={(e) => handleCreateService(e, setServices)}>
            <label htmlFor="name">Name</label> <br />
            <input className='border' type="text" name="name" id="name" /> <br />
            <label htmlFor="price">Price</label> <br />
            <input className='border' type="number" name="price" id="price" /> <br />
            <button className='border' type="submit">Create a service</button>
        </form>

        <ul>
            {services && services.map((service:Service) => (
                <li key={service.id}><button className='border bg-gray-200 rounded-xl px-2' onClick={()=>handleDeleteService(service, setServices)}
                >X</button> {service.name} </li>
            ))
            }
        </ul>

    </div>
    );
};

export default ManageService;