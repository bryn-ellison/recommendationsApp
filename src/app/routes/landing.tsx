import { useNavigate } from "react-router-dom";

import logo from "@/assets/logo.svg";
import { Head } from "@/components/seo/head";
import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/auth";

export const LandingRoute = () => {
  const navigate = useNavigate();
  const user = useUser();

  const handleStart = () => {
    if (user.data) {
      navigate("/app");
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <>
      <Head description="Recommendations App" />
      <div className="flex h-screen items-center bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Recommendations App</span>
          </h2>
          <img src={logo} alt="I want the best" />
          <p>Making the world a more tasteful place.</p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button onClick={handleStart}>Get started</Button>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="https://github.com/bryn-ellison"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline">Github Repo</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
