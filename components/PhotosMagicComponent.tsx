'use client';

import { fetchPhotos } from '@/lib/unsplash';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Marquee from '@/components/magicui/marquee';
import LetterPullup from '@/components/magicui/letter-pullup';
import { BorderBeam } from "@/components/magicui/border-beam";
import PhotoSheetComponent from './PhotoSheetComponent';

type Props = {};

const PhotosMagicComponent = (props: Props) => {
  const [photos, setPhotos] = useState<Array<any>>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const response = await fetchPhotos(1, 20);
        setPhotos(response);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
      //   finally {
      //     setLoading(false);
      //   }
    };

    loadPhotos();
  }, []);

  return (
    <div className="px-20">
      <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-900 rounded-lg bg-background md:shadow-xl ">
        <Marquee pauseOnHover className="[--duration:20s]">
          {photos.map(photo => (
            <div key={photo.id} className="w-fit">
              <Image
                src={photo.urls.small_s3}
                alt={photo.alt_description}
                width={200}
                height={500}
                loading="lazy"
                className="object-cover object-center rounded-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="py-10 font-extrabold leading-[70px] flex flex-col items-center justify-center" id='choose'>
        <LetterPullup words="Choose and customize your cards with" />
        <LetterPullup words="beautiful images in four simple steps" />
      </div>
      <PhotoSheetComponent />
      <div className='flex items-center justify-center'>
      <div className='relative h-fit w-fit overflow-hidden rounded-lg border bg-background md:shadow-xl"'>
        <Image
          src={'/photo-clip.png'}
          alt={'Clipper photo'}
          width={800}
          height={700}
          loading="lazy"
          className="object-cover object-center rounded-lg"
        />
        <BorderBeam size={250} duration={12} delay={9} />
      </div>
      </div>
    </div>
  );
};

export default PhotosMagicComponent;
