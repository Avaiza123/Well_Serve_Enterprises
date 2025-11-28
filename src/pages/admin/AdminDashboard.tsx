import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { mockProducts } from '@/data/mockProducts';
import { mockOrders } from '@/data/mockOrders';
import { Package, ShoppingCart, DollarSign, Users, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const totalProducts = mockProducts.length;
  const totalOrders = mockOrders.length;
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.total, 0);
  const pendingOrders = mockOrders.filter((o) => o.status === 'pending').length;

  const stats = [
    {
      title: 'Total Products',
      value: totalProducts,
      icon: Package,
      color: 'text-blue-600',
    },
    {
      title: 'Total Orders',
      value: totalOrders,
      icon: ShoppingCart,
      color: 'text-green-600',
    },
    {
      title: 'Total Revenue',
      value: `$${totalRevenue.toFixed(2)}`,
      icon: DollarSign,
      color: 'text-yellow-600',
    },
    {
      title: 'Pending Orders',
      value: pendingOrders,
      icon: Users,
      color: 'text-red-600',
    },
  ];

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-muted/50">
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, {user?.name}</span>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => navigate('/admin/products')}
              >
                <Package className="h-4 w-4 mr-2" />
                Manage Products
              </Button>
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => navigate('/admin/orders')}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                View Orders
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockOrders.slice(0, 3).map((order) => (
                  <div key={order.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.customerName}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${order.total.toFixed(2)}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
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
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
