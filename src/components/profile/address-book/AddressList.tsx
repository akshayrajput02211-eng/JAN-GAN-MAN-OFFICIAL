"use client";

import { Plus } from "lucide-react";

import AddressCard from "./AddressCard";

export default function AddressList() {
  return (
    <div className="px-5 py-6 pb-32">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold dark:text-white">
          Address Book
        </h1>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-full
            bg-[#3558ff]
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            shadow-xl
          "
        >
          <Plus size={18} />
          Naya Address
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <AddressCard
          label="Home"
          address="Village Rampur, District Lucknow, Uttar Pradesh - 226001"
          defaultAddress
        />

        <AddressCard
          label="Village"
          address="Near Panchayat Bhawan, Sitapur Road, Uttar Pradesh"
        />
      </div>
    </div>
  );
}