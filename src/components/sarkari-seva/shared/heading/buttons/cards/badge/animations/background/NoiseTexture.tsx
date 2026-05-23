// components/shared/background/NoiseTexture.tsx

export default function NoiseTexture() {
  return (
    <div
      className="
      absolute inset-0
      opacity-[0.03]
      mix-blend-overlay
      pointer-events-none
    "
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  );
}