export interface Service {
  name: string;
  tipo: string;
  precioPesos: number;
  precioDolares?: number;
  disponibilidad: boolean;
  oferta?: boolean;
  descripcion: string;
}
