import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { ImBook } from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png";
import kafkaMl from "../images/kafkaml.png";
import portfolio from "../images/portfolio.png";

import React from 'react';

const projectConfig = [
  {
    id: "project-5",
    title: "Sklearn Genetic Opt",
    category: { en: "Library", es: "Librería" },
    description_i18n: {
      en: "Hyperparameter tuning & feature selection for scikit‑learn using evolutionary algorithms.",
      es: "Ajuste de hiperparámetros y selección de variables para scikit‑learn con algoritmos evolutivos."
    },
    links: [
      { name: "repo", url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription", icon: <AiFillEye/> },
      { name: "docs", url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/", icon: <ImBook/> }
    ],
    image: sklearnGenetic,
    target: "_blank"
  },
  {
    id: "project-3",
    title: "Kafkaml Anomalies",
    category: { en: "System", es: "Sistema" },
    description_i18n: {
      en: "Real‑time anomaly detection on Kafka streams with Python.",
      es: "Detección de anomalías en tiempo real sobre flujos de Kafka con Python."
    },
    links: [
      { name: "repo", url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription", icon: <AiFillEye/> }
    ],
    image: kafkaMl,
    target: "_blank"
  },
  {
    id: "project-2",
    title: "Pyworkforce",
    category: { en: "Library", es: "Librería" },
    description_i18n: {
      en: "Standard tools for WFM: queuing, scheduling, rostering, and optimization.",
      es: "Herramientas estándar para WFM: colas, programación, turnos y optimización."
    },
    links: [
      { name: "repo", url: "https://github.com/rodrigo-arenas/pyworkforce", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/rodrigo-arenas/pyworkforce/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/rodrigo-arenas/pyworkforce/subscription", icon: <AiFillEye/> },
      { name: "docs", url: "https://pyworkforce.readthedocs.io/en/stable/", icon: <ImBook/> }
    ],
    image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
    target: "_blank"
  },
  {
    id: "project-1",
    title: "Portfolio Web",
    category: { en: "Website", es: "Sitio web" },
    description_i18n: {
      en: "Source code for my personal portfolio website.",
      es: "Código fuente de mi sitio web personal de portafolio."
    },
    links: [
      { name: "repo", url: "https://github.com/rodrigo-arenas/portfolio", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/rodrigo-arenas/portfolio/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/rodrigo-arenas/portfolio/subscription", icon: <AiFillEye/> }
    ],
    image: portfolio,
    target: "_blank"
  }
];

export default projectConfig;

