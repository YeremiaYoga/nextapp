import { connectMongoDB } from "@/lib/mongodb";
import Produk from "@/models/produk";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, description, price } = await req.json();
    await connectMongoDB();
    await Produk.create({ name, description, price });
    return NextResponse.json({ message: "Tambah Berhasil" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Gagal" }, { status: 500 });
  }
}
