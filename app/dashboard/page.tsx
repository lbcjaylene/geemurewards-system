"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { customers, Customer } from "@/data/customers";


export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Customer[]>([]);
  const [searchMessage, setSearchMessage] = useState("");

  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  const handleSearch = () => {
    const searchValue = search.trim();

    if (searchValue === "") {
      setSearchMessage("Please enter a card number or last 4 digits of phone.");
      setSearchResults([]);
      return;
    }

    if (searchValue.length !== 4 && searchValue.length !== 8) {
      setSearchMessage(
        "Enter either an 8-digit card number or the last 4 digits of a phone number."
      );
      setSearchResults([]);
      return;
    }

    if (searchValue.length === 4 ) {
      const matches = customers.filter((customer) =>
      customer.phoneNumber.endsWith(searchValue)
    );
    
    setSearchResults(matches);
    
    if (matches.length === 0) {
      setSearchMessage("No accounts found with that phone number.");
    } else {
      setSearchMessage("");
    }

    return;

    }
    const cardMatch = customers.find(
      (customer) => customer.cardNumber === searchValue
    );

    if (cardMatch) {
      setSearchResults([cardMatch]);
      setSearchMessage("");
      return;
    }

    setSearchResults([]);
    setSearchMessage("No account found for that card number.");
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
            Scan an 8-digit card or enter the last 4 digits of a phone number.
          </p>

          <input
            type="text"
            value={search}
            onChange={(event) => {
              const value = event.target.value;
              if (value !== "" && isNaN(Number(value))) {
                return;
              }

              setSearch(value);
            }}
            placeholder="Scan 8-digit card or enter last 4 of phone"
            className="mt-6 w-full rounded-2xl border-2 border-gray-200 px-5 py-4 text-lg text-black outline-none focus:border-[#2f9de0]"
          />

          <button 
          onClick={handleSearch}
          className="mt-4 w-full rounded-2xl bg-[#2f9de0] px-6 py-4 text-lg font-bold text-white">
            SEARCH
          </button>
          {searchMessage && (
            <p className= "mt-4 text-center text-sm font-semibold text-red-500">
              {searchMessage}
            </p>
          )}

          {searchResults.length > 0 && (
            <div className="mt-6 space-y-4">
              {searchResults.map((customer) => (
                <div
                  key={customer.id}
                  className="rounded-2xl border-2 border-gray-200 p-5"
                >
                  <p className="text-lg font-bold text-black">
                    {customer.firstName} {customer.lastName}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Phone ending in {customer.phoneNumber.slice(-4)}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {customer.cardNumber
                      ? `Card #${customer.cardNumber}`
                      : "No card linked"}
                  </p>

                  <Link
                    href={`/customers/${customer.id}`}
                    className="mt-4 block w-full rounded-xl bg-[#2f9de0] px-5 py-3 text-center font-bold text-white"
                  >
                    OPEN ACCOUNT
                  </Link>

                  {!customer.cardNumber && (
                    <button
                      type="button"
                      className="mt-4 rounded-xl bg-[#ffd34f] px-5 py-3 font-bold text-black"
                    >
                      + ADD CARD NUMBER
                    </button>
                  )}
              </div>
            ))}
          </div>
        )}

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
