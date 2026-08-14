"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateCustomer() {
  const router = useRouter();

  const [cardNumber, setCardNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateCustomer = () => {
    console.log("Create Account button clicked");

    if (cardNumber === "") {
        setErrorMessage("Please enter a card number.");
        return;
    }
    
    if (firstName === "") {
        setErrorMessage("Please enter a first name.");
        return;
    }

    if (lastName === "") {
        setErrorMessage("Please enter a last name.");
        return;
    }

    if (phoneNumber === "") {
        setErrorMessage("Please enter a phone number.");
        return;
    }

    setErrorMessage("");

    console.log({
        cardNumber,
        firstName,
        lastName,
        phoneNumber,
        points: 0,
    });
  };

  return (
    <main className="min-h-screen bg-[#59c3eb] p-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-[#2f9de0]">
          Create New Customer
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Scan or enter the customer's card number, then enter their information.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block font-semibold text-black">
              Card Number
            </label>

            <input
              type="text"
              value={cardNumber}
              onChange={(event) => setCardNumber(event.target.value)}
              placeholder="Scan or enter card number"
              className="w-full rounded-2xl border-2 border-gray-200 px-5 py-4 text-black outline-none focus:border-[#2f9de0]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-black">
              First Name
            </label>

            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              placeholder="First name"
              className="w-full rounded-2xl border-2 border-gray-200 px-5 py-4 text-black outline-none focus:border-[#2f9de0]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-black">
              Last Name
            </label>

            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Last name"
              className="w-full rounded-2xl border-2 border-gray-200 px-5 py-4 text-black outline-none focus:border-[#2f9de0]"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-black">
              Phone Number
            </label>

            <input
              type="text"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              placeholder="Phone number"
              className="w-full rounded-2xl border-2 border-gray-200 px-5 py-4 text-black outline-none focus:border-[#2f9de0]"
            />
          </div>

          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">
              Starting Balance
            </p>

            <p className="mt-1 text-3xl font-bold text-[#2f9de0]">
              0 Points
            </p>
          </div>

        {errorMessage && (
            <p className="text-center text-sm font-semibold text-red-500">
                {errorMessage}
            </p>
        )}

          <div className="flex gap-4">
            <button
            type="button"
              onClick={() => router.push("/dashboard")}
              className="w-full rounded-2xl border-2 border-gray-200 px-6 py-4 font-bold text-black"
            >
              CANCEL
            </button>

            <button
              type="button"
              onClick={handleCreateCustomer}
              className="w-full rounded-2xl bg-[#ffd34f] px-6 py-4 font-bold text-black"
            >
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
