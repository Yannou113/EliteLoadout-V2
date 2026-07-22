import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { Weapon3DViewer } from "@/components/weapon-3d-viewer";
import {
  getWeaponBySlug,
  weapons,
} from "@/lib/weapons";

type WeaponPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return weapons.map((weapon) => ({
    slug: weapon.slug,
  }));
}

export default async function WeaponPage({
  params,
}: WeaponPageProps) {
  const { slug } = await params;
  const weapon = getWeaponBySlug(slug);

  if (!weapon) {
    notFound();
  }

  return (
    <main className="weapon-page">
      <header className="weapon-page-header">
        <Link href="/" className="back-link">
          <ArrowLeft size={18} />
          Retour aux classes
        </Link>
      </header>

      <section className="weapon-detail-hero">
        <div>
          <p className="eyebrow">
            {weapon.category.toUpperCase()}
          </p>

          <h1>{weapon.name}</h1>

          <p className="weapon-role">
            {weapon.role}
          </p>

          <p className="weapon-description">
            {weapon.description}
          </p>

          <div className="weapon-tags-large">
            {weapon.tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="weapon-ranking-panel">
          <div>
            <span>Tier</span>
            <strong>{weapon.tier}</strong>
          </div>

          <div>
            <span>Score méta</span>
            <strong>{weapon.score}/100</strong>
          </div>

          <div>
            <span>Mise à jour</span>
            <strong>{weapon.updatedAt}</strong>
          </div>
        </div>
      </section>

      <Weapon3DViewer weaponName={weapon.name} />

      <section className="weapon-detail-grid">
        <article className="attachments-panel">
          <div className="panel-heading">
            <p className="eyebrow">
              CONFIGURATION RECOMMANDÉE
            </p>

            <h2>Accessoires</h2>
          </div>

          <div className="attachments-list">
            {weapon.attachments.map((attachment) => (
              <div
                key={`${attachment.type}-${attachment.name}`}
                className="attachment-row"
              >
                <span>{attachment.type}</span>
                <strong>{attachment.name}</strong>
              </div>
            ))}
          </div>
        </article>

        <aside className="weapon-info-panel">
          <div className="panel-heading">
            <p className="eyebrow">
              INFORMATIONS
            </p>

            <h2>Classe</h2>
          </div>

          <div className="weapon-info-row">
            <span>Rôle</span>
            <strong>{weapon.role}</strong>
          </div>

          <div className="weapon-info-row">
            <span>Modes</span>
            <strong>{weapon.modes.join(", ")}</strong>
          </div>

          <div className="weapon-info-row">
            <span>Code</span>
            <strong>
              {weapon.loadoutCode ?? "Non disponible"}
            </strong>
          </div>
        </aside>
      </section>
    </main>
  );
}