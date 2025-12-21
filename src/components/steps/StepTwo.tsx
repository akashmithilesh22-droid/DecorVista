import { useState, useEffect } from 'react';
import { UserInputs, FurnitureItem, SelectedItem } from '../../types';
import { furnitureDatabase } from '../../data/furnitureData';
import { Check, Info, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Sparkles } from 'lucide-react';

interface StepTwoProps {
  userInputs: UserInputs;
  initialSelections: SelectedItem[];
  onComplete: (selections: SelectedItem[]) => void;
  onBack: () => void;
}

export function StepTwo({ userInputs, initialSelections, onComplete, onBack }: StepTwoProps) {
  const [filteredFurniture, setFilteredFurniture] = useState<FurnitureItem[]>([]);
  const [selections, setSelections] = useState<Map<string, number>>(new Map());
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Filter furniture based on user inputs
    const filtered = furnitureDatabase.filter((item) => {
      // Match room type
      if (!item.roomTypes.includes(userInputs.roomType)) return false;
      
      // Match climate
      if (!item.climateCompatible.includes(userInputs.climate)) return false;
      
      // Match dimensions
      if (item.minArea && userInputs.dimensions < item.minArea) return false;
      if (item.maxArea && userInputs.dimensions > item.maxArea) return false;
      
      return true;
    });

    // Sort by relevance (you could add more sophisticated sorting)
    const sorted = filtered.sort((a, b) => {
      // Prioritize items within budget
      if (a.price <= userInputs.budget && b.price > userInputs.budget) return -1;
      if (b.price <= userInputs.budget && a.price > userInputs.budget) return 1;
      return a.price - b.price;
    });

    setFilteredFurniture(sorted);

    // Initialize selections from initial state
    const initialMap = new Map();
    initialSelections.forEach(item => {
      initialMap.set(item.id, item.quantity);
    });
    setSelections(initialMap);
  }, [userInputs, initialSelections]);

  const toggleSelection = (itemId: string, quantity: number) => {
    const newSelections = new Map(selections);
    if (quantity === 0) {
      newSelections.delete(itemId);
    } else {
      newSelections.set(itemId, quantity);
    }
    setSelections(newSelections);
    setError('');
  };

  const getTotalCost = () => {
    let total = 0;
    selections.forEach((quantity, itemId) => {
      const item = filteredFurniture.find(f => f.id === itemId);
      if (item) {
        total += item.price * quantity;
      }
    });
    return total;
  };

  const handleContinue = () => {
    if (selections.size === 0) {
      setError('Please select at least one furniture item');
      return;
    }

    const totalCost = getTotalCost();
    if (totalCost > userInputs.budget) {
      setError(`Total cost (₹${totalCost.toLocaleString('en-IN')}) exceeds your budget (₹${userInputs.budget.toLocaleString('en-IN')})`);
      return;
    }

    const selectedItems: SelectedItem[] = [];
    selections.forEach((quantity, itemId) => {
      const item = filteredFurniture.find(f => f.id === itemId);
      if (item) {
        selectedItems.push({ ...item, quantity });
      }
    });

    onComplete(selectedItems);
  };

  const totalCost = getTotalCost();
  const remainingBudget = userInputs.budget - totalCost;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ 
          backgroundColor: 'var(--color-secondary)' 
        }}>
          <span className="text-sm" style={{ color: 'var(--color-primary)' }}>Step 2 of 3</span>
        </div>
        <h2 className="mb-6">Select Your Furniture</h2>
        <p className="text-xl mb-6 leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--color-text-light)' }}>
          We've found {filteredFurniture.length} items perfect for your {userInputs.roomType} room
        </p>
        
        {/* Budget Summary */}
        <div className="inline-flex items-center gap-8 bg-white px-10 py-6 rounded-2xl shadow-xl">
          <div className="text-center">
            <span className="text-sm block mb-1" style={{ color: 'var(--color-text-light)' }}>Budget</span>
            <p className="text-xl">₹{userInputs.budget.toLocaleString('en-IN')}</p>
          </div>
          <div className="h-12 w-px bg-gray-300" />
          <div className="text-center">
            <span className="text-sm block mb-1" style={{ color: 'var(--color-text-light)' }}>Selected</span>
            <p className="text-xl" style={{ color: 'var(--color-primary)' }}>
              ₹{totalCost.toLocaleString('en-IN')}
            </p>
          </div>
          <div className="h-12 w-px bg-gray-300" />
          <div className="text-center">
            <span className="text-sm block mb-1" style={{ color: 'var(--color-text-light)' }}>Remaining</span>
            <p className={`text-xl ${remainingBudget < 0 ? 'text-red-600' : ''}`} style={{ 
              color: remainingBudget >= 0 ? 'var(--color-success)' : undefined 
            }}>
              ₹{Math.abs(remainingBudget).toLocaleString('en-IN')}
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-8 p-5 rounded-xl bg-red-100 text-red-700 text-center text-lg shadow-md max-w-2xl mx-auto">
          {error}
        </div>
      )}

      {filteredFurniture.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-xl max-w-2xl mx-auto">
          <p className="text-xl mb-6" style={{ color: 'var(--color-text)' }}>
            No furniture items match your current criteria.
          </p>
          <button
            onClick={onBack}
            className="px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white'
            }}
          >
            Adjust Your Preferences
          </button>
        </div>
      ) : (
        <>
          {/* Furniture Grid */}
          <div className="flex justify-center mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
              {filteredFurniture.map((item) => {
                const quantity = selections.get(item.id) || 0;
                const isSelected = quantity > 0;
                const isAffordable = item.price <= remainingBudget + (item.price * quantity);

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 duration-500 ${
                      isSelected ? 'ring-4' : ''
                    }`}
                    style={{
                      ringColor: 'var(--color-primary)'
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {isSelected && (
                        <div
                          className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: 'var(--color-primary)' }}
                        >
                          <Check className="w-6 h-6 text-white" />
                        </div>
                      )}
                      {!isAffordable && quantity === 0 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white bg-red-600 px-4 py-2 rounded-full shadow-lg">
                            Over Budget
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="mb-2 text-xl" style={{ color: 'var(--color-primary)' }}>{item.name}</h4>
                      <p className="text-lg mb-4 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl" style={{ color: 'var(--color-primary)' }}>
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() => setShowTooltip(showTooltip === item.id ? null : item.id)}
                          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                          title="Why this?"
                        >
                          <Info className="w-5 h-5" style={{ color: 'var(--color-text-light)' }} />
                        </button>
                      </div>

                      {/* Tooltip */}
                      {showTooltip === item.id && item.whyThis && (
                        <div className="mb-4 p-4 rounded-xl text-lg leading-relaxed" style={{ 
                          backgroundColor: 'var(--color-secondary)',
                          color: 'var(--color-text)'
                        }}>
                          <strong>Why this?</strong> {item.whyThis}
                        </div>
                      )}

                      {/* Quantity Selector */}
                      {isSelected ? (
                        <div className="flex items-center justify-between p-3 rounded-xl" style={{ 
                          backgroundColor: 'var(--color-secondary)' 
                        }}>
                          <button
                            onClick={() => toggleSelection(item.id, quantity - 1)}
                            className="p-2 rounded-lg hover:bg-white transition-colors shadow-sm"
                          >
                            <Minus className="w-5 h-5" />
                          </button>
                          <span className="px-4 text-lg">Quantity: {quantity}</span>
                          <button
                            onClick={() => toggleSelection(item.id, quantity + 1)}
                            className="p-2 rounded-lg hover:bg-white transition-colors shadow-sm"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => toggleSelection(item.id, 1)}
                          disabled={!isAffordable}
                          className={`w-full py-4 rounded-xl transition-all text-lg shadow-md hover:shadow-lg ${
                            isAffordable ? 'hover:scale-105' : 'opacity-50 cursor-not-allowed'
                          }`}
                          style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white'
                          }}
                        >
                          <span className="flex items-center justify-center gap-2">
                            <ShoppingCart className="w-5 h-5" />
                            Add to Selection
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 pt-6">
            <button
              onClick={onBack}
              className="px-10 py-4 rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl text-lg"
              style={{
                backgroundColor: 'var(--color-secondary)',
                color: 'var(--color-primary)'
              }}
            >
              Back
            </button>
            <button
              onClick={handleContinue}
              className="px-12 py-4 rounded-xl transition-all hover:scale-105 shadow-xl hover:shadow-2xl text-lg group"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
            >
              <span className="flex items-center gap-3">
                Continue to Review
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}