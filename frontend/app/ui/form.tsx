'use client';

import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { Client } from '@/app/lib/definitions';
import { formatDateToLocal } from '@/app/lib/utils';
import { updateClient } from '@/app/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

interface IFormInput {
  username: string;
  avatar: string;
  email: string;
  password: string;
  active: boolean;
}

export default function Form(props: { client: Client }) {
  let client = props.client;
  const [updateStatus, setUpdateStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<IFormInput>({
    defaultValues: {
      username: client.username,
      avatar: client.avatar,
      email: client.email,
      password: client.password,
      active: client.active,
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      client = { ...client, ...data }; // Merge data into client object
      await updateClient(client); // send request to API
      setUpdateStatus("success");
    } catch (error) {
      setUpdateStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      {/* ID */}
      <div className="flex justify-center mb-4">
        <p className="text-lg font-semibold">ID: {client.id}</p>
      </div>

      {/* Username & Avatar */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Username:</label>
          <input
            {...register("username",
              { required: "Username é obrigatório",
                pattern: {
                  value: /^[a-zA-Z0-9\s_-]+$/,
                  message: "Formato de username inválido"
                },
                maxLength: {
                  value: 20,
                  message: "Máximo de 20 caracteres"
                }
              })}
            placeholder="Digite o username"
            className="p-1"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Avatar:</label>
          <input
            {...register("avatar", {
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Apenas letras e números para o avatar"
              },
              maxLength: {
                value: 20,
                message: "Máximo de 20 caracteres"
              }
            })}
            placeholder="Digite o avatar"
            className="p-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">E-mail:</label>
          <input
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Formato de e-mail inválido"
              }
            })}
            placeholder="Digite o e-mail"
            className="p-1"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Senha:</label>
          <input
            type="password"
            {...register("password", {
              required: "Senha é obrigatória",
              pattern: {
                value: /^[\S]+$/,
                message: "Senha não pode conter espaços"
              },
              minLength: { value: 6, message: "Senha deve ter no mínimo 6 caracteres" }
            })}
            placeholder="Digite a senha"
            className="p-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 items-center">
        <p className="text-gray-600">Criado: {formatDateToLocal(client.createdAt)}</p>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Ativo:</label>
          <select
            {...register("active", { setValueAs: (value) => value === "true" })}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <p className="text-gray-600">Atualizado: {formatDateToLocal(client.updatedAt)}</p>
        <p className="text-gray-600">Deletado: {client.deletedAt ? formatDateToLocal(client.deletedAt) : "N/A"}</p>
      </div>

      <div className="flex flex-col items-center">
        <button
          type="submit"
          className={"bg-[#82c65b] hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md transition duration-300"}
        >
          Atualizar
        </button>

        {/* Feedback Message */}
        {updateStatus === "success" && (
          <p className="mt-2 text-green-600 font-medium">Cliente atualizado com sucesso!</p>
        )}
        {updateStatus === "error" && (
          <p className="mt-2 text-red-600 font-medium">Erro ao atualizar o cliente.</p>
        )}
      </div>
    </form>
  );
}
