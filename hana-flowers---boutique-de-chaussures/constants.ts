import { Wilaya } from './types';

export const WILAYAS: Wilaya[] = [
  { id: '02', name: 'Chlef', nameAr: 'الشلف' },
  { id: '03', name: 'Laghouat', nameAr: 'الأغواط' },
  { id: '04', name: 'Oum El Bouaghi', nameAr: 'أم البواقي' },
  { id: '05', name: 'Batna', nameAr: 'باتنة' },
  { id: '06', name: 'Béjaïa', nameAr: 'بجاية' },
  { id: '07', name: 'Biskra', nameAr: 'بسكرة' },
  { id: '09', name: 'Blida', nameAr: 'البليدة' },
  { id: '10', name: 'Bouira', nameAr: 'البويرة' },
  { id: '12', name: 'Tébessa', nameAr: 'تبسة' },
  { id: '13', name: 'Tlemcen', nameAr: 'تلمسان' },
  { id: '14', name: 'Tiaret', nameAr: 'تيارت' },
  { id: '15', name: 'Tizi Ouzou', nameAr: 'تيزي وزو' },
  { id: '16', name: 'Alger', nameAr: 'الجزائر' },
  { id: '17', name: 'Djelfa', nameAr: 'الجلفة' },
  { id: '18', name: 'Jijel', nameAr: 'جيجل' },
  { id: '19', name: 'Sétif', nameAr: 'سطيف' },
  { id: '20', name: 'Saïda', nameAr: 'سعيدة' },
  { id: '21', name: 'Skikda', nameAr: 'سكيكدة' },
  { id: '22', name: 'Sidi Bel Abbès', nameAr: 'سيدي بلعباس' },
  { id: '23', name: 'Annaba', nameAr: 'عنابة' },
  { id: '24', name: 'Guelma', nameAr: 'قالمة' },
  { id: '25', name: 'Constantine', nameAr: 'قسنطينة' },
  { id: '26', name: 'Médéa', nameAr: 'المدية' },
  { id: '27', name: 'Mostaganem', nameAr: 'مستغانم' },
  { id: '28', name: 'M\'Sila', nameAr: 'المسيلة' },
  { id: '29', name: 'Mascara', nameAr: 'معسكر' },
  { id: '30', name: 'Ouargla', nameAr: 'ورقلة' },
  { id: '31', name: 'Oran', nameAr: 'وهران' },
  { id: '32', name: 'El Bayadh', nameAr: 'البيض' },
  { id: '34', name: 'Bordj Bou Arreridj', nameAr: 'برج بوعريريج' },
  { id: '35', name: 'Boumerdès', nameAr: 'بومرداس' },
  { id: '36', name: 'El Tarf', nameAr: 'الطارف' },
  { id: '38', name: 'Tissemsilt', nameAr: 'تيسمسيلت' },
  { id: '39', name: 'El Oued', nameAr: 'الوادي' },
  { id: '40', name: 'Khenchela', nameAr: 'خنشلة' },
  { id: '41', name: 'Souk Ahras', nameAr: 'سوق أهراس' },
  { id: '42', name: 'Tipaza', nameAr: 'تيبازة' },
  { id: '43', name: 'Mila', nameAr: 'ميلة' },
  { id: '44', name: 'Aïn Defla', nameAr: 'عين الدفلى' },
  { id: '45', name: 'Naâma', nameAr: 'النعامة' },
  { id: '46', name: 'Aïn Témouchent', nameAr: 'عين تموشنت' },
  { id: '47', name: 'Ghardaïa', nameAr: 'غرداية' },
  { id: '48', name: 'Relizane', nameAr: 'غليزان' },
  { id: '51', name: 'Ouled Djellal', nameAr: 'أولاد جلال' },
  { id: '55', name: 'Touggourt', nameAr: 'توقرت' },
];

export const COMMUNES: Record<string, string[]> = {
  '02': ['Chlef - الشلف', 'Ténès - تنس', 'Boukadir - بوقادير', 'Oued Fodda - وادي الفضة', 'Ouled Fares - أولاد فارس', 'Chettia - الشطية', 'Beni Haoua - بني حواء', 'Moussaddek - مصدق', 'Sendjas - سنجاس', 'Zeboudja - الزبوجة', 'Abou El Hassan - أبو الحسن', 'El Karimia - الكريمية', 'Taougrit - تاوقريت', 'Autre / Autre commune - أخرى'],
  '03': ['Laghouat - الأغواط', 'Aflou - أفلو', 'Ain Madhi - عين ماضي', 'Hassi R\'Mel - حاسي الرمل', 'Ksar El Hirane - قصر الحيران', 'Gueltat Sidi Saâd - قلتة سيدي سعد', 'Sidi Makhlouf - سيدي مخلوف', 'Hadj Mechri - الحاج مشري', 'Brida - بريدة', 'Autre / Autre commune - أخرى'],
  '04': ['Oum El Bouaghi - أم البواقي', 'Ain Beida - عين البيضاء', 'Ain M\'lila - عين مليلة', 'Ain Kercha - عين كرشة', 'Ain Fekroun - عين فكرون', 'Meskiana - مسكيانة', 'Fkirina - فكيرينة', 'Souk Naamane - سوق نعمان', 'Dhalaa - الضلعة', 'Autre / Autre commune - أخرى'],
  '05': ['Batna - باتنة', 'Arris - آريس', 'Barika - بريكة', 'Merouana - مروانة', 'Timgad - تيمقاد', 'Ain Touta - عين التوتة', 'N\'Gaous - نقاوس', 'Tazoult - تازولت', 'Chemora - الشمرة', 'Théniet El Abed - ثنية العابد', 'El Madher - المعذر', 'Ras El Aioun - رأس العيون', 'Autre / Autre commune - أخرى'],
  '06': ['Béjaïa - بجاية', 'Amizour - أميزور', 'Akbou - أقبو', 'El Kseur - القصر', 'Ighram - إغرم', 'Timezrit - تمزريت', 'Sidi Aïch - سيدي عيش', 'Aokas - أوقاس', 'Tichy - تيشي', 'Kherrata - خراطة', 'Barbacha - برباشة', 'Adekar - أدكار', 'Souk El Tenine - سوق الاثنين', 'Seddouk - صدوق', 'Autre / Autre commune - أخرى'],
  '07': ['Biskra - بسكرة', 'Sidi Okba - سيدي عقبة', 'Tolga - طولقة', 'El Kantara - القنطرة', 'Lichana - لشانة', 'Zeribet El Oued - زريبة الوادي', 'M\'Chouneche - مشونش', 'Foughala - فوغالة', 'El Ghrous - الغروس', 'Autre / Autre commune - أخرى'],
  '09': ['Blida - البليدة', 'Chebli - شبلي', 'Bouinan - بوعينان', 'Boufarik - بوفاريك', 'Ouled Yaïch - أولاد يعيش', 'Chréa - الشريعة', 'El Affroun - العفرون', 'Meftah - مفتاح', 'Larbaa - الأربعاء', 'Oued Alleug - وادي العلايق', 'Beni Mered - بني مراد', 'Mouzaia - موزاية', 'Hammâm Melouane - حمام ملوان', 'Bouarfa - بوعرفة', 'Autre / Autre commune - أخرى'],
  '10': ['Bouira - البويرة', 'Lakhdaria - الأخضرية', 'Sour El Ghozlane - سور الغزلان', 'Aïn Bessem - عين بسام', 'M\'Chedallah - مشد الله', 'Bechloul - بشلول', 'Kadiria - قادرية', 'Djebahia - جباحية', 'Haizer - الحيزر', 'Ahnif - أحنيف', 'Autre / Autre commune - أخرى'],
  '12': ['Tébessa - تبسة', 'Bir el Ater - بئر العاتر', 'Cheria - الشريعة', 'Morsott - مرسط', 'Ouenza - الونزة', 'El Kouif - الكويف', 'Negrine - نقرين', 'El Ma Labiodh - الماء الأبيض', 'Autre / Autre commune - أخرى'],
  '13': ['Tlemcen - تلمسان', 'Maghnia - مغنية', 'Ghazaouet - الغزوات', 'Nedroma - ندرومة', 'Sebdou - سبدو', 'Remchi - رمشي', 'Hennaya - الحناية', 'Mansourah - منصورة', 'Beni Saf - بني صاف', 'Chetouane - شتوان', 'Ouled Mimoun - أولاد ميمون', 'Beni Snous - بني سنوس', 'Autre / Autre commune - أخرى'],
  '14': ['Tiaret - تيارت', 'Sougueur - السوقر', 'Frenda - فرندة', 'Ksar Chellala - قصر الشلالة', 'Mahdia - مهدية', 'Dahmouni - دهموني', 'Oued Lilli - وادي ليلي', 'Rahouia - رحوية', 'Hamadia - الحمادية', 'Autre / Autre commune - أخرى'],
  '15': ['Tizi Ouzou - تيزي وزو', 'Ain El Hammam - عين الحمام', 'Azazga - عزازقة', 'Larbaâ Nath Irathen - الأربعاء نايث إيراثن', 'Draâ Ben Khedda - ذراع بن خدة', 'Tigzirt - تيقزيرت', 'Draâ El Mizan - ذراع الميزان', 'Ouadhias - واضية', 'Boghni - بوغني', 'Mekla - مقلع', 'Ouaguenoun - واقنون', 'Azeffoun - أزفون', 'Iferhounene - إيفرحونن', 'Autre / Autre commune - أخرى'],
  '16': ['Alger Centre - الجزائر الوسطى', 'Sidi M\'hamed - سيدي امحمد', 'El Madania - المدنية', 'Belouizdad - بلوزداد', 'Bab El Oued - باب الواد', 'Bologhine - بولوغين', 'Casbah - القصبة', 'Oued Koriche - وادي قريش', 'Bir Mourad Raïs - بئر مراد رايس', 'El Biar - الأبيار', 'Bouzareah - بوزريعة', 'Birkhadem - بئر خادم', 'El Harrach - الحراش', 'Baraki - براقي', 'Oued Smar - وادي السمار', 'Bordj El Kiffan - برج الكيفان', 'Bab Ezzouar - باب الزوار', 'Dar El Beïda - الدار البيضاء', 'Chéraga - الشراقة', 'Dely Ibrahim - دالي ابراهيم', 'Zéralda - زرالدة', 'Aïn Benian - عين بنيان', 'Reghaïa - رغاية', 'Rouïba - الرويبة', 'Staoueli - سطاوالي', 'Draria - الدرارية', 'Kouba - القبة', 'Bachdjerrah - باش جراح', 'Birtouta - بئر توتة', 'Ben Aknoun - بن عكنون', 'Hydra - حيدرة', 'Sidi Abdellah - سيدي عبد الله', 'Ain Taya - عين طاية', 'Ouled Fayet - أولاد فايت', 'Saoula - سحاولة', 'Bains Romains - الحمامات', 'Autre / Autre commune - أخرى'],
  '17': ['Djelfa - الجلفة', 'Hassi Bahbah - حاسي بحبح', 'Ain Oussera - عين وسارة', 'Messaad - مسعد', 'Birine - بيرين', 'Dar Chioukh - دار الشيوخ', 'Charef - الشارف', 'Idrissia - الإدريسية', 'Had-Sahary - حد الصحاري', 'Autre / Autre commune - أخرى'],
  '18': ['Jijel - جيجل', 'Taher - الطاهير', 'El Milia - الميلية', 'Chekfa - الشقفة', 'Djimla - جيملة', 'Ziama Mansouriah - زيامة منصورية', 'Sidi Abdelaziz - سيدي عبد العزيز', 'Settara - ستارّة', 'El Aouana - العوانة', 'Texenna - تاكسنة', 'Autre / Autre commune - أخرى'],
  '19': ['Sétif - سطيف', 'Ain Arnat - عين أرنات', 'El Eulma - العلمة', 'Bouandas - بوعنداس', 'Beni Aziz - بني عزيز', 'Ain Azel - عين ازال', 'Guenzet - قنزات', 'Salah Bey - صالح باي', 'Hammam Guergour - حمام قرقور', 'Amoucha - عموشة', 'Aïn Oulmene - عين ولمان', 'Bougaa - بوقاعة', 'El Ouricia - الأوريسية', 'Beni Ouartilane - بني ورتيلان', 'Autre / Autre commune - أخرى'],
  '20': ['Saïda - سعيدة', 'Ain El Hadjar - عين الحجر', 'Youb - يوب', 'Hassasna - الحساسنة', 'Sidi Boubekeur - سيدي بوبكر', 'Ouled Khaled - أولاد خالد', 'Moulay Larbi - مولاي العربي', 'Autre / Autre commune - أخرى'],
  '21': ['Skikda - سكيكدة', 'El Harrouch - الحروش', 'Azzaba - عزابة', 'Collo - القل', 'Tamalous - تمالوس', 'Ramdane Djamel - رمضان جمال', 'Bin El Ouidane - بين الويدان', 'Stora - ستورا', 'El Ghedir - الغدير', 'Sidi Mezghiche - سيدي مزغيش', 'Autre / Autre commune - أخرى'],
  '22': ['Sidi Bel Abbès - سيدي بلعباس', 'Tessala - تسالة', 'Sidi Lahcene - سيدي لحسن', 'Sidi Ali Boussidi - سيدي علي بوسيدي', 'Sfisef - سفيسف', 'Ben Badis - بن باديس', 'Telagh - تلاغ', 'Moulay Slissen - مولاي سليسن', 'Mustapha Ben Brahim - مصطفى بن ابراهيم', 'Autre / Autre commune - أخرى'],
  '23': ['Annaba - عنابة', 'El Hadjar - الحجار', 'Berrahal - برحال', 'Seraïdi - سرايدي', 'Chetaïbi - شطايبي', 'El Bouni - البوني', 'Sidi Amar - سيدي عمار', 'Treat - تريعات', 'Oued El Aneb - وادي العنب', 'Autre / Autre commune - أخرى'],
  '24': ['Guelma - قالمة', 'Oued Zenati - وادي الزناتي', 'Bouchegouf - بوشقوف', 'Héliopolis - هيليوبوليس', 'Guelaat Bou Sbaa - قلعة بوسبع', 'Hammâm Debagh - حمام دباغ', 'Belkheir - بلخير', 'Bouhachana - بوحشانة', 'Autre / Autre commune - أخرى'],
  '25': ['Constantine - قسنطينة', 'Hamma Bouziane - حامة بوزيان', 'Zighoud Youcef - زيغود يوسف', 'Didouche Mourad - ديدوش مراد', 'El Khroub - الخروب', 'Aïn Smara - عين سمارة', 'Ouled Rahmoune - أولاد رحمون', 'Beni Hamidene - بني حميدان', 'Ibn Ziad - ابن زياد', 'Autre / Autre commune - أخرى'],
  '26': ['Médéa - المدية', 'Ksar El Boukhari - قصر البخاري', 'Berrouaghia - البرواقية', 'Beni Slimane - بني سليمان', 'Tablat - تابلاط', 'Ouzera - وزرة', 'Seghouane - سغوان', 'Chahbounia - الشهبونية', 'Aziz - عزيز', 'Si Mahdjoub - سي المحجوب', 'Autre / Autre commune - أخرى'],
  '27': ['Mostaganem - مستغانم', 'Ain Nouissy - عين نويسي', 'Hassi Mameche - حاسي ماماش', 'Mesra - ماسرة', 'Bouguirat - بوقيرات', 'Sidi Ali - سيدي علي', 'Achaacha - عيساوة', 'Kheir Eddine - خير الدين', 'Sidi Lakhdar - سيدي لخضر', 'Autre / Autre commune - أخرى'],
  '28': ['M\'Sila - المسيلة', 'Bou Saâda - بوسعادة', 'Sidi Aïssa - سيدي عيسى', 'Hammam Dhalaa - حمام الضلعة', 'Maadid - المعاضيد', 'Magra - مقرة', 'Beni Yamine - بني يماني', 'Ouled Derradj - أولاد دراج', 'Autre / Autre commune - أخرى'],
  '29': ['Mascara - معسكر', 'Sig - سيق', 'Mohammadia - المحمدية', 'Tighennif - تيغنيف', 'Ghriss - غريس', 'Oued Taria - وادي تاغية', 'Bou Hanifia - بوحنيفية', 'Oued El Abtal - وادي الأبطال', 'Zahana - زهانة', 'Autre / Autre commune - أخرى'],
  '30': ['Ouargla - ورقلة', 'Hassi Messaoud - حاسي مسعود', 'Rouissat - الرويسات', 'Sidi Khouiled - سيدي خويلد', 'N\'Goussa - نقوسة', 'El Borma - البرمة', 'Autre / Autre commune - أخرى'],
  '31': ['Oran Centre - وسط وهران', 'Bir El Djir - بئر الجير', 'Es Senia - السانية', 'Arzew - أرزيو', 'Hassi Bounif - حاسي بونيف', 'Bethioua - بطيوة', 'Aïn El Turk - عين الترك', 'Bousfer - بوسفر', 'El Ançor - العنصر', 'Mers El Kébir - المرسى الكبير', 'Misserghin - مسرغين', 'Sidi Chami - سيدي الشحمي', 'Hassi Ben Okba - حاسي بن عقبة', 'Oued Tlelat - وادي تليلات', 'Boutlelis - بوتليليس', 'Canastel - كناستيل', 'Autre / Autre commune - أخرى'],
  '32': ['El Bayadh - البيض', 'Rogassa - رقاصة', 'Brezina - بريزينة', 'Bougtob - بوقطب', 'El Abiodh Sidi Cheikh - الأبيض سيدي الشيخ', 'Chellala - شلالة', 'Autre / Autre commune - أخرى'],
  '34': ['Bordj Bou Arreridj - برج بوعريريج', 'Ras El Oued - رأس الوادي', 'Bordj Zemoura - برج زمورة', 'Mansoura - منصورة', 'Medjana - مجانة', 'Bir Kasdali - بئر قصد علي', 'Khelil - خليل', 'El Hamadia - الحمادية', 'El Anasser - العناصر', 'Autre / Autre commune - أخرى'],
  '35': ['Boumerdès - بومرداس', 'Boudouaou - بودواو', 'Dellys - دلس', 'Thenia - الثنية', 'Chabet el Ameur - شعبة العامر', 'Hamadi - حمادي', 'Khemis El Khechna - خميس الخشنة', 'Ouled Hedadj - أولاد هداج', 'Zemmouri - زموري', 'Ouled Moussa - أولاد موسى', 'Afir - أعفير', 'Bordj Menaiel - برج منايل', 'Autre / Autre commune - أخرى'],
  '36': ['El Tarf - الطارف', 'El Kala - القالة', 'Dréan - الذرعان', 'Besbes - بسباس', 'Ben Mehidi - بن مهيدي', 'Bouhadjar - بوحجار', 'Chatt - الشط', 'Autre / Autre commune - أخرى'],
  '38': ['Tissemsilt - تيسمسيلت', 'Theniet El Had - ثنية الحد', 'Lardjem - لرجام', 'Khemisti - خميستي', 'Bordj Bou Naama - برج بو نعامة', 'Autre / Autre commune - أخرى'],
  '39': ['El Oued - الوادي', 'Guemar - قمار', 'Bayadha - البياضة', 'Debila - دبيلة', 'Robbah - رباح', 'Magrane - مقرن', 'Hassi Khalifa - حاسي خليفة', 'Kouinine - كوينين', 'Reguiba - الرقيبة', 'Autre / Autre commune - أخرى'],
  '40': ['Khenchela - خنشلة', 'Kais - قايس', 'Chechar - ششار', 'Babor - بابار', 'Ouled Rechache - أولاد رشاش', 'El Mahmal - المحمل', 'Ensigha - انسيغة', 'Autre / Autre commune - أخرى'],
  '41': ['Souk Ahras - سوق أهراس', 'Seddratâ - سدراتة', 'M\'daourouch - مداوروش', 'Taoura - تاورة', 'Merahna - المراهنة', 'Haddada - الحدادة', 'Autre / Autre commune - أخرى'],
  '42': ['Tipaza - تيبازة', 'Cherchell - شرشال', 'Kolea - القليعة', 'Bou Ismaïl - بوسماعيل', 'Hadjout - حجوط', 'Damous - داموس', 'Gouraya - قوراية', 'Fouka - فوكة', 'Bouharoun - بوهارون', 'Chaiba - شعيبة', 'Ahmer El Ain - أحمر العين', 'Nador - الناظور', 'Autre / Autre commune - أخرى'],
  '43': ['Mila - ميلة', 'Chelghoum Laid - شلغوم العيد', 'Grarem Gouga - قرارم قوقة', 'Ferdjioua - فرجيوة', 'Teleghma - تلاغمة', 'Tadjenanet - تاجنانت', 'Oued Athmania - وادي العثمانية', 'Terraia - التلاغمة', 'Autre / Autre commune - أخرى'],
  '44': ['Aïn Defla - عين الدفلى', 'Khemis Miliana - خميس مليانة', 'Miliana - مليانة', 'Boumedfaâ - بومدفع', 'Djendel - جندل', 'El Attaf - العطاف', 'Rouina - الروينة', 'Djelida - جليدة', 'Autre / Autre commune - أخرى'],
  '45': ['Naâma - النعامة', 'Mecheria - مشرية', 'Ain Sefra - عين الصفراء', 'Moghrar - مغرار', 'Assela - عسلة', 'Tiout - تيوت', 'Autre / Autre commune - أخرى'],
  '46': ['Aïn Témouchent - عين تموشنت', 'Béni Saf - بني صاف', 'Hammam Bouhadjar - حمام بوحجر', 'El Amria - العامرية', 'El Malah - المالح', 'Aïn Kihal - عين الكيحل', 'Oulhaça Gheraba - ولهاصة الغرابة', 'Autre / Autre commune - أخرى'],
  '47': ['Ghardaïa - غرداية', 'Metlili - متليلي', 'El Guerrara - القرارة', 'Bounoura - بنورة', 'Zelfana - زلفانة', 'Dhayet Bendhahoua - ضاية بن ضحوة', 'Berriane - بريان', 'Autre / Autre commune - أخرى'],
  '48': ['Relizane - غليزان', 'Oued Rhiou - وادي ارهيو', 'Mazouna - مازونة', 'Zemmoura - زمورة', 'Yellel - يلل', 'Ammi Moussa - عمي موسى', 'Djidiouia - جديوية', 'Mendas - منداس', 'Autre / Autre commune - أخرى'],
  '51': ['Ouled Djellal - أولاد جلال', 'Sidi Khaled - سيدي خالد', 'Besbes - بسباس', 'Ras El Miad - رأس الميعاد', 'Chaïba - الشعيبة', 'Autre / Autre commune - أخرى'],
  '55': ['Touggourt - تقرت', 'Nezla - نزلة', 'Tebesbest - تبسبست', 'Zaouia El Abidia - زاوية العابدية', 'Temacine - تماسين', 'Megarine - مقارين', 'Taïbet - الطيبات', 'El Elia - العالية', 'Autre / Autre commune - أخرى'],
  'default': ['Chef-lieu - مقر الولاية', 'Centre Ville - وسط المدينة', 'Zone Rurale - منطقة ريفية', 'Autre - أخرى']
};

// Dictionnaire : 'CODE': [PRIX_DOMICILE, PRIX_AGENCE]
const DELIVERY_PRICES: Record<string, [number, number]> = {
  '02': [600, 350], '03': [750, 350], '04': [750, 350], '05': [750, 350],
  '06': [750, 350], '07': [750, 550], '09': [550, 300], '10': [550, 350],
  '12': [750, 350], '13': [750, 350], '14': [750, 350], '15': [550, 350],
  '16': [350, 200], '17': [750, 350], '18': [750, 350], '19': [750, 350],
  '20': [750, 350], '21': [750, 350], '22': [750, 350], '23': [750, 350],
  '24': [750, 350], '25': [750, 350], '26': [550, 350], '27': [750, 350],
  '28': [750, 350], '29': [750, 350], '30': [900, 600], '31': [750, 350],
  '32': [850, 450], '34': [550, 350], '35': [550, 300], '36': [750, 450],
  '38': [750, 350], '39': [950, 600], '40': [750, 350], '41': [750, 350],
  '42': [550, 350], '43': [750, 350], '44': [550, 350], '45': [850, 400],
  '46': [750, 350], '47': [850, 550], '48': [750, 350], '51': [850, 450],
  '55': [950, 500]
};

export const getDeliveryFee = (wilayaId: string, type: 'domicile' | 'agence'): number => {
  const prices = DELIVERY_PRICES[wilayaId];
  const isHome = type === 'domicile';
  if (prices) {
    return isHome ? prices[0] : prices[1];
  }
  return isHome ? 700 : 450; // Par défaut
};

export const SIZES = ['36', '37', '38', '39', '40', '41'];

export const SHOE_IMAGES = {
  beige: '/images/beige-shoe.jpg',
  fuchsia: '/images/fuchsia-shoe.jpg'
};