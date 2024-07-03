import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="flex items-center justify-between py-6">
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/40x40" alt="Company Logo" />
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-lg font-medium">Home</a>
            <a href="#features" className="text-lg font-medium">Features</a>
            <a href="#pricing" className="text-lg font-medium">Pricing</a>
            <a href="#about" className="text-lg font-medium">About</a>
            <a href="#contact" className="text-lg font-medium">Contact</a>
          </nav>
        </div>
        <Button variant="outline">Sign Up</Button>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Welcome to Our SaaS Product</h1>
        <p className="text-xl text-muted-foreground">The best solution for your business needs.</p>
        <Button size="lg">Get Started</Button>
        <img src="https://placehold.co/600x400" alt="Product Illustration" className="mx-auto mt-6" />
      </section>

      {/* Features Section */}
      <section id="features" className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <img src="https://placehold.co/100x100" alt="Feature Icon" className="mx-auto" />
              <CardTitle className="text-center">Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img src="https://placehold.co/100x100" alt="Feature Icon" className="mx-auto" />
              <CardTitle className="text-center">Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img src="https://placehold.co/100x100" alt="Feature Icon" className="mx-auto" />
              <CardTitle className="text-center">Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Description of feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-2xl font-bold">$10/month</p>
              <ul className="mt-4 space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button className="mt-4 w-full">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Pro Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-2xl font-bold">$20/month</p>
              <ul className="mt-4 space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
              </ul>
              <Button className="mt-4 w-full">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Enterprise Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-2xl font-bold">$30/month</p>
              <ul className="mt-4 space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
                <li>Feature E</li>
              </ul>
              <Button className="mt-4 w-full">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="text-center space-y-4">
                <Avatar src="https://placehold.co/100x100" alt="Customer Photo" className="mx-auto" />
                <p className="text-lg font-medium">John Doe</p>
                <p>"This product has changed my life for the better!"</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center space-y-4">
                <Avatar src="https://placehold.co/100x100" alt="Customer Photo" className="mx-auto" />
                <p className="text-lg font-medium">Jane Smith</p>
                <p>"I can't imagine running my business without it."</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center space-y-4">
                <Avatar src="https://placehold.co/100x100" alt="Customer Photo" className="mx-auto" />
                <p className="text-lg font-medium">Alice Johnson</p>
                <p>"A must-have tool for any professional."</p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="flex items-center justify-between">
          <img src="https://placehold.co/40x40" alt="Company Logo" />
          <nav className="flex space-x-6">
            <a href="#privacy" className="text-lg font-medium">Privacy Policy</a>
            <a href="#terms" className="text-lg font-medium">Terms of Service</a>
          </nav>
          <div className="flex space-x-4">
            <a href="#facebook" className="text-lg font-medium">FB</a>
            <a href="#twitter" className="text-lg font-medium">TW</a>
            <a href="#linkedin" className="text-lg font-medium">LN</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;