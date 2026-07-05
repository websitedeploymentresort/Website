import { Star, Quote } from "lucide-react";
import { Review } from "@/lib/data";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="h-[380px] bg-coffee/[0.03] border border-coffee/10 p-8 flex flex-col hover:bg-coffee/[0.05] transition-colors duration-300">
      <Quote
        size={28}
        strokeWidth={1.5}
        className="text-palm mb-4 flex-shrink-0"
      />

      {/* Scrollable Review */}
      <div className="flex-1 overflow-y-auto pr-2 mb-6 thin-scrollbar">
        <p className="text-sm leading-relaxed text-coffee/80 italic">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4 flex-shrink-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            strokeWidth={1.5}
            className={
              i < review.rating
                ? "fill-palm text-palm"
                : "text-coffee/20"
            }
          />
        ))}
      </div>

      {/* Reviewer */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <p className="text-sm font-medium">{review.name}</p>
      </div>
    </div>
  );
}