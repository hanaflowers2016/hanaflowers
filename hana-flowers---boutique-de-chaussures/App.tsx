
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Phone, 
  MapPin, 
  Truck, 
  Building, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Send,
  User,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import Logo from './components/Logo';
import SuccessModal from './components/SuccessModal';
import { OrderFormData } from './types';
import { WILAYAS, COMMUNES, SIZES, getDeliveryFee } from './constants';

const BASE_PRICE = 5300;

const DahliaCorner = ({ position }: { position: string }) => (
  <div className={`fixed ${position} z-0 pointer-events-none opacity-40 select-none hidden md:block w-48 h-48`}>
    <svg viewBox="0 0 100 100" className="w-full h-full text-pink-300">
      <path fill="currentColor" d="M50 50 Q60 20 50 0 Q40 20 50 50 Q80 40 100 50 Q80 60 50 50 Q60 80 50 100 Q40 80 50 50 Q20 60 0 50 Q20 40 50 50" transform="rotate(22 50 50)" />
      <path fill="currentColor" d="M50 50 Q60 25 50 5 Q40 25 50 50 Q75 45 95 50 Q75 55 50 50 Q55 75 50 95 Q45 75 50 50 Q25 55 5 50 Q25 45 50 50" transform="rotate(67 50 50)" />
      <circle cx="50" cy="50" r="8" fill="#f472b6" />
    </svg>
  </div>
);

const App: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    nom: '',
    prenom: '',
    telephone: '',
    adresse: '',
    wilaya: '',
    commune: '',
    livraison: 'domicile',
    couleur: 'fuchsia',
    pointure: '37',
    verification: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [botQuestion, setBotQuestion] = useState({ q: '', a: 0 });

  useEffect(() => {
    const n1 = Math.floor(Math.random() * 8) + 1;
    const n2 = Math.floor(Math.random() * 8) + 1;
    setBotQuestion({ q: `${n1} + ${n2}`, a: n1 + n2 });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'wilaya') setFormData(prev => ({ ...prev, commune: '' }));
  };

  const deliveryFee = useMemo(() => {
    if (!formData.wilaya) return 0;
    return getDeliveryFee(formData.wilaya, formData.livraison);
  }, [formData.wilaya, formData.livraison]);

  const totalPrice = BASE_PRICE + deliveryFee;

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérification anti-bot
    if (parseInt(formData.verification) !== botQuestion.a) {
      alert("Erreur de vérification anti-bot ! / خطأ في التحقق");
      return;
    }

    setIsSubmitting(true);

    // REMPLACEZ CECI PAR VOTRE URL /exec
    const URL_GOOGLE_SHEET = "https://script.google.com/macros/s/AKfycbyYbd2Xv4b9y_9Lq5ANc8XUNu04DX_ID955XsKMCJrhXaPEJ0WSHiHubF4PdJQgrEnUnw/exec"; 

    try {
      await fetch(URL_GOOGLE_SHEET, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          total: totalPrice 
        })
      });
      
      // On attend un petit peu pour simuler le chargement avant de montrer le succès
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1000);

    } catch (error) {
      setIsSubmitting(false);
      console.error("Erreur d'envoi:", error);
      alert("Une erreur est survenue. Vérifiez votre connexion.");
    }
  };

  const openSocial = (platform: string) => {
    const links: Record<string, string> = {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      tiktok: 'https://tiktok.com',
      whatsapp: 'https://wa.me/213000000000'
    };
    window.open(links[platform], '_blank');
  };

 // Images dynamiques basées sur le choix couleur
const currentImage = formData.couleur === 'fuchsia' 
  ? "/images/fuchsia-shoe.jpg" 
  : "/images/beige-shoe.jpg";

  return (
    <div className="min-h-screen bg-[#fffafa] font-sans text-gray-900 overflow-x-hidden">
      <DahliaCorner position="top-0 left-0" />
      <DahliaCorner position="top-0 right-0" />
      <DahliaCorner position="bottom-0 left-0" />
      <DahliaCorner position="bottom-0 right-0" />

      <header className="py-4 border-b border-pink-100 sticky top-0 bg-white/90 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4">
          <Logo />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 grid lg:grid-cols-2 gap-10 relative z-10">
        
        {/* Section Image Produit */}
        <div className="lg:sticky lg:top-32 space-y-6">
          <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transition-all duration-500">
            <img 
              src={currentImage} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              alt="Hana Flowers Product"
            />
            <div className="absolute top-6 left-6 bg-[#d81b60] text-white px-5 py-2 rounded-full font-black shadow-lg animate-pulse tracking-tighter">
              PROMO RAMADAN
            </div>
          </div>
          <div className="p-6 bg-white/60 backdrop-blur rounded-3xl border border-pink-100 shadow-sm text-center">
             <p className="font-serif italic text-gray-600">"L'élégance d'un pétale, la force d'un pas."</p>
          </div>
        </div>

        {/* Formulaire de Checkout */}
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-[3rem] shadow-xl border border-pink-50">
          <div className="border-b border-pink-100 pb-4 mb-6 flex justify-between items-center">
             <div>
               <h1 className="text-3xl font-black text-gray-800 tracking-tight">Vérifier & Valider</h1>
               <p className="text-[#d81b60] font-bold text-sm">Tous les champs sont obligatoires * جميع الحقول مطلوبة</p>
             </div>
             <ShoppingBag className="text-pink-300" size={40} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Variantes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Couleur / اللون *</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData(p => ({ ...p, couleur: 'fuchsia' }))}
                    className={`flex-1 py-4 rounded-2xl border-2 transition-all font-bold text-xs ${formData.couleur === 'fuchsia' ? 'border-[#d81b60] bg-pink-50 text-[#d81b60]' : 'border-gray-100 text-gray-400'}`}
                  >
                    Fuchsia
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(p => ({ ...p, couleur: 'beige' }))}
                    className={`flex-1 py-4 rounded-2xl border-2 transition-all font-bold text-xs ${formData.couleur === 'beige' ? 'border-[#d81b60] bg-pink-50 text-[#d81b60]' : 'border-gray-100 text-gray-400'}`}
                  >
                    Beige/Or
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Pointure / المقاس *</label>
                <select 
                  required
                  name="pointure" 
                  value={formData.pointure} 
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-2xl border-2 border-gray-100 outline-none focus:border-pink-300 font-bold bg-white"
                >
                  {SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            {/* Identité */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Nom / اللقب *</label>
                <input required type="text" name="nom" placeholder="اللقب" value={formData.nom} onChange={handleInputChange} className="w-full p-4 rounded-2xl border-2 border-gray-100 focus:border-pink-400 outline-none text-right" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Prénom / الاسم *</label>
                <input required type="text" name="prenom" placeholder="الاسم" value={formData.prenom} onChange={handleInputChange} className="w-full p-4 rounded-2xl border-2 border-gray-100 focus:border-pink-400 outline-none text-right" />
              </div>
            </div>

            {/* Téléphone */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Téléphone / الهاتف *</label>
              <div className="relative">
                <Phone className="absolute left-4 top-4 text-gray-300" size={20} />
                <input required type="tel" name="telephone" placeholder="0XXXXXXXXX" value={formData.telephone} onChange={handleInputChange} className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-pink-400 outline-none font-medium" />
              </div>
            </div>

            {/* Localisation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Wilaya / الولاية *</label>
                <select required name="wilaya" value={formData.wilaya} onChange={handleInputChange} className="w-full p-4 rounded-2xl border-2 border-gray-100 focus:border-pink-400 outline-none bg-white font-bold">
                  <option value="">Sélectionner</option>
                  {WILAYAS.map(w => <option key={w.id} value={w.id}>{w.id} - {w.name} ({w.nameAr})</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Commune / البلدية *</label>
                <select required name="commune" value={formData.commune} onChange={handleInputChange} disabled={!formData.wilaya} className="w-full p-4 rounded-2xl border-2 border-gray-100 focus:border-pink-400 outline-none bg-white disabled:bg-gray-50 font-medium">
                  <option value="">Sélectionner</option>
                  {(COMMUNES[formData.wilaya] || COMMUNES['default']).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            {/* Adresse (Conditionnelle) */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">
                Adresse / العنوان 
                {formData.livraison === 'domicile' ? ' *' : ' (Optionnel pour agence)'}
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-gray-300" size={20} />
                <input 
                  required={formData.livraison === 'domicile'} 
                  type="text" 
                  name="adresse" 
                  placeholder={formData.livraison === 'domicile' ? "Rue, n° maison..." : "Optionnel si agence"} 
                  value={formData.adresse} 
                  onChange={handleInputChange} 
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none text-right transition-colors ${formData.livraison === 'domicile' ? 'border-gray-100 focus:border-pink-400' : 'border-gray-50 bg-gray-50/50 text-gray-400'}`} 
                />
              </div>
            </div>

            {/* Mode de Livraison */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-gray-700 text-center uppercase tracking-widest">Choix de Livraison / خيار التوصيل *</label>
              <div className="grid grid-cols-2 gap-4">
                <button type="button" onClick={() => setFormData(p => ({ ...p, livraison: 'domicile' }))} className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${formData.livraison === 'domicile' ? 'border-[#d81b60] bg-pink-50 text-[#d81b60]' : 'border-gray-100 opacity-60'}`}>
                  <Truck size={24} /> <span className="font-bold text-xs">À Domicile</span>
                  <span className="text-[10px]">توصيل للمنزل</span>
                </button>
                <button type="button" onClick={() => setFormData(p => ({ ...p, livraison: 'agence' }))} className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${formData.livraison === 'agence' ? 'border-[#d81b60] bg-pink-50 text-[#d81b60]' : 'border-gray-100 opacity-60'}`}>
                  <Building size={24} /> <span className="font-bold text-xs">À l'agence</span>
                  <span className="text-[10px]">توصيل للمكتب</span>
                </button>
              </div>
            </div>

            {/* RECAPITULATIF FINAL */}
            <div className="bg-pink-50 p-6 rounded-[2rem] border-2 border-pink-100 shadow-inner">
              <h3 className="text-xl font-black text-[#ad1457] mb-3 flex items-center gap-2">
                <ShoppingBag size={20} /> Récapitulatif Final
              </h3>
              <div className="space-y-1 text-gray-700 font-medium text-sm">
                <div className="flex justify-between"><span>Prix Promo Ramadan:</span><span className="font-bold">{BASE_PRICE} DA</span></div>
                <div className="flex justify-between text-pink-600"><span>Livraison:</span><span className="font-bold">{formData.wilaya ? `+ ${deliveryFee} DA` : "0 DA"}</span></div>
                <div className="pt-2 mt-2 border-t border-pink-200 flex justify-between text-2xl font-black text-[#d81b60]"><span>Total Cash:</span><span>{totalPrice} DA</span></div>
              </div>
            </div>

            {/* ANTI-BOT */}
            <div className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-100 text-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Vérification anti-bot / تحقق مكافحة الروبوت *</span>
              <div className="flex items-center justify-center gap-4">
                <div className="text-lg font-black text-[#d81b60] flex items-center gap-2">
                  <ShieldCheck size={20} /> {botQuestion.q} = ?
                </div>
                <input required type="number" name="verification" placeholder="?" value={formData.verification} onChange={handleInputChange} className="w-16 p-3 rounded-xl border-2 border-pink-200 focus:border-[#d81b60] outline-none text-center font-bold" />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-[#d81b60] hover:bg-[#ad1457] text-white py-6 rounded-[2.5rem] font-black text-xl shadow-xl shadow-pink-100 transition-all active:scale-95 disabled:bg-gray-300 flex items-center justify-center gap-4">
              {isSubmitting ? "Validation..." : "CONFIRMER MA COMMANDE تأكيد طلبي"} <Send size={24} />
            </button>
          </form>
        </div>
           {/* SECTION PHOTOS REELLES CENTRÉE AVEC ZOOM */}
          <div className="bg-white/50 p-6 rounded-[3rem] border border-pink-100 shadow-sm mx-auto w-full max-w-lg">
            <div className="text-center mb-6">
              <h2 className="text-xl font-black text-gray-800 uppercase tracking-tighter">Photos Réelles / صور حقيقية</h2>
              <p className="text-xs text-pink-600 font-bold mt-1 italic">"Ce que vous voyez est exactement ce que vous recevrez"</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-md bg-white">
                  <img 
                    src={`/images/real-${num}.jpg`} 
                    alt={`Photo réelle ${num}`} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-[2] cursor-zoom-in"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <footer className="mt-10 py-16 border-t border-pink-50 bg-white/50 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Logo />
          <div className="flex justify-center gap-6 mt-8">
            <button onClick={() => openSocial('facebook')} className="p-3 bg-white rounded-full shadow-sm text-blue-600 hover:scale-110 transition-transform"><Facebook size={24} /></button>
            <button onClick={() => openSocial('instagram')} className="p-3 bg-white rounded-full shadow-sm text-pink-600 hover:scale-110 transition-transform"><Instagram size={24} /></button>
            <button onClick={() => openSocial('whatsapp')} className="p-3 bg-white rounded-full shadow-sm text-green-500 hover:scale-110 transition-transform"><MessageCircle size={24} /></button>
          </div>
          <p className="mt-8 text-gray-400 text-[10px] tracking-widest font-bold">© 2026 HANA FLOWERS ALGÉRIE - TOUS DROITS RÉSERVÉS</p>
        </div>
      </footer>

      <SuccessModal isOpen={isSuccess} onClose={() => setIsSuccess(false)} />
    </div>
  );
};

export default App;
