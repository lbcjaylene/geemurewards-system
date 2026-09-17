import Link from "next/link";
import { customers } from "@/data/customers";

export default async function CustomerProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const customer = customers.find(
    (customer) => customer.id === Number(id)
  );

  if (!customer) {
    return (
      <main className="min-h-screen bg-[#59c3eb] p-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-xl">
          <h1 className="text-2xl font-bold text-black">
            Customer not found
          </h1>

          <Link
            href="/dashboard"
            className="mt-6 inline-block font-semibold text-[#2f9de0]"
          >
            ← Back to Search
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#59c3eb] p-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-xl">

        <Link
          href="/dashboard"
          className="font-semibold text-[#2f9de0]"
        >
          ← Back to Search
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-black">
          {customer.firstName} {customer.lastName}
        </h1>

        <div className="mt-8 rounded-2xl border-2 border-gray-200 p-6">
          <p className="text-sm text-gray-500">
            Card Number
          </p>

          <p className="text-lg font-semibold text-black">
            {customer.cardNumber ?? "No card linked"}
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Phone Number
          </p>

          <p className="text-lg font-semibold text-black">
            {customer.phoneNumber}
          </p>
        </div>

        <div className="mt-6 rounded-2xl bg-gray-100 p-6 text-center">
          <p className="text-sm font-semibold text-gray-500">
            CURRENT BALANCE
          </p>

          <p className="mt-2 text-4xl font-bold text-[#2f9de0]">
            {customer.points}
          </p>

          <p className="text-sm text-gray-500">
            Points
          </p>
        </div>

      </div>
    </main>
  );
}
