import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, HeartPulse, ShieldCheck, Users, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Fast & Reliable Delivery',
      description: 'Express shipping options available for urgent medical needs. Track your orders in real-time with our logistics partners.',
    },
    {
      icon: HeartPulse,
      title: 'Medical Equipment Consultation',
      description: 'Our team of medical professionals helps you choose the right equipment for your facility\'s specific needs.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      description: 'All products undergo rigorous quality checks and are certified to meet international medical standards.',
    },
    {
      icon: Users,
      title: 'Dedicated Account Management',
      description: 'Personalized service with dedicated account managers for hospitals and large medical facilities.',
    },
    {
      icon: Clock,
      title: '24/7 Customer Support',
      description: 'Round-the-clock support team available to assist with orders, queries, and technical support.',
    },
    {
      icon: Award,
      title: 'Training & Installation',
      description: 'Professional installation services and comprehensive training for complex medical equipment.',
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions to support your medical facility's operational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We understand that every medical facility has unique requirements. Contact us to discuss customized product packages and service agreements tailored to your needs.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
