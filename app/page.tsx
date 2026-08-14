"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  // Remembers the six PIN digits
  const [pin, setPin] = useState(["", "", "", "", "", ""]);

  // Displays a message if the PIN is incorrect
  const [errorMessage, setErrorMessage] = useState("");

  // Gives us navigation between pages
  const router = useRouter();

  // Remembers references to each PIN input box
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const validatePin = (enteredPin: string) => {
    if (enteredPin !== "123456") {
      setErrorMessage("Incorrect PIN");

      setPin(["", "", "", "", "", ""]);

      inputRefs.current[0]?.focus();

      return;
    }

    setErrorMessage("");

    router.push("/dashboard");
  };

  const handlePinChange = (
    index: number,
    value: string
  ) => {
    // Only allow numbers or an empty value
    if (value !== "" && isNaN(Number(value))) {
      return;
    }

    // Create a copy of the PIN array
    const newPin = [...pin];

    // Change the box the employee typed in
    newPin[index] = value;

    // Replace the old PIN state
    setPin(newPin);

    // Automatically move to the next box
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Automatically attempt login when all 6 boxes are filled
    if (newPin.every((digit) => digit !== "")) {
      validatePin(newPin.join(""));
    }
  };

  const handleLogin = () => {
    const enteredPin = pin.join("");

    if (enteredPin.length !== 6) {
      setErrorMessage("Please enter all 6 digits.");
      return;
    }

    validatePin(enteredPin);
  };

  return (
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
                ref={(element) => {
                  inputRefs.current[index] = element;
                }}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(event) =>
                  handlePinChange(index, event.target.value)
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "Backspace" &&
                    pin[index] === "" &&
                    index > 0
                  ) {
                    inputRefs.current[index - 1]?.focus();
                  }

                  if (event.key === "Enter") {
                    handleLogin();
                  }
                }}
                className="h-14 w-12 rounded-xl border-2 border-gray-200 bg-white text-center text-xl font-bold text-black outline-none focus:border-[#2f9de0]"
              />
            ))}
          </div>

          {errorMessage && (
            <p className="mt-4 text-sm font-semibold text-red-500">
              {errorMessage}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="mt-8 w-full rounded-2xl bg-[#ffd34f] px-6 py-4 text-lg font-bold text-black transition hover:brightness-95"
          >
            LOGIN
          </button>
        </div>
      </div>
    </main>
  );
}
