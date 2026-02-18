import { ReactNode } from "react";
import Header from "../components/layout/Header";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
