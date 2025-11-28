import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
