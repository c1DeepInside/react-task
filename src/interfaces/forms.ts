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
