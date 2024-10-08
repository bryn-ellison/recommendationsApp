import { NavLink, useNavigate, useNavigation } from "react-router-dom";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-black sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <div className="flex h-16 shrink-0 items-center px-4 text-white">
            <h1>I Want the Best</h1>
          </div>
          <ul className="text-white">
            <li>
              <NavLink key="Dashboard" to=".">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink key="Users" to="./users">
                Users
              </NavLink>
            </li>
            <li>Nav3</li>
          </ul>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-60">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:justify-end sm:border-0 sm:bg-transparent sm:px-6">
          <h2>HEADER STUFF</h2>
          <p>This is where header stuff goes</p>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}
