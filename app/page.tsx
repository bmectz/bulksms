"use client";

import SendSmsModal from "@/components/SendSmsModal";
import TechnicianModal from "@/components/TechnicianModal";
import React, { useEffect, useState } from "react";

type Technician = {
  id: string;
  name: string;
  phone: string;
  type: "CAR_ACCESSORIES" | "CCTV";
  createdAt: string;
};

type SMSRecipient = {
  id: string;
  phone: string;
  status: "PENDING" | "SENT" | "FAILED" | "DELIVERED";
  response?: any;
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

  async function fetchTechs() {
    const res = await fetch("/api/technicians");
    const data = await res.json();
    setTechs(data || []);
  }
  async function fetchMessages() {
    const res = await fetch("/api/sms");
    const data = await res.json();
    setMessages(data || []);
  }

  useEffect(() => {
    fetchTechs();
    fetchMessages();
  }, []);

  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Tech SMS — Simple</h1>
        <div className="space-x-2">
          <button
            onClick={() => setShowAdd(true)}
            className="px-3 py-2 bg-blue-600 text-white rounded"
          >
            Add Technician
          </button>
          <button
            onClick={() => setShowSend(true)}
            className="px-3 py-2 bg-green-600 text-white rounded"
          >
            Send SMS to Type
          </button>
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">Technicians ({techs.length})</h2>
          <div className="space-y-3">
            {techs.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between border p-3 rounded"
              >
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.phone}</div>
                </div>
                <div className="text-xs px-2 py-1 rounded bg-gray-100">
                  {t.type === "CAR_ACCESSORIES" ? "Car Accessories" : "CCTV"}
                </div>
              </div>
            ))}
            {techs.length === 0 && (
              <div className="text-sm text-gray-500">
                No technicians yet — add one.
              </div>
            )}
          </div>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">SMS History</h2>
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.id} className="border rounded p-3">
                <div className="text-sm text-gray-600 mb-1">
                  {new Date(m.createdAt).toLocaleString()}
                </div>
                <div className="font-medium mb-2">{m.body}</div>
                <div className="text-xs text-gray-700">Recipients:</div>
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
        </section>
      </main>

      <TechnicianModal
        open={showAdd}
        onClose={() => {
          setShowAdd(false);
        }}
        onAdded={() => {
          setShowAdd(false);
          fetchTechs();
        }}
      />

      <SendSmsModal
        open={showSend}
        onClose={() => setShowSend(false)}
        onSent={() => {
          setShowSend(false);
          fetchMessages();
        }}
      />
    </div>
  );
}
