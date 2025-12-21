import { useState } from 'react';
import { UserInputs } from '../../types';
import { roomOptions, climateOptions } from '../../data/furnitureData';
import { Ruler, CloudRain, DollarSign, Plus, Lightbulb, Flower2, Sparkles, Leaf } from 'lucide-react';

interface StepOneProps {
  initialInputs: UserInputs;
  onComplete: (inputs: UserInputs) => void;
}

export function StepOne({ initialInputs, onComplete }: StepOneProps) {
  const [inputs, setInputs] = useState<UserInputs>(initialInputs);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const extraFeatureOptions = [
    { value: 'lighting', label: 'Lighting', icon: Lightbulb },
    { value: 'wallart', label: 'Wall Art', icon: Sparkles },
    { value: 'plants', label: 'Plants', icon: Flower2 },
    { value: 'smarthome', label: 'Smart Home Integration', icon: Plus },
    { value: 'ecofriendly', label: 'Eco-Friendly Materials', icon: Leaf },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!inputs.roomType) {
      newErrors.roomType = 'Please select a room type';
    }
    if (inputs.dimensions <= 0) {
      newErrors.dimensions = 'Please enter a valid room dimension';
    }
    if (!inputs.climate) {
      newErrors.climate = 'Please select a climate type';
    }
    if (inputs.budget < 10000) {
      newErrors.budget = 'Minimum budget is ₹10,000';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onComplete(inputs);
  };

  const toggleExtraFeature = (feature: string) => {
    setInputs({
      ...inputs,
      extraFeatures: inputs.extraFeatures.includes(feature)
        ? inputs.extraFeatures.filter(f => f !== feature)
        : [...inputs.extraFeatures, feature]
    });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ 
          backgroundColor: 'var(--color-secondary)' 
        }}>
          <span className="text-sm" style={{ color: 'var(--color-primary)' }}>Step 1 of 3</span>
        </div>
        <h2 className="mb-6">Tell Us About Your Space</h2>
        <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--color-text-light)' }}>
          Help us understand your needs to provide personalized recommendations
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Room Type Selection */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <h3 className="mb-8 text-center" style={{ color: 'var(--color-primary)' }}>Select Room Type</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              {roomOptions.map((room) => (
                <button
                  key={room.value}
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, roomType: room.value });
                    setErrors({ ...errors, roomType: '' });
                  }}
                  className={`relative overflow-hidden rounded-xl border-3 transition-all hover:scale-105 shadow-md hover:shadow-xl ${
                    inputs.roomType === room.value ? 'ring-4' : ''
                  }`}
                  style={{
                    borderColor: inputs.roomType === room.value ? 'var(--color-primary)' : '#e5e7eb',
                    ringColor: 'var(--color-primary)'
                  }}
                >
                  <div className="aspect-square">
                    <img
                      src={room.image}
                      alt={room.label}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all ${
                        inputs.roomType === room.value ? 'bg-black/50' : 'bg-black/30'
                      }`}
                    >
                      <span className="text-white text-center px-2 text-lg">{room.label}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          {errors.roomType && (
            <p className="mt-4 text-center text-lg" style={{ color: 'var(--color-error)' }}>
              {errors.roomType}
            </p>
          )}
        </div>

        {/* Dimensions */}
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Ruler className="w-7 h-7" style={{ color: 'var(--color-primary)' }} />
            <h3 style={{ color: 'var(--color-primary)' }}>Room Dimensions</h3>
          </div>
          <div>
            <label htmlFor="dimensions" className="block mb-4 text-center text-lg">
              Room Area (in square meters)
            </label>
            <input
              type="number"
              id="dimensions"
              value={inputs.dimensions || ''}
              onChange={(e) => {
                setInputs({ ...inputs, dimensions: Number(e.target.value) });
                setErrors({ ...errors, dimensions: '' });
              }}
              min="1"
              step="0.1"
              className="w-full px-6 py-4 rounded-xl border-2 focus:outline-none transition-all text-center text-lg shadow-sm focus:shadow-md"
              style={{ borderColor: 'var(--color-secondary)' }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
              placeholder="e.g., 15.5"
            />
            {errors.dimensions && (
              <p className="mt-3 text-center text-lg" style={{ color: 'var(--color-error)' }}>
                {errors.dimensions}
              </p>
            )}
            <div className="mt-6">
              <input
                type="range"
                min="5"
                max="100"
                step="1"
                value={inputs.dimensions || 5}
                onChange={(e) => setInputs({ ...inputs, dimensions: Number(e.target.value) })}
                className="w-full h-2"
                style={{ accentColor: 'var(--color-primary)' }}
              />
              <div className="flex justify-between text-lg mt-3" style={{ color: 'var(--color-text-light)' }}>
                <span>5 m²</span>
                <span className="px-4 py-1 rounded-full" style={{ 
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-primary)' 
                }}>{inputs.dimensions} m²</span>
                <span>100 m²</span>
              </div>
            </div>
          </div>
        </div>

        {/* Climate */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <CloudRain className="w-7 h-7" style={{ color: 'var(--color-primary)' }} />
            <h3 style={{ color: 'var(--color-primary)' }}>Climate Type</h3>
          </div>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl w-full">
              {climateOptions.map((climate) => (
                <button
                  key={climate.value}
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, climate: climate.value });
                    setErrors({ ...errors, climate: '' });
                  }}
                  className={`text-center p-6 rounded-xl border-2 transition-all hover:shadow-lg hover:scale-105 ${
                    inputs.climate === climate.value ? 'ring-4' : ''
                  }`}
                  style={{
                    borderColor: inputs.climate === climate.value ? 'var(--color-primary)' : '#e5e7eb',
                    ringColor: 'var(--color-primary)',
                    backgroundColor: inputs.climate === climate.value ? 'var(--color-secondary)' : 'white'
                  }}
                >
                  <h4 className="mb-2 text-xl" style={{ 
                    color: inputs.climate === climate.value ? 'var(--color-primary)' : undefined 
                  }}>{climate.label}</h4>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                    {climate.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
          {errors.climate && (
            <p className="mt-4 text-center text-lg" style={{ color: 'var(--color-error)' }}>
              {errors.climate}
            </p>
          )}
        </div>

        {/* Budget */}
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <DollarSign className="w-7 h-7" style={{ color: 'var(--color-primary)' }} />
            <h3 style={{ color: 'var(--color-primary)' }}>Budget (INR)</h3>
          </div>
          <div>
            <label htmlFor="budget" className="block mb-4 text-center text-lg">
              Total Budget
            </label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl">₹</span>
              <input
                type="number"
                id="budget"
                value={inputs.budget}
                onChange={(e) => {
                  setInputs({ ...inputs, budget: Number(e.target.value) });
                  setErrors({ ...errors, budget: '' });
                }}
                min="10000"
                step="1000"
                className="w-full pl-12 pr-6 py-4 rounded-xl border-2 focus:outline-none transition-all text-center text-lg shadow-sm focus:shadow-md"
                style={{ borderColor: 'var(--color-secondary)' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
              />
            </div>
            {errors.budget && (
              <p className="mt-3 text-center text-lg" style={{ color: 'var(--color-error)' }}>
                {errors.budget}
              </p>
            )}
            <div className="mt-6">
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={inputs.budget}
                onChange={(e) => setInputs({ ...inputs, budget: Number(e.target.value) })}
                className="w-full h-2"
                style={{ accentColor: 'var(--color-primary)' }}
              />
              <div className="flex justify-between text-lg mt-3" style={{ color: 'var(--color-text-light)' }}>
                <span>₹10,000</span>
                <span className="px-4 py-1 rounded-full" style={{ 
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-primary)' 
                }}>₹{inputs.budget.toLocaleString('en-IN')}</span>
                <span>₹5,00,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Extra Features */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Plus className="w-7 h-7" style={{ color: 'var(--color-primary)' }} />
            <h3 style={{ color: 'var(--color-primary)' }}>Extra Features (Optional)</h3>
          </div>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
              {extraFeatureOptions.map((feature) => {
                const Icon = feature.icon;
                const isSelected = inputs.extraFeatures.includes(feature.value);
                return (
                  <button
                    key={feature.value}
                    type="button"
                    onClick={() => toggleExtraFeature(feature.value)}
                    className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all hover:shadow-lg hover:scale-105 ${
                      isSelected ? 'ring-4' : ''
                    }`}
                    style={{
                      borderColor: isSelected ? 'var(--color-primary)' : '#e5e7eb',
                      ringColor: 'var(--color-primary)',
                      backgroundColor: isSelected ? 'var(--color-secondary)' : 'white'
                    }}
                  >
                    <Icon
                      className="w-6 h-6 flex-shrink-0"
                      style={{ color: isSelected ? 'var(--color-primary)' : 'var(--color-text-light)' }}
                    />
                    <span className="text-lg">{feature.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <button
            type="submit"
            className="px-16 py-5 rounded-xl transition-all hover:scale-105 shadow-xl hover:shadow-2xl text-xl group"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white'
            }}
          >
            <span className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Generate Recommendations
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}