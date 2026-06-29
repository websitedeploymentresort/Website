import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Review } from "@/lib/data";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-coffee/[0.03] border border-coffee/10 p-8 flex flex-col h-full hover:bg-coffee/[0.05] transition-colors duration-300">
      <Quote size={28} strokeWidth={1.5} className="text-palm mb-4" />
      <p className="text-sm leading-relaxed text-coffee/80 mb-6 grow italic">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            strokeWidth={1.5}
            className={i < review.rating ? "fill-palm text-palm" : "text-coffee/20"}
          />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div>
          <p className="text-sm font-medium">{review.name}</p>
        </div>
      </div>
    </div>
  );
}
