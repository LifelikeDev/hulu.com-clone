const NavItem = ({ desc, Icon }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:text-white group w-12 sm:w-20">
      <Icon className="h-7 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {desc}
      </p>
    </div>
  );
};

export default NavItem;
