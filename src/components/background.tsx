import Image from 'next/image';

type BackgroundProps = {
  src: string;
};

export function Background({ src }: BackgroundProps) {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Image
        src={src}
        alt="Background"
        fill
        className="object-cover"
        style={{ filter: 'blur(12px)' }}
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-background/85"></div>
    </div>
  );
}
