export interface UserInputs {
  roomType: string;
  dimensions: number;
  climate: string;
  budget: number;
  extraFeatures: string[];
}

export interface FurnitureItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  roomTypes: string[];
  climateCompatible: string[];
  minArea: number;
  maxArea?: number;
  category: string;
  whyThis?: string;
}

export interface ComplementaryItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'fabric' | 'curtain' | 'accessory';
}

export interface SelectedItem extends FurnitureItem {
  quantity: number;
}

export interface RoomOption {
  value: string;
  label: string;
  image: string;
}

export interface ClimateOption {
  value: string;
  label: string;
  description: string;
}
