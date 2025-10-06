"use client";

import React, { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSent: () => void;
};
type Res = {
  success: string;
  messageId: string;
};

export default function SendSmsModal({ open, onClose, onSent }: Props) {
  const [type, setType] = useState<"CAR_ACCESSORIES" | "CCTV">(
    "CAR_ACCESSORIES"
  );
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Res>();
  const [error, setError] = useState<string | null>(null);

  if (!open) return null;

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!message) {
      setError("Message required");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/sms/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, message, from }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "send failed");
      } else {
        setResult(data);
        onSent();
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
        onSubmit={handleSend}
        className="bg-white p-6 rounded shadow z-10 w-full max-w-lg"
      >
        <h3 className="text-lg font-semibold mb-3">Tuma SMS kwa mafundi</h3>
        {error && <div className="text-sm text-red-600 mb-2">{error}</div>}

        <div className="space-y-3">
          <div>
            <label className="text-sm block mb-1">Aina ya mafundi</label>
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
            <label className="text-sm block mb-1">Kutoka kwa</label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select sender</option>
              <option value="BM SOUNDS">BM SOUNDS</option>
              <option value="BM SECURITY">BM SECURITY</option>
            </select>
          </div>

          <div>
            <label className="text-sm block mb-1">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border px-3 py-2 rounded h-32"
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 bg-gray-200 text-gray-800 rounded"
            >
              Ahirisha
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              {loading ? "Inatuma..." : "Tuma kwa wote"}
            </button>
          </div>

          {result && (
            <pre className="bg-gray-50 p-3 rounded text-xs mt-3 text-green-600 overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </div>
      </form>
    </div>
  );
}
