import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet /> {/* Renders the current route */}
    </>
  );
}
// This layout component will be used in the router configuration to wrap all routes