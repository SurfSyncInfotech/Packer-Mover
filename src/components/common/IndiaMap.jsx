import { cities } from '../../data/locations'

export default function IndiaMap({ active, onSelect }) {
  return (
    <div className="india">
      <svg viewBox="0 0 320 400" role="img" aria-label="Schematic map of India with service cities">
        <path
          className="india__land"
          d="M132 22c22 4 38-2 54 8 16-8 36-2 48 12 18 2 34 14 40 28 10 8 22 6 30 16 6 16-2 28 6 40-12 8-2 22 4 34 8 10 2 24 10 34-14 10 2 26-4 38 8 12 0 28 10 38-16 10-8 24 2 36-14 14-22 18-16 34-20 14-28 16-22 32-18 12-16 22-28 8-22 16-12 28-24 18-10 14-22 8-16 22-18-4-14 14-28 8-12 10-24 4-18 18-22-4-16 10-30 4-10 12-22 6-16 18-18 0-18 8-32 2-12 6-26 0-22 14-24-8-14 6-30 0-10 8-24 2-16 16-10 4-22-4-30-16 2-16-10-14-22-8-8-18-16-10-28 0-8-14-20-8-30 4-8-16-2-30-14-10-6-16-18-8-28 2-12-6-8-22-16-16 0-16 10-24 4-36-8-8 0-22-10-30 4-14-6-20-16-12-8-16-16-10-26 2-10-10 0-24-12-32z"
        />
        <path
          className="india__land"
          d="M214 58c18-8 40-6 54 6 12 10 22 8 30 18-8 10-22 8-28 18-12-2-22 8-34 4-8-12-6-28-18-34-2-6 0-10-4-12z"
        />
        {cities.map((city) => {
          const selected = active === city.name
          return (
            <g key={city.name} className={selected ? 'is-active' : ''} onClick={() => onSelect?.(city.name)}>
              <circle cx={(city.x / 100) * 320} cy={(city.y / 100) * 400} r={selected ? 5 : 3.4} />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
