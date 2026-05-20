import CategoryButton from './CategoryButton';
import categoryList from './categoryList.js';

const CategoryButtons = ({ handleClick }) => {
  return (
    <>
      <h2 className="text-[#ed6b35] font-medium text-3xl pt-4">
        Klicka på en kategori
      </h2>
      <div className="flex flex-wrap justify-center items-center p-4 gap-2">
        {categoryList.map((l) => (
          <CategoryButton
            key={l.index}
            value={l.term}
            handleClick={handleClick}
            label={l.displayText}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryButtons;
