import logo from "../assets/logo";

function Header({ name }) {
  return (
    <header>
      <img src={logo} alt="logo" width="50" />
      <h1>{name}</h1>
    </header>
  );
}

export default Header;