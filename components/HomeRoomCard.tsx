import Image from "next/image";
import Link from "next/link";
import { Room } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function HomeRoomCard({ room }: { room: Room }) {
  return (
    <div className="group w-[260px] flex-shrink-0 snap-start">
  <div className="relative aspect-square overflow-hidden rounded-md">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-5 text-center">
        <h3 className="font-display text-xl text-coffee mb-3">
          {room.name}
        </h3>

        <Link
          href={`/rooms/${room.id}`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-coffee border-b border-coffee/30 pb-1 hover:border-palm hover:text-palm transition-all duration-300"
        >
          View Room
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}