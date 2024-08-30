'use client';

import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import AnimatedGradientText from '@/components/magicui/animated-gradient-text';
import { useRouter } from 'next/navigation';

export async function AnimatedGradientTextComponent() {
//   const router = useRouter();

  return (
    <div
      className="cursor-pointer flex items-center justify-center"
    //   onClick={() => router.push('/open')}
    >
      <AnimatedGradientText className="h-14 cursor-pointer">
        <span
          className={cn(
            `inline animate-gradient cursor-pointer bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-lg`
          )}
        >
          Click Here to Start
        </span>
        <ChevronRight className="ml-1 text-white size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}
