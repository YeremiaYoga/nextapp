import { connectMongoDB } from "@/lib/mongodb";
import Produk from "@/models/produk";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectMongoDB();
    const allProduk = await Produk.find({}); // Retrieve all documents from 'produk' collection
    console.log("All Produk: ", allProduk);
    return NextResponse.json({ allProduk });
  } catch (error) {
    console.error("Error fetching all produk data:", error);
    return NextResponse.error("Failed to fetch all produk data");
  }
}