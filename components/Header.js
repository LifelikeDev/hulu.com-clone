import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import NavItem from "./NavbarItem";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center m-1 sm:m-3 h-auto">
      <Image
        className="object-contain mb-0"
        src="/images/hulu-icon.webp"
        height={70}
        width={150}
      />

      <nav className="flex flex-grow justify-evenly w-full sm:max-w-xl">
        <NavItem desc="HOME" Icon={HomeIcon} />
        <NavItem desc="TRENDING" Icon={LightningBoltIcon} />
        <NavItem desc="VERIFIED" Icon={BadgeCheckIcon} />
        <NavItem desc="COLLECTIONS" Icon={CollectionIcon} />
        <NavItem desc="SEARCH" Icon={SearchIcon} />
        <NavItem desc="ACCOUNT" Icon={UserIcon} />
      </nav>
    </header>
  );
};

export default Header;
