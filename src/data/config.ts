const config = {
  title: "Vaibhav Sathe | Data Enthusiast",
  description: {
    long: "Portfolio of Vaibhav Sathe, a data enthusiast building production-grade data platforms, streaming pipelines, and applied ML systems. Azure and Databricks certified, with work spanning large-scale fraud detection, LLM fine-tuning, and edge AI on NVIDIA Jetson.",
    short:
      "Portfolio of Vaibhav Sathe, a data enthusiast building data pipelines and applied ML systems.",
  },
  keywords: [
    "Vaibhav Sathe",
    "portfolio",
    "data scientist",
    "data engineer",
    "AI engineer",
    "machine learning",
    "PySpark",
    "Databricks",
    "Azure",
    "AWS",
    "Airflow",
    "dbt",
    "Kafka",
    "MLOps",
    "RAG",
    "edge AI",
  ],
  // Hero splits this on the space to stack first/last name.
  author: "Vaibhav Sathe",
  email: "vaibhavag0207@gmail.com",
  site: "https://vaibhav.dev", // REPLACE ME: your deployed domain

  // for github stars button
  githubUsername: "VaibhavAG-02",
  githubRepo: "portfolio_new",

  // Drop your PDF at public/Vaibhav_Resume.pdf for the /resume page + hero button.
  resume: "/Vaibhav_Resume.pdf",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/vaibhav-sathe-115507194/",
    github: "https://github.com/VaibhavAG-02",
    email: "mailto:vaibhavag0207@gmail.com",
  },
};
export { config };
