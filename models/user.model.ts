export interface User {
  name: string;
  residenceCountry: string;
  originCountry?: string;
  dateOfBirth: Date;
  phone: string;
  tiktok?: string;
  instagram?: string;
  email: string;
  password: string;
  signo?: string;
  personasEnConsulta?: string[];
  referencia?: string;
  notas?: string;
}
