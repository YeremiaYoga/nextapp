import mongoose, { Schema, models } from "mongoose";

const ProdukSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Produk = models.Produk || mongoose.model("Produk", ProdukSchema);

export default Produk;