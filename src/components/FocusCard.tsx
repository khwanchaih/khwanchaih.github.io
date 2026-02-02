import { LucideIcon } from "lucide-react";

interface FocusCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function FocusCard({
  icon: Icon,
  title,
  description,
  className = "",
}: FocusCardProps) {
  return (
    <div className={`focus-card ${className}`}>
      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-accent-foreground" />
      </div>
      <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
