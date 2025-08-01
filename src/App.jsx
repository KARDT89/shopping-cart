import { Button } from './components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SparklesCore } from './components/ui/sparkles';
import { HoverBorderGradient } from './components/AsternityBtn';
import { RainbowButton } from './components/magicui/rainbow-button';
import GradientText from './components/ui/GradiantText';

function App() {
  return (
    <div className="bg-background text-foreground font-mono">
      {/* Hero Section */}

      <div className="light:hidden w-full bg-background h-45 md:h-70 absolute right-0 top-13 md:top-16 lg:top-18">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <section className=" py-20 md:py-10 px-6 md:px-10">
        <div className="max-w-4xl flex flex-col items-center gap-4 mx-auto text-center">
          <img
            src="/odin-lined.png"
            alt="odin"
            className="invert pb-6 dark:invert-0 w-20 md:w-40"
          />
          <p className="text-3xl text-foreground flex flex-col md:flex-row md:gap-4 md:text-4xl font-bold">
            Welcome to{' '}
            <GradientText
              colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
              animationSpeed={10}
              showBorder={false}
              className="custom-class"
            >
              Shopping Cart
            </GradientText>
          </p>
          <div>
            <p className="text-base md:text-lg text-muted-foreground ">
              A minimalist E-Commerce project built with React.
            </p>
            <p className="text-base md:text-lg text-muted-foreground ">
              Inspired by The Odin Project "ShoppingCart" Project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={'/products'}>
              <RainbowButton variant="outline">
                Start Shopping <ArrowRight />
              </RainbowButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
