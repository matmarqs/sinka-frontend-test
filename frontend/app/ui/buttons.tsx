'use client';

import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteClient } from '@/app/lib/actions';
import { useState } from 'react';

export function UpdateClient({ id }: { id: number }) {
  return (
    <Link
      href={`/client/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteClient({ id }: { id: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const deleteClientWithId = async () => {
    try {
      await deleteClient(id);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <span className="sr-only">Deletar</span>
        <TrashIcon className="w-5" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Tem certeza que deseja excluir?</h2>
            <div className="flex justify-between">
              <button
                onClick={deleteClientWithId}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Sim, excluir
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
