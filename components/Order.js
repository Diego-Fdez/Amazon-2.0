import moment from 'moment';
import { currencyFormat } from '../app/currencyFormat';
import { useEffect, useState } from 'react';

const Order = ({ id, amount, amount_shipping, items, timestamp, images }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (amount > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [amount]);

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className='relative border rounded-md'>
          <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
            <div>
              <p className='font-bold text-xs'>ORDER PLACED</p>
              <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
            </div>
            <div>
              <p className='font-bold text-xs'>TOTAL</p>
              <p>
                {currencyFormat(amount)}
                <span> - Next Day Delivery </span>
                {currencyFormat(amount_shipping)}
              </p>
            </div>
            <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>
              {items.length} items
            </p>
            <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>
              ORDER # {id}
            </p>
          </div>
          <div className='p-5 sm:p-10'>
            <div className='flex space-x-6 overflow-x-auto'>
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt='Imagen Item'
                  className='h-20 object-contain sm:h-32'
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
