import Image from "next/image";
import {
  ArrowRight,
  Bot,
  Box,
  Crosshair,
  Trophy,
} from "lucide-react";

import { ModeCard } from "@/components/mode-card";
import { WeaponCard } from "@/components/weapon-card";
import { getTopWeapons } from "@/lib/weapons";

const modes = [
  {
    icon: Crosshair,
    title: "Battle Royale",
    description:
      "Les meilleures classes pour les grandes cartes, les rotations et les combats à longue portée.",
    accent: "red",
  },
  {
    icon: Trophy,
    title: "Ranked",
    description:
      "Les configurations les plus fiables pour jouer en équipe et gagner des SR.",
    accent: "red",
  },
  {
    icon: Box,
    title: "Résurgence",
    description:
      "Des classes rapides et mobiles adaptées aux combats rapprochés permanents.",
    accent: "red",
  },
];

export default function Home() {
  const weapons = getTopWeapons(6);

  return (
    <main>
      <header className="site-header">
        <a
          className="brand"
          href="#"
          aria-label="Retour à l’accueil EliteLoadout"
        >
          <Image
            src="/LogoEL.png"
            alt="Logo EliteLoadout"
            width={72}
            height={72}
            priority
            className="brand-logo"
          />

          <strong>
            ELITE<span>LOADOUT</span>
          </strong>
        </a>

        <nav aria-label="Navigation principale">
          <a href="#modes">Modes</a>
          <a href="#meta">Meta</a>
          <a href="#ai">Elite AI</a>
        </nav>

        <button className="ghost-button" type="button">
          Connexion
        </button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            LA PLATEFORME FPS NOUVELLE GÉNÉRATION
          </p>

          <h1>
            Domine la meta.
            <br />
            <span>Équipe-toi comme l’élite.</span>
          </h1>

          <p className="hero-description">
            Retrouve les meilleures classes du moment, les accessoires
            recommandés et bientôt un assistant IA spécialisé ainsi qu’un
            configurateur 3D interactif.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#meta">
              Voir les classes
              <ArrowRight size={18} />
            </a>

            <a className="secondary-button" href="#ai">
              Découvrir Elite AI
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Aperçu du futur configurateur 3D"
        >
          <div className="visual-grid" />

          <div className="weapon-silhouette">
            <div className="barrel" />
            <div className="body" />
            <div className="stock" />
            <div className="magazine" />
            <div className="grip" />
          </div>

          <div className="visual-caption">
            <span>CONFIGURATEUR 3D</span>
            <strong>Bientôt disponible</strong>
          </div>
        </div>
      </section>

      <section className="section" id="modes">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CHOISIS TON TERRAIN</p>
            <h2>Un classement pour chaque mode</h2>
          </div>

          <a href="#meta">
            Tout explorer
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mode-grid">
          {modes.map((mode) => (
            <ModeCard
              key={mode.title}
              icon={mode.icon}
              title={mode.title}
              description={mode.description}
              accent={mode.accent}
            />
          ))}
        </div>
      </section>

      <section className="section meta-section" id="meta">
        <div className="section-heading">
          <div>
            <p className="eyebrow">META ACTUELLE</p>
            <h2>Les armes qui dominent</h2>
          </div>

          <span className="live-badge">
            Actualisé aujourd’hui
          </span>
        </div>

        <div className="weapon-grid">
          {weapons.map((weapon, index) => (
            <WeaponCard
              key={weapon.id}
              rank={index + 1}
              name={weapon.name}
              category={weapon.category}
              score={weapon.score}
              tier={weapon.tier}
              tags={weapon.tags}
            />
          ))}
        </div>
      </section>

      <section className="ai-section" id="ai">
        <div className="ai-icon">
          <Bot size={34} />
        </div>

        <div>
          <p className="eyebrow">ELITE AI</p>

          <h2>Une classe adaptée à ton style de jeu</h2>

          <p>
            Indique ton mode de jeu, ton niveau et ta manière de jouer.
            Elite AI analysera les classes disponibles dans notre base et
            te proposera les configurations les plus adaptées.
          </p>
        </div>

        <button
          className="primary-button"
          type="button"
          disabled
        >
          Prochain sprint
        </button>
      </section>

      <footer>
        <a
          className="brand"
          href="#"
          aria-label="Retour à l’accueil EliteLoadout"
        >
          <Image
            src="/LogoEL.png"
            alt="Logo EliteLoadout"
            width={60}
            height={60}
            className="brand-logo"
          />

          <strong>
            ELITE<span>LOADOUT</span>
          </strong>
        </a>

        <p>
          Projet communautaire indépendant, non affilié à Activision.
        </p>
      </footer>
    </main>
  );
}
