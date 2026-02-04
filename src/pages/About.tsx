import { Link } from 'react-router-dom'

const PRODUCTS = ['Databricks', 'Snowflake', 'Markit EDM', 'GoldenSource', 'Reltio', 'Tamr']
const COMPANIES = ['HSBC', 'APG Asset Management', 'MN Services', 'NN Investment Partners', 'UBS', 'Aegon Asset Management']

const PROFILES = [
  {
    name: 'Lakshmi Narayana Segu',
    title: 'Enterprise Data / AI Architect',
    linkedIn: 'https://www.linkedin.com/in/lakshmisegu/',
    bio: 'Enterprise Data & AI Architect focused on Data Governance, LLMs, and Agents. Deep expertise in asset management, portfolio management, and back-office operations. Combines strategic architecture with hands-on delivery and has led data and digitalization initiatives at leading European asset managers.',
    focus: 'Data Governance, LLMs, Agents, Data Architecture',
  },
  {
    name: 'Raju Saha',
    title: 'Director, Data Engineering & Master Data',
    linkedIn: 'https://www.linkedin.com/in/raju-saha-69196b9/',
    bio: 'Computer Science graduate with 17+ years in data engineering and cloud data solutions. Specializes in data ingestion, data quality frameworks, data mastering (single source of truth), reference data management, and DWH/ETL/data modelling. Databricks Certified Data Engineer and Snowflake SnowPro. Extensive experience with Markit EDM, Azure Data Factory, and Synapse at asset managers and pension funds.',
    focus: 'Markit EDM, Databricks, Snowflake, Data Mastering',
  },
  {
    name: 'Abhishek Chowdhury',
    title: 'Data & MDM Solutions',
    linkedIn: 'https://www.linkedin.com/in/abhishek-chowdhuury-32698014/',
    bio: 'Seasoned data and master data management professional with strong experience across enterprise data platforms. Has delivered MDM, data quality, and data integration solutions for global financial services and asset management firms using industry-leading products.',
    focus: 'MDM, Data Quality, Enterprise Data Platforms',
  },
  {
    name: 'Hari Krishna Bandari',
    title: 'Markit EDM & Data Platform Consultant',
    linkedIn: 'https://www.linkedin.com/in/hari-krishna-bandari-06850212/',
    bio: 'CADIS/Markit EDM certified professional with 18+ years in EDM design and implementation, data warehousing, and business intelligence. Has built centralized data hubs and reference data solutions for UK and European fund managers and asset management firms. Strong track record in ESG, compliance, and real-time data pipelines.',
    focus: 'Markit EDM, CADIS, ETL, Asset Management',
  },
]

function ProfileCard({ name, title, linkedIn, bio, focus }: typeof PROFILES[0]) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-slate-400 text-sm mt-0.5">{title}</p>
        </div>
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-md border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
          aria-label={`${name} on LinkedIn`}
        >
          LinkedIn
        </a>
      </div>
      <p className="text-slate-300 text-sm mt-4 leading-relaxed flex-1">{bio}</p>
      <p className="text-slate-500 text-xs mt-4 pt-4 border-t border-[var(--color-border)]">
        <span className="text-slate-400">Focus:</span> {focus}
      </p>
    </div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            About us
          </h1>
          <div className="mt-8 rounded-xl border border-[var(--color-databricks)]/40 bg-[var(--color-surface-elevated)] px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-databricks)]">Our vision</p>
            <p className="mt-2 text-2xl font-bold text-white">Mastered Data ready to use</p>
          </div>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed">
            The dbxedm team brings <strong className="text-white">strong experience</strong> in enterprise data and master data management, with <strong className="text-white">on average over 15 years</strong> of hands-on delivery across financial services and asset management.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            We have designed, built, and operated data platforms and MDM solutions using industry-leading products—including <strong className="text-slate-300">Databricks</strong>, <strong className="text-slate-300">Snowflake</strong>, <strong className="text-slate-300">Markit EDM</strong>, <strong className="text-slate-300">GoldenSource</strong>, <strong className="text-slate-300">Reltio</strong>, and <strong className="text-slate-300">Tamr</strong>—and have delivered for institutions such as <strong className="text-slate-300">HSBC</strong>, <strong className="text-slate-300">APG Asset Management</strong>, <strong className="text-slate-300">MN Services</strong>, <strong className="text-slate-300">NN Investment Partners</strong>, <strong className="text-slate-300">UBS</strong>, and <strong className="text-slate-300">Aegon Asset Management</strong>.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Team</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {PROFILES.map((profile) => (
              <ProfileCard key={profile.linkedIn} {...profile} />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-[var(--color-border)]">
          <div className="grid sm:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-semibold text-white mb-2">Products we work with</h3>
              <p className="text-slate-400">{PRODUCTS.join(', ')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Institutions we have worked with</h3>
              <p className="text-slate-400">{COMPANIES.join(', ')}</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-[var(--color-databricks)] font-medium text-sm hover:underline"
          >
            ← Back to dbxedm
          </Link>
        </div>
      </main>
    </div>
  )
}
