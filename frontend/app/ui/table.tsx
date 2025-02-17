import Image from 'next/image';
import { formatDateToLocal } from '@/app/lib/utils';
import ClientStatus from '@/app/ui/status';
import { UpdateClient, DeleteClient } from '@/app/ui/buttons';
import { fetchClients } from '@/app/lib/data';

export default async function Table() {
  const clients = await fetchClients();
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Cliente
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  E-mail
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Data de criação
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Editar</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {clients?.map((client) => (
                <tr
                  key={client.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/avatar.png"
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${client.username}'s profile picture`}
                      />
                      <p>{client.username}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {client.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(client.createdAt)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <ClientStatus active={client.active} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateClient id={client.id} />
                      <DeleteClient id={client.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
