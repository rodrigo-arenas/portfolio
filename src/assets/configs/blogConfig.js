import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { SiMedium } from "react-icons/si";
import fastapiSklearn from "../images/fastapi_sklearn.png";

const blogConfig = [
  {
    id: "blog-8",
    title: "How to Solve Scheduling Problems in Python",
    category: { en: "Operations Research", es: "Investigación de Operaciones" },
    description_i18n: {
      en: "Use linear programming to minimize the gap between required and scheduled resources.",
      es: "Usa programación lineal para minimizar la brecha entre recursos requeridos y programados."
    },
    links: [{ name: "article", url: "https://towardsdatascience.com/how-to-solve-scheduling-problems-in-python-36a9af8de451", icon: <SiMedium/> }],
    image: "https://miro.medium.com/max/700/1*VKIGzmJrYBzcPlB6USx8OA.jpeg",
    target: "_blank",
    date: "2020-07-01"
  },
  {
    id: "blog-7",
    title: "Adaptive Parameters Methods for Machine Learning",
    category: { en: "Machine Learning", es: "Aprendizaje automático" },
    description_i18n: {
      en: "Explore practical ways to adapt model parameters over time.",
      es: "Explora formas prácticas de adaptar parámetros del modelo con el tiempo."
    },
    links: [{ name: "article", url: "https://towardsdatascience.com/adaptive-parameters-methods-for-machine-learning-6f7101a9a71", icon: <SiMedium/> }],
    image: "https://miro.medium.com/max/700/1*DeZYSLcMdF58BeqemGhUhg.jpeg",
    target: "_blank",
    date: "2020-05-15"
  },
  {
    id: "blog-6",
    title: "Evolutionary Feature Selection for Machine Learning",
    category: { en: "Machine Learning", es: "Aprendizaje automático" },
    description_i18n: {
      en: "Feature selection for ML algorithms using evolutionary methods.",
      es: "Selección de características con métodos evolutivos para algoritmos de ML."
    },
    links: [{ name: "article", url: "https://towardsdatascience.com/evolutionary-feature-selection-for-machine-learning-7f61af2a8c12", icon: <SiMedium/> }],
    image: "https://miro.medium.com/max/1400/1*hgFe2YFnwzt_K2TfE7aSrQ.jpeg",
    target: "_blank",
    date: "2020-03-10"
  },
  {
    id: "blog-5",
    title: "Real-time anomaly detection with Apache Kafka and Python",
    category: { en: "Data Systems", es: "Sistemas de Datos" },
    description_i18n: {
      en: "Detect anomalies on Kafka streams with Python.",
      es: "Detecta anomalías en flujos de Kafka con Python."
    },
    links: [
      { name: "article", url: "https://towardsdatascience.com/real-time-anomaly-detection-with-apache-kafka-and-python-3a40281c01c9", icon: <SiMedium/> },
      { name: "repo", url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection", icon: <AiFillGithub/> }
    ],
    image: "https://miro.medium.com/max/1400/1*Xem1rbG0Fa8DAhtez7mvsA.jpeg",
    target: "_blank",
    date: "2019-12-05"
  },
  {
    id: "blog-4",
    title: "Serve a machine learning model using Sklearn, FastAPI, and Docker",
    category: { en: "MLOps", es: "MLOps" },
    description_i18n: {
      en: "Containerize and serve scikit‑learn models with FastAPI and Docker.",
      es: "Conteneriza y sirve modelos de scikit‑learn con FastAPI y Docker."
    },
    links: [
      { name: "article", url: "https://medium.com/analytics-vidhya/serve-a-machine-learning-model-using-sklearn-fastapi-and-docker-85aabf96729b", icon: <SiMedium/> },
      { name: "repo", url: "https://github.com/rodrigo-arenas/fast-ml-deploy", icon: <AiFillGithub/> }
    ],
    image: fastapiSklearn,
    target: "_blank",
    date: "2019-10-22"
  },
  {
    id: "blog-3",
    title: "Are You Still Using Grid Search for Hyperparameters Optimization?",
    category: { en: "Machine Learning", es: "Aprendizaje automático" },
    description_i18n: {
      en: "Smarter hyperparameter search beyond grid search.",
      es: "Búsqueda de hiperparámetros más inteligente que el grid search."
    },
    links: [{ name: "article", url: "https://towardsdatascience.com/hyperparameters-tuning-from-Grid2-search-to-optimization-a09853e4e9b8", icon: <SiMedium/> }],
    image: "https://miro.medium.com/max/1400/0*ZYC4nQw8g2dv7GCp",
    target: "_blank",
    date: "2019-08-30"
  },
  {
    id: "blog-2",
    title: "Tune Your Scikit-learn Model Using Evolutionary Algorithms",
    category: { en: "Machine Learning", es: "Aprendizaje automático" },
    description_i18n: {
      en: "Hyperparameter tuning and CV with evolutionary methods.",
      es: "Ajuste de hiperparámetros y validación cruzada con métodos evolutivos."
    },
    links: [{ name: "article", url: "https://towardsdatascience.com/tune-your-scikit-learn-model-using-evolutionary-algorithms-30538248ac16", icon: <SiMedium/> }],
    image: "https://miro.medium.com/max/1400/1*gmNunOZ86_URtnzuOA7oNg.jpeg",
    target: "_blank",
    date: "2019-07-18"
  },
  {
    id: "blog-1",
    title: "Manage your machine learning life cycle with MLflow in Python",
    category: { en: "MLOps", es: "MLOps" },
    description_i18n: {
      en: "Track experiments and models with MLflow.",
      es: "Gestiona experimentos y modelos con MLflow."
    },
    links: [
      { name: "article", url: "https://medium.com/analytics-vidhya/manage-your-machine-learning-lifecycle-with-mlflow-in-python-d678d5f3c682", icon: <SiMedium/> },
      { name: "repo", url: "https://github.com/rodrigo-arenas/mlflow-basics", icon: <AiFillGithub/> }
    ],
    image: "https://miro.medium.com/max/1400/1*FhKrMpcUPeZxNsZpKNv4BA.png",
    target: "_blank",
    date: "2019-05-12"
  },
  {
    id: "blog-0",
    title: "Workforce planning optimization using Python",
    category: { en: "Operations Research", es: "Investigación de Operaciones" },
    description_i18n: {
      en: "Find optimal staffing levels with Python.",
      es: "Encuentra niveles óptimos de personal con Python."
    },
    links: [{ name: "article", url: "https://towardsdatascience.com/workforce-planning-optimization-using-python-69af0ef9011a", icon: <SiMedium/> }],
    image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
    target: "_blank",
    date: "2019-03-07"
  }
];

export default blogConfig;

