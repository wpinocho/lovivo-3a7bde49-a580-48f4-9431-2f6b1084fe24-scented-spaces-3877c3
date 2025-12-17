import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { ScentFamilyChips } from '@/components/ScentFamilyChips';
import { ScentGuide } from '@/components/ScentGuide';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Sparkles } from 'lucide-react';

/**
 * EDITABLE UI - IndexUI
 * 
 * Luxury home fragrance store interface
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero-fragrance.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Sensorial Home Fragrance
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Transform your space with artisanal candles and diffusers
          </p>
          <Button 
            size="lg"
            className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
            onClick={() => {
              document.getElementById('scent-families')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Find Your Note
          </Button>
        </div>
      </section>

      {/* Scent Family Chips */}
      {!loadingCollections && collections.length > 0 && (
        <section id="scent-families" className="py-12 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Explore Scent Families
              </h2>
              <p className="text-muted-foreground">
                Discover your perfect fragrance profile
              </p>
            </div>
            
            <ScentFamilyChips
              collections={collections}
              selectedId={selectedCollectionId}
              onSelect={handleViewCollectionProducts}
              onShowAll={handleShowAllProducts}
            />
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {selectedCollectionId 
                ? collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'
                : 'Featured Products'
              }
            </h2>
            <p className="text-muted-foreground">
              Hand-poured candles and premium diffusers
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-muted/30 rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products available in this collection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Scent Guide */}
      <ScentGuide />

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};