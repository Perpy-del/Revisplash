import BlurFade from '@/components/magicui/blur-fade';
import { AnimatedGradientTextComponent } from './AnimatedGradientTest';

export function BlurFadeComponent() {
  return (
    <section id="header" className="flex flex-col justify-center items-center">
      <BlurFade delay={0.25} inView>
        <h1 className="font-extrabold text-[60px] leading-[70px] text-center text-slate-900 dark:text-white">
          Personalize your cards to perfection with
        </h1>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <span className="font-extrabold text-[60px] leading-[70px] text-center text-slate-900 dark:text-white bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50">
          beautifully selected
        </span>
      </BlurFade>
      <BlurFade delay={0.25 * 3} inView>
        <span className="font-extrabold text-[60px] leading-[70px] text-center text-slate-900 dark:text-white mb-10">
          images
        </span>
      </BlurFade>
      <br />
      <br />
      <BlurFade delay={0.25 * 4} inView>
        <AnimatedGradientTextComponent />
      </BlurFade>
    </section>
  );
}
