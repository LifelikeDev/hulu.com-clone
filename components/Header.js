import Image from "next/image";

const Header = () => {
  return (
    <header>
      <h1>Some regular header here</h1>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        height={100}
        width={200}
      />
    </header>
  );
};

export default Header;
