import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { UserAccountNav } from "./UserAccountNav";
import SearchBar from "./SearchBar";
import Dog from "../../public/Dog.png";
import { ModeToggle } from "./DarkMode";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed dark:bg-[#030711] dark:text-white top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          {/* <Icons.logo className='h-8 w-8 sm:h-6 sm:w-6' /> */}
          <img
            src={Dog.src}
            className="h-6 w-6 sm:h-8 sm:w-8"
            alt="Petcom Logo"
          />
          <p className="hidden text-zinc-700 dark:text-zinc-100 text-sm font-medium md:block">
            Petcom
          </p>
        </Link>

        {/* search bar */}
        <SearchBar />

        {/* actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href="/sign-in" className={buttonVariants()}>
              Sign In
            </Link>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
