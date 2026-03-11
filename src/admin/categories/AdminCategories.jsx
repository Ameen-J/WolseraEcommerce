import React, { useState,useEffect } from "react";
import AdminLayout from "../AdminLayout";
import CategoryTree from "./CategoryTree";
import { fetchCategoryTree,
  createCategory,
  updateCategoryName,
  deleteCategory
 } from "../../Services/adminProductService";

function AdminCategories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetchCategoryTree();
      setCategories(res);
    } catch (err) {
      console.error("Failed to load categories", err);
    }
  };

  const addRootCategory = async (name) => {
    try {
      await createCategory({
        name: name,
        parentId: null
      });

      fetchCategories();
    } 
    catch (err) {
      console.error("Create root category failed", err);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">

        <div>
          <h2 className="text-3xl font-bold text-zinc-900">
            Category Management
          </h2>
          <p className="text-gray-500 mt-1">
            Manage product categories
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-8">

          <CategoryTree
            categories={categories}
            refreshTree={fetchCategories}
          />

          <div className="mt-8">
            <AddRootCategory onAdd={addRootCategory} />
          </div>

        </div>

      </div>
    </AdminLayout>
  );
}

function AddRootCategory({ onAdd }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;
    onAdd(name);
    setName("");
  };

  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="New root category"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-zinc-300 rounded-lg p-3 flex-1"
      />
      <button
        onClick={handleAdd}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-zinc-800 transition"
      >
        Add Root
      </button>
    </div>
  );
}

export default AdminCategories;