import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor).
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Live Demo
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

// Brand chips backed by the mono SVGs already in /public/assets/logos.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

// Text mark for tools with no SVG in /public/assets/logos yet. Drop a mono SVG
// in that folder and swap the entry to `brand("Name", "file.svg")` any time.
const mark = (title: string, label: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-[0.6em] font-bold leading-none">{label}</span>,
});

const PROJECT_SKILLS = {
  // available as real SVGs
  python: brand("Python", "python-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  redis: brand("Redis", "redis-mono.svg"),
  next: brand("Next.js", "nextdotjs-mono.svg"),
  react: brand("React", "react-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  // text marks
  spark: mark("PySpark", "Spk"),
  databricks: mark("Databricks", "DBX"),
  delta: mark("Delta Lake", "Δ"),
  kafka: mark("Kafka", "Kfk"),
  airflow: mark("Airflow", "AF"),
  dbt: mark("dbt", "dbt"),
  snowflake: mark("Snowflake", "SNW"),
  azure: mark("Azure", "Az"),
  aws: mark("AWS", "AWS"),
  bigquery: mark("BigQuery", "BQ"),
  duckdb: mark("DuckDB", "🦆"),
  pandas: mark("Pandas", "pd"),
  sklearn: mark("scikit-learn", "skl"),
  xgboost: mark("XGBoost", "XGB"),
  pytorch: mark("PyTorch", "PT"),
  tensorrt: mark("TensorRT", "TRT"),
  jetson: mark("NVIDIA Jetson", "NV"),
  langchain: mark("LangChain", "LC"),
  chroma: mark("ChromaDB", "Chr"),
  fastapi: mark("FastAPI", "API"),
  streamlit: mark("Streamlit", "ST"),
  greatExpectations: mark("Great Expectations", "GE"),
  mlflow: mark("MLflow", "MLf"),
  prometheus: mark("Prometheus", "Prm"),
  grafana: mark("Grafana", "Gfn"),
  terraform: mark("Terraform", "TF"),
  githubActions: mark("GitHub Actions", "CI"),
  powerbi: mark("Power BI", "BI"),
  evidently: mark("Evidently AI", "Evd"),
  kotlin: mark("Kotlin", "Kt"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

/**
 * PLACEHOLDER PROJECTS
 * --------------------
 * These are scoped-but-unbuilt ideas. Each one has a cover placeholder at
 * /assets/projects-screenshots/<id>/cover.png — swap in real screenshots and
 * fill in `live` / `github` as you ship them.
 */
const projects: Project[] = [
  {
    id: "receipt-pipeline-guardian",
    category: "Streaming data platform",
    title: "Receipt Pipeline Guardian",
    src: `${BASE_PATH}/receipt-pipeline-guardian/cover.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit, PROJECT_SKILLS.powerbi],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.kafka,
        PROJECT_SKILLS.spark,
        PROJECT_SKILLS.dbt,
        PROJECT_SKILLS.xgboost,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.githubActions,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A streaming receipt pipeline that catches bad data before it
            reaches the warehouse.
          </TypographyP>
          <TypographyP className="font-mono">
            Receipt events land on a Kafka topic, get validated and enriched in
            a PySpark structured-streaming job, then land in a warehouse where
            dbt builds the marts. A gradient-boosted model scores every receipt
            for anomalies (duplicate submissions, impossible totals, scanner
            errors) and quarantines the suspect ones instead of silently
            polluting downstream metrics.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Data quality as a gate</TypographyH3>
          <p className="font-mono mb-2">
            Every dbt model ships with tests, and the CI pipeline refuses to
            promote a build when they fail. Freshness, row-count deltas, and
            null-rate checks run on every batch, with failures routed to a
            quarantine table that a reviewer can actually work through.
          </p>

          <TypographyH3 className="my-4 mt-8">The operator view</TypographyH3>
          <p className="font-mono mb-2">
            A Streamlit console shows throughput, quarantine rate, model
            precision on reviewed cases, and the drift signal over time, so the
            pipeline is legible to someone who does not read Spark logs for
            fun.
          </p>
        </div>
      );
    },
  },
  {
    id: "agentic-rag-platform",
    category: "Applied GenAI",
    title: "Agentic RAG Platform",
    src: `${BASE_PATH}/agentic-rag-platform/cover.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.langchain,
        PROJECT_SKILLS.chroma,
        PROJECT_SKILLS.anthropic,
        PROJECT_SKILLS.prometheus,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Retrieval-augmented generation with tool use, session memory, and
            an eval suite that runs in CI.
          </TypographyP>
          <TypographyP className="font-mono">
            A document Q&amp;A service where the agent decides whether to
            retrieve, call a tool, or answer directly. Chunking and embedding
            strategy are configurable, retrieval is hybrid (dense plus keyword),
            and every answer carries citations back to source spans.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Evaluation first</TypographyH3>
          <p className="font-mono mb-2">
            A golden question set runs on every commit, scoring faithfulness,
            answer relevance, and retrieval hit rate. Regressions block the
            merge. Failure cases are documented rather than hidden, including
            the query shapes retrieval still handles poorly.
          </p>

          <TypographyH3 className="my-4 mt-8">Observability</TypographyH3>
          <p className="font-mono mb-2">
            Token spend, latency percentiles, retrieval depth, and cache hit
            rate are exported as Prometheus metrics, so cost per answer is a
            number on a dashboard rather than a surprise on an invoice.
          </p>
        </div>
      );
    },
  },
  {
    id: "lakehouse-vitals",
    category: "Lakehouse / data engineering",
    title: "Lakehouse Vitals",
    src: `${BASE_PATH}/lakehouse-vitals/cover.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.powerbi, PROJECT_SKILLS.streamlit],
      backend: [
        PROJECT_SKILLS.databricks,
        PROJECT_SKILLS.delta,
        PROJECT_SKILLS.spark,
        PROJECT_SKILLS.azure,
        PROJECT_SKILLS.airflow,
        PROJECT_SKILLS.greatExpectations,
        PROJECT_SKILLS.terraform,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A medallion lakehouse with SLAs attached to every layer.
          </TypographyP>
          <TypographyP className="font-mono">
            Bronze, silver, and gold Delta layers on Azure, orchestrated with
            Airflow, with slowly-changing dimensions handled properly and a
            star schema at the gold layer that a BI tool can query without a
            translation step.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Contracts and expectations</TypographyH3>
          <p className="font-mono mb-2">
            Each table declares an expected schema, a freshness budget, and a
            row-volume band. Violations open an incident with the offending
            partition attached, instead of the failure showing up three days
            later in a dashboard nobody trusted anyway.
          </p>

          <TypographyH3 className="my-4 mt-8">Infrastructure as code</TypographyH3>
          <p className="font-mono mb-2">
            Workspaces, clusters, storage, and job definitions are all
            Terraform-managed, so the whole environment can be torn down and
            rebuilt from a clean state.
          </p>
        </div>
      );
    },
  },
  {
    id: "drift-sentinel",
    category: "MLOps",
    title: "Drift Sentinel",
    src: `${BASE_PATH}/drift-sentinel/cover.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit, PROJECT_SKILLS.grafana],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.xgboost,
        PROJECT_SKILLS.mlflow,
        PROJECT_SKILLS.evidently,
        PROJECT_SKILLS.airflow,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Drift detection and automated retraining for models already in
            production.
          </TypographyP>
          <TypographyP className="font-mono">
            Monitors feature distributions and prediction distributions against
            a reference window, flags meaningful shift, and triggers a
            retraining run when the drift signal crosses a threshold. New
            candidates are promoted only if they beat the incumbent on a
            held-out slice, and the whole comparison is logged.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Fairness in the loop</TypographyH3>
          <p className="font-mono mb-2">
            Slice metrics are computed per subgroup on every retraining run, so
            a model that improves in aggregate while degrading for one segment
            gets blocked rather than shipped.
          </p>

          <TypographyH3 className="my-4 mt-8">Explainability on demand</TypographyH3>
          <p className="font-mono mb-2">
            SHAP values are cached per model version, so any individual
            prediction can be explained after the fact without re-running the
            pipeline.
          </p>
        </div>
      );
    },
  },
  {
    id: "edge-vision-bench",
    category: "Edge AI",
    title: "Edge Vision Bench",
    src: `${BASE_PATH}/edge-vision-bench/cover.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.tensorrt,
        PROJECT_SKILLS.jetson,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.prometheus,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A profiling harness for vision models running on constrained edge
            hardware.
          </TypographyP>
          <TypographyP className="font-mono">
            Takes a trained detection model, runs it through quantization and
            TensorRT conversion, and reports what you actually gave up: latency
            percentiles, sustained FPS, GPU utilization, memory headroom, and
            power draw, plotted against the accuracy delta at each optimization
            step.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Finding the real bottleneck</TypographyH3>
          <p className="font-mono mb-2">
            Separates preprocessing, inference, and postprocessing timings, so
            the fix lands where the time is actually going rather than where it
            is assumed to be.
          </p>

          <TypographyH3 className="my-4 mt-8">Reproducible runs</TypographyH3>
          <p className="font-mono mb-2">
            Every benchmark is pinned to a container image and a thermal state,
            because an unthrottled first run and a warm tenth run are not the
            same measurement.
          </p>
        </div>
      );
    },
  },
  {
    id: "mat-metrics",
    category: "Personal / analytics",
    title: "Mat Metrics",
    src: `${BASE_PATH}/mat-metrics/cover.png`,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.kotlin, PROJECT_SKILLS.streamlit],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.duckdb,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.sklearn,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Training analytics for Brazilian jiu-jitsu, built because the
            existing apps only count sessions.
          </TypographyP>
          <TypographyP className="font-mono">
            Logs rolls, positions, submissions attempted and conceded, and
            training load, then surfaces the patterns: which positions are
            leaking points, which submissions are working against which belt
            ranks, and how volume tracks against progress over a training block.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Honest sample sizes</TypographyH3>
          <p className="font-mono mb-2">
            Every insight is shown with its sample size and a confidence band.
            Eleven rolls is not a trend, and the app says so instead of drawing
            a confident line through noise.
          </p>
        </div>
      );
    },
  },
];
export default projects;
