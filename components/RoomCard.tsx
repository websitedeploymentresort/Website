import Image from "next/image";
import Link from "next/link";
import { Room } from "@/lib/data";
import { Maximize, Users, ArrowRight } from "lucide-react";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="group bg-porcelain border border-coffee/70 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-coffee/10">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-coffee text-vanilla text-xs tracking-[0.2em] uppercase px-3 py-1.5">
          From ₹{room.price}/night
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="font-display text-2xl mb-3">{room.name}</h3>
        <p className="text-sm text-coffee/70 leading-relaxed mb-5">
          {room.description}
        </p>

        <div className="flex items-center gap-6 text-xs uppercase tracking-wider text-coffee/60 mb-6">
          <span className="flex items-center gap-2">
            <Maximize size={16} strokeWidth={1.5} className="text-palm" />
            {room.size}
          </span>
          <span className="flex items-center gap-2">
            <Users size={16} strokeWidth={1.5} className="text-palm" />
            {room.occupancy}
          </span>
        </div>

        <Link
          href={`/booking?room=${room.id}`}
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-coffee border-b border-coffee/30 pb-1 hover:border-palm hover:text-palm transition-colors duration-300"
        >
          Reserve
          <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
