type WeaponCardProps = {
  rank: number;
  name: string;
  category: string;
  score: number;
  tier: string;
  tags: string[];
};

export function WeaponCard({
  rank,
  name,
  category,
  score,
  tier,
  tags,
}: WeaponCardProps) {
  return (
    <article className="weapon-card">

      <div className="weapon-visual">

        <span className="weapon-rank">
          #{rank}
        </span>

        <span className="weapon-tier">
          {tier}
        </span>

        {name}

      </div>

      <div className="weapon-content">

        <h3>{name}</h3>

        <p className="weapon-category">
          {category}
        </p>

        <div className="tags">

          {tags.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}

        </div>

      </div>

      <div className="weapon-score">

        <span>
          SCORE META
        </span>

        <strong>
          {score}/100
        </strong>

      </div>

    </article>
  );
}
