# DecorVista - Personalized Home Decor Solutions

## Overview

DecorVista is a comprehensive, fully interactive home decor services website designed to help users transform their living spaces with personalized furniture and decor recommendations. The platform combines intelligent filtering algorithms with beautiful UI design to provide climate-appropriate, budget-friendly solutions tailored to Indian households.

## Features

### 🏠 Multi-Page Website
- **Home Page**: Hero section with beautiful imagery, feature showcase, and call-to-action
- **About Us**: Company story, mission, values, team information, and statistics
- **Contact Us**: Interactive contact form with office location details and FAQ section
- **Interactive Customization Tool**: 3-step wizard for personalized recommendations

### 🎨 Interactive Customization Tool

#### Step 1: User Input Collection
- **Room Type Selection**: 8 room options (Kitchen, Living Room, Bedroom, Bathroom, Dining Room, Home Office, Kids Room, Balcony/Patio) with thumbnail images
- **Dimensions Input**: Text input and interactive slider for room area in square meters (m²)
- **Climate Selection**: 4 climate types (Tropical/Humid, Dry/Arid, Temperate, Cold) with descriptions
- **Budget Input**: Range slider and text input for budget in Indian Rupees (₹10,000 - ₹5,00,000)
- **Extra Features**: Checkboxes for Lighting, Wall Art, Plants, Smart Home Integration, and Eco-Friendly Materials

#### Step 2: Furniture Recommendations
- **Smart Filtering**: Automatically filters 25+ furniture items based on:
  - Room type compatibility
  - Dimensions (min/max area requirements)
  - Climate suitability
  - Budget constraints
- **Interactive Selection**: 
  - Click to select items with quantity adjustment
  - Visual feedback with checkmarks and highlighting
  - Real-time budget tracking
  - "Why This?" tooltips explaining recommendations
- **Budget Dashboard**: Live display of budget, selected amount, and remaining balance

#### Step 3: Final Review & Recommendations
- **Selected Furniture Review**: Cart-like view with edit functionality
- **Complementary Items**:
  - 5+ Fabric & Upholstery options
  - 5+ Curtain & Drape options
  - 10+ Accessory options (rugs, lamps, wall art, plants, mirrors, etc.)
- **Cost Calculation**:
  - Furniture subtotal
  - Complementary items subtotal
  - 18% GST calculation
  - Total cost with budget comparison
- **Quote Download**: Export detailed quote as text file

### 💰 Financial Features
- Currency: Indian Rupees (INR) with proper formatting (₹X,XX,XXX)
- 18% GST calculation on all items
- Budget tracking and warnings
- Real-time cost updates

### 🌡️ Climate-Adaptive Recommendations
- Moisture-resistant materials for humid climates
- Dust-resistant furniture for dry regions
- Versatile options for temperate climates
- Insulated materials for cold regions

### 📱 Responsive Design
- Fully mobile-compatible
- Tablet-optimized layouts
- Desktop-first experience
- Smooth transitions and animations

### 🎯 User Experience
- Progress indicators for multi-step process
- Loading animations and transitions
- Error handling and validation
- Success notifications
- Hover effects and interactive elements
- Accessibility features

## Technology Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS v4.0 with custom CSS variables
- **Icons**: Lucide React
- **Images**: Unsplash (high-quality stock photos)
- **State Management**: React Hooks (useState, useEffect)

## Color Scheme

The website uses a warm, elegant color palette:
- Primary: `#D4A373` (Warm tan)
- Primary Dark: `#B8956A`
- Secondary: `#E8DED2` (Light cream)
- Accent: `#A0937D` (Muted gold)
- Background: `#FAF8F5` (Off-white)
- Text: `#3E3E3E` (Dark gray)
- Success: `#7CB342` (Green)
- Error: `#E57373` (Red)

## Typography

- Headings: 'Playfair Display' (serif)
- Body Text: 'Inter' (sans-serif)
- Responsive font sizing
- Optimized line heights

## Project Structure

```
/
├── App.tsx                          # Main app component with routing
├── styles/
│   └── globals.css                  # Global styles and CSS variables
├── types/
│   └── index.ts                     # TypeScript interfaces
├── data/
│   └── furnitureData.ts            # Furniture database and room/climate data
├── components/
│   ├── Navbar.tsx                   # Navigation bar
│   ├── HomePage.tsx                 # Home page
│   ├── AboutUs.tsx                  # About page
│   ├── ContactUs.tsx                # Contact page
│   ├── CustomizationTool.tsx        # Main tool wrapper
│   └── steps/
│       ├── StepOne.tsx              # User input form
│       ├── StepTwo.tsx              # Furniture selection
│       └── StepThree.tsx            # Final review
└── README.md                        # This file
```

## Data Structure

### Furniture Database
- 25+ furniture items across all room types
- Each item includes:
  - Name, description, price
  - High-resolution image
  - Compatible room types
  - Climate compatibility
  - Size requirements (min/max area)
  - Category (seating, table, storage, bed, desk, dining)
  - "Why This?" explanation

### Complementary Items
- 20+ additional items in 3 categories:
  - Fabrics (cushions, upholstery, blankets)
  - Curtains (blackout, sheer, thermal, printed)
  - Accessories (rugs, lamps, wall art, plants, vases, mirrors, smart home devices)

## Key Algorithms

### Furniture Filtering
1. Filter by room type match
2. Filter by climate compatibility
3. Filter by dimension requirements
4. Sort by price (prioritize within-budget items)

### Budget Validation
- Validates minimum budget (₹10,000)
- Tracks real-time spending
- Prevents over-budget selections
- Provides visual budget indicators

### Recommendation Logic
- Matches furniture to room dimensions
- Suggests climate-appropriate materials
- Allocates budget intelligently
- Provides contextual "Why This?" explanations

## Usage Instructions

### For Users

1. **Start on Home Page**: Review features and click "Get Started"
2. **Step 1 - Input Details**:
   - Select your room type
   - Enter room dimensions
   - Choose climate type
   - Set budget
   - Select optional features
3. **Step 2 - Select Furniture**:
   - Browse filtered recommendations
   - Click items to select
   - Adjust quantities
   - Monitor budget
4. **Step 3 - Review & Finalize**:
   - Review selections
   - Add complementary items
   - Check cost summary
   - Download quote

### For Developers

To extend the furniture database:
1. Open `/data/furnitureData.ts`
2. Add items to `furnitureDatabase` array following the `FurnitureItem` interface
3. Ensure images are from Unsplash or add using `unsplash_tool`
4. Set appropriate filters (roomTypes, climateCompatible, dimensions)

To add new room types:
1. Add to `roomOptions` array in `furnitureData.ts`
2. Include room image and label
3. Add corresponding furniture items with new room type

## Future Enhancements

### Backend Integration (Suggested)
- User authentication and saved preferences
- Order management system
- Real-time inventory tracking
- Payment gateway integration
- Customer review system

### Additional Features
- 3D room visualization
- AR furniture preview
- Comparison tool
- Wishlist functionality
- Social sharing
- Email quote delivery
- Installation scheduling
- Delivery tracking

### Database Considerations
For production deployment with Supabase:
- Store furniture catalog in database
- Implement user sessions
- Save design preferences
- Order history tracking
- Real-time availability checking

## Privacy & Data

- No PII (Personally Identifiable Information) collected without consent
- Contact form data should be handled securely in production
- Budget and preference data stored in browser session only
- Downloads are generated client-side

## Accessibility

- Keyboard navigation support
- Alt text for all images
- Semantic HTML structure
- Color contrast compliance
- Screen reader friendly
- Form validation with clear error messages

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images from Unsplash CDN
- Lazy loading where applicable
- Efficient React rendering
- Minimal bundle size
- Smooth animations (60fps target)

## Contact & Support

For questions or support:
- Email: hello@decorvista.in
- Phone: +91 22 1234 5678
- Office: 123 Design Street, Bandra West, Mumbai, Maharashtra 400050

## License

© 2024 DecorVista. All rights reserved.

---

**Built with ❤️ in India for Indian homes**
