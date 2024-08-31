import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { fetchAPhoto, fetchPhotos } from '@/lib/unsplash';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { BorderBeam } from '@/components/magicui/border-beam';
import SelectCardComponent from './SelectCardComponent';
import SelectedImageComponent from './SelectedImageComponent';

type Props = {};

const PhotoSheetComponent = (props: Props) => {
  const [photoLoading, setPhotoLoading] = useState<boolean>(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  const [prevSelected, setPrevSelected] = useState<boolean>(true);
  const [imageSelected, setImageSelected] = useState<boolean>(false);
  const [openSheet, setOpenSheet] = useState<boolean>(true);
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  const [page, setPage] = useState<number>(1);

  return (
    <Sheet>
      <div className="flex items-center justify-center pb-10">
        <SheetTrigger className="bg-red-400 w-60 h-12 hover:bg-red-500 hover:scale-105 text-white font-semibold text-xl flex items-center justify-center gap-1 hover:gap-3 transition-all duration-300 rounded-md" onClick={() => setOpenSheet(true)}>
          Choose Now{' '}
          <span>
            <ChevronRight />
          </span>
        </SheetTrigger>
      </div>
      {openSheet && (
        <SheetContent className="pt-8 md:pt-5 lg:pt-14 pb-8">
          {prevSelected && (
            <SelectCardComponent
              setPrevSelected={setPrevSelected}
              setImageSelected={setImageSelected}
              setSelectedPhotoId={setSelectedPhotoId}
              selectedPhotoId={selectedPhotoId}
              page={page}
              setPage={setPage}
            />
          )}
          {imageSelected && (
            <SelectedImageComponent
              photoLoading={photoLoading}
              selectedPhoto={selectedPhoto}
              setPhotoLoading={setPhotoLoading}
              selectedPhotoId={selectedPhotoId}
              setOpenSheet={setOpenSheet}
              setSelectedPhoto={setSelectedPhoto}
              setPrevSelected={setPrevSelected}
              setImageSelected={setImageSelected}
              setPage={setPage}
            />
          )}
        </SheetContent>
      )}
    </Sheet>
  );
};

export default PhotoSheetComponent;
