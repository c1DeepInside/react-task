export type GenderProps = {
  reference: React.RefObject<HTMLInputElement>;
  name: string;
};

export type Field = {
  id: number;
  reference: React.RefObject<HTMLInputElement>;
  errorText: string;
  description: string;
  type: string;
  accept?: string;
};

export type ValidationFields = {
  name: string | undefined;
  date: string | undefined;
  file: string | undefined;
  language: string | undefined;
  male: boolean | undefined;
  female: boolean | undefined;
  other: boolean | undefined;
  agree: boolean | undefined;
};

export type ValidationResult = {
  name: boolean;
  date: boolean;
  file: boolean;
  agree: boolean;
  language: boolean;
  gender: boolean;
};

export interface IFormCard {
  id: number;
  name: string;
  date: string;
  file: string;
  language: string;
  gender: string;
}
