import type { LucideIcon } from "lucide-react";

type ModeCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: string;
};

export function ModeCard({
  icon: Icon,
  title,
  description,
}: ModeCardProps) {
  return (
    <article className="mode-card">
      <div className="mode-icon">
        <Icon size={22} strokeWidth={1.9} />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
