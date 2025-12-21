import { FurnitureItem, ComplementaryItem, RoomOption, ClimateOption } from '../types';

export const roomOptions: RoomOption[] = [
  { value: 'kitchen', label: 'Kitchen', image: 'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1NzIzNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { value: 'living', label: 'Living Room', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjU3MzQ0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { value: 'bedroom', label: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1NzM2Mjc2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { value: 'bathroom', label: 'Bathroom', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2NTc5NjIwOXww&ixlib=rb-4.1.0&q=80&w=1080' },
  { value: 'dining', label: 'Dining Room', image: 'https://images.unsplash.com/photo-1616486886892-ff366aa67ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tfGVufDF8fHx8MTc2NTgxODIxNnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { value: 'office', label: 'Home Office', image: 'https://images.unsplash.com/photo-1614598389565-8d56eddd2f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb2ZmaWNlJTIwZGVza3xlbnwxfHx8fDE3NjU4MTgyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { value: 'kids', label: 'Kids Room', image: 'https://images.unsplash.com/photo-1600493505500-afac3fc363e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYmVkcm9vbXxlbnwxfHx8fDE3NjU4MTgyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { value: 'balcony', label: 'Balcony/Patio', image: 'https://images.unsplash.com/photo-1661024768242-5fd7c8f1e3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwcGF0aW8lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY1ODE4MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
];

export const climateOptions: ClimateOption[] = [
  { value: 'tropical', label: 'Tropical/Humid', description: 'High humidity, moisture-resistant materials needed' },
  { value: 'dry', label: 'Dry/Arid', description: 'Low humidity, dust-resistant materials recommended' },
  { value: 'temperate', label: 'Temperate', description: 'Moderate climate, versatile materials work well' },
  { value: 'cold', label: 'Cold', description: 'Low temperatures, insulated and warm materials preferred' },
];

export const furnitureDatabase: FurnitureItem[] = [
  // Living Room
  {
    id: 'liv-1',
    name: 'Modern L-Shaped Sofa',
    description: 'Comfortable 6-seater sofa with premium fabric upholstery',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhfGVufDF8fHx8MTc2NTc5ODgzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['living'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 15,
    category: 'seating',
    whyThis: 'Spacious design perfect for family gatherings with moisture-resistant fabric'
  },
  {
    id: 'liv-2',
    name: 'Compact 3-Seater Sofa',
    description: 'Space-saving sofa ideal for smaller living rooms',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhfGVufDF8fHx8MTc2NTc5ODgzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['living'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 8,
    maxArea: 15,
    category: 'seating',
    whyThis: 'Perfect for compact spaces without compromising comfort'
  },
  {
    id: 'liv-3',
    name: 'Glass Coffee Table',
    description: 'Contemporary tempered glass table with wooden legs',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1542372147193-a7aca54189cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0YWJsZXxlbnwxfHx8fDE3NjU3ODU1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['living'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 8,
    category: 'table',
    whyThis: 'Easy to clean and maintains elegance in any climate'
  },
  {
    id: 'liv-4',
    name: 'TV Unit with Storage',
    description: 'Modern entertainment unit with ample storage space',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1593430980369-68efc5a5eb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGZ8ZW58MXx8fHwxNzY1ODA1NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['living'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 10,
    category: 'storage',
    whyThis: 'Organized storage with contemporary aesthetics'
  },
  // Kitchen
  {
    id: 'kit-1',
    name: 'Modular Kitchen Cabinets',
    description: 'Complete set of upper and lower cabinets with drawers',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1665507279638-5b48073c637b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2FiaW5ldHN8ZW58MXx8fHwxNzY1NzMzMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['kitchen'],
    climateCompatible: ['tropical', 'temperate'],
    minArea: 6,
    category: 'storage',
    whyThis: 'Waterproof material ideal for kitchen humidity'
  },
  {
    id: 'kit-2',
    name: 'Kitchen Island with Seating',
    description: 'Multi-functional island with breakfast bar',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1665507279638-5b48073c637b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2FiaW5ldHN8ZW58MXx8fHwxNzY1NzMzMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['kitchen'],
    climateCompatible: ['tropical', 'dry', 'temperate'],
    minArea: 12,
    category: 'storage',
    whyThis: 'Adds functionality and casual dining space'
  },
  {
    id: 'kit-3',
    name: 'Compact Dining Set',
    description: '4-seater dining table with chairs for kitchen area',
    price: 24000,
    image: 'https://images.unsplash.com/photo-1611633332753-d1e2f695aa3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjB0YWJsZSUyMGNoYWlyc3xlbnwxfHx8fDE3NjU3MTY2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['kitchen', 'dining'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 8,
    maxArea: 15,
    category: 'dining',
    whyThis: 'Perfect size for kitchen dining without overwhelming the space'
  },
  // Bedroom
  {
    id: 'bed-1',
    name: 'Queen Size Bed with Storage',
    description: 'Elegant bed frame with hydraulic storage and mattress',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1680503146454-04ac81a63550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY1Nzg5MDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['bedroom'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 12,
    category: 'bed',
    whyThis: 'Maximizes storage in bedroom while maintaining comfort'
  },
  {
    id: 'bed-2',
    name: 'King Size Bed',
    description: 'Luxurious king-size bed with premium upholstered headboard',
    price: 58000,
    image: 'https://images.unsplash.com/photo-1680503146454-04ac81a63550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY1Nzg5MDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['bedroom'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 15,
    category: 'bed',
    whyThis: 'Spacious and luxurious for master bedrooms'
  },
  {
    id: 'bed-3',
    name: 'Sliding Door Wardrobe',
    description: '6-door wardrobe with mirror and internal organizers',
    price: 48000,
    image: 'https://images.unsplash.com/photo-1630699144552-b2b60b277b75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJkcm9iZSUyMGNsb3NldHxlbnwxfHx8fDE3NjU3Njg4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['bedroom'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 10,
    category: 'storage',
    whyThis: 'Space-efficient design with maximum storage capacity'
  },
  {
    id: 'bed-4',
    name: 'Bedside Tables (Pair)',
    description: 'Matching nightstands with drawers and lamp space',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1542372147193-a7aca54189cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0YWJsZXxlbnwxfHx8fDE3NjU3ODU1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['bedroom'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 8,
    category: 'storage',
    whyThis: 'Essential bedroom furniture for convenience and symmetry'
  },
  // Dining Room
  {
    id: 'din-1',
    name: '6-Seater Dining Set',
    description: 'Elegant wooden dining table with cushioned chairs',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1611633332753-d1e2f695aa3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjB0YWJsZSUyMGNoYWlyc3xlbnwxfHx8fDE3NjU3MTY2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['dining'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 12,
    category: 'dining',
    whyThis: 'Perfect for family dining with durable construction'
  },
  {
    id: 'din-2',
    name: '8-Seater Extendable Table',
    description: 'Large dining table that extends for gatherings',
    price: 62000,
    image: 'https://images.unsplash.com/photo-1611633332753-d1e2f695aa3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjB0YWJsZSUyMGNoYWlyc3xlbnwxfHx8fDE3NjU3MTY2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['dining'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 15,
    category: 'dining',
    whyThis: 'Versatile design for both daily use and entertaining'
  },
  {
    id: 'din-3',
    name: 'Dining Buffet Cabinet',
    description: 'Storage unit with glass display and drawers',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1593430980369-68efc5a5eb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGZ8ZW58MXx8fHwxNzY1ODA1NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['dining'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 10,
    category: 'storage',
    whyThis: 'Essential for storing dining essentials and display'
  },
  // Home Office
  {
    id: 'off-1',
    name: 'Executive Office Desk',
    description: 'Large work desk with cable management and drawers',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1637762646936-29b68cd6670d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwY2hhaXJ8ZW58MXx8fHwxNzY1NzY4ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['office'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 8,
    category: 'desk',
    whyThis: 'Spacious workspace for productivity and organization'
  },
  {
    id: 'off-2',
    name: 'Ergonomic Office Chair',
    description: 'High-back chair with lumbar support and adjustable features',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1637762646936-29b68cd6670d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwY2hhaXJ8ZW58MXx8fHwxNzY1NzY4ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['office'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 6,
    category: 'seating',
    whyThis: 'Essential for comfortable long working hours'
  },
  {
    id: 'off-3',
    name: 'Bookshelf Unit',
    description: 'Tall shelving unit for books and decor',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1593430980369-68efc5a5eb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGZ8ZW58MXx8fHwxNzY1ODA1NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['office', 'living'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 6,
    category: 'storage',
    whyThis: 'Organize books and display professional achievements'
  },
  // Kids Room
  {
    id: 'kid-1',
    name: 'Kids Bunk Bed',
    description: 'Space-saving bunk bed with safety rails and storage',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1680503146454-04ac81a63550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY1Nzg5MDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['kids'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 10,
    category: 'bed',
    whyThis: 'Perfect for siblings or sleepovers with built-in storage'
  },
  {
    id: 'kid-2',
    name: 'Study Desk with Chair',
    description: 'Height-adjustable desk and chair set for growing kids',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1637762646936-29b68cd6670d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwY2hhaXJ8ZW58MXx8fHwxNzY1NzY4ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['kids'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 8,
    category: 'desk',
    whyThis: 'Grows with your child, promoting good study habits'
  },
  {
    id: 'kid-3',
    name: 'Toy Storage Unit',
    description: 'Colorful storage bins and shelves for toys and books',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1593430980369-68efc5a5eb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGZ8ZW58MXx8fHwxNzY1ODA1NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['kids'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 6,
    category: 'storage',
    whyThis: 'Makes organizing fun and accessible for children'
  },
  // Balcony/Patio
  {
    id: 'bal-1',
    name: 'Outdoor Seating Set',
    description: 'Weather-resistant 4-seater patio furniture',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1661024768242-5fd7c8f1e3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwcGF0aW8lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY1ODE4MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['balcony'],
    climateCompatible: ['tropical', 'dry', 'temperate'],
    minArea: 6,
    category: 'seating',
    whyThis: 'Durable outdoor materials perfect for any weather'
  },
  {
    id: 'bal-2',
    name: 'Compact Bistro Set',
    description: 'Small table and 2 chairs for intimate outdoor spaces',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1661024768242-5fd7c8f1e3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwcGF0aW8lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY1ODE4MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['balcony'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 3,
    maxArea: 8,
    category: 'seating',
    whyThis: 'Perfect for small balconies and morning coffee'
  },
  // Bathroom
  {
    id: 'bat-1',
    name: 'Bathroom Vanity Unit',
    description: 'Modern vanity with sink, mirror, and storage',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1630699144552-b2b60b277b75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJkcm9iZSUyMGNsb3NldHxlbnwxfHx8fDE3NjU3Njg4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['bathroom'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 4,
    category: 'storage',
    whyThis: 'Water-resistant materials with ample storage'
  },
  {
    id: 'bat-2',
    name: 'Storage Cabinet',
    description: 'Tall waterproof cabinet for bathroom essentials',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1630699144552-b2b60b277b75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJkcm9iZSUyMGNsb3NldHxlbnwxfHx8fDE3NjU3Njg4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    roomTypes: ['bathroom'],
    climateCompatible: ['tropical', 'dry', 'temperate', 'cold'],
    minArea: 4,
    category: 'storage',
    whyThis: 'Maximizes vertical space in bathrooms'
  },
];

export const complementaryItems: ComplementaryItem[] = [
  // Fabrics
  {
    id: 'fab-1',
    name: 'Premium Cotton Upholstery',
    description: 'Breathable cotton fabric for furniture',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1679224105358-e9015fa50c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJvdyUyMHBpbGxvd3MlMjBjdXNoaW9uc3xlbnwxfHx8fDE3NjU4MTgyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'fabric'
  },
  {
    id: 'fab-2',
    name: 'Velvet Cushion Covers (Set of 4)',
    description: 'Luxurious velvet covers in neutral tones',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1679224105358-e9015fa50c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJvdyUyMHBpbGxvd3MlMjBjdXNoaW9uc3xlbnwxfHx8fDE3NjU4MTgyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'fabric'
  },
  {
    id: 'fab-3',
    name: 'Linen Throw Blanket',
    description: 'Soft linen blanket for sofas',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1679224105358-e9015fa50c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJvdyUyMHBpbGxvd3MlMjBjdXNoaW9uc3xlbnwxfHx8fDE3NjU4MTgyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'fabric'
  },
  {
    id: 'fab-4',
    name: 'Waterproof Furniture Cover',
    description: 'Protective cover for humid climates',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1679224105358-e9015fa50c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJvdyUyMHBpbGxvd3MlMjBjdXNoaW9uc3xlbnwxfHx8fDE3NjU4MTgyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'fabric'
  },
  {
    id: 'fab-5',
    name: 'Designer Throw Pillows (Set of 6)',
    description: 'Mix and match decorative pillows',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1679224105358-e9015fa50c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJvdyUyMHBpbGxvd3MlMjBjdXNoaW9uc3xlbnwxfHx8fDE3NjU4MTgyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'fabric'
  },
  // Curtains
  {
    id: 'cur-1',
    name: 'Blackout Curtains',
    description: 'Energy-efficient light-blocking curtains',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1655137673627-2ed098d729bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ0YWlucyUyMGRyYXBlc3xlbnwxfHx8fDE3NjU4MTgyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'curtain'
  },
  {
    id: 'cur-2',
    name: 'Sheer Voile Curtains',
    description: 'Light-filtering elegant drapes',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1655137673627-2ed098d729bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ0YWlucyUyMGRyYXBlc3xlbnwxfHx8fDE3NjU4MTgyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'curtain'
  },
  {
    id: 'cur-3',
    name: 'Thermal Insulated Curtains',
    description: 'Temperature control curtains for cold climates',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1655137673627-2ed098d729bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ0YWlucyUyMGRyYXBlc3xlbnwxfHx8fDE3NjU4MTgyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'curtain'
  },
  {
    id: 'cur-4',
    name: 'Printed Designer Curtains',
    description: 'Contemporary patterns and colors',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1655137673627-2ed098d729bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ0YWlucyUyMGRyYXBlc3xlbnwxfHx8fDE3NjU4MTgyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'curtain'
  },
  {
    id: 'cur-5',
    name: 'Moisture-Resistant Bathroom Curtain',
    description: 'Special fabric for humid areas',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1655137673627-2ed098d729bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ0YWlucyUyMGRyYXBlc3xlbnwxfHx8fDE3NjU4MTgyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'curtain'
  },
  // Accessories
  {
    id: 'acc-1',
    name: 'Wool Area Rug (6x9 ft)',
    description: 'Handwoven contemporary design rug',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1745905308908-25f35bacd146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmVhJTIwcnVnfGVufDF8fHx8MTc2NTgwNTc2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'accessory'
  },
  {
    id: 'acc-2',
    name: 'Modern Table Lamp',
    description: 'Adjustable LED table lamp',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1763060722627-e06bfa20faaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZSUyMGxhbXAlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjU4MTgyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'accessory'
  },
  {
    id: 'acc-3',
    name: 'Wall Art Set (3 pieces)',
    description: 'Abstract canvas prints with frames',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1624611943960-12d51727906f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxsJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY1ODE4MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'accessory'
  },
  {
    id: 'acc-4',
    name: 'Indoor Plant Collection',
    description: 'Set of 3 air-purifying plants with pots',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHN8ZW58MXx8fHwxNzY1NzgyNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'accessory'
  },
  {
    id: 'acc-5',
    name: 'Decorative Vase Set',
    description: 'Ceramic vases in varying heights',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1658280595889-04d0d5185baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdmFzZXxlbnwxfHx8fDE3NjU3NzUwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'accessory'
  },
  {
    id: 'acc-6',
    name: 'Floor Lamp',
    description: 'Modern standing lamp with dimmer',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1763060722627-e06bfa20faaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZSUyMGxhbXAlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjU4MTgyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'accessory'
  },
  {
    id: 'acc-7',
    name: 'Decorative Mirror',
    description: 'Large wall mirror with ornate frame',
    price: 9500,
    image: 'https://images.unsplash.com/photo-1658280595889-04d0d5185baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdmFzZXxlbnwxfHx8fDE3NjU3NzUwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'accessory'
  },
  {
    id: 'acc-8',
    name: 'Smart Home Hub',
    description: 'Voice-controlled home automation system',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1658280595889-04d0d5185baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdmFzZXxlbnwxfHx8fDE3NjU3NzUwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'accessory'
  },
  {
    id: 'acc-9',
    name: 'Bamboo Storage Baskets (Set of 3)',
    description: 'Eco-friendly woven storage solution',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1658280595889-04d0d5185baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdmFzZXxlbnwxfHx8fDE3NjU3NzUwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'accessory'
  },
  {
    id: 'acc-10',
    name: 'Wall Clock',
    description: 'Silent modern wall clock',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1658280595889-04d0d5185baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdmFzZXxlbnwxfHx8fDE3NjU3NzUwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'accessory'
  },
];
