import "./directory-menu.styles.scss";

import CategoryItem from "../category-item/category-item.component";

const DirectoryMenu = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
