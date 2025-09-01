import Image from "next/image";

export default function FixedStageBg() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        fixed inset-0 -z-10
        bg-[url('/Images/hero.jpeg')]
        bg-cover bg-center
      "
    />
  );
}
