import Logo from "/images/logo.svg";

const Header = () => {
  return (
    <header className="p-8">
      <img src={Logo} alt="Logo" className="w-2/5" />
    </header>
  );
};

export default Header;
