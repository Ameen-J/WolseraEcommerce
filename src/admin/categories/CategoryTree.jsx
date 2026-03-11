import React from "react";
import CategoryNode from "./CategoryNode";

function CategoryTree({ categories, refreshTree }) {

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <CategoryNode
          key={category.id}
          category={category}
          categories={categories}
          refreshTree={refreshTree} 
          level={0}
        />
      ))}
    </div>
  );
}

export default CategoryTree;