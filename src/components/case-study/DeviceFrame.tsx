import Image from "next/image";

export function DeviceFrame({
  src,
  alt,
  priority = false,
  size = "md",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const widthClass = {
    sm: "max-w-[14rem]",
    md: "max-w-[18rem]",
    lg: "max-w-[22rem]",
  }[size];

  return (
    <div className={`${widthClass} w-full`}>
      <div className="relative rounded-[2.25rem] border border-[color:var(--rule)] bg-[color:var(--surface)] p-2 shadow-[0_30px_80px_-30px_rgba(20,18,15,0.35)]">
        <div className="relative overflow-hidden rounded-[1.75rem]">
          <Image
            src={src}
            alt={alt}
            width={1170}
            height={2532}
            priority={priority}
            sizes="(min-width: 768px) 22rem, 70vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
