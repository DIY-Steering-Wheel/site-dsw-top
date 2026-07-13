import Redirect from "@/app/lib/redirect";
import { Logo } from "../images/logo";

export const Header = () => {
  return (
    <div className="z-0 flex h-20 w-full items-center justify-between gap-5 border-b border-[#262626] bg-[--background] px-5 py-4 lg:mt-5 lg:px-10">
      <Logo />
      <nav className="flex items-center gap-4 text-sm font-medium text-[--text-highlights] lg:text-lg">
        <Redirect
          href="/home"
          className="transition-all hover:brightness-75 hover:text-zinc-50"
        >
          Início
        </Redirect>
        <Redirect
          href="/downloads"
          className="transition-all hover:brightness-75 hover:text-zinc-50"
        >
          Downloads
        </Redirect>
      </nav>
    </div>
  );
};
