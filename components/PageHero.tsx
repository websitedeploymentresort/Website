import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
      <Image src={image} alt={title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-coffee/55" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-vanilla text-xs tracking-[0.4em] uppercase mb-4">
          {subtitle}
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-porcelain">
          {title}
        </h1>
      </div>
    </section>
  );
}
