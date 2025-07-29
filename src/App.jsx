import { Button } from './components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="bg-background text-foreground font-mono">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-4xl flex flex-col items-center gap-2 mx-auto text-center">
          <img src="/odin-lined.png" alt="odin" className="invert pb-6 dark:invert-0 w-30 md:w-50"/>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-primary">ShoppingCart</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-8">
            A minimalist eCommerce project built with React, inspired by
            The Odin Project "ShoppingCart" Project.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={'/products'}>
              <Button size="lg" className="px-6 cursor-pointer">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
