// Layout.tsx
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-container">
      <Navbar />
      <main>{children}</main>
      <footer>
        <span>© 2025 AUB Mediterraneo. All rights reserved.</span>
      </footer>
    </div>
  );
}
