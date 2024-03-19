import { Outlet } from "react-router-dom";
import Navigation from "@/components/shared/Navigation";

function MainLayout() {
  return (
    <main className="container">
      <Navigation/>
       <Outlet />
    </main>
  );
}

export default MainLayout;
