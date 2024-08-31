"use client";

// pages/withdraw.js
import Navbar from "../landing/components/Navbar";
import WithdrawForm from "./components/WidthdrawForm";
import { Footer } from "~~/components/Footer";

export default function page() {
  return (
    <div>
      <Navbar />
      <WithdrawForm />
      <Footer />
    </div>
  );
}
