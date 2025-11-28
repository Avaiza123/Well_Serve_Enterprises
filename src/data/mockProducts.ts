import { Product } from '@/types';

const categories = [
  'Surgical Instruments',
  'Diagnostic Equipment',
  'Patient Monitoring',
  'Surgical Supplies',
  'Sterilization Equipment',
  'Emergency Care',
  'Laboratory Equipment',
  'Imaging Systems',
];

const productNames = {
  'Surgical Instruments': [
    'Surgical Scissors', 'Scalpel Handle', 'Forceps Set', 'Needle Holder', 'Retractor Set',
    'Hemostatic Clamp', 'Surgical Probe', 'Curette', 'Bone Saw', 'Surgical Drill'
  ],
  'Diagnostic Equipment': [
    'Stethoscope', 'Blood Pressure Monitor', 'Thermometer', 'Pulse Oximeter', 'ECG Machine',
    'Otoscope', 'Ophthalmoscope', 'Reflex Hammer', 'Tuning Fork', 'Sphygmomanometer'
  ],
  'Patient Monitoring': [
    'Heart Rate Monitor', 'Vital Signs Monitor', 'Patient Monitor', 'Fetal Monitor', 'Anesthesia Monitor',
    'Capnograph', 'Infusion Pump', 'Syringe Pump', 'Blood Glucose Monitor', 'Temperature Monitor'
  ],
  'Surgical Supplies': [
    'Surgical Gloves', 'Surgical Masks', 'Surgical Gowns', 'Surgical Drapes', 'Gauze Pads',
    'Surgical Tape', 'Sutures', 'Needles', 'Syringes', 'IV Catheters'
  ],
  'Sterilization Equipment': [
    'Autoclave', 'UV Sterilizer', 'Sterilization Pouches', 'Instrument Tray', 'Sterilization Indicator',
    'Ultrasonic Cleaner', 'Disinfectant Solution', 'Sterilization Wrap', 'Chemical Indicator', 'Biological Indicator'
  ],
  'Emergency Care': [
    'Defibrillator', 'Emergency Cart', 'Oxygen Cylinder', 'Ambu Bag', 'Laryngoscope',
    'Emergency Suction Unit', 'Cervical Collar', 'Backboard', 'Emergency Splint', 'Tourniquet'
  ],
  'Laboratory Equipment': [
    'Microscope', 'Centrifuge', 'Incubator', 'Spectrophotometer', 'pH Meter',
    'Laboratory Balance', 'Pipettes', 'Test Tubes', 'Petri Dishes', 'Laboratory Timer'
  ],
  'Imaging Systems': [
    'X-Ray Machine', 'Ultrasound Scanner', 'CT Scanner', 'MRI Scanner', 'C-Arm',
    'Mammography Unit', 'Fluoroscopy System', 'Digital Radiography', 'PACS System', 'Image Intensifier'
  ],
};

const descriptions = [
  'High-quality medical grade equipment designed for precision and reliability.',
  'Professional surgical tool manufactured to meet international standards.',
  'Durable and ergonomic design for enhanced surgical performance.',
  'State-of-the-art medical device with advanced features.',
  'Precision-engineered instrument for optimal clinical outcomes.',
];

export const generateMockProducts = (): Product[] => {
  const products: Product[] = [];
  let id = 1;

  categories.forEach((category) => {
    const names = productNames[category as keyof typeof productNames] || [];
    
    // Generate multiple variants for each product type
    names.forEach((baseName, index) => {
      // Generate 6-8 variants per product type
      const variantCount = 6 + Math.floor(Math.random() * 3);
      
      for (let v = 0; v < variantCount; v++) {
        const variant = v > 0 ? ` - Model ${String.fromCharCode(65 + v)}` : '';
        const price = Math.floor(50 + Math.random() * 1950);
        
        products.push({
          id: `PROD-${String(id).padStart(4, '0')}`,
          name: `${baseName}${variant}`,
          description: descriptions[Math.floor(Math.random() * descriptions.length)],
          price,
          category,
          image: `https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=400&fit=crop`,
          stock: Math.floor(10 + Math.random() * 90),
          specifications: [
            'Medical Grade Material',
            'ISO Certified',
            'Sterile Packaging',
            'CE Marked',
          ],
        });
        id++;
      }
    });
  });

  return products;
};

export const mockProducts = generateMockProducts();
