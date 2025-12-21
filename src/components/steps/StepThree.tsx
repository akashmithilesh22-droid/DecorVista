import { useState } from 'react';
import { UserInputs, SelectedItem, ComplementaryItem } from '../../types';
import { complementaryItems } from '../../data/furnitureData';
import { Download, Edit, ShoppingBag, Check } from 'lucide-react';

interface StepThreeProps {
  userInputs: UserInputs;
  selectedItems: SelectedItem[];
  onEdit: () => void;
  onBack: () => void;
}

export function StepThree({ userInputs, selectedItems, onEdit, onBack }: StepThreeProps) {
  const [selectedComplementary, setSelectedComplementary] = useState<Set<string>>(new Set());
  const [showSuccess, setShowSuccess] = useState(false);

  const GST_RATE = 0.18; // 18% GST

  const furnitureSubtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const complementarySubtotal = Array.from(selectedComplementary).reduce((sum, itemId) => {
    const item = complementaryItems.find(i => i.id === itemId);
    return sum + (item?.price || 0);
  }, 0);

  const subtotal = furnitureSubtotal + complementarySubtotal;
  const gst = subtotal * GST_RATE;
  const total = subtotal + gst;

  const toggleComplementary = (itemId: string) => {
    const newSet = new Set(selectedComplementary);
    if (newSet.has(itemId)) {
      newSet.delete(itemId);
    } else {
      newSet.add(itemId);
    }
    setSelectedComplementary(newSet);
  };

  const handleDownloadQuote = () => {
    // In a real application, this would generate a PDF
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // Create a simple text summary
    let quote = `DECORVISTA - HOME DECOR QUOTE\n`;
    quote += `Date: ${new Date().toLocaleDateString('en-IN')}\n\n`;
    quote += `CUSTOMER DETAILS:\n`;
    quote += `Room Type: ${userInputs.roomType}\n`;
    quote += `Room Area: ${userInputs.dimensions} m²\n`;
    quote += `Climate: ${userInputs.climate}\n`;
    quote += `Budget: ₹${userInputs.budget.toLocaleString('en-IN')}\n\n`;
    
    quote += `SELECTED FURNITURE:\n`;
    selectedItems.forEach(item => {
      quote += `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
    });
    
    if (selectedComplementary.size > 0) {
      quote += `\nCOMPLEMENTARY ITEMS:\n`;
      selectedComplementary.forEach(itemId => {
        const item = complementaryItems.find(i => i.id === itemId);
        if (item) {
          quote += `${item.name} - ₹${item.price.toLocaleString('en-IN')}\n`;
        }
      });
    }
    
    quote += `\nFINANCIAL SUMMARY:\n`;
    quote += `Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n`;
    quote += `GST (18%): ₹${gst.toLocaleString('en-IN')}\n`;
    quote += `TOTAL: ₹${total.toLocaleString('en-IN')}\n`;
    
    // Create and download file
    const blob = new Blob([quote], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DecorVista-Quote.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const fabrics = complementaryItems.filter(item => item.category === 'fabric');
  const curtains = complementaryItems.filter(item => item.category === 'curtain');
  const accessories = complementaryItems.filter(item => item.category === 'accessory');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ 
          backgroundColor: 'var(--color-secondary)' 
        }}>
          <span className="text-sm" style={{ color: 'var(--color-primary)' }}>Step 3 of 3 - Final Review</span>
        </div>
        <h2 className="mb-6">Your Complete Decor Solution</h2>
        <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--color-text-light)' }}>
          Review your selections and add complementary items
        </p>
      </div>

      {showSuccess && (
        <div className="mb-8 p-6 rounded-2xl text-center shadow-xl max-w-2xl mx-auto" style={{ 
          backgroundColor: 'var(--color-success)',
          color: 'white'
        }}>
          <Check className="w-8 h-8 inline-block mr-2" />
          Quote downloaded successfully!
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Selected Furniture */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 style={{ color: 'var(--color-primary)' }}>Selected Furniture</h3>
              <button
                onClick={onEdit}
                className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-md"
                style={{
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-primary)'
                }}
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>

            <div className="space-y-4">
              {selectedItems.map(item => (
                <div key={item.id} className="flex items-center gap-5 p-5 rounded-xl shadow-md hover:shadow-lg transition-all" style={{ 
                  backgroundColor: 'var(--color-background)' 
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl shadow-sm"
                  />
                  <div className="flex-1">
                    <h4 className="mb-2 text-xl" style={{ color: 'var(--color-primary)' }}>{item.name}</h4>
                    <p className="text-lg mb-2" style={{ color: 'var(--color-text-light)' }}>
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                      {item.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm mb-1" style={{ color: 'var(--color-text-light)' }}>Unit Price</p>
                    <p className="text-lg mb-2" style={{ color: 'var(--color-primary)' }}>
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>Total</p>
                    <p className="text-2xl" style={{ color: 'var(--color-primary)' }}>
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Complementary Items - Fabrics */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="mb-8 text-center" style={{ color: 'var(--color-primary)' }}>Recommended Fabrics & Upholstery</h3>
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-5 max-w-3xl w-full">
                {fabrics.slice(0, 6).map(item => {
                  const isSelected = selectedComplementary.has(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleComplementary(item.id)}
                      className={`text-left p-5 rounded-xl border-2 transition-all hover:shadow-lg hover:scale-105 ${
                        isSelected ? 'ring-4' : ''
                      }`}
                      style={{
                        borderColor: isSelected ? 'var(--color-primary)' : '#e5e7eb',
                        ringColor: 'var(--color-primary)',
                        backgroundColor: isSelected ? 'var(--color-secondary)' : 'white'
                      }}
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="mb-1 text-lg" style={{ 
                            color: isSelected ? 'var(--color-primary)' : undefined 
                          }}>{item.name}</h4>
                          <p className="text-sm mb-2 line-clamp-2 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                            {item.description}
                          </p>
                          <p className="text-lg" style={{ color: 'var(--color-primary)' }}>
                            ₹{item.price.toLocaleString('en-IN')}
                          </p>
                        </div>
                        {isSelected && (
                          <Check className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Complementary Items - Curtains */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="mb-8 text-center" style={{ color: 'var(--color-primary)' }}>Recommended Curtains & Drapes</h3>
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-5 max-w-3xl w-full">
                {curtains.slice(0, 5).map(item => {
                  const isSelected = selectedComplementary.has(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleComplementary(item.id)}
                      className={`text-left p-5 rounded-xl border-2 transition-all hover:shadow-lg hover:scale-105 ${
                        isSelected ? 'ring-4' : ''
                      }`}
                      style={{
                        borderColor: isSelected ? 'var(--color-primary)' : '#e5e7eb',
                        ringColor: 'var(--color-primary)',
                        backgroundColor: isSelected ? 'var(--color-secondary)' : 'white'
                      }}
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="mb-1 text-lg" style={{ 
                            color: isSelected ? 'var(--color-primary)' : undefined 
                          }}>{item.name}</h4>
                          <p className="text-sm mb-2 line-clamp-2 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                            {item.description}
                          </p>
                          <p className="text-lg" style={{ color: 'var(--color-primary)' }}>
                            ₹{item.price.toLocaleString('en-IN')}
                          </p>
                        </div>
                        {isSelected && (
                          <Check className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Complementary Items - Accessories */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="mb-8 text-center" style={{ color: 'var(--color-primary)' }}>Recommended Accessories</h3>
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-5 max-w-3xl w-full">
                {accessories.slice(0, 10).map(item => {
                  const isSelected = selectedComplementary.has(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleComplementary(item.id)}
                      className={`text-left p-5 rounded-xl border-2 transition-all hover:shadow-lg hover:scale-105 ${
                        isSelected ? 'ring-4' : ''
                      }`}
                      style={{
                        borderColor: isSelected ? 'var(--color-primary)' : '#e5e7eb',
                        ringColor: 'var(--color-primary)',
                        backgroundColor: isSelected ? 'var(--color-secondary)' : 'white'
                      }}
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="mb-1 text-lg" style={{ 
                            color: isSelected ? 'var(--color-primary)' : undefined 
                          }}>{item.name}</h4>
                          <p className="text-sm mb-2 line-clamp-2 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                            {item.description}
                          </p>
                          <p className="text-lg" style={{ color: 'var(--color-primary)' }}>
                            ₹{item.price.toLocaleString('en-IN')}
                          </p>
                        </div>
                        {isSelected && (
                          <Check className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Sidebar - Sticky */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white p-8 rounded-2xl shadow-2xl border-2" style={{ 
            borderColor: 'var(--color-primary)' 
          }}>
            <h3 className="mb-8 text-center" style={{ color: 'var(--color-primary)' }}>Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between pb-3 border-b">
                <span style={{ color: 'var(--color-text-light)' }}>Furniture Subtotal</span>
                <span>₹{furnitureSubtotal.toLocaleString('en-IN')}</span>
              </div>
              
              {complementarySubtotal > 0 && (
                <div className="flex justify-between pb-3 border-b">
                  <span style={{ color: 'var(--color-text-light)' }}>
                    Complementary Items ({selectedComplementary.size})
                  </span>
                  <span>₹{complementarySubtotal.toLocaleString('en-IN')}</span>
                </div>
              )}
              
              <div className="flex justify-between pb-3 border-b">
                <span style={{ color: 'var(--color-text-light)' }}>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between pb-3 border-b">
                <span style={{ color: 'var(--color-text-light)' }}>GST (18%)</span>
                <span>₹{gst.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between text-xl pt-2">
                <span>Total</span>
                <span style={{ color: 'var(--color-primary)' }}>
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Budget Comparison */}
            <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="flex justify-between mb-2">
                <span className="text-sm" style={{ color: 'var(--color-text-light)' }}>Your Budget</span>
                <span className="text-sm">₹{userInputs.budget.toLocaleString('en-IN')}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: `${Math.min((total / userInputs.budget) * 100, 100)}%`,
                    backgroundColor: total <= userInputs.budget ? 'var(--color-success)' : 'var(--color-error)'
                  }}
                />
              </div>
              <p className="text-sm text-center">
                {total <= userInputs.budget ? (
                  <span style={{ color: 'var(--color-success)' }}>
                    ✓ Within budget! Saving ₹{(userInputs.budget - total).toLocaleString('en-IN')}
                  </span>
                ) : (
                  <span style={{ color: 'var(--color-error)' }}>
                    Over budget by ₹{(total - userInputs.budget).toLocaleString('en-IN')}
                  </span>
                )}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleDownloadQuote}
                className="w-full py-3 rounded-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'white'
                }}
              >
                <Download className="w-5 h-5" />
                <span>Download Quote</span>
              </button>
              
              <button
                onClick={onEdit}
                className="w-full py-3 rounded-lg border-2 transition-all hover:scale-105 flex items-center justify-center space-x-2"
                style={{
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)'
                }}
              >
                <Edit className="w-5 h-5" />
                <span>Edit Selections</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm mb-2" style={{ color: 'var(--color-text-light)' }}>
                Questions? Contact us:
              </p>
              <p className="text-sm">
                📞 +91 22 1234 5678<br />
                📧 hello@decorvista.in
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-8 text-center">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-lg border transition-all hover:scale-105"
          style={{
            borderColor: 'var(--color-accent)',
            color: 'var(--color-text-light)'
          }}
        >
          ← Back to Furniture Selection
        </button>
      </div>
    </div>
  );
}
