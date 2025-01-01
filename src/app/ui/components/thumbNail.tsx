import Image from "next/image";

export default function ThumbNail({ image }) {
  return (
    <div className="h-96 relative">
      <Image
        src={`/${image}`}
        alt="Cover Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
