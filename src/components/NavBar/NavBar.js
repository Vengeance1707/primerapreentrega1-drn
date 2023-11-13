import "./NavBar.css";

export const NavBar = () => {
  const storeName = "Rage Componentes";
  const categories = ["Productos", "Lo más vendido", "Contáctanos", "Nosotros"];

  return (
    <nav>
      <div className="store-name">{storeName}</div>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>
            <a href={`#/${category}`} aria-label={`Ir a ${category}`}>{category}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};



