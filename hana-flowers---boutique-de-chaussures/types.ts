
export type ColorVariant = 'beige' | 'fuchsia';

export interface OrderFormData {
  nom: string;
  prenom: string;
  telephone: string;
  adresse: string;
  wilaya: string;
  commune: string;
  livraison: 'domicile' | 'agence';
  couleur: ColorVariant;
  pointure: string;
  verification: string;
}

export interface Wilaya {
  id: string;
  name: string;
  nameAr: string;
}

export interface Commune {
  id: string;
  wilayaId: string;
  name: string;
  nameAr: string;
}
