import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { fetchPhotos } from '@/lib/unsplash';

type Props = {
    setPrevSelected: React.Dispatch<React.SetStateAction<boolean>>
    setImageSelected: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedPhotoId: React.Dispatch<React.SetStateAction<string | null>>
    selectedPhotoId: string | null
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
};

const SelectCardComponent = (props: Props) => {
  const [photos, setPhotos] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadPhotos = async (p: number) => {
      setLoading(true);
      try {
        const delay = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
        await new Promise(resolve => setTimeout(resolve, delay));

        const response = await fetchPhotos(p, 4);
        console.log(response);
        setPhotos(response);
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos(props.page);
  }, [props.page]);

  const handlePhotoClick = (photoId: string) => {
    props.setSelectedPhotoId(photoId);
  };

  const handleNextPhotos = () => {
    props.setPage(prev => prev + 1);
  };

  return (
    <>
      <h2 className="text-xl font-semibold">Please Select An Image</h2>
      <p className="pb-7">Select from these random photos</p>
      {loading ? (
        <div className="h-[50vh] flex items-center justify-center text-2xl font-semibold text-red-500">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="flex flex-wrap gap-5">
          {photos.map(photo => (
            <div
              key={photo.id}
              className={`w-fit cursor-pointer border-2 rounded-lg ${
                props.selectedPhotoId === photo.id
                  ? 'border-red-500'
                  : 'border-transparent'
              } transition-all duration-300 cursor-pointer`}
              onClick={() => handlePhotoClick(photo.id)}
            >
              <Image
                src={photo.urls.small}
                alt={photo.alt_description}
                width={120}
                height={150}
                loading="lazy"
                className="object-cover object-center rounded-lg"
              />
            </div>
          ))}
        </div>
      )}
      <div className="pt-4 flex items-center justify-center gap-3">
        {props.page >= 2 && <Button onClick={() => props.setPage(1)}>Refresh</Button>}
        <Button onClick={handleNextPhotos}>Next</Button>
        <Button
          className="bg-red-500"
          onClick={() => {
            props.setImageSelected(true);
            props.setPrevSelected(false);
          }}
          disabled={!props.selectedPhotoId}
        >
          Select image
          <span>
            <ChevronRight />
          </span>
        </Button>
      </div>
    </>
  );
};

export default SelectCardComponent;
