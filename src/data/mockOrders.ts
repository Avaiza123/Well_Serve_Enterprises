import { Order } from '@/types';

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'Dr. Sarah Johnson',
    customerEmail: 'sarah.johnson@hospital.com',
    customerPhone: '+1 234-567-8901',
    items: [],
    total: 1250.00,
    status: 'completed',
    date: new Date(2024, 10, 15).toISOString(),
    shippingAddress: '123 Medical Center Dr, Boston, MA 02115',
  },
  {
    id: 'ORD-002',
    customerName: 'Dr. Michael Chen',
    customerEmail: 'michael.chen@clinic.com',
    customerPhone: '+1 234-567-8902',
    items: [],
    total: 3450.00,
    status: 'processing',
    date: new Date(2024, 10, 18).toISOString(),
    shippingAddress: '456 Healthcare Blvd, New York, NY 10001',
  },
  {
    id: 'ORD-003',
    customerName: 'Dr. Emily Rodriguez',
    customerEmail: 'emily.rodriguez@medical.com',
    customerPhone: '+1 234-567-8903',
    items: [],
    total: 890.00,
    status: 'pending',
    date: new Date(2024, 10, 20).toISOString(),
    shippingAddress: '789 Wellness Ave, Los Angeles, CA 90001',
  },
];
