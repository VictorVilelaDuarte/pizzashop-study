import { Outlet } from "react-router-dom";
import { Pizza } from "lucide-react";

export function AppLayout() {
  return (
    <div className="min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      <h1>CABEÇALHO</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
