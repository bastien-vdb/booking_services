import React from 'react';
import { Service } from '@prisma/client';
import {useAppSelector} from '@/states/store';
import {useDispatch} from 'react-redux';
import { setSelectService } from '@/states/home/slices/selectServiceSlice';

function SelectService() {

    const dispatch = useDispatch();

    const {services} = useAppSelector(state=>state.combineAdminReducers);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead>
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                            Price
                        </th>
                        <th className="px-4 py-2 text-left"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {services && services.map((service: Service) => (
                        <tr key={service.id}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                                {service.name}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-left">{service.price} €</td>
                            <td className="whitespace-nowrap px-4 py-2 text-left">
                                <a
                                    onClick={() => dispatch(setSelectService(service))}
                                    href="#"
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    Réserver
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SelectService;
