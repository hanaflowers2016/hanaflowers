
import React from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center relative overflow-hidden">
        {/* Confetti-like backgrounds */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500"></div>
        
        <div className="mb-6 flex justify-center">
          <div className="bg-green-100 rounded-full p-6 animate-bounce">
            <svg className="w-20 h-20 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
            </svg>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Commande Validée !</h3>
        
        <div className="space-y-4 mb-8">
          <p className="text-lg text-gray-600 leading-relaxed font-serif">
            Votre commande a été validée, nous vous remercions pour votre intérêt, une 2ème confirmation ce fera par téléphone ultérieurement.
          </p>
          <div className="h-px bg-gray-100 w-1/2 mx-auto"></div>
          <p className="text-xl text-gray-800 font-bold leading-relaxed" dir="rtl">
            تم تأكيد طلبك بنجاح، نشكرك على اهتمامك، سيتم إجراء تأكيد ثانٍ عبر الهاتف لاحقًا.
          </p>
        </div>

        <button 
          onClick={onClose}
          className="w-full bg-[#d81b60] text-white font-bold py-4 rounded-xl hover:bg-[#ad1457] transition-colors shadow-lg shadow-pink-200"
        >
          Fermer / إغلاق
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
