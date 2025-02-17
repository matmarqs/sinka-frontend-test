import { fetchClientById } from '@/app/lib/data';
import { formatDateToLocal } from '@/app/lib/utils';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Form from '@/app/ui/form';

export default async function Page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
  const id = params.id;
  const client = await fetchClientById(id);

  if (!client.id) {
    notFound();
  }

  return (
    <main>
      <div className="flex justify-center mt-16">
        <div className="flex-col items-center">
          <Image
            src="/avatar.png"
            className="rounded-full mx-28 mt-8"
            width={200}
            height={200}
            alt={`${client.username}'s profile picture`}
          />
          <Form client={client} />
        </div>
      </div>
    </main>
  );
}
