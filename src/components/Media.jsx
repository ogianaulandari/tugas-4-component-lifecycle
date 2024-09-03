import { useEffect, useState } from 'react';
import { fetchMediaItems } from '../api/Api';
import Footer from './Footer';

const Media = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [listed, setListed] = useState(1);
  const [hasMore, setHasMore] = useState (true);

  useEffect(() => {
    const loadInitItems = async () => {
      try {
        const items = await fetchMediaItems(1);
        setMediaItems(items);

        if (items.length < 6) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error Loading medoia items:', error);
      }
    };

    loadInitItems();
  }, []);

  const loadMore = async () => {
    try {
      const newListed = listed + 1;
      const items = await fetchMediaItems(newListed);
      setMediaItems((prevItems) => [...prevItems, ...items]);
      setListed(newListed);

      if (items.length < 6) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more media items:', error);
    }
  };

  return (
    <div className='bg-white dark:bg-gray-900 text-black dark:text-white w-full min-h-screen flex flex-col font-sansMedia'>
      <div className='flex flex-col items-center justify-center flex-1 p-8'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold'>Media</h1>
          <p className='text-base text-center'>Informasi Seputar PaDI UMKM</p>
        </div>
        <div className='flex flex-wrap justify-center space-x-8'>
          {mediaItems.map((item) => (
            <div key={item.id} className='text-center w-80 mb-8'>
              <img src={item.image} alt={item.title} className='w-full h-auto object-cover' />
              <div className='p-4'>
                <h3 className='text-lg font-bold mb-4 line-clamp-2' style={{ textAlign: 'justify' }}>
                  {item.title}
                </h3>
                <p className='text-base line-clamp-4' style={{ textAlign: 'justify' }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={loadMore}
          disabled={!hasMore}
          className={`mt-8 py-2 px-4 ${hasMore ? 'bg-teal-800' : 'bg-gray-500'} text-white rounded`}>
            {hasMore ? '<< Load More >>' : '<< No More >>'}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Media;
