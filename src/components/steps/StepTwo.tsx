import { useState, useEffect } from 'react';
import { UserInputs, FurnitureItem, SelectedItem } from '../../types';
import { furnitureDatabase } from '../../data/furnitureData';
import { Check, Info, ShoppingCart, Plus, Minus } from 'lucide-react';

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
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="mb-4">Select Your Furniture</h2>
        <p className="text-xl mb-4" style={{ color: 'var(--color-text-light)' }}>
          We've found {filteredFurniture.length} items perfect for your {userInputs.roomType} room
        </p>
        
        {/* Budget Summary */}
        <div className="inline-flex items-center space-x-6 bg-white px-8 py-4 rounded-lg shadow-lg">
          <div>
            <span className="text-sm" style={{ color: 'var(--color-text-light)' }}>Budget</span>
            <p className="text-lg">₹{userInputs.budget.toLocaleString('en-IN')}</p>
          </div>
          <div className="h-8 w-px bg-gray-300" />
          <div>
            <span className="text-sm" style={{ color: 'var(--color-text-light)' }}>Selected</span>
            <p className="text-lg" style={{ color: 'var(--color-primary)' }}>
              ₹{totalCost.toLocaleString('en-IN')}
            </p>
          </div>
          <div className="h-8 w-px bg-gray-300" />
          <div>
            <span className="text-sm" style={{ color: 'var(--color-text-light)' }}>Remaining</span>
            <p className={`text-lg ${remainingBudget < 0 ? 'text-red-600' : ''}`} style={{ 
              color: remainingBudget >= 0 ? 'var(--color-success)' : undefined 
            }}>
              ₹{Math.abs(remainingBudget).toLocaleString('en-IN')}
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-700 text-center">
          {error}
        </div>
      )}

      {filteredFurniture.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-lg">
          <p className="text-xl mb-4">
            No furniture items match your current criteria.
          </p>
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-lg"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredFurniture.map((item) => {
              const quantity = selections.get(item.id) || 0;
              const isSelected = quantity > 0;
              const isAffordable = item.price <= remainingBudget + (item.price * quantity);

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-2xl ${
                    isSelected ? 'ring-2' : ''
                  }`}
                  style={{
                    ringColor: 'var(--color-primary)'
                  }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {isSelected && (
                      <div
                        className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      >
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                    {!isAffordable && quantity === 0 && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white bg-red-600 px-3 py-1 rounded-full text-sm">
                          Over Budget
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h4 className="mb-2">{item.name}</h4>
                    <p className="text-sm mb-3" style={{ color: 'var(--color-text-light)' }}>
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl" style={{ color: 'var(--color-primary)' }}>
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => setShowTooltip(showTooltip === item.id ? null : item.id)}
                        className="p-1 rounded hover:bg-gray-100"
                        title="Why this?"
                      >
                        <Info className="w-5 h-5" style={{ color: 'var(--color-text-light)' }} />
                      </button>
                    </div>

                    {/* Tooltip */}
                    {showTooltip === item.id && item.whyThis && (
                      <div className="mb-3 p-3 rounded-lg text-sm" style={{ 
                        backgroundColor: 'var(--color-secondary)',
                        color: 'var(--color-text)'
                      }}>
                        <strong>Why this?</strong> {item.whyThis}
                      </div>
                    )}

                    {/* Quantity Selector */}
                    {isSelected ? (
                      <div className="flex items-center justify-between p-2 rounded-lg" style={{ 
                        backgroundColor: 'var(--color-secondary)' 
                      }}>
                        <button
                          onClick={() => toggleSelection(item.id, quantity - 1)}
                          className="p-2 rounded hover:bg-white transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4">Quantity: {quantity}</span>
                        <button
                          onClick={() => toggleSelection(item.id, quantity + 1)}
                          className="p-2 rounded hover:bg-white transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => toggleSelection(item.id, 1)}
                        disabled={!isAffordable}
                        className={`w-full py-2 rounded-lg transition-all flex items-center justify-center space-x-2 ${
                          !isAffordable ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                        }`}
                        style={{
                          backgroundColor: 'var(--color-primary)',
                          color: 'white'
                        }}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Select</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onBack}
              className="px-8 py-3 rounded-lg border-2 transition-all hover:scale-105"
              style={{
                borderColor: 'var(--color-primary)',
                color: 'var(--color-primary)'
              }}
            >
              Back to Preferences
            </button>
            <button
              onClick={handleContinue}
              disabled={selections.size === 0}
              className={`px-12 py-3 rounded-lg transition-all shadow-lg ${
                selections.size === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              }`}
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
            >
              Continue to Review ({selections.size} items)
            </button>
          </div>
        </>
      )}
    </div>
  );
}
