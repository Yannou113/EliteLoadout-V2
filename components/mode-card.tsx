import type { LucideIcon } from "lucide-react";
type Props = { icon: LucideIcon; title: string; description: string; accent: string };
export function ModeCard({ icon: Icon, title, description }: Props) { return <article className="mode-card"><div className="mode-icon"><Icon size={21}/></div><div><h3>{title}</h3><p>{description}</p></div></article>; }
