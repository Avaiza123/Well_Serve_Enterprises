import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { mockProducts } from '@/data/mockProducts';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/products')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-primary mb-4">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-muted-foreground mb-6">{product.description}</p>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <Card className="mb-6">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3">Specifications</h3>
                  <ul className="space-y-2">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Stock Status */}
            <div className="mb-6">
              <p className="text-sm">
                <span className="font-semibold">Availability: </span>
                <span className={product.stock > 0 ? 'text-success' : 'text-destructive'}>
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-16 text-center font-semibold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
