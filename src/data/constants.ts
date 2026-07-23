export enum SkillNames {
  PYTHON = "python",
  SQL = "sql",
  R = "r",
  SPARK = "spark",
  DATABRICKS = "databricks",
  KAFKA = "kafka",
  AIRFLOW = "airflow",
  DBT = "dbt",
  SNOWFLAKE = "snowflake",
  AZURE = "azure",
  AWS = "aws",
  GCP = "gcp",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  PANDAS = "pandas",
  NUMPY = "numpy",
  SKLEARN = "sklearn",
  PYTORCH = "pytorch",
  TENSORFLOW = "tensorflow",
  LANGCHAIN = "langchain",
  FASTAPI = "fastapi",
  STREAMLIT = "streamlit",
  POWERBI = "powerbi",
  DOCKER = "docker",
  KUBERNETES = "kubernetes",
  TERRAFORM = "terraform",
  GIT = "git",
  LINUX = "linux",
  JUPYTER = "jupyter",
  GRAFANA = "grafana",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /**
   * Name of the matching keycap object in the 3D Spline keyboard scene.
   * The scene ships with a fixed set of keycaps, so only skills that line up
   * with one get animated / hoverable there. Everything else lives purely in
   * the HTML skills grid.
   */
  keycap?: string;
  /** 2-3 char fallback rendered if the remote icon fails to load. */
  fallback: string;
};

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "The whole job in one language. Pipelines, models, glue.",
    color: "#3776ab",
    icon: devicon("python/python-original.svg"),
    keycap: "html",
    fallback: "Py",
  },
  [SkillNames.SQL]: {
    id: 2,
    name: "sql",
    label: "SQL",
    shortDescription: "Window functions and CTEs doing the heavy lifting.",
    color: "#e38c00",
    icon: devicon("azuresqldatabase/azuresqldatabase-original.svg"),
    keycap: "css",
    fallback: "SQL",
  },
  [SkillNames.R]: {
    id: 3,
    name: "r",
    label: "R",
    shortDescription: "For when the stats people need to read your work.",
    color: "#276dc3",
    icon: devicon("r/r-original.svg"),
    fallback: "R",
  },
  [SkillNames.SPARK]: {
    id: 4,
    name: "spark",
    label: "PySpark",
    shortDescription: "Distributed compute for when pandas taps out.",
    color: "#e25a1c",
    icon: devicon("apachespark/apachespark-original.svg"),
    keycap: "react",
    fallback: "Spk",
  },
  [SkillNames.DATABRICKS]: {
    id: 5,
    name: "databricks",
    label: "Databricks",
    shortDescription: "Delta Lake, medallion layers, scheduled Jobs.",
    color: "#ff3621",
    icon: "/assets/logos/databricks.svg",
    keycap: "vue",
    fallback: "DBX",
  },
  [SkillNames.KAFKA]: {
    id: 6,
    name: "kafka",
    label: "Kafka",
    shortDescription: "Events in, events out, nothing lost in between.",
    color: "#d1d1d1",
    icon: devicon("apachekafka/apachekafka-original.svg"),
    keycap: "nextjs",
    fallback: "Kfk",
  },
  [SkillNames.AIRFLOW]: {
    id: 7,
    name: "airflow",
    label: "Airflow",
    shortDescription: "DAGs that page you before the stakeholders do.",
    color: "#017cee",
    icon: devicon("apacheairflow/apacheairflow-original.svg"),
    keycap: "tailwind",
    fallback: "AF",
  },
  [SkillNames.DBT]: {
    id: 8,
    name: "dbt",
    label: "dbt",
    shortDescription: "Tests on your models, versions on your logic.",
    color: "#ff694a",
    icon: "", // no open-licensed dbt mark; renders the "dbt" text fallback
    keycap: "js",
    fallback: "dbt",
  },
  [SkillNames.SNOWFLAKE]: {
    id: 9,
    name: "snowflake",
    label: "Snowflake",
    shortDescription: "Warehouse that scales up, then politely goes to sleep.",
    color: "#29b5e8",
    icon: "/assets/logos/snowflake.svg",
    fallback: "SNW",
  },
  [SkillNames.AZURE]: {
    id: 10,
    name: "azure",
    label: "Azure",
    shortDescription: "DP-203 certified. Data Factory, ADLS, Synapse.",
    color: "#0089d6",
    icon: devicon("azure/azure-original.svg"),
    keycap: "nodejs",
    fallback: "Az",
  },
  [SkillNames.AWS]: {
    id: 11,
    name: "aws",
    label: "AWS",
    shortDescription: "S3, EC2, Glue, and a healthy respect for the bill.",
    color: "#ff9900",
    icon: devicon("amazonwebservices/amazonwebservices-original-wordmark.svg"),
    keycap: "aws",
    fallback: "AWS",
  },
  [SkillNames.GCP]: {
    id: 12,
    name: "gcp",
    label: "BigQuery / GCP",
    shortDescription: "Petabyte scans in the time it takes to blink.",
    color: "#4285f4",
    icon: devicon("googlecloud/googlecloud-original.svg"),
    keycap: "express",
    fallback: "GCP",
  },
  [SkillNames.POSTGRES]: {
    id: 13,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "The database that just refuses to let you down.",
    color: "#336791",
    icon: devicon("postgresql/postgresql-original.svg"),
    keycap: "postgres",
    fallback: "PG",
  },
  [SkillNames.MONGODB]: {
    id: 14,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Schema-on-read, regret-on-write. Used carefully.",
    color: "#47a248",
    icon: devicon("mongodb/mongodb-original.svg"),
    keycap: "mongodb",
    fallback: "Mgo",
  },
  [SkillNames.PANDAS]: {
    id: 15,
    name: "pandas",
    label: "Pandas",
    shortDescription: "Where every analysis secretly starts.",
    color: "#150458",
    icon: devicon("pandas/pandas-original.svg"),
    keycap: "github",
    fallback: "pd",
  },
  [SkillNames.NUMPY]: {
    id: 16,
    name: "numpy",
    label: "NumPy",
    shortDescription: "Vectorize it or explain the for-loop in code review.",
    color: "#4dabcf",
    icon: devicon("numpy/numpy-original.svg"),
    fallback: "np",
  },
  [SkillNames.SKLEARN]: {
    id: 17,
    name: "sklearn",
    label: "scikit-learn",
    shortDescription: "Baselines that quietly beat the fancy stuff.",
    color: "#f89939",
    icon: devicon("scikitlearn/scikitlearn-original.svg"),
    keycap: "prettier",
    fallback: "skl",
  },
  [SkillNames.PYTORCH]: {
    id: 18,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Fine-tuning, LoRA/PEFT, and the occasional OOM.",
    color: "#ee4c2c",
    icon: devicon("pytorch/pytorch-original.svg"),
    keycap: "npm",
    fallback: "PT",
  },
  [SkillNames.TENSORFLOW]: {
    id: 19,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Trained it, then shipped it to a Jetson via TensorRT.",
    color: "#ff6f00",
    icon: devicon("tensorflow/tensorflow-original.svg"),
    keycap: "firebase",
    fallback: "TF",
  },
  [SkillNames.LANGCHAIN]: {
    id: 20,
    name: "langchain",
    label: "LangChain / RAG",
    shortDescription: "Retrieval, tools, memory, and evals that actually run.",
    color: "#1c3c3c",
    icon: "/assets/logos/langchain.svg",
    keycap: "wordpress",
    fallback: "LC",
  },
  [SkillNames.FASTAPI]: {
    id: 21,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "The fastest way to put a model behind an endpoint.",
    color: "#009688",
    icon: devicon("fastapi/fastapi-original.svg"),
    keycap: "nginx",
    fallback: "API",
  },
  [SkillNames.STREAMLIT]: {
    id: 22,
    name: "streamlit",
    label: "Streamlit",
    shortDescription: "A demo stakeholders can click beats a slide deck.",
    color: "#ff4b4b",
    icon: devicon("streamlit/streamlit-original.svg"),
    fallback: "ST",
  },
  [SkillNames.POWERBI]: {
    id: 23,
    name: "powerbi",
    label: "Power BI",
    shortDescription: "DAX measures and dashboards people actually open.",
    color: "#f2c811",
    icon: "", // no open-licensed Power BI mark; renders the "BI" text fallback
    keycap: "ts",
    fallback: "BI",
  },
  [SkillNames.DOCKER]: {
    id: 24,
    name: "docker",
    label: "Docker",
    shortDescription: "It works on my machine, and now on yours too.",
    color: "#2496ed",
    icon: devicon("docker/docker-original.svg"),
    keycap: "docker",
    fallback: "Dkr",
  },
  [SkillNames.KUBERNETES]: {
    id: 25,
    name: "kubernetes",
    label: "Kubernetes",
    shortDescription: "YAML, but with strong opinions about your uptime.",
    color: "#326ce5",
    icon: devicon("kubernetes/kubernetes-original.svg"),
    keycap: "vim",
    fallback: "K8s",
  },
  [SkillNames.TERRAFORM]: {
    id: 26,
    name: "terraform",
    label: "Terraform",
    shortDescription: "Infrastructure you can code review.",
    color: "#7b42bc",
    icon: devicon("terraform/terraform-original.svg"),
    keycap: "vercel",
    fallback: "TF",
  },
  [SkillNames.GIT]: {
    id: 27,
    name: "git",
    label: "Git",
    shortDescription: "Small commits, honest messages, no force-push Fridays.",
    color: "#f1502f",
    icon: devicon("git/git-original.svg"),
    keycap: "git",
    fallback: "Git",
  },
  [SkillNames.LINUX]: {
    id: 28,
    name: "linux",
    label: "Linux",
    shortDescription: "Where the pipelines live and the logs are read.",
    color: "#eeeeee",
    icon: devicon("linux/linux-original.svg"),
    keycap: "linux",
    fallback: "Lnx",
  },
  [SkillNames.JUPYTER]: {
    id: 29,
    name: "jupyter",
    label: "Jupyter",
    shortDescription: "Explore here, then move it into a real module.",
    color: "#f37626",
    icon: devicon("jupyter/jupyter-original.svg"),
    fallback: "Jpy",
  },
  [SkillNames.GRAFANA]: {
    id: 30,
    name: "grafana",
    label: "Grafana / Prometheus",
    shortDescription: "If it isn't on a dashboard, it isn't in production.",
    color: "#f46800",
    icon: devicon("grafana/grafana-original.svg"),
    fallback: "Gfn",
  },
};

/**
 * Every keycap object baked into the Spline keyboard scene. The scene ships
 * with a fixed frontend-web keycap set that can't be renamed from code, so this
 * list exists purely to drive the float/settle animation — all 25 caps lift and
 * land exactly as they did originally, independent of which skills we show.
 */
export const KEYCAP_NAMES = [
  "js", "ts", "html", "css", "react", "vue", "nextjs", "tailwind", "nodejs",
  "express", "postgres", "mongodb", "git", "github", "prettier", "npm",
  "firebase", "wordpress", "linux", "docker", "nginx", "aws", "vim", "vercel",
] as const;

/** keycap object name in the Spline scene -> skill */
export const SKILLS_BY_KEYCAP: Record<string, Skill> = Object.values(
  SKILLS
).reduce((acc, skill) => {
  if (skill.keycap) acc[skill.keycap] = skill;
  return acc;
}, {} as Record<string, Skill>);

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

// Experience section is currently not rendered on the homepage.
// Add entries here and re-add <ExperienceSection /> in src/app/page.tsx to turn it on.
export const EXPERIENCE: Experience[] = [];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
