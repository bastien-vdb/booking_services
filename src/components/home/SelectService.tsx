import React from 'react';
import { Service } from '@prisma/client';

type SelectServiceProps = {
    setSelectService: React.Dispatch<React.SetStateAction<Service|null>>;
    service: Service[];
};

function SelectService({ setSelectService, service }: SelectServiceProps) {
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
                    {service && service.map((service: Service) => (
                        <tr key={service.id}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                                {service.name}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-left">{service.price} €</td>
                            <td className="whitespace-nowrap px-4 py-2 text-left">
                                <a
                                    onClick={() => setSelectService(service)}
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
