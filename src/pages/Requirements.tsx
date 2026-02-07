import { useState } from 'react'
import { Link } from 'react-router-dom'

type Tab = 'mdm' | 'edm' | 'entity360'

interface Requirement {
  title: string
  description: string
  how: string
}

const mdmRequirements: Requirement[] = [
  {
    title: 'Entity Resolution & Deduplication',
    description:
      'Identify, match, and merge duplicate records across multiple source systems to create a single, accurate representation of each entity.',
    how: 'dbxedm uses ML-driven entity resolution that runs natively on Databricks. Models learn from your data and human feedback to identify duplicates—even with typos, abbreviations, and inconsistent formatting—without maintaining large rule sets.',
  },
  {
    title: 'Golden Record Management',
    description:
      'Create and maintain a single source of truth (golden record) for every master data entity, with clear survivorship logic determining which values prevail.',
    how: 'Golden records are produced and stored directly in Delta Lake tables within Unity Catalog. AI/ML-driven survivorship selects the best attribute values from contributing sources, and records update continuously as new data arrives.',
  },
  {
    title: 'Cross-Domain Mastering',
    description:
      'Master data across multiple domains—Customer, Product, Vendor, Instrument, Counterparty, Location—within a unified framework.',
    how: 'dbxedm supports multi-domain mastering in a single lakehouse. Each domain gets its own Delta tables and entity resolution models, all governed through Unity Catalog with consistent policies and lineage.',
  },
  {
    title: 'Data Quality & Standardization',
    description:
      'Profile, cleanse, standardize, and validate master data to ensure consistency, completeness, and accuracy across the enterprise.',
    how: 'AI-assisted data quality runs inside Databricks notebooks and workflows. Standardization rules, anomaly detection, and completeness checks execute where the data lives—no separate DQ tool or data movement required.',
  },
  {
    title: 'Hierarchy & Relationship Management',
    description:
      'Model and manage complex hierarchies (parent-child, legal entity structures) and relationships between master data entities.',
    how: 'Hierarchies and relationships are modeled as Delta tables with graph-aware queries. ML identifies implicit relationships across sources, while business users define and manage explicit hierarchies through governed workflows.',
  },
  {
    title: 'Match & Merge Configuration',
    description:
      'Configure matching algorithms, thresholds, and merge/survivorship strategies to balance precision and recall for different data domains.',
    how: 'Rather than hand-coding hundreds of match rules, dbxedm uses trainable ML models. Data stewards review edge cases and provide feedback, which the models incorporate to continuously improve match quality.',
  },
  {
    title: 'Data Stewardship & Workflow',
    description:
      'Enable business users to review, approve, and curate master data through task-based workflows with role-based access.',
    how: 'Stewardship workflows run on Databricks with role-based access via Unity Catalog. Stewards review AI-flagged exceptions and potential matches through purpose-built interfaces, while routine decisions are automated by ML.',
  },
  {
    title: 'Audit Trail & Data Lineage',
    description:
      'Track every change to master data with full audit history and end-to-end lineage from source to golden record.',
    how: 'Delta Lake provides built-in time travel and change data capture. Combined with Unity Catalog lineage, every record change is tracked from source ingestion through matching, merging, and publication—fully auditable.',
  },
  {
    title: 'Real-Time & Event-Driven Processing',
    description:
      'Support both batch and real-time master data updates to keep golden records current as source systems change.',
    how: 'Event-driven pipelines using Databricks Structured Streaming and Delta Live Tables process changes in near real-time. AI/ML orchestrates what gets processed and when, ensuring golden records are always current.',
  },
  {
    title: 'API & Integration Layer',
    description:
      'Expose master data through APIs and integration patterns so consuming systems can access golden records programmatically.',
    how: 'Golden records in Delta Lake are accessible via Databricks SQL endpoints, REST APIs, and JDBC/ODBC. Downstream systems consume master data directly from the lakehouse—no separate MDM hub to maintain.',
  },
]

const edmRequirements: Requirement[] = [
  {
    title: 'Reference Data Management',
    description:
      'Centrally manage code sets, classifications, lookups, and standard reference data used across the enterprise (e.g., country codes, currency codes, industry classifications).',
    how: 'Reference data is managed as governed Delta tables in Unity Catalog. Version-controlled code sets with effective dating ensure all systems consume consistent reference data from a single source.',
  },
  {
    title: 'Data Catalog & Discovery',
    description:
      'Maintain a searchable catalog of all enterprise data assets so users can discover, understand, and trust the data they need.',
    how: 'Unity Catalog serves as the built-in data catalog for all assets in the lakehouse. Tables, models, and notebooks are tagged, described, and searchable—no separate catalog tool required.',
  },
  {
    title: 'End-to-End Data Lineage',
    description:
      'Trace data flow from source systems through transformations to consumption, providing transparency and impact analysis capabilities.',
    how: 'Unity Catalog automatically captures column-level lineage across notebooks, jobs, and Delta Live Tables. Combined with Delta Lake history, you get full end-to-end traceability from source to report.',
  },
  {
    title: 'Data Quality Monitoring',
    description:
      'Continuously profile and monitor data quality with automated anomaly detection, rule-based validation, and quality scorecards.',
    how: 'Databricks Lakehouse Monitoring and custom quality checks run as scheduled or streaming jobs. AI-powered anomaly detection flags issues proactively, while quality metrics are tracked in Delta tables for trending and alerting.',
  },
  {
    title: 'Metadata Management',
    description:
      'Manage technical, operational, and business metadata to provide context and meaning to enterprise data assets.',
    how: 'Unity Catalog manages technical metadata natively. Business metadata (glossary terms, ownership, sensitivity tags) is layered on through tags and properties, creating a unified metadata layer across the lakehouse.',
  },
  {
    title: 'Data Integration & Orchestration',
    description:
      'Ingest, transform, and orchestrate data from diverse sources (databases, files, APIs, streaming) into a governed data platform.',
    how: 'Databricks handles ingestion from 100+ sources via Auto Loader, COPY INTO, and partner connectors. AI/ML-driven orchestration through Databricks Workflows manages dependencies, retries, and scheduling automatically.',
  },
  {
    title: 'Data Security & Access Control',
    description:
      'Enforce role-based access control, column/row-level security, data masking, and encryption to protect sensitive data.',
    how: 'Unity Catalog provides fine-grained access control down to column and row level. Dynamic data masking, attribute-based policies, and encryption at rest and in transit are built in—no data leaves your secure environment.',
  },
  {
    title: 'Regulatory Compliance',
    description:
      'Support compliance with regulations such as GDPR, BCBS 239, DORA, MiFID II, and SOX through data governance controls and reporting.',
    how: 'The combination of Unity Catalog governance, Delta Lake audit trails, and automated lineage provides the controls and evidence needed for regulatory compliance. Policies are centrally defined and consistently enforced.',
  },
  {
    title: 'Data Lifecycle Management',
    description:
      'Manage data through its lifecycle—from creation and active use through archival and deletion—with automated retention policies.',
    how: 'Delta Lake supports time travel, retention policies, and VACUUM operations for lifecycle management. Unity Catalog tags track data classification and retention requirements, enabling automated policy enforcement.',
  },
  {
    title: 'Business Glossary & Data Dictionary',
    description:
      'Maintain a shared vocabulary of business terms, definitions, and data element descriptions to ensure consistent understanding across teams.',
    how: 'Business terms and definitions are managed as Unity Catalog tags and properties. This creates a living glossary that is directly linked to physical data assets, ensuring definitions stay connected to the data they describe.',
  },
]

const entity360Requirements: Requirement[] = [
  {
    title: 'Unified Entity View',
    description:
      'Provide a complete, consolidated 360-degree view of any entity (customer, counterparty, instrument, product) by bringing together data from all touchpoints and systems.',
    how: 'dbxedm merges data from CRM, ERP, trading systems, web, and more into a single golden record per entity in Delta Lake. ML-driven entity resolution handles the matching, while survivorship logic produces the unified view.',
  },
  {
    title: 'Cross-Source Consolidation',
    description:
      'Automatically consolidate entity data from disparate sources—structured and unstructured—with conflict resolution for overlapping attributes.',
    how: 'AI/ML models identify the same entity across sources even when identifiers differ. Probabilistic matching handles variations in names, addresses, and codes. Conflicts are resolved by trained survivorship models, with steward review for edge cases.',
  },
  {
    title: 'Real-Time Entity Profiles',
    description:
      'Keep entity profiles current with real-time updates as source systems change, rather than relying on stale batch-processed snapshots.',
    how: 'Structured Streaming and Delta Live Tables enable near real-time entity profile updates. As source events arrive, the entity profile in Delta Lake is incrementally updated—no full reprocessing needed.',
  },
  {
    title: 'Relationship & Network Mapping',
    description:
      'Map and visualize relationships between entities—ownership structures, beneficial ownership, counterparty networks, household groupings.',
    how: 'Entity relationships are modeled in Delta tables and can be queried with graph-style analytics on Databricks. ML discovers implicit relationships (e.g., shared addresses, common directors), while explicit relationships are maintained by business users.',
  },
  {
    title: 'Timeline & Interaction History',
    description:
      'Maintain a complete chronological history of all interactions, transactions, and events for each entity across all channels.',
    how: 'Delta Lake\'s append-optimized storage and time travel capabilities naturally support event timelines. All interactions are captured with timestamps and source attribution, queryable across any time window.',
  },
  {
    title: 'Entity Scoring & Classification',
    description:
      'Score and classify entities based on risk, value, engagement, or custom dimensions to enable segmentation and prioritization.',
    how: 'ML models running on Databricks compute entity scores (credit risk, lifetime value, engagement) directly on the golden record data. Scores are stored as attributes on the entity profile and updated as data changes.',
  },
  {
    title: 'Self-Service Entity Access',
    description:
      'Provide business users with intuitive, self-service access to entity profiles without requiring technical expertise or SQL knowledge.',
    how: 'Entity profiles in Delta Lake are accessible through Databricks SQL dashboards, AI/BI tools, and REST APIs. Business users can search, filter, and explore entity data through governed, role-based interfaces.',
  },
  {
    title: 'Multi-Domain Entity Support',
    description:
      'Support 360-degree views across different entity types—Customer 360, Product 360, Vendor 360, Instrument 360—with domain-specific attributes.',
    how: 'dbxedm\'s multi-domain architecture supports separate entity resolution models and attribute schemas per domain, all unified under Unity Catalog governance. Add new domains without re-architecting.',
  },
  {
    title: 'Consent & Privacy Management',
    description:
      'Track and enforce consent preferences, data subject rights (GDPR right to be forgotten), and privacy policies at the entity level.',
    how: 'Consent and privacy attributes are first-class fields on entity profiles. Unity Catalog row-level security and dynamic masking enforce privacy policies automatically, with full audit trails for compliance evidence.',
  },
  {
    title: 'Data Enrichment & Third-Party Integration',
    description:
      'Enrich entity profiles with external data sources (credit bureaus, market data, firmographics) to create more complete and valuable profiles.',
    how: 'Databricks\' open architecture and partner connectors make it straightforward to ingest and join external data. Enrichment runs as part of the mastering pipeline—ML models incorporate enriched attributes into the golden record.',
  },
]

const tabs: { id: Tab; label: string; description: string }[] = [
  {
    id: 'mdm',
    label: 'Master Data Management',
    description:
      'The most requested MDM capabilities—entity resolution, golden records, data quality, and governance—all delivered AI-natively on Databricks.',
  },
  {
    id: 'edm',
    label: 'Enterprise Data Management',
    description:
      'End-to-end enterprise data management—reference data, lineage, cataloging, security, and compliance—built on the Databricks Lakehouse.',
  },
  {
    id: 'entity360',
    label: 'Entity 360',
    description:
      'A complete, real-time 360-degree view of every entity—customers, products, vendors, instruments—unified by AI/ML in your lakehouse.',
  },
]

function RequirementCard({ req, index }: { req: Requirement; index: number }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-white/[0.02] transition-colors"
      >
        <span className="shrink-0 w-8 h-8 rounded-lg bg-[var(--color-databricks)]/10 text-[var(--color-databricks)] flex items-center justify-center text-sm font-bold mt-0.5">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-white">{req.title}</h3>
          <p className="mt-1 text-sm text-slate-400 leading-relaxed">{req.description}</p>
        </div>
        <svg
          className={`shrink-0 w-5 h-5 text-slate-500 mt-1 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div className="px-6 pb-5 pt-0 ml-12">
          <div className="rounded-lg bg-[var(--color-databricks)]/5 border border-[var(--color-databricks)]/20 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-databricks)] mb-2">
              How dbxedm delivers this
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">{req.how}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Requirements() {
  const [activeTab, setActiveTab] = useState<Tab>('mdm')
  const activeTabInfo = tabs.find((t) => t.id === activeTab)!
  const requirements =
    activeTab === 'mdm'
      ? mdmRequirements
      : activeTab === 'edm'
        ? edmRequirements
        : entity360Requirements

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <main className="pt-24 pb-20 px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <p className="text-[var(--color-databricks)] text-sm font-medium uppercase tracking-wider mb-3">
            Requirements
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            What enterprises need from MDM, EDM & Entity 360
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-3xl">
            These are the most commonly requested capabilities across Master Data Management, Enterprise Data Management, and Entity 360 initiatives. For each requirement, we explain exactly how dbxedm delivers it—AI-natively, on Databricks.
          </p>
        </div>

        {/* Approach summary */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4">Our approach</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[var(--color-databricks)]/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[var(--color-databricks)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">AI/ML-first</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Most matching, orchestration, and data quality work is handled by ML models—not manual rules. Human feedback refines the models over time.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-[var(--color-databricks)]/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[var(--color-databricks)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Lakehouse-native</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Everything runs on Databricks—Unity Catalog, Delta Lake, and your existing clusters. No separate MDM hub, no data copies, no additional infrastructure.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-[var(--color-databricks)]/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[var(--color-databricks)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Real-time at scale</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Event-driven and streaming pipelines keep golden records current. Scale from thousands to billions of records without architecture changes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-medium rounded-t-lg transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-[var(--color-databricks)] bg-[var(--color-surface-elevated)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-databricks)]" />
                )}
              </button>
            ))}
          </div>

          {/* Tab description */}
          <div className="mt-8 mb-8">
            <p className="text-slate-300 max-w-3xl">{activeTabInfo.description}</p>
            <p className="mt-2 text-slate-500 text-sm">
              Click any requirement to see how dbxedm addresses it on Databricks.
            </p>
          </div>

          {/* Requirements list */}
          <div className="flex flex-col gap-3">
            {requirements.map((req, i) => (
              <RequirementCard key={`${activeTab}-${i}`} req={req} index={i} />
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="rounded-xl border border-[var(--color-databricks)]/30 bg-[var(--color-surface-elevated)] p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[var(--color-databricks)]">30</div>
                <div className="mt-1 text-sm text-slate-400">Requirements covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-databricks)]">3</div>
                <div className="mt-1 text-sm text-slate-400">Domains addressed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-databricks)]">100%</div>
                <div className="mt-1 text-sm text-slate-400">Databricks-native</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-databricks)]">0</div>
                <div className="mt-1 text-sm text-slate-400">External tools needed</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to see how dbxedm meets your requirements?
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Schedule a demo to see these capabilities in action on your Databricks environment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#demo"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-databricks)] px-6 py-3 text-base font-medium text-white hover:bg-[var(--color-databricks-hover)] transition-colors"
            >
              Schedule a demo
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] px-6 py-3 text-base font-medium text-slate-200 hover:bg-white/5 transition-colors"
            >
              Back to dbxedm
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
