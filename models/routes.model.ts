export const Routes = {
  Landing: {
    path: "/",
    name: "Landing",
  },
  Form: {
    path: "/registrarse",
    name: "Registro",
  },
};

export interface Route {
  path: string;
  name: string;
}
