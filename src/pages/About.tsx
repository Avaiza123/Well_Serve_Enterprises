import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About WellServe Enterprises</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-muted-foreground text-center mb-8">
              Leading provider of surgical instruments and medical supplies, trusted by healthcare professionals worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm">
                  To provide healthcare facilities with reliable, high-quality surgical products that enable better patient care
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm">
                  To be the most trusted partner in medical supplies, advancing healthcare through innovation and excellence
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Our Values</h3>
                <p className="text-muted-foreground text-sm">
                  Quality, integrity, innovation, and unwavering commitment to healthcare excellence
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, WellServe Enterprises began with a simple mission: to make high-quality surgical instruments accessible to healthcare facilities of all sizes. What started as a small distributor has grown into a comprehensive medical supply partner serving over 1,000 facilities nationwide.
                </p>
                <p>
                  Our extensive catalog of 500+ products includes everything from basic surgical instruments to advanced diagnostic equipment. Each product is carefully selected and rigorously tested to ensure it meets the highest standards of medical quality and safety.
                </p>
                <p>
                  Today, we pride ourselves on being more than just a supplier. We're partners in healthcare excellence, providing consultation, training, and ongoing support to ensure our clients have the tools and knowledge they need to deliver exceptional patient care.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Facilities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
