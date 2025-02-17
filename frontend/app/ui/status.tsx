import { CheckIcon, NoSymbolIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function ClientStatus({ active }: { active: boolean }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': active === false,
          'bg-green-500 text-white': active === true,
        },
      )}
    >
      {active === false ? (
        <>
          Inativo
          <NoSymbolIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {active === true ? (
        <>
          Ativo
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
