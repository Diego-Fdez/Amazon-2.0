import Image from 'next/image';
import React from 'react';
import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import { currencyFormat } from '../app/currencyFormat';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [id]);

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      rating,
      image,
      hasPrime,
    };

    //sending the product as an action to the REDUX store...the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
          <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
            {category}
          </p>
          <Image
            src={image}
            height={200}
            width={200}
            objectFit='contain'
            alt={title}
          />
          <h4 className='my-3'>{title}</h4>
          <div className='flex'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className='h-5 text-yellow-500' />
              ))}
          </div>
          <p className='text-xs my-2 line-clamp-2'>{description}</p>
          <div>
            <p>{currencyFormat(price)}</p>
          </div>
          {hasPrime && (
            <div className='flex items-center space-x-2 mt-5'>
              <img
                className='w-12'
                src='https://links.papareact.com/fdw'
                alt='Imagen Prime'
              />
              <p className='text-xs text-gray-500'>FREE Next-day Delivered</p>
            </div>
          )}
          <button onClick={addItemToBasket} className='mt-auto button'>
            Add to Basket
          </button>
        </div>
      )}
    </>
  );
};

export default Product;
