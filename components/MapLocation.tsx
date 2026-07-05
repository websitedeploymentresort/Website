"use client";

import { useState } from "react";
import MapPopup from "./MapPopup";

export default function MapLocation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-left text-sm text-porcelain/80 leading-relaxed hover:text-palm transition-colors"
      >
        Hunasemakki, Kallugudde Road,
        <br />
        Chikmagalur - 577133
      </button>

      <MapPopup
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}