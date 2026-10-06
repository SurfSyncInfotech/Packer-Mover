import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'

const pages = {
  privacy: {
    title: 'Privacy Policy',
    lede: 'How this website treats the details you type into a form.',
    blocks: [
      'SafarSetu uses the name, phone, email, and move details you submit only to respond to an enquiry. This front end does not yet send those details to a server.',
      'If you subscribe to the journal, the address stays in the page until a mailing service is connected. Do not submit information you are not ready to share with a moving desk.',
      'We do not sell enquiry details. When a live form service is added, this page should name that provider and how long messages are kept.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    lede: 'The understanding behind a quote on this website.',
    blocks: [
      'A quote requested here is an enquiry, not a confirmed booking. Dates, access, and inventory are confirmed by a coordinator before a move is agreed.',
      'Figures shown for years, moves, cities, and ratings are layout placeholders until they are replaced with verified company records.',
      'Transit, packing, and storage are governed by the written quotation you accept, including what is excluded — hazardous goods, loose cash, and jewellery you should carry yourself.',
    ],
  },
}

export default function Legal({ page }) {
  const content = pages[page]
  return (
    <section className="section legal">
      <Seo title={`${content.title} | SafarSetu`} description={content.lede} />
      <div className="container narrow-copy">
        <p className="eyebrow">SafarSetu</p>
        <h1>{content.title}</h1>
        <p className="lede">{content.lede}</p>
        {content.blocks.map((block) => (
          <p key={block.slice(0, 20)}>{block}</p>
        ))}
        <Link to="/" className="text-link">
          Return home
        </Link>
      </div>
    </section>
  )
}
