/* `import type { ReactNode } from 'react'. */
import type { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
/**
 * Component that wraps the main content of the application.
 * @param {ReactNode} children - The child components to be rendered within the layout.
 * @returns {JSX.Element} - The JSX code for the component.
 */
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  // Render the children components within the layout div.
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
}
