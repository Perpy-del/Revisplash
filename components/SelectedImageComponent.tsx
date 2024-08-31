import React, { useEffect, useState } from 'react';
import { Input } from './ui/input';
import Image from 'next/image';
import { BorderBeam } from './magicui/border-beam';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { fetchAPhoto } from '@/lib/unsplash';

type Props = {
  photoLoading: boolean;
  setPhotoLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPhotoId: string | null;
  selectedPhoto: any;
  setOpenSheet: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<any>>;
  setPrevSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setImageSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const SelectedImageComponent = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const loadPhoto = async (id: string | null) => {
      props.setPhotoLoading(true);
      try {
        const delay = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
        await new Promise(resolve => setTimeout(resolve, delay));

        const response = await fetchAPhoto(id);
        props.setSelectedPhoto(response);
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        props.setPhotoLoading(false);
      }
    };

    loadPhoto(props.selectedPhotoId);
  }, [props.selectedPhotoId]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const downloadDivAsPNG = () => {
    const element = document.getElementById('content-to-download');

    if (!element) {
      console.error('Element not found');
      return;
    }

    html2canvas(element as HTMLElement, {
      scale: 1,
      useCORS: true,
    })
      .then((canvas: HTMLCanvasElement) => {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'downloaded-image.png';
        link.click();
      })
      .catch(error => {
        console.error('Error generating PNG:', error);
      });
  };

  return (
    <>
      <h2 className="text-lg md:text-xl font-semibold">
        Please Tell Us Your Name
      </h2>
      <p className="pb-7 text-sm md:text-base">
        Personalize your card with your name
      </p>
      <div className="mb-5">
        <Input
          type="text"
          placeholder="Your name"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      {props.photoLoading ? (
        <div className="h-[50vh] flex items-center justify-center text-2xl font-semibold text-red-500">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          {props.selectedPhoto && (
            <div
              className={`w-fit cursor-pointer border-2 rounded-lg relative`}
            >
              <Image
                src={props.selectedPhoto.urls.small}
                alt={props.selectedPhoto.alt_description}
                width={200}
                height={200}
                loading="lazy"
                className="object-cover object-center rounded-lg"
              />
              <BorderBeam size={250} duration={12} delay={9} />
            </div>
          )}
        </div>
      )}
      <div className="pt-4 flex items-center justify-center gap-3">
        <Button
          onClick={() => {
            props.setImageSelected(false);
            props.setPrevSelected(true);
          }}
        >
          Go Back
        </Button>
        <Dialog>
          <DialogTrigger>
            <Button
              className="bg-red-500 flex justify-center items-center gap-1 text-white hover:bg-red-600"
              disabled={!inputValue}
            >
              Submit{' '}
              <span>
                <ChevronRight size={20} />
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div>
              <h2 className="text-xl font-semibold">All Set!!</h2>
              <p className="pb-7">Here is your personalized Thank You Card.</p>
              <div className="w-full flex items-center justify-center pb-5">
                {props.selectedPhoto && (
                  <div
                    id="content-to-download"
                    className={`w-fit cursor-pointer border-2 rounded-lg relative`}
                  >
                    <Image
                      src={props.selectedPhoto.urls.small}
                      alt={props.selectedPhoto.alt_description}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="object-contain object-center rounded-lg"
                    />
                    <div className="absolute bg-black/30 dark:bg-black/70 top-0 left-0 right-0 bottom-0 flex flex-col justify-between items-center py-5">
                      <div>
                        <h1 className="text-xl font-bold text-white">
                          THANK YOU
                        </h1>
                      </div>
                      <div>
                        <h1 className="uppercase font-semibold text-white">
                          {inputValue}
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center justify-center">
                  <Button
                    className="flex items-center justify-center gap-2 text-white bg-red-500 hover:bg-red-600"
                    onClick={downloadDivAsPNG}
                  >
                    Download
                    <span>
                      <Download size={20} />
                    </span>
                  </Button>
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    className="flex items-center justify-center gap-2"
                    onClick={() => {
                      props.setOpenSheet(false);
                      setInputValue('');
                      props.setPage(1);
                      props.setImageSelected(false);
                      props.setPrevSelected(true);
                    }}
                  >
                    <span>
                      <ChevronLeft size={20} />
                    </span>
                    Back Home
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default SelectedImageComponent;
