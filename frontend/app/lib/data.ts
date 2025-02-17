import { Client } from '@/app/lib/definitions';

export async function fetchClients() {
  try {
    const response = await fetch(`${process.env.API_URL}/client`);
    const json = await response.json();
    return <Client[]>json;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch clients.');
  }
}

export async function fetchClientById(id: number) {
  try {
    const response = await fetch(`${process.env.API_URL}/client/${id}`);
    const json = await response.json();
    return <Client>json;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(`Failed to fetch client with id=${id}.`);
  }
}

export async function updateClient(client: Client) {
  try {
    const response = await fetch(`/api/client/${client.id}`, {
      method: "PATCH",
      body: JSON.stringify(client),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(`Failed to update client with id=${client.id}.`);
  }
}
