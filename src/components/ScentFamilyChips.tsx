import { type Collection } from '@/lib/supabase';
import { Button } from '@/components/ui/button';

interface ScentFamilyChipsProps {
  collections: Collection[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onShowAll: () => void;
}

export const ScentFamilyChips = ({ 
  collections, 
  selectedId, 
  onSelect, 
  onShowAll 
}: ScentFamilyChipsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button
        variant={selectedId === null ? "default" : "outline"}
        onClick={onShowAll}
        className="rounded-full px-6 hover:scale-105 transition-transform"
      >
        All Scents
      </Button>
      {collections.map((collection) => (
        <Button
          key={collection.id}
          variant={selectedId === collection.id ? "default" : "outline"}
          onClick={() => onSelect(collection.id)}
          className="rounded-full px-6 hover:scale-105 transition-transform"
        >
          {collection.name}
        </Button>
      ))}
    </div>
  );
};