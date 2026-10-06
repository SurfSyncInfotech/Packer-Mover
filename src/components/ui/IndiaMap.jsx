import { cities } from "../../data/locations.js";

const pins = {
  Chandigarh: [100, 56],
  Delhi: [106, 70],
  Jaipur: [90, 86],
  Lucknow: [122, 82],
  Ahmedabad: [74, 108],
  Patna: [136, 94],
  Kolkata: [150, 108],
  Mumbai: [78, 132],
  Pune: [88, 142],
  Hyderabad: [108, 154],
  Bengaluru: [100, 180],
  Chennai: [116, 188],
};

export default function IndiaMap({ active, onSelect }) {
  return (
    <div className="india">
      <svg viewBox="0 0 210 240" role="img" aria-label="Stylised map of India with service cities marked">
        <path
          className="india__land"
          d="M90 10 L100 26 L94 40 L110 44 L126 36 L144 48 L166 40 L184 54 L176 70 L158 64 L146 78 L158 94 L148 112 L154 132 L144 156 L132 178 L118 202 L104 188 L94 166 L82 146 L70 128 L60 114 L48 100 L58 86 L48 70 L64 54 L74 38 L84 22 Z"
        />
        {cities.map((city) => {
          const point = pins[city.name];
          if (!point) return null;
          const on = active === city.name;
          return (
            <g key={city.name} transform={`translate(${point[0]} ${point[1]})`}>
              <circle className={on ? "india__dot is-on" : "india__dot"} r={on ? 4.2 : 2.8} />
              <circle className="india__ring" r={on ? 7 : 5.5} />
            </g>
          );
        })}
      </svg>
      <ul className="city-list">
        {cities.map((city) => (
          <li key={city.name}>
            <button
              type="button"
              className={active === city.name ? "is-on" : undefined}
              aria-pressed={active === city.name}
              onClick={() => onSelect(city.name)}
            >
              <span>{city.name}</span>
              <small>{city.region}</small>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
