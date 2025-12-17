import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden cursor-pointer"
      onClick={() => onViewProducts(collection.id)}
    >
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted/30 overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              No image
            </div>
          )}
          {collection.featured && (
            <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
              Featured
            </span>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm line-clamp-2">
              {collection.description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}