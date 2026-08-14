"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-[#59c3eb] p-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#2f9de0]">
              GEEMU GEEMU REWARDS SYSTEM
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Customer Rewards Dashboard
            </p>
          </div>

          <div className="text-right">
            <p className="font-semibold text-black">
              Jaylene Khourn
            </p>

            <p className="text-sm text-gray-500">
              Admin
            </p>

            <button
              onClick={handleLogout}
              className="mt-2 rounded-xl bg-[#ffd34f] px-5 py-2 font-semibold text-black"
            >
              LOGOUT
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-black">
            Search Customer
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Scan a card or search by card number, phone number, or customer name.
          </p>

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Scan card or search customer..."
            className="mt-6 w-full rounded-2xl border-2 border-gray-200 px-5 py-4 text-lg text-black outline-none focus:border-[#2f9de0]"
          />

          <button className="mt-4 w-full rounded-2xl bg-[#2f9de0] px-6 py-4 text-lg font-bold text-white">
            SEARCH
          </button>
        </div>

        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-sm font-semibold text-gray-400">
            OR
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="flex justify-center">
          <Link
            href="/customers/new"
            className="w-full rounded-2xl bg-[#ffd34f] px-6 py-4 text-center text-lg font-bold text-black transition hover:brightness-95"
            >
              + CREATE NEW CUSTOMER
          </Link>
        </div>
      </div>
    </main>
  );
}
