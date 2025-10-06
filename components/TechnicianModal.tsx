"use client";

import { Technician } from "@/types";
import React, { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onAdded: () => void;
  existing?: Technician;
};

export default function TechnicianModal({
  open,
  onClose,
  existing,
  onAdded,
}: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [verified, setVerified] = useState(false);
  const [type, setType] = useState<"CAR_ACCESSORIES" | "CCTV">(
    "CAR_ACCESSORIES"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 👇 Auto-populate form when editing
  useEffect(() => {
    if (existing) {
      setName(existing.name);
      setPhone(existing.phone);
      setType(existing.type);
      setVerified(existing.verified ?? false);
    } else {
      setName("");
      setPhone("");
      setType("CAR_ACCESSORIES");
      setVerified(false);
    }
  }, [existing, open]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const phoneInput = document.querySelector<HTMLInputElement>(
      'input[placeholder="+2557xxxxxxxx"]'
    );
    let normalizedPhone = phone.trim();

    // Normalize phone number
    if (normalizedPhone.startsWith("0")) {
      normalizedPhone = "+255" + normalizedPhone.slice(1);
    } else if (!normalizedPhone.startsWith("+255")) {
      normalizedPhone = "+255" + normalizedPhone;
    }

    // Validate phone number length (excluding +255)
    const digitsOnly = normalizedPhone.replace("+255", "");
    if (digitsOnly.length < 9) {
      setError("Phone number must be at least 9 digits");
      phoneInput?.focus();
      return;
    }

    if (!name || !normalizedPhone) {
      setError("name and phone required");
      return;
    }
    setLoading(true);
    try {
      let res;
      if (existing) {
        res = await fetch(`/api/technicians/${existing.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, normalizedPhone, type, verified }),
        });
      } else {
        res = await fetch("/api/technicians", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, normalizedPhone, type, verified }),
        });
      }

      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "failed");
      } else {
        setName("");
        setPhone("");
        setVerified(false);
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
        <h3 className="text-lg font-semibold mb-3">Sajili Fundi</h3>
        {error && <div className="text-sm text-red-600 mb-2">{error}</div>}
        <div className="space-y-3">
          <div>
            <label className="text-sm block mb-1">Jina</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Namba ya simu</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="+2557xxxxxxxx"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Aina</label>
            <select
              value={type}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "CAR_ACCESSORIES" || value === "CCTV") {
                  setType(value);
                }
              }}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="CAR_ACCESSORIES">Car Accessories</option>
              <option value="CCTV">CCTV</option>
            </select>
          </div>
          <div>
            <label className="text-sm block mb-1">
              <input
                type="checkbox"
                checked={verified}
                onChange={(e) => setVerified(e.target.checked)}
                className="mr-2"
              />
              Amepitishwa
            </label>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 bg-gray-200 rounded"
            >
              Ghairi
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {loading ? "Inasajili..." : "Sajili"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
