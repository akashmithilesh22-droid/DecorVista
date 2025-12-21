# DecorVista - Quick Start Guide

## What's Included

A complete, production-ready home decor services website with:

### ✅ Pages
- **Home**: Hero section, features overview, call-to-action
- **About Us**: Company story, values, team, statistics
- **Contact Us**: Form, office location, FAQ
- **Customization Tool**: 3-step interactive wizard

### ✅ Features
- 8 room types with images
- 4 climate options
- 25+ furniture items with smart filtering
- 20+ complementary items (fabrics, curtains, accessories)
- Real-time budget tracking
- Cost calculation with 18% GST
- Quote download functionality
- Fully responsive design

### ✅ Technology
- React + TypeScript
- Tailwind CSS v4.0
- Lucide React icons
- Unsplash images

## How to Use

### Navigation
The website uses a simple navigation system:
- Click navigation items in the header
- Use "Get Started" button to access the customization tool
- Progress indicators guide users through the 3-step process

### Customization Tool Flow

**Step 1: User Inputs**
1. Select room type (8 options)
2. Enter dimensions (slider + input)
3. Choose climate (4 types)
4. Set budget (₹10,000 - ₹5,00,000)
5. Select extra features (optional)

**Step 2: Furniture Selection**
1. View filtered recommendations
2. Click items to select
3. Adjust quantities
4. Monitor budget in real-time

**Step 3: Final Review**
1. Review furniture selections
2. Add complementary items
3. See cost breakdown with GST
4. Download quote

## Key Features Explained

### Smart Filtering
- Furniture automatically filtered by:
  - Room type match
  - Climate compatibility
  - Dimension requirements
  - Budget constraints

### Budget System
- Real-time tracking
- Visual indicators
- Over-budget warnings
- Remaining balance display

### Climate Adaptation
- **Tropical/Humid**: Moisture-resistant materials
- **Dry/Arid**: Dust-resistant furniture
- **Temperate**: Versatile options
- **Cold**: Insulated materials

### Cost Calculation
- Furniture subtotal
- Complementary items subtotal
- 18% GST
- Total with budget comparison

## File Structure

```
Key Files:
├── App.tsx                    # Main routing
├── data/furnitureData.ts      # All product data
├── components/
│   ├── HomePage.tsx           # Landing page
│   ├── AboutUs.tsx            # About page
│   ├── ContactUs.tsx          # Contact page
│   ├── CustomizationTool.tsx  # Tool wrapper
│   └── steps/                 # Tool steps 1-3
└── styles/globals.css         # Design system
```

## Customization

### Adding Furniture Items
Edit `/data/furnitureData.ts`:
```typescript
{
  id: 'unique-id',
  name: 'Item Name',
  description: 'Description',
  price: 25000,
  image: 'https://...',
  roomTypes: ['living', 'bedroom'],
  climateCompatible: ['tropical', 'temperate'],
  minArea: 10,
  category: 'seating',
  whyThis: 'Reason for recommendation'
}
```

### Changing Colors
Edit CSS variables in `/styles/globals.css`:
```css
:root {
  --color-primary: #D4A373;
  --color-secondary: #E8DED2;
  /* etc. */
}
```

### Adding Room Types
1. Add to `roomOptions` in `furnitureData.ts`
2. Add corresponding furniture with new room type
3. Add room image URL

## Data Structure

### Furniture Item Properties
- `id`: Unique identifier
- `name`: Display name
- `description`: Short description
- `price`: Price in INR
- `image`: Unsplash URL
- `roomTypes`: Array of compatible rooms
- `climateCompatible`: Array of climates
- `minArea`: Minimum room size in m²
- `maxArea`: Maximum room size (optional)
- `category`: Item category
- `whyThis`: Recommendation explanation

### Complementary Item Properties
- `id`: Unique identifier
- `name`: Display name
- `description`: Short description
- `price`: Price in INR
- `image`: Unsplash URL
- `category`: 'fabric' | 'curtain' | 'accessory'

## Testing Checklist

### User Flow
- ✅ Navigate between all pages
- ✅ Complete customization tool end-to-end
- ✅ Submit contact form
- ✅ Download quote

### Functionality
- ✅ Room selection works
- ✅ Budget slider responsive
- ✅ Furniture filtering accurate
- ✅ Budget tracking updates
- ✅ Quantity adjustments work
- ✅ GST calculation correct
- ✅ Quote download successful

### Responsive Design
- ✅ Test on mobile (< 768px)
- ✅ Test on tablet (768px - 1024px)
- ✅ Test on desktop (> 1024px)

## Common Operations

### View All Furniture
Check `/data/furnitureData.ts` → `furnitureDatabase` array

### Modify Budget Range
Edit Step 1 in `/components/steps/StepOne.tsx`:
```typescript
min="10000"  // Minimum budget
max="500000" // Maximum budget
```

### Change GST Rate
Edit `/components/steps/StepThree.tsx`:
```typescript
const GST_RATE = 0.18; // 18%
```

### Add Extra Features
Edit `extraFeatureOptions` in `/components/steps/StepOne.tsx`

## Support

For questions or issues:
- Review `/README.md` for detailed documentation
- Check component files for inline comments
- Contact: hello@decorvista.in

## Next Steps

### For Production
1. Set up backend API
2. Implement authentication
3. Add payment gateway
4. Set up database (Supabase recommended)
5. Add order management
6. Implement email notifications

### For Enhancement
1. Add 3D visualization
2. Implement AR preview
3. Add user reviews
4. Create comparison tool
5. Add wishlist feature
6. Social media integration

---

**Ready to go! Just start navigating the website.** 🎉
