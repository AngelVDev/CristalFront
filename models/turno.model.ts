export interface Turno {
  consultante: string;
  tipo: string;
  moneda: "ARS" | "USD";
  precio: number;
  fechaHora: Date;
  status:
    | "Pendiente"
    | "Cancelado"
    | "Confirmado"
    | "Transferido"
    | "Terminado";
  personasEnConsulta?: Persona;
  referencia: string;
  notas: string;
}

type Persona = {
  nombre: string;
  relacion: string;
  fechaDeNacimiento: Date;
  signo: string;
};
