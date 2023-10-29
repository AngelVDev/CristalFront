import Image from "next/image";
import styles from "./Navbar.module.css";

const navBarItems = [
  {
    title: "Hechizos",
    url: "/hechizos",
  },
  {
    title: "Lecturas",
    url: "/lecturas",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Sobre mí",
    url: "/sobre-mi",
  },
];

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Image src={""} alt="Cristal logo" />
      <nav>
        <ul className={styles.navItems_container}>
          {navBarItems.map((navItem) => (
            <a
              key={navItem.title}
              href={navItem.url}
              className={styles.navItem}
            >
              {navItem.title}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
