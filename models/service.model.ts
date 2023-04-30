/* eslint-disable max-len */
export interface Service {
  name: string;
  tipo: string;
  precioPesos: number;
  precioDolares?: number;
  disponibilidad: boolean;
  oferta?: boolean;
  descripcion: string;
}
export const Services: Service[] = [
  {
    name: "Lectura de vínculo I",
    tipo: "Lectura",
    precioPesos: 1000,
    precioDolares: 6,
    disponibilidad: true,
    descripcion:
      "Vemos qué siente por vos y lo que vos sentís, las expectativas de ambos, qué los une y qué los separa; futuro próximo y lejano",
  },
  {
    name: "Lectura general extensa",
    tipo: "Lectura",
    precioPesos: 1200,
    precioDolares: 9,
    disponibilidad: true,
    descripcion:
      "En ésta lectura vemos tu situación laboral (empleo o desempleo), tu situación económica y tu situación sentimental; hoy y a futuro",
  },
  {
    name: "Lectura Yo soy",
    tipo: "Lectura",
    precioPesos: 1600,
    precioDolares: 10,
    disponibilidad: true,
    descripcion:
      "Vemos tu desarrollo personal,relaciones amorosas, vínculos familiares, salud, dinero, profesión, entorno y diversión",
  },
  {
    name: "Lectura 'mi ex' I",
    tipo: "Lectura",
    precioPesos: 750,
    precioDolares: 6,
    disponibilidad: true,
    descripcion:
      "Qué piensa de mí hoy, ¿aún tiene sentimientos o me olvidó?¿Hay alguien nuevo/a en su vida? ¿Hay posibilidad de volver a estar juntos?",
  },
  {
    name: "Lectura 'mi ex' II",
    tipo: "Lectura",
    precioPesos: 750,
    precioDolares: 6,
    disponibilidad: true,
    descripcion:
      "¿Me piensa, me extraña? ¿Qué siente por mí? ¿Piensa en volver? ¿Cambió sus actitudes? ¿Funcionará esta vez? Posible futuro del vínculo",
  },
  {
    name: "Cruz Celta",
    tipo: "Lectura",
    precioPesos: 1500,
    precioDolares: 9,
    disponibilidad: true,
    descripcion:
      "Consultamos sobre un tema particular y cómo se irá desarrollando. Qué te llevó a estar ahí, pros y contras. Finalmente, qué pasará y con qué ayudas contarás",
  },
  {
    name: "Respuesta extensa",
    tipo: "Lectura",
    precioPesos: 500,
    precioDolares: 0,
    disponibilidad: true,
    descripcion: "",
  },
  {
    name: "Autoendulzamiento",
    tipo: "Hechizo",
    precioPesos: 3500,
    precioDolares: 20,
    disponibilidad: true,
    descripcion: "Un hechizo para recuperar tu amor propio",
  },
];
