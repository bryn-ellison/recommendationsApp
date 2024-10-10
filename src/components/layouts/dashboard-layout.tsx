import { NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  SquareMenu,
  Users,
  MessageCircleHeart,
  ScrollText,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ModeToggle } from "../ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import { Link } from "../ui/link";

import { brynEllison } from "@/testing/mockData/users";

type SideNavigationItem = {
  name: string;
  to: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const Logo = () => {
  return (
    <Link className="flex items-center text-secondary-foreground" to="/app">
      <span className="text-md font-semibold text-secondary-foreground mr-2">
        I Want the Best
      </span>
      <MessageCircleHeart />
    </Link>
  );
};

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = brynEllison;
  const navigate = useNavigate();
  const navigation = [
    { name: "Dashboard", to: ".", icon: Home },
    { name: "Your Lists", to: "./lists", icon: ScrollText },
    {
      name: "Users",
      to: "./users",
      icon: Users,
    },
  ].filter(Boolean) as SideNavigationItem[];
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col bg-secondary sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <div className="flex h-16 shrink-0 items-center px-4">
            <Logo />
          </div>
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end
              className={({ isActive }) =>
                cn(
                  "text-secondary-foreground hover:bg-accent",
                  "group flex flex-1 w-full items-center p-2 text-base font-medium",
                  isActive && "bg-muted text-muted-foreground"
                )
              }
            >
              <item.icon
                className={cn(
                  "text-secondary-foreground hover:bg-accent",
                  "mr-4 size-6 shrink-0"
                )}
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 m-4">
          <ModeToggle />
        </div>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-60">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 bg-background px-4 sm:static sm:h-auto sm:justify-end sm:border-0 sm:bg-transparent sm:px-6">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button size="icon" variant="ghost" className="sm:hidden">
                <SquareMenu className="size-7" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-secondary pt-10 text-secondary-foreground max-w-60 h-full rounded-none outline-none">
              <nav className="grid gap-6 text-lg font-medium">
                <div className="flex h-16 shrink-0 items-center px-4">
                  <Logo />
                </div>
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    end
                    className={({ isActive }) =>
                      cn(
                        "text-secondary-foreground hover:bg-accent",
                        "group flex flex-1 w-full items-center p-2 text-base font-medium",
                        isActive && "bg-muted text-muted-foreground"
                      )
                    }
                  >
                    <item.icon
                      className={cn(
                        "text-secondary-foreground hover:bg-accent",
                        "mr-4 size-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </NavLink>
                ))}
              </nav>
              <div className="absolute bottom-0 left-0 m-4">
                <ModeToggle />
              </div>
            </DrawerContent>
          </Drawer>
          <div className="flex h-16 shrink-0 items-center px-4 sm:hidden">
            <Logo />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>BE</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel
                className={cn(
                  "block px-4 py-2 text-sm text-popover-foreground"
                )}
              >
                {user.userName}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigate("./profile")}
                className={cn(
                  "block px-4 py-2 text-sm text-popover-foreground"
                )}
              >
                Your Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className={cn(
                  "block px-4 py-2 text-sm text-popover-foreground w-full"
                )}
                onClick={() => null}
              >
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}
