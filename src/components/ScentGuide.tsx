import { Card, CardContent } from '@/components/ui/card';
import { Home, Bed, Bath, Coffee } from 'lucide-react';

const spaces = [
  {
    icon: Home,
    title: 'Living Room',
    description: 'Create a welcoming atmosphere with woody and amber notes',
    scents: ['Woody Earth', 'Spicy Warmth']
  },
  {
    icon: Bed,
    title: 'Bedroom',
    description: 'Promote relaxation with calming floral and herbal fragrances',
    scents: ['Floral Garden', 'Citrus Fresh']
  },
  {
    icon: Bath,
    title: 'Bathroom',
    description: 'Fresh, clean scents with citrus and herbal notes',
    scents: ['Citrus Fresh']
  },
  {
    icon: Coffee,
    title: 'Kitchen & Dining',
    description: 'Warm, inviting aromas with spicy and citrus notes',
    scents: ['Spicy Warmth', 'Citrus Fresh']
  }
];

export const ScentGuide = () => {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Scent Your Spaces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect fragrance for every room in your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space) => {
            const Icon = space.icon;
            return (
              <Card key={space.title} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{space.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {space.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {space.scents.map((scent) => (
                        <span
                          key={scent}
                          className="text-xs bg-accent/20 text-accent-foreground px-3 py-1 rounded-full"
                        >
                          {scent}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};