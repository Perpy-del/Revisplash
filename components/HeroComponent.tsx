import React from 'react';
import { Button } from './ui/button';
import { AnimatedGradientTextComponent } from './AnimatedGradientTest';
import { BlurFadeComponent } from './BlurFadeComponent';

type Props = {};

const HeroComponent = (props: Props) => {
  return (
    <div className="p-20 flex flex-col items-center gap-10 justify-center">
      <div className="w-[60%]">
        <BlurFadeComponent />
      </div>
    </div>
  );
};

export default HeroComponent;
