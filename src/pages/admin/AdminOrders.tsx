import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { mockOrders } from '@/data/mockOrders';
import { ArrowLeft } from 'lucide-react';

const AdminOrders = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-muted/50">
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/admin/dashboard')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Orders Management</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{order.id}</h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'completed'
                        ? 'bg-success/10 text-success'
                        : order.status === 'processing'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Customer Information</p>
                    <p>{order.customerName}</p>
                    <p className="text-muted-foreground">{order.customerEmail}</p>
                    <p className="text-muted-foreground">{order.customerPhone}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Shipping Address</p>
                    <p className="text-muted-foreground">{order.shippingAddress}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <span className="font-semibold">Total Amount:</span>
                  <span className="text-2xl font-bold text-primary">
                    ${order.total.toFixed(2)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
