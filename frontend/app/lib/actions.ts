'use server';

export async function deleteClient(id: number) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/client/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(`Failed to delete client with id=${id}.`);
  }
}
