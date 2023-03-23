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
  isError: boolean;
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
