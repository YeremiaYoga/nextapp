"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const res = await fetch("api/addproduk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("add produk gagal");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="grid  ">
      <div className="shadow-lg p-5 rounded-lg  border-green-400">
        <h1 className="text-xl font-bold my-4">Add Produk</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Description"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Price"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Add
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
