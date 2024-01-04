"use client";

import { useState, useEffect } from "react";

export default function ListProduk() {
  const [produkList, setProdukList] = useState([]);

  useEffect(() => {
    async function fetchProduk() {
      try {
        const res = await fetch("/api/showproduk", {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          setProdukList(data.allProduk);
        } else {
          console.log("Failed to fetch produk data");
        }
      } catch (error) {
        console.log("Error fetching produk: ", error);
      }
    }

    fetchProduk();
    console.log(produkList);
  }, []);

  return (
    <div className="grid">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">List Produk</h1>
        <ul>
          {produkList && produkList.length > 0 ? (
            produkList.map((produk) => (
              <li key={produk._id}>
                <p>Name: {produk.name}</p>
                <p>Description: {produk.description}</p>
                <p>Price: {produk.price}</p>
              </li>
            ))
          ) : (
            <li>No produk available</li>
          )}
        </ul>
      </div>
    </div>
  );
}
