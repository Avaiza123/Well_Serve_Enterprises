import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Shield, Truck, Award, HeartPulse } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'All products are medical-grade and ISO certified',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to medical facilities',
    },
    {
      icon: Award,
      title: '500+ Products',
      description: 'Comprehensive range of surgical and medical supplies',
    },
    {
      icon: HeartPulse,
      title: 'Expert Support',
      description: '24/7 customer service from medical professionals',
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative py-32 md:py-40">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/public/hero.jpg')" }} // Change path to your image
        ></div>

        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Premium Surgical Products for Healthcare Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8 ">
              Trusted by over 1,000 medical facilities. Discover our comprehensive range of 500+ high-quality surgical instruments and medical supplies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="text-lg">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WellServe?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive solutions for all your surgical and medical supply needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Medical Practice?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of healthcare professionals who trust WellServe Enterprises
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="text-lg">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
