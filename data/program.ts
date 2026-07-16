import { Presentation } from "@/utils/types";

export const presentations: Presentation[] = [
  {
    id: "p1",
    title: "Privacy-Preserving and Secure Computation for Distributed and Cloud Environments",
    speakers: ["Alex Sprintson"],
    abstract:
      "Modern data-driven applications increasingly rely on cloud computing infrastructures to store data and execute computationally intensive tasks. While cloud platforms offer unprecedented scalability, flexibility, and cost efficiency, they also introduce significant privacy and security challenges. In particular, users must often entrust sensitive data and computational workloads to third-party service providers that may be honest-but-curious or otherwise untrusted. Consequently, both the underlying data and the nature of the computation may be exposed to unauthorized parties, creating substantial risks to confidentiality and privacy. \n\n We first focus on the area of Private Computation, a collection of techniques that enables users to compute functions over remotely stored datasets while concealing sensitive aspects of the request. Depending on the application, privacy requirements may include hiding the identities of the data items accessed, the functions being evaluated, or both. We discuss the fundamental principles underlying private computation and demonstrate how these techniques enable privacy-preserving data analytics, statistical inference, and machine learning over distributed and cloud-hosted datasets.\n\n We then discuss the broader area of Secure Computation, which encompasses methods for securely outsourcing computational tasks and performing computations directly on protected or encrypted data. We present a range of algebraic, coding-theoretic, and information-theoretic techniques that provide rigorous privacy guarantees while maintaining practical computational and communication complexity. Particular emphasis is placed on approaches that leverage the structure of specific computational problems to achieve substantial efficiency gains.",
    time: "Monday — 8:30-10:00",
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  {
    id: "p2",
    title: "An Introduction to Rate-Distortion-Perception Theory",
    speakers: ["Jun Chen"],
    // abstract:
    //   "n overview of systems research enabling rapid scientific discovery.",
    time: "Monday — 10:30-12:00 and 1:30-3:00",
    slides: "/presentations/chen_rdp.pdf",

    // video: "https://example.com/videos/p1",
  },
  {
    id: "p3",
    title: "Communicating Short Messages With and Without Feedback",
    speakers: ["Rick Wesel"],
    // abstract:
    //   "n overview of systems research enabling rapid scientific discovery.",
    time: "Monday — 3:30-5:00",
    slides: "/presentations/wesel_communicating_short_messages.pdf",
    // video: "https://example.com/videos/p1",
  },
  {
    id: "p4",
    title: "Quantum Low-Density Parity-Check Codes: Constructions and Decoders",
    speakers: ["Henry Pfister"],
    abstract:
    "Spurred by recent advances in quantum science and engineering, interest in quantum information theory and coding has been increasing at a rapid pace.  Much of this interest is driven by the promise of quantum computing and its potential to solve key problems much faster than classical computers. One promising technology for fault-tolerant quantum computing is error-correction based on quantum low-density parity-check (QLDPC) codes. This talk gives an overview of QLDPC code constructions and decoders with some emphasis message-passing decoding. In particular, it will discuss why code degeneracy causes convergence issues and how decoder modifications, such as guided decimation, can improve performance. ",
    time: "Tuesday — 8:30-10:00",
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  {
    id: "p5",
    title: "Theory and Practice of Diffusion Models",
    speakers: ["Lalitha Sankar"],
    // abstract:
    //   "n overview of systems research enabling rapid scientific discovery.",
    time: "Tuesday — 10:30-12:00 and 1:30-3:00",
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  {
      id: "p6",
    title: "Short Tutorial",
    speakers: ["David Mitchell"],
    // abstract:
    //   "n overview of systems research enabling rapid scientific discovery.",
    time: "Tuesday — 3:30-5:00",
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  {
    id: "p11",
    title: "Improving Generalization, Robustness, and Reliability in Machine Learning: a Coding-Theoretic Approach",
    speakers: ["Mohammad Maddah-Ali"],
    abstract: "In this tutorial, we extend the role of coding and decoding beyond their classical use in reliable communication and storage, positioning them as fundamental tools for improving generalization, adversarial robustness, and system-level reliability in machine learning.  This shift is enabled by rethinking code design through the lens of learning theory rather than classical algebraic coding, making coding a native component of modern ML architectures. \n\n We then show how this framework advances the state of the art in three domains: \n\n - **Generalization**: The coding/decoding framework introduces an auxiliary data path alongside the original one. We prove that the inconsistency between these paths is proportional to higher-order gradients of the model, enabling this inconsistency to act as a smoothness regularizer during training. Perhaps surprisingly, this approach works  for both supervised and unsupervised learning tasks. In particular, we demonstrate improvements in contrastive learning, where alternative mechanisms for encouraging smoothness remain limited. \n\n - **Adversarial Robustness**: We prove that data permutations in the process of  encoding and decoding can provide gradient obfuscation, without sacrificing predictive performance, thereby improving robustness to adversarial perturbations at inference time. Using this approach, we improve robustness and surpass leading methods on adversarial defense benchmarks. \n\n - **Reliability**: In distributed machine learning settings, the framework improves resilience against stragglers and adversarial servers. We provide formal guarantees that bound approximation error as a function of the number of total and faulty servers, while outperforming the current state of the art.",
    time: "Wednesday — 8:30-10:00 and 10:30-12:00",
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  // {
  //   id: "p7",
  //   title: "Semantic Coding",
  //   speakers: ["Aylin Yener"],
  //   // abstract:
  //   //   "n overview of systems research enabling rapid scientific discovery.",
  //   time: "Wednesday — 8:30-10:00 and 10:30-12:00",
  //   // slides: "https://example.com/slides/p1.pdf",
  //   // video: "https://example.com/videos/p1",
  // },
  {
    id: "p8",
    title: "Computational-Statistical Gaps in High-dimensional Inference: Low-degree polynomials, AMP, and Their Connections",
    speakers: ["Cynthia Rush"],
    abstract:
      "When does high-dimensional data contain enough information to recover a hidden signal, and when can that information be extracted efficiently? These two questions often have different answers. This lecture surveys the computational–statistical gap phenomenon in high-dimensional inference, with an emphasis on low-degree polynomial methods and approximate message passing. We will start with planted clique as a concrete example of a gap between statistical possibility and efficient computation, where exhaustive search succeeds at logarithmic clique size but known polynomial-time algorithms require clique size on the order of \sqrt n. We then develop the low-degree method, first for detection through the low-degree likelihood ratio and then for estimation through low-degree MMSE and overlap. The second half of the lecture centers on spiked Wigner / rank-one matrix estimation, a model where low-degree estimation, PCA, Bayes estimation, and AMP can be compared cleanly. We will introduce AMP, explain the Onsager correction and state evolution, and discuss how AMP gives an algorithmic threshold.  We conclude with the low-degree–AMP equivalence in rank-one matrix estimation, explaining how AMP can match the optimal constant-degree polynomial estimator and thereby provide a candidate computational threshold.",
    time: "Thursday — 8:30-10:00",
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  {
    id: "p9",
    title: "From Conformal Prediction to Verification and Uncertainty Quantification in Generative AI",
    speakers: ["Hamed Hassani"],
    // abstract:
    //   "n overview of systems research enabling rapid scientific discovery.",
    time: "Thursday — 10:30-12:00 and 1:30-3:00",
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  {
    id: "p10",
    title: "Long Tutorial",
    speakers: ["Matthieu Bloch"],
    // abstract:
    //   "n overview of systems research enabling rapid scientific discovery.",
    time: "Thursday — 3:30-5:00 and Friday — 8:30-10:00",
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  {
    id: "p12",
    title: "Quickest Change Detection and its Application to Learning in Nonstationary Environments",
    speakers: ["Venu Veeravalli"],
    // abstract:
    //   "n overview of systems research enabling rapid scientific discovery.",
    time: "Friday — 10:30-12:00",
    slides: "/presentations/veeravalli_qcd.pdf",
    // video: "https://example.com/videos/p1",
  },
  
];
