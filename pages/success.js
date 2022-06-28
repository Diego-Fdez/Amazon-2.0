import { CheckCircleIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Header from '../components/Header';

const Success = () => {
  const router = useRouter();

  return (
    <div className='bg-gray-100 h-screen'>
      <Header title='Success' />
      <main className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col p-10 bg-white'>
          <div className='flex items-center space-x-2 mb-5'>
            <CheckCircleIcon className='text-green-500 h-10' />
            <h1 className='text-3x'>
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping whit us. We&#39;ll send a confirmation o item
            has shipped, if you would like to check the status or order(s)
            please press the link below.
          </p>
          <button
            onClick={() => router.push('/orders')}
            className='button mt-8'
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
};

export default Success;
