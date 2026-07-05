"use client";

import { X, MapPinned } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MapPopup({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <>
      {/* Background */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
      />

      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-[100] px-6">
        <div className="w-full max-w-md rounded-2xl bg-vanilla shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-palm text-vanilla px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPinned size={22} />
              <h3 className="font-display text-xl">
                Before You Navigate
              </h3>
            </div>

            <button
              onClick={onClose}
              className="hover:opacity-70 transition-opacity"
            >
              <X size={22} />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">

            <p className="text-coffee leading-relaxed mb-8">
              Once you reach the pinned location on Google Maps,
              <strong> continue driving straight for approximately
              500 metres</strong> to arrive at La Damai Resort.
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={onClose}
                className="px-5 py-3 border border-palm text-palm hover:bg-palm hover:text-vanilla transition-colors"
              >
                Cancel
              </button>

              <a
                href="https://maps.app.goo.gl/AH27CMgGtsKM8Gzv6?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-palm text-vanilla hover:bg-coffee transition-colors"
              >
                Proceed to Maps
              </a>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}