import LanguageSelector from "../Language/LanguageSelector";

function Header() {
  return (
    <div className="lang-nav-header">
      <a href="#nc-navigation" className="nc-menutrigger">
        <span className="nc-menutrigger--span" />
      </a>
      <LanguageSelector />
    </div>
  );
}

export default Header;
