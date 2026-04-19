interface Props {
  level: string;
  title: string;
  subtitle?: string;
  color?: "pink" | "cyan" | "yellow" | "green";
}

const colorMap = {
  pink: { text: "text-neon-pink text-glow-pink", border: "border-neon-pink" },
  cyan: { text: "text-neon-cyan text-glow-cyan", border: "border-neon-cyan" },
  yellow: { text: "text-neon-yellow text-glow-yellow", border: "border-neon-yellow" },
  green: { text: "text-neon-green", border: "border-neon-green" },
};

export const SectionHeading = ({ level, title, subtitle, color = "pink" }: Props) => {
  const c = colorMap[color];
  return (
    <div className="mb-12 text-center">
      <p className={`font-pixel text-[10px] tracking-widest mb-3 ${c.text}`}>
        ◆ {level} ◆
      </p>
      <h2 className="font-pixel text-xl sm:text-2xl lg:text-3xl text-foreground leading-snug">
        {title}
      </h2>
      <div className={`mt-4 mx-auto h-[3px] w-16 ${c.border} border-t-2`} />
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto font-mono-arcade text-xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
};
