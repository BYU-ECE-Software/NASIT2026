import { Presentation } from "@/utils/types";

export const presentations: Presentation[] = [
  {
    id: "p1",
    title: "Short Tutorial",
    speakers: ["Alex Sprintson"],
    // abstract:
    //   "n overview of systems research enabling rapid scientific discovery.",
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
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  {
    id: "p3",
    title: "Communicating Short Messages With and Without Feedback",
    speakers: ["Rick Wesel"],
    // abstract:
    //   "n overview of systems research enabling rapid scientific discovery.",
    time: "Monday — 3:30-5:00",
    // slides: "https://example.com/slides/p1.pdf",
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
    speakers: ["Lalitha Sanka"],
    // abstract:
    //   "n overview of systems research enabling rapid scientific discovery.",
    time: "Tuesday — 10:30-12:00 and 1:30-3:00",
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  {
    id: "p11",
    title: "Long Tutorial",
    speakers: ["Mohammad Maddah-Ali"],
    abstract: "",
    time: "Wednesday — 8:30-10:00 and 10:30-12:00",
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  // {
    //   id: "p6",
  //   title: "Optimal List Decoding",
  //   speakers: ["Venkat Guruswami"],
  //   // abstract:
  //   //   "n overview of systems research enabling rapid scientific discovery.",
  //   time: "Tuesday — 3:30-5:00",
  //   // slides: "https://example.com/slides/p1.pdf",
  //   // video: "https://example.com/videos/p1",
  // },
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
    title: "Long Tutorial",
    speakers: ["Hamed Hassani"],
    // abstract:
    //   "n overview of systems research enabling rapid scientific discovery.",
    time: "Thursday — 10:30-12:00 and 1:30-3:00",
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  {
    id: "p10",
    title: "Short Tutorial",
    speakers: ["Matthieu Bloch"],
    // abstract:
    //   "n overview of systems research enabling rapid scientific discovery.",
    time: "Thursday — 3:30-5:00",
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
    // slides: "https://example.com/slides/p1.pdf",
    // video: "https://example.com/videos/p1",
  },
  
];
