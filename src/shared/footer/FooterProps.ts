export interface IOperatingHours {
  label: string; 
  time: string;  
}

export interface IContactItem {
  label: string; 
  value: string; 
}

export interface IPropsFooter {
  operatingHours: IOperatingHours[];
  contacts: IContactItem[];
  about?: string;
  copyright?: string;
}
