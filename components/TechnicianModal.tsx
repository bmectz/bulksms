"use client";

import React, { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onAdded: () => void;
};

export default function TechnicianModal({ open, onClose, onAdded }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState<"CAR_ACCESSORIES" | "CCTV">(
    "CAR_ACCESSORIES"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name || !phone) {
      setError("name and phone required");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/technicians", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, type }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "failed");
      } else {
        setName("");
        setPhone("");
        onAdded();
      }
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow z-10 w-full max-w-md"
      >
        <h3 className="text-lg font-semibold mb-3">Add Technician</h3>
        {error && <div className="text-sm text-red-600 mb-2">{error}</div>}
        <div className="space-y-3">
          <div>
            <label className="text-sm block mb-1">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="+2557xxxxxxxx"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as any)}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="CAR_ACCESSORIES">Car Accessories</option>
              <option value="CCTV">CCTV</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {loading ? "Saving..." : "Add"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
