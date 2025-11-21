export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageName: string; // The physical file name requested
  imageUrl: string; // The placeholder URL
}

export interface GalleryItem {
  id: string;
  title: string;
  imageName: string;
  imageUrl: string;
}

export interface ContactInfo {
  address: string;
  phones: string[];
  email: string;
}