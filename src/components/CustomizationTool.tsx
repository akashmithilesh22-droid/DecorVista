import { useState } from 'react';
import { UserInputs, SelectedItem } from '../types';
import { StepOne } from './steps/StepOne';
import { StepTwo } from './steps/StepTwo';
import { StepThree } from './steps/StepThree';
import { ChevronLeft } from 'lucide-react';

interface CustomizationToolProps {
  onBack: () => void;
}

export function CustomizationTool({ onBack }: CustomizationToolProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [userInputs, setUserInputs] = useState<UserInputs>({
    roomType: '',
    dimensions: 0,
    climate: '',
    budget: 50000,
    extraFeatures: []
  });
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

  const handleStepOneComplete = (inputs: UserInputs) => {
    setUserInputs(inputs);
    setCurrentStep(2);
  };

  const handleStepTwoComplete = (items: SelectedItem[]) => {
    setSelectedItems(items);
    setCurrentStep(3);
  };

  const handleBack = () => {
    if (currentStep === 1) {
      onBack();
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleEditSelections = () => {
    setCurrentStep(2);
  };

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Back Button */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-opacity-10 transition-all"
            style={{ color: 'var(--color-primary)' }}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    currentStep >= step ? 'text-white' : 'bg-gray-200 text-gray-400'
                  }`}
                  style={{
                    backgroundColor: currentStep >= step ? 'var(--color-primary)' : undefined
                  }}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-24 h-1 mx-2 ${
                      currentStep > step ? '' : 'bg-gray-200'
                    }`}
                    style={{
                      backgroundColor: currentStep > step ? 'var(--color-primary)' : undefined
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-24 mt-4">
            <span className={currentStep >= 1 ? '' : 'text-gray-400'}>Your Details</span>
            <span className={currentStep >= 2 ? '' : 'text-gray-400'}>Select Furniture</span>
            <span className={currentStep >= 3 ? '' : 'text-gray-400'}>Final Review</span>
          </div>
        </div>

        {/* Step Content */}
        <div>
          {currentStep === 1 && (
            <StepOne
              initialInputs={userInputs}
              onComplete={handleStepOneComplete}
            />
          )}
          {currentStep === 2 && (
            <StepTwo
              userInputs={userInputs}
              initialSelections={selectedItems}
              onComplete={handleStepTwoComplete}
              onBack={() => setCurrentStep(1)}
            />
          )}
          {currentStep === 3 && (
            <StepThree
              userInputs={userInputs}
              selectedItems={selectedItems}
              onEdit={handleEditSelections}
              onBack={() => setCurrentStep(2)}
            />
          )}
        </div>
      </div>
    </div>
  );
}