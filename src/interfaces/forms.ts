export interface GenderProps {
  reference: React.RefObject<HTMLInputElement>;
  name: string;
}

export interface Field {
  id: number;
  reference: React.RefObject<HTMLInputElement>;
  errorText: string;
  description: string;
  type: string;
  accept?: string;
}

export interface ValidationFields {
  name: string | undefined;
  date: string | undefined;
  file: string | undefined;
  language: string | undefined;
  male: boolean | undefined;
  female: boolean | undefined;
  other: boolean | undefined;
  agree: boolean | undefined;
}

export interface ValidationResult {
  name: boolean;
  date: boolean;
  file: boolean;
  agree: boolean;
  language: boolean;
  gender: boolean;
}

export interface FormCard {
  id: number;
  name: string;
  date: string;
  file: string;
  language: string;
  gender: string;
}
