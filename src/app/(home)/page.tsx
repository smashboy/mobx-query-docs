import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  Database,
  GitMerge,
  Layers,
  RefreshCw,
  Shield,
  Zap,
  Box,
  Component,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "mobx-query — Reactive Entity Management for React",
  description:
    "Bridge TanStack Query's server-state caching with MobX's reactive model layer. Normalized entities, optimistic mutations, and dirty tracking — out of the box.",
};

export default function HomePage() {
  return (
    <main className="landing">
      {/* ───────────────── HERO ───────────────── */}
      <section className="hero" id="hero">
        {/* Animated background */}
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-gradient hero-gradient-1" />
          <div className="hero-gradient hero-gradient-2" />
          <div className="hero-gradient hero-gradient-3" />
          <div className="hero-grid-overlay" />
        </div>

        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span>TanStack Query + MobX — unified</span>
            </div>

            <h1 className="hero-title">
              Your entities deserve
              <br />
              <span className="hero-title-accent">first-class reactivity</span>
            </h1>

            <p className="hero-description">
              <strong>mobx-query</strong> is the reactive bridge between
              TanStack Query and MobX. Get normalized entities, optimistic
              mutations, and dirty tracking out of the box — so you can focus on
              building features, not sync logic.
            </p>

            <div className="hero-actions">
              <Link
                href="/docs/quickstart"
                className="btn-primary"
                id="hero-get-started"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
              <Link href="/docs" className="btn-ghost" id="hero-learn-more">
                Why mobx-query?
              </Link>
            </div>

            <div className="hero-install">
              <div className="hero-install-box">
                <span className="hero-install-prompt">$</span>
                <code>npm install @mobx-query/core</code>
              </div>
            </div>

            <div className="hero-ecosystem">
              <EcoBadge label="TanStack Query v5" />
              <EcoBadge label="MobX 6+" />
              <EcoBadge label="React 18 / 19" />
              <EcoBadge label="TypeScript-first" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── PAIN → SOLUTION ───────────────── */}
      <section className="pain-section" id="the-problem">
        <div className="section-container">
          <div className="section-header">
            <p className="section-eyebrow">The Problem</p>
            <h2 className="section-title">
              Managing server state in MobX apps is painful
            </h2>
            <p className="section-subtitle">
              You either get raw JSON blobs with no reactivity, or hand-roll a
              fragile sync layer between TanStack Query and MobX.
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card comparison-without">
              <div className="comparison-header">
                <X size={20} />
                <span>Without mobx-query</span>
              </div>
              <ul className="comparison-list">
                <li>
                  <X size={14} />
                  Duplicate entity instances across queries
                </li>
                <li>
                  <X size={14} />
                  Manual cache ↔ MobX synchronization
                </li>
                <li>
                  <X size={14} />
                  Optimistic updates require bespoke rollback logic
                </li>
                <li>
                  <X size={14} />
                  No way to know which fields have changed locally
                </li>
                <li>
                  <X size={14} />
                  Edit forms need separate state management
                </li>
                <li>
                  <X size={14} />
                  Entity identity breaks on refetch
                </li>
              </ul>
            </div>

            <div className="comparison-card comparison-with">
              <div className="comparison-header">
                <Check size={20} />
                <span>With mobx-query</span>
              </div>
              <ul className="comparison-list">
                <li>
                  <Check size={14} />
                  <strong>One instance per entity</strong> — shared everywhere
                </li>
                <li>
                  <Check size={14} />
                  <strong>Automatic hydration</strong> — query → entity mapping
                </li>
                <li>
                  <Check size={14} />
                  <strong>Built-in optimistic mutations</strong> with rollback
                </li>
                <li>
                  <Check size={14} />
                  <strong>Field-level dirty tracking</strong> out of the box
                </li>
                <li>
                  <Check size={14} />
                  <strong>Entity is the form model</strong> — no duplication
                </li>
                <li>
                  <Check size={14} />
                  <strong>Referential identity preserved</strong> across
                  refetches
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── FEATURES DEEP-DIVE ───────────────── */}
      <section className="features-section" id="features">
        <div className="section-container">
          <div className="section-header">
            <p className="section-eyebrow">Core Features</p>
            <h2 className="section-title">
              Everything you need.
              <br />
              Nothing you don&#39;t.
            </h2>
          </div>

          {/* Feature 1: Normalization */}
          <div className="feature-showcase">
            <div className="feature-showcase-text">
              <div className="feature-showcase-icon">
                <Database size={24} />
              </div>
              <h3 className="feature-showcase-title">Entity Normalization</h3>
              <p className="feature-showcase-desc">
                Every query result passes through an <code>EntityManager</code>{" "}
                that deduplicates by ID. If Folder #42 appears in a sidebar
                query <em>and</em> a detail query, it&apos;s the{" "}
                <strong>same MobX-observable instance</strong>. Update it once —
                see the change everywhere.
              </p>
              <ul className="feature-showcase-bullets">
                <li>Global identity map per entity type</li>
                <li>Automatic merge on refetch</li>
                <li>GC via query-hash reference counting</li>
              </ul>
            </div>
            <div className="feature-showcase-visual">
              <div className="norm-diagram">
                <div className="norm-query norm-query-1">
                  <span className="norm-query-label">Sidebar Query</span>
                  <div className="norm-query-ids">
                    <span>ID: 1</span>
                    <span>ID: 2</span>
                    <span className="norm-shared">ID: 42</span>
                  </div>
                </div>
                <div className="norm-query norm-query-2">
                  <span className="norm-query-label">Detail Query</span>
                  <div className="norm-query-ids">
                    <span className="norm-shared">ID: 42</span>
                  </div>
                </div>
                <div className="norm-center">
                  <div className="norm-entity-box">
                    <Database size={16} />
                    <span>Folder #42</span>
                    <span className="norm-entity-sub">single instance</span>
                  </div>
                </div>
                <svg className="norm-arrows" viewBox="0 0 400 200" fill="none">
                  <path
                    d="M100 50 C200 50 200 100 200 100"
                    stroke="var(--landing-primary)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    opacity="0.6"
                  />
                  <path
                    d="M300 50 C200 50 200 100 200 100"
                    stroke="var(--landing-primary)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Feature 2: Optimistic Mutations */}
          <div className="feature-showcase feature-showcase-reverse">
            <div className="feature-showcase-text">
              <div className="feature-showcase-icon">
                <Zap size={24} />
              </div>
              <h3 className="feature-showcase-title">Optimistic Mutations</h3>
              <p className="feature-showcase-desc">
                Create, update, or delete entities and see it in the UI{" "}
                <strong>instantly</strong> — before the server responds.
                Snapshot-based rollback handles errors automatically. No manual
                cache manipulation needed.
              </p>
              <ul className="feature-showcase-bullets">
                <li>CreateMutation — instant insertion with rollback</li>
                <li>UpdateMutation — skips if entity isn&apos;t dirty</li>
                <li>DeleteMutation — hides from all queries instantly</li>
              </ul>
            </div>
            <div className="feature-showcase-visual">
              <div className="mutation-flow">
                <div className="flow-step flow-step-1">
                  <div className="flow-step-dot flow-active" />
                  <div className="flow-step-content">
                    <span className="flow-step-label">mutate()</span>
                    <span className="flow-step-desc">
                      Entity added to UI instantly
                    </span>
                  </div>
                </div>
                <div className="flow-connector" />
                <div className="flow-step flow-step-2">
                  <div className="flow-step-dot flow-pending" />
                  <div className="flow-step-content">
                    <span className="flow-step-label">state: pending</span>
                    <span className="flow-step-desc">
                      Server request in flight
                    </span>
                  </div>
                </div>
                <div className="flow-connector" />
                <div className="flow-fork">
                  <div className="flow-step flow-step-3a">
                    <div className="flow-step-dot flow-success" />
                    <div className="flow-step-content">
                      <span className="flow-step-label">✓ confirmed</span>
                      <span className="flow-step-desc">
                        Queries invalidated
                      </span>
                    </div>
                  </div>
                  <div className="flow-step flow-step-3b">
                    <div className="flow-step-dot flow-error" />
                    <div className="flow-step-content">
                      <span className="flow-step-label">✗ rollback</span>
                      <span className="flow-step-desc">
                        State restored automatically
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Dirty Tracking */}
          <div className="feature-showcase">
            <div className="feature-showcase-text">
              <div className="feature-showcase-icon">
                <RefreshCw size={24} />
              </div>
              <h3 className="feature-showcase-title">
                Dirty Tracking &amp; Reset
              </h3>
              <p className="feature-showcase-desc">
                Every entity automatically knows which fields have been locally
                modified. Your entity <em>is</em> your form model — change it
                directly, check <code>isDirty</code>, save when ready, or{" "}
                <code>reset()</code> to discard.
              </p>
              <ul className="feature-showcase-bullets">
                <li>Deep-cloned snapshots per field</li>
                <li>isDirty reactive property</li>
                <li>reset() restores original server values</li>
              </ul>
            </div>
            <div className="feature-showcase-visual">
              <div className="dirty-demo">
                <div className="dirty-entity">
                  <div className="dirty-entity-header">
                    <Layers size={14} />
                    <span>Folder entity</span>
                    <span className="dirty-badge dirty-badge-dirty">
                      isDirty: true
                    </span>
                  </div>
                  <div className="dirty-fields">
                    <div className="dirty-field dirty-field-changed">
                      <span className="dirty-field-name">name</span>
                      <span className="dirty-field-original">
                        &quot;My Folder&quot;
                      </span>
                      <span className="dirty-field-arrow">→</span>
                      <span className="dirty-field-current">
                        &quot;Renamed&quot;
                      </span>
                    </div>
                    <div className="dirty-field">
                      <span className="dirty-field-name">isPinned</span>
                      <span className="dirty-field-value">true</span>
                    </div>
                    <div className="dirty-field dirty-field-changed">
                      <span className="dirty-field-name">description</span>
                      <span className="dirty-field-original">&quot;&quot;</span>
                      <span className="dirty-field-arrow">→</span>
                      <span className="dirty-field-current">
                        &quot;Added desc&quot;
                      </span>
                    </div>
                  </div>
                  <div className="dirty-actions">
                    <span className="dirty-action-save">
                      <Zap size={12} />
                      save()
                    </span>
                    <span className="dirty-action-reset">
                      <RefreshCw size={12} />
                      reset()
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── MINI FEATURES GRID ───────────────── */}
      <section className="mini-features" id="more-features">
        <div className="section-container">
          <div className="mini-grid">
            <MiniCard
              icon={<GitMerge size={20} />}
              title="Relation Mutations"
              description="Add / remove entities from many-to-many relationships with snapshot-based rollback."
            />
            <MiniCard
              icon={<Layers size={20} />}
              title="Query Fragments"
              description="Nested queries owned by a parent entity — seeded from joins, fetched on demand."
            />
            <MiniCard
              icon={<Shield size={20} />}
              title="Full TypeScript"
              description="Generic entities, typed mutations, and inferred context — zero @types needed."
            />
            <MiniCard
              icon={<Workflow size={20} />}
              title="Invalidation Strategies"
              description="Choose all-queries, related-queries, or none — per mutation."
            />
          </div>
        </div>
      </section>

      {/* ───────────────── CODE SHOWCASE ───────────────── */}
      <section className="code-section" id="code-example">
        <div className="section-container">
          <div className="section-header">
            <p className="section-eyebrow">Developer Experience</p>
            <h2 className="section-title">Three files. Full reactive stack.</h2>
            <p className="section-subtitle">
              Define an entity, write a query, render it — and get
              normalization, dirty tracking, and optimistic mutations for free.
            </p>
          </div>

          <div className="code-tabs">
            <CodeBlock
              filename="todo.entity.ts"
              step="1"
              stepLabel="Define"
              lines={[
                {
                  text: `import { Entity, UpdateMutation } from "@mobx-query/core";`,
                  kind: "import",
                },
                {
                  text: `import { observable, action } from "mobx";`,
                  kind: "import",
                },
                { text: ``, kind: "blank" },
                {
                  text: `export class Todo extends Entity<string, TodoData> {`,
                  kind: "keyword",
                },
                {
                  text: `  @observable accessor title: string = "";`,
                  kind: "highlight",
                },
                {
                  text: `  @observable accessor completed: boolean = false;`,
                  kind: "highlight",
                },
                { text: ``, kind: "blank" },
                {
                  text: `  readonly updateMutation = new UpdateMutation({`,
                  kind: "highlight",
                },
                { text: `    entity: Todo,`, kind: "highlight" },
                { text: `    instance: this,`, kind: "highlight" },
                { text: `    mutationFn: async () => {`, kind: "highlight" },
                {
                  text: `      await fetch(\`/api/todos/\${this.id}\`, {`,
                  kind: "highlight",
                },
                { text: `        method: "PATCH",`, kind: "highlight" },
                {
                  text: `        body: JSON.stringify({ completed: this.completed }),`,
                  kind: "highlight",
                },
                { text: `      });`, kind: "highlight" },
                { text: `    },`, kind: "highlight" },
                { text: `  });`, kind: "highlight" },
                { text: ``, kind: "blank" },
                { text: `  @action toggleCompleted() {`, kind: "keyword" },
                {
                  text: `    this.completed = !this.completed;`,
                  kind: "default",
                },
                {
                  text: `    this.updateMutation.mutate();`,
                  kind: "highlight",
                },
                { text: `  }`, kind: "default" },
                { text: `}`, kind: "default" },
              ]}
            />
            <CodeBlock
              filename="todos.store.ts"
              step="2"
              stepLabel="Query"
              lines={[
                {
                  text: `import { QueryMany } from "@mobx-query/core";`,
                  kind: "import",
                },
                {
                  text: `import { Todo } from "./todo.entity";`,
                  kind: "import",
                },
                { text: ``, kind: "blank" },
                { text: `export class TodosStore {`, kind: "keyword" },
                {
                  text: `  readonly todosQuery = new QueryMany({`,
                  kind: "highlight",
                },
                { text: `    entity: Todo,`, kind: "highlight" },
                { text: `    queryKey: () => ["todos"],`, kind: "highlight" },
                { text: `    queryFn: async () => {`, kind: "default" },
                {
                  text: `      const res = await fetch("/api/todos");`,
                  kind: "default",
                },
                { text: `      return res.json();`, kind: "default" },
                { text: `    },`, kind: "default" },
                { text: `  });`, kind: "default" },
                { text: `}`, kind: "default" },
              ]}
            />
            <CodeBlock
              filename="TodoList.tsx"
              step="3"
              stepLabel="Render"
              lines={[
                {
                  text: `import { observer } from "mobx-react-lite";`,
                  kind: "import",
                },
                { text: ``, kind: "blank" },
                { text: `const TodoList = observer(() => {`, kind: "keyword" },
                { text: `  const { rootStore } = useMQ();`, kind: "default" },
                { text: `  const todos = rootStore.todos`, kind: "highlight" },
                {
                  text: `    .todosQuery.useSuspenseQuery(undefined);`,
                  kind: "highlight",
                },
                { text: ``, kind: "blank" },
                { text: `  return (`, kind: "default" },
                { text: `    <ul>`, kind: "default" },
                { text: `      {todos.map((todo) => (`, kind: "default" },
                {
                  text: `        <li onClick={() => todo.toggleCompleted()}>`,
                  kind: "highlight",
                },
                { text: `          {todo.title}`, kind: "default" },
                { text: `        </li>`, kind: "default" },
                { text: `      ))}`, kind: "default" },
                { text: `    </ul>`, kind: "default" },
                { text: `  );`, kind: "default" },
                { text: `});`, kind: "default" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ───────────────── CTA ───────────────── */}
      <section className="cta-section" id="cta">
        <div className="section-container">
          <div className="cta-card">
            <div className="cta-glow" aria-hidden="true" />
            <p className="section-eyebrow">Get Started in 5 Minutes</p>
            <h2 className="cta-title">
              Your entities deserve
              <br />
              <span className="hero-title-accent">first-class reactivity</span>
            </h2>
            <p className="cta-description">
              Stop writing glue code between TanStack Query and MobX. Let
              mobx-query handle normalization, caching, and mutations — so you
              can focus on building features.
            </p>
            <div className="hero-actions align-center justify-center w-full">
              <Link
                href="/docs/quickstart"
                className="btn-primary"
                id="cta-quickstart"
              >
                Quickstart Guide
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/docs/installation"
                className="btn-ghost"
                id="cta-install"
              >
                Installation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─── Sub-components ─────────────────────────────────────────── */

function EcoBadge({ label }: { label: string }) {
  return <span className="eco-badge">{label}</span>;
}

function MiniCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="mini-card"
      id={`feature-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="mini-card-icon">{icon}</div>
      <h3 className="mini-card-title">{title}</h3>
      <p className="mini-card-desc">{description}</p>
    </div>
  );
}

function CodeBlock({
  filename,
  step,
  stepLabel,
  lines,
}: {
  filename: string;
  step: string;
  stepLabel: string;
  lines: { text: string; kind: string }[];
}) {
  return (
    <div className="code-block">
      <div className="code-block-header">
        <div className="code-block-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="code-block-filename">{filename}</span>
        <span className="code-block-step">
          {step}. {stepLabel}
        </span>
      </div>
      <pre className="code-block-body">
        <code>
          {lines.map((line, i) => (
            <span key={i} className={`code-line code-line-${line.kind}`}>
              {line.text}
              {"\n"}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
