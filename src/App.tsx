import { useState } from 'react'
import { Link, useLocation, Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './pages/About.tsx'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isAbout = location.pathname === '/about'
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white tracking-tight">
          dbxedm
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {!isAbout && (
            <>
              <a href="/#why" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Why dbxedm</a>
              <a href="/#ai-ml" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">AI/ML</a>
              <a href="/#solutions" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Solutions</a>
              <a href="/#impact" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Impact</a>
              <a href="/#try-demo" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Try demo</a>
              <a href="/#demo" className="text-sm font-medium text-[var(--color-databricks)] hover:text-[var(--color-databricks-hover)] transition-colors">Schedule a demo</a>
              <a
                href="/#try-demo"
                className="rounded-md bg-[var(--color-databricks)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-databricks-hover)] transition-colors"
              >
                Get started
              </a>
            </>
          )}
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${isAbout ? 'text-[var(--color-databricks)]' : 'text-slate-300 hover:text-white'}`}
          >
            About us
          </Link>
        </div>
        <button
          type="button"
          className="md:hidden p-2 text-slate-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] px-6 py-4 flex flex-col gap-4">
          {!isAbout && (
            <>
              <a href="/#why" className="text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Why dbxedm</a>
              <a href="/#ai-ml" className="text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>AI/ML</a>
              <a href="/#solutions" className="text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Solutions</a>
              <a href="/#impact" className="text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Impact</a>
              <a href="/#try-demo" className="text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>Try demo</a>
              <a href="/#demo" className="text-[var(--color-databricks)] font-medium" onClick={() => setMenuOpen(false)}>Schedule a demo</a>
              <a href="/#try-demo" className="rounded-md bg-[var(--color-databricks)] px-4 py-2 text-center text-white font-medium" onClick={() => setMenuOpen(false)}>Get started</a>
            </>
          )}
          <Link to="/about" className="text-slate-300 hover:text-white" onClick={() => setMenuOpen(false)}>About us</Link>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface-elevated)]/50 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative">
        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-4">Built for Databricks only</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          AI-Native Master Data Management for Databricks
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Power AI initiatives, decision-making, and operations with data you can trust. Unify, clean, and enrich enterprise data in Unity Catalog and Delta Lake—in real time, at scale.
        </p>
        <p className="mt-4 text-slate-400 text-base max-w-2xl mx-auto">
          Most of the <strong className="text-slate-300">matching and orchestration</strong> happens using <strong className="text-slate-300">AI/ML</strong>, not manual rules—so you get golden records faster, with less effort. Only on Databricks.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#try-demo"
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-databricks)] px-6 py-3 text-base font-medium text-white hover:bg-[var(--color-databricks-hover)] transition-colors"
          >
            Try the demo
          </a>
          <a
            href="#why"
            className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] px-6 py-3 text-base font-medium text-slate-200 hover:bg-white/5 transition-colors"
          >
            Why dbxedm
          </a>
        </div>
      </div>
    </section>
  )
}

const solutions = [
  {
    title: 'Unity Catalog mastering',
    description: 'Govern and unify master data across your Databricks lakehouse with native Unity Catalog integration. Orchestration and matching are AI/ML-driven.',
    href: '#demo',
  },
  {
    title: 'Delta Lake golden records',
    description: 'Produce and maintain golden records directly in Delta tables. ML handles matching and merge logic; pipelines run continuously and event-driven.',
    href: '#demo',
  },
  {
    title: 'AI/ML entity resolution',
    description: 'Matching and deduplication are done by ML models—not rule sets—so entity resolution scales and improves with your data. Runs where your data lives.',
    href: '#demo',
  },
  {
    title: 'Data quality & enrichment',
    description: 'AI-assisted standardization, cleansing, and enrichment using Databricks notebooks and workflows, with minimal manual curation.',
    href: '#demo',
  },
]

function WhySection() {
  return (
    <section id="why" className="py-20 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Why dbxedm for Databricks?
        </h2>
        <p className="mt-4 text-slate-300 text-center max-w-2xl mx-auto">
          dbxedm is the only AI-native master data management solution built exclusively for Databricks. Matching and orchestration are driven by AI/ML—not rules-heavy logic—so your data stays in your lakehouse and your team stays focused on outcomes.
        </p>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Native to the lakehouse', body: 'Runs entirely on Databricks. Unity Catalog, Delta Lake, and your existing clusters—nothing else.' },
            { title: 'AI/ML does the matching and orchestration', body: 'Most of the work—entity resolution, match decisions, pipeline orchestration, and data curation—is handled by ML models and AI, with human feedback for refinement. No armies of rules to maintain.' },
            { title: 'Real-time and scalable', body: 'Event-driven pipelines and continuous mastering, orchestrated by AI/ML, so your golden records stay current at any volume.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#ai-ml" className="inline-flex items-center text-[var(--color-databricks)] font-medium text-sm hover:underline">
            How AI/ML powers matching and orchestration
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

const aiMlCapabilities = [
  {
    title: 'Matching and entity resolution',
    body: 'ML models handle the majority of entity resolution and match decisions—deduplication, linking across sources, and merge logic—so you get accurate golden records without maintaining large rule sets.',
  },
  {
    title: 'Orchestration and pipelines',
    body: 'Orchestration of ingestion, mastering, and publication is driven by AI/ML: what to process, when, and how. Human oversight refines edge cases instead of coding every workflow by hand.',
  },
  {
    title: 'Continuous learning',
    body: 'Models improve with feedback and usage on your data inside Databricks. No separate SaaS for matching—your data stays in the lakehouse while AI/ML does the heavy lifting.',
  },
]

function AIMLSection() {
  return (
    <section id="ai-ml" className="py-20 px-6 border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          AI/ML at the core
        </h2>
        <p className="mt-4 text-slate-300 text-center max-w-2xl mx-auto">
          Like the best AI-native MDM platforms, dbxedm is built so that <strong className="text-white">most of the matching and orchestration happens using AI/ML</strong>—not rules-heavy logic or manual pipelines. You get faster time-to-value and better accuracy at scale.
        </p>
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {aiMlCapabilities.map((item) => (
            <div key={item.title} className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-slate-500 text-center text-sm max-w-xl mx-auto">
          Distinct from rules-based MDM: we use ML and human feedback for the bulk of data mastering work, so you spend less time on rule updates and more on trust and governance.
        </p>
      </div>
    </section>
  )
}

function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 px-6 border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          dbxedm solutions
        </h2>
        <p className="mt-4 text-slate-300 text-center max-w-2xl mx-auto">
          Purpose-built for Databricks. One platform, one lakehouse.
        </p>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="group rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] p-6 hover:border-[var(--color-databricks)]/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-[var(--color-databricks)] transition-colors">{s.title}</h3>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">{s.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--color-databricks)]">
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: '90%', label: 'reduction in manual data prep with AI/ML matching' },
  { value: '10x', label: 'faster time to golden records vs rules-based MDM' },
  { value: '100%', label: 'Databricks-native, no copies' },
]

// Demo: sample source records (duplicates / variations for entity resolution)
const DEMO_SOURCE_RECORDS = [
  { id: 1, name: 'John Smith', email: 'j.smith@acme.com', company: 'Acme Corp', source: 'CRM' },
  { id: 2, name: 'Jon Smith', email: 'john.smith@acme.com', company: 'Acme Corporation', source: 'ERP' },
  { id: 3, name: 'Jane Doe', email: 'jane@tech.io', company: 'Tech Inc', source: 'CRM' },
  { id: 4, name: 'J. Doe', email: 'jdoe@techinc.com', company: 'Tech Inc.', source: 'Website' },
  { id: 5, name: 'Maria Garcia', email: 'mgarcia@global.com', company: 'Global Ltd', source: 'CRM' },
]

// Precomputed match clusters and golden records (simulated entity resolution)
const DEMO_GOLDEN = [
  { golden: { name: 'John Smith', email: 'j.smith@acme.com', company: 'Acme Corp' }, recordIds: [1, 2] },
  { golden: { name: 'Jane Doe', email: 'jane@tech.io', company: 'Tech Inc' }, recordIds: [3, 4] },
  { golden: { name: 'Maria Garcia', email: 'mgarcia@global.com', company: 'Global Ltd' }, recordIds: [5] },
]

function DemoSection() {
  const [resolved, setResolved] = useState(false)
  const [running, setRunning] = useState(false)

  const runResolution = () => {
    setRunning(true)
    setTimeout(() => {
      setRunning(false)
      setResolved(true)
    }, 1200)
  }

  return (
    <section id="try-demo" className="py-20 px-6 border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)]/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Try the demo
        </h2>
        <p className="mt-4 text-slate-300 text-center max-w-2xl mx-auto">
          See AI/ML-driven entity resolution in action. Sample records are matched and merged into golden records by ML—the same flow runs on your Databricks lakehouse, where most matching and orchestration is handled by AI/ML.
        </p>

        <div className="mt-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
          <div className="px-4 py-3 border-b border-[var(--color-border)] flex items-center justify-between flex-wrap gap-2">
            <span className="text-sm font-medium text-slate-300">Source records (5 from CRM, ERP, Website)</span>
            {!resolved ? (
              <button
                type="button"
                onClick={runResolution}
                disabled={running}
                className="rounded-md bg-[var(--color-databricks)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-databricks-hover)] disabled:opacity-70 transition-colors"
              >
                {running ? 'Running entity resolution…' : 'Run entity resolution'}
              </button>
            ) : (
              <span className="text-xs font-medium text-emerald-400/90 bg-emerald-500/10 px-2 py-1 rounded">Done</span>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] text-left text-slate-400">
                  <th className="px-4 py-3 font-medium">ID</th>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Company</th>
                  <th className="px-4 py-3 font-medium">Source</th>
                  {resolved && <th className="px-4 py-3 font-medium">Cluster</th>}
                </tr>
              </thead>
              <tbody>
                {DEMO_SOURCE_RECORDS.map((r) => {
                  const cluster = resolved ? DEMO_GOLDEN.find((c) => c.recordIds.includes(r.id)) : null
                  const clusterIndex = cluster ? DEMO_GOLDEN.indexOf(cluster) + 1 : null
                  return (
                    <tr key={r.id} className="border-b border-[var(--color-border)]/70 text-slate-200">
                      <td className="px-4 py-3">{r.id}</td>
                      <td className="px-4 py-3">{r.name}</td>
                      <td className="px-4 py-3">{r.email}</td>
                      <td className="px-4 py-3">{r.company}</td>
                      <td className="px-4 py-3 text-slate-400">{r.source}</td>
                      {resolved && (
                        <td className="px-4 py-3">
                          {clusterIndex != null && (
                            <span className="text-[var(--color-databricks)] font-medium">→ Golden {clusterIndex}</span>
                          )}
                        </td>
                      )}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {resolved && (
          <div className="mt-8 rounded-xl border border-[var(--color-databricks)]/40 bg-[var(--color-surface)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--color-border)]">
              <span className="text-sm font-medium text-white">Golden records (3 entities)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)] text-left text-slate-400">
                    <th className="px-4 py-3 font-medium">#</th>
                    <th className="px-4 py-3 font-medium">Name</th>
                    <th className="px-4 py-3 font-medium">Email</th>
                    <th className="px-4 py-3 font-medium">Company</th>
                    <th className="px-4 py-3 font-medium">Merged from</th>
                  </tr>
                </thead>
                <tbody>
                  {DEMO_GOLDEN.map((c, i) => (
                    <tr key={i} className="border-b border-[var(--color-border)]/70 text-slate-200">
                      <td className="px-4 py-3 font-medium text-[var(--color-databricks)]">{i + 1}</td>
                      <td className="px-4 py-3">{c.golden.name}</td>
                      <td className="px-4 py-3">{c.golden.email}</td>
                      <td className="px-4 py-3">{c.golden.company}</td>
                      <td className="px-4 py-3 text-slate-400">
                        {c.recordIds.length} record{c.recordIds.length !== 1 ? 's' : ''} (IDs: {c.recordIds.join(', ')})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-slate-500 text-sm">
          On Databricks, this runs at scale in Unity Catalog with your Delta tables—no data leaves your workspace.
        </p>
      </div>
    </section>
  )
}

function ImpactSection() {
  return (
    <section id="impact" className="py-20 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Impact by the numbers
        </h2>
        <p className="mt-4 text-slate-300 text-center max-w-xl mx-auto">
          Results from teams running dbxedm on Databricks.
        </p>
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[var(--color-databricks)]">{s.value}</div>
              <div className="mt-2 text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section id="demo" className="py-20 px-6 border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)]/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          See for yourself
        </h2>
        <p className="mt-4 text-slate-300 text-lg">
          Get a free, no-obligation 30-minute demo of dbxedm on Databricks, and discover how AI-native MDM in your lakehouse can deliver data you can trust.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-[var(--color-databricks)] px-8 py-3 text-base font-medium text-white hover:bg-[var(--color-databricks-hover)] transition-colors"
        >
          Schedule a demo
        </a>
        <p className="mt-6 text-slate-500 text-sm">
          dbxedm runs only on Databricks. No data leaves your environment.
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="text-slate-500 text-sm font-medium hover:text-slate-400 transition-colors">dbxedm</Link>
        <div className="flex gap-6 text-slate-500 text-sm">
          <Link to="/about" className="hover:text-slate-300 transition-colors">About us</Link>
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <main>
        <Hero />
        <WhySection />
        <AIMLSection />
        <SolutionsSection />
        <ImpactSection />
        <DemoSection />
        <CTASection />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-surface)]">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
