"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() { // create a website named Home and make it the default page for this route
  const [pin, setPin] = useState(["", "", "", "", "", ""]); // remembers the six pin digits (const = creating a variable) (useState = create memory)
    const handlePinChange = ( // which box ? index and what value was typed
      index: number, // index = parameter ( what index are we in? )
      value: string // value = parameter
    ) => {
      const newPin = [...pin]; // creates a copy of the pin array
      newPin[index] = value; // changes the box that the employee typed in
      setPin(newPin); // replaces the old pin with a new one
    };
  return ( // display this on the screen
    <main className="min-h-screen bg-[#59c3eb] flex items-center justify-center px-6"> 
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
        <div className="text-center">
          <div className="mb-6 text-5xl">⭐</div>

          <h1 className="text-3xl font-bold text-[#2f9de0]">
            GEEMU GEEMU
          </h1>

          <p className="mt-1 text-lg font-semibold text-black">
            REWARDS SYSTEM
          </p>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-black">
              Employee Login
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Enter your 6-digit PIN
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {pin.map((digit, index) => (
              <input
                key={index}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(event) =>
                  handlePinChange(index, event.target.value)
                }
                className="h-14 w-12 rounded-xl border-2 border-gray-200 bg-white text-center text-xl font-bold text-black outline-none focus:border-[#2f9de0]"
              />
            ))}
          </div>

          <button className="mt-8 w-full rounded-2xl bg-[#ffd34f] px-6 py-4 text-lg font-bold text-black transition hover:brightness-95">
            LOGIN
          </button>
        </div>
      </div>
    </main>
  );
}
