"use client";

import { useActionState } from "react";
import { submitBookingRequest, ActionResult } from "@/lib/actions";
import { rooms } from "@/lib/data";
import { CalendarCheck } from "lucide-react";

const initialState: ActionResult | null = null;

export default function BookingForm({
  defaultRoom,
}: {
  defaultRoom?: string;
}) {
  const [state, formAction, isPending] = useActionState(
    submitBookingRequest,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-porcelain/60">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="bg-transparent border border-porcelain/20 px-4 py-3 text-sm text-porcelain focus:outline-none focus:border-vanilla transition-colors placeholder:text-porcelain/30"
            placeholder="Jane Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-porcelain/60">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-transparent border border-porcelain/20 px-4 py-3 text-sm text-porcelain focus:outline-none focus:border-vanilla transition-colors placeholder:text-porcelain/30"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs uppercase tracking-[0.2em] text-porcelain/60">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="bg-transparent border border-porcelain/20 px-4 py-3 text-sm text-porcelain focus:outline-none focus:border-vanilla transition-colors placeholder:text-porcelain/30"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="guests" className="text-xs uppercase tracking-[0.2em] text-porcelain/60">
            Guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            max={10}
            defaultValue={2}
            className="bg-transparent border border-porcelain/20 px-4 py-3 text-sm text-porcelain focus:outline-none focus:border-vanilla transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="room" className="text-xs uppercase tracking-[0.2em] text-porcelain/60">
          Room / Suite *
        </label>
        <select
          id="room"
          name="room"
          required
          defaultValue={defaultRoom || ""}
          className="bg-transparent border border-porcelain/20 px-4 py-3 text-sm text-porcelain focus:outline-none focus:border-vanilla transition-colors [&>option]:text-coffee"
        >
          <option value="" disabled>
            Select a room
          </option>
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="checkIn" className="text-xs uppercase tracking-[0.2em] text-porcelain/60">
            Check-In *
          </label>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            required
            className="bg-transparent border border-porcelain/20 px-4 py-3 text-sm text-porcelain focus:outline-none focus:border-vanilla transition-colors [color-scheme:dark]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="checkOut" className="text-xs uppercase tracking-[0.2em] text-porcelain/60">
            Check-Out *
          </label>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            required
            className="bg-transparent border border-porcelain/20 px-4 py-3 text-sm text-porcelain focus:outline-none focus:border-vanilla transition-colors [color-scheme:dark]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="notes" className="text-xs uppercase tracking-[0.2em] text-porcelain/60">
          Special Requests
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="bg-transparent border border-porcelain/20 px-4 py-3 text-sm text-porcelain focus:outline-none focus:border-vanilla transition-colors resize-none placeholder:text-porcelain/30"
          placeholder="Anniversary celebration, dietary requirements, accessibility needs..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="self-start inline-flex items-center gap-2 bg-vanilla text-coffee px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-palm transition-colors duration-300 disabled:opacity-60 cursor-pointer"
      >
        {isPending ? "Submitting..." : "Request Reservation"}
        <CalendarCheck size={16} strokeWidth={1.5} />
      </button>

      {state && (
        <p
          className={`text-sm mt-2 ${
            state.success ? "text-palm" : "text-vanilla"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
