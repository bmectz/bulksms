"use client";

import SendSmsModal from "@/components/SendSmsModal";
import TechnicianModal from "@/components/TechnicianModal";
import { Technician } from "@/types";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

type SMSRecipient = {
  id: string;
  phone: string;
  status: "PENDING" | "SENT" | "FAILED" | "DELIVERED";
  response?: unknown;
  createdAt: string;
};

type SMSMessage = {
  id: string;
  body: string;
  from?: string;
  createdAt: string;
  recipients: SMSRecipient[];
};

export default function Page() {
  const [techs, setTechs] = useState<Technician[]>([]);
  const [messages, setMessages] = useState<SMSMessage[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState("");
  const [selectedTech, setSelectedTech] = useState<Technician | null>(null);
  const [search, setSearch] = useState("");

  async function fetchTechs() {
    const res = await fetch("/api/technicians");
    const data = await res.json();
    setTechs(data || []);
    setLoading(false);
    setLoadingId("");
  }
  async function fetchMessages() {
    const res = await fetch("/api/sms");
    const data = await res.json();
    setMessages(data || []);
    setLoading(false);
  }
  async function handleDeleteMessage(id: string) {
    if (!confirm("Futa hii message?")) return;
    setLoading(true);
    await fetch(`/api/sms/${id}`, { method: "DELETE" });
    fetchMessages();
  }
  async function handleDeleteTechnitian(technician: Technician) {
    if (!confirm(`Futa huyu Fundi? (${technician.name})`)) return;
    setLoading(true);
    const res = await fetch(`/api/technicians/${technician.id}`, {
      method: "DELETE",
    });
    if (res.ok) fetchTechs();
  }

  async function handleVerifyToggle({
    name,
    phone,
    type,
    verified,
    id,
  }: Technician) {
    // setLoading(true);
    setLoadingId(id);
    try {
      const res = await fetch(`/api/technicians/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, type, verified }),
      });
      if (res.ok) fetchTechs();
    } catch (err) {
      console.log("Error: ", err);
    } finally {
    }
  }

  useEffect(() => {
    fetchTechs();
    fetchMessages();
  }, []);

  const filtered = techs.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.phone.includes(search) ||
      t.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="m-4 md:m-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">BM Fundi SMS — Simple</h1>
        <div className="space-x-2">
          <button
            onClick={() => setShowAdd(true)}
            className="px-3 py-2 bg-blue-600 text-white rounded"
          >
            Sajili Fundi
          </button>
          <button
            onClick={() => setShowSend(true)}
            className="px-3 py-2 bg-green-600 text-white rounded"
          >
            Tuma SMS kwa mafundi
          </button>
        </div>
      </header>

      <input
        type="text"
        placeholder="Tafuta fundi..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-4 mx-4"
      />

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* TECHNICIANS */}
        <section className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">Mafundi ({filtered.length})</h2>
          {loading ? (
            <Loader className="w-8 h-8 animate-spin" />
          ) : (
            <div className="space-y-3">
              {filtered.map((t) => (
                <div
                  key={t.id}
                  className="flex items-center justify-between border p-3 rounded"
                >
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={t.verified}
                        disabled={loadingId === t.id}
                        onChange={() =>
                          handleVerifyToggle({ ...t, verified: !t.verified })
                        }
                        className="accent-green-600 w-4 h-4"
                      />
                      {t.name}
                    </div>
                    <div className="text-sm text-gray-600">{t.phone}</div>
                  </div>
                  {loadingId === t.id && (
                    <Loader key={t.id} className="w-4 h-4 animate-spin" />
                  )}
                  <div className="flex items-center gap-2">
                    <div className="text-xs px-2 py-1 rounded bg-gray-100">
                      {t.type === "CAR_ACCESSORIES"
                        ? "Car Accessories"
                        : "CCTV"}
                    </div>
                    <button
                      onClick={() => setSelectedTech(t)}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Badili
                    </button>
                    <button
                      onClick={() => handleDeleteTechnitian(t)}
                      className="text-red-600 text-sm hover:underline"
                    >
                      Futa
                    </button>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="text-sm text-gray-500">Hakuna fundi.</div>
              )}
            </div>
          )}
        </section>

        {/* SMS HISTORY */}
        <section className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">SMS kumbukumbu</h2>
          {loading ? (
            <Loader className="w-8 h-8 animate-spin" />
          ) : (
            <div className="space-y-4">
              {messages.map((m) => (
                <div key={m.id} className="border rounded p-3">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      {new Date(m.createdAt).toLocaleString()}
                    </div>
                    <button
                      onClick={() => handleDeleteMessage(m.id)}
                      className="text-red-500 text-xs"
                    >
                      Futa
                    </button>
                  </div>
                  <div className="font-medium mb-2">{m.body}</div>
                  <ul className="mt-2 space-y-1">
                    {m.recipients.map((r) => (
                      <li key={r.id} className="flex justify-between text-sm">
                        <span>{r.phone}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded ${
                            r.status === "SENT"
                              ? "bg-green-100 text-green-700"
                              : r.status === "FAILED"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {r.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {messages.length === 0 && (
                <div className="text-sm text-gray-500">No SMS yet.</div>
              )}
            </div>
          )}
        </section>
      </main>

      {/* MODALS */}
      <TechnicianModal
        open={showAdd}
        onClose={() => setShowAdd(false)}
        onAdded={fetchTechs}
      />

      {selectedTech && (
        <TechnicianModal
          open={!!selectedTech}
          onClose={() => setSelectedTech(null)}
          existing={selectedTech}
          onAdded={() => {
            setSelectedTech(null);
            fetchTechs();
          }}
        />
      )}

      <SendSmsModal
        open={showSend}
        onClose={() => setShowSend(false)}
        onSent={fetchMessages}
      />
    </div>
  );
}
