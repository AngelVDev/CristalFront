import Link from "next/link";
import { Route } from "../models/routes.model";

interface Props {
  pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
  return (
    <>
      {pathNames.map((pathName) => (
        <Link key={pathName.path} href={pathName.path}>
          {pathName.name}
        </Link>
      ))}
    </>
  );
}
export default Navigator;
