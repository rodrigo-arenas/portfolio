import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {SiMedium} from "react-icons/si";
import fastapiSklearn from "../images/fastapi_sklearn.png"

const blogConfig = [
    {
        id: "blog-8",
        title: "How to Solve Scheduling Problems in Python",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/how-to-solve-scheduling-problems-in-python-36a9af8de451",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/max/700/1*VKIGzmJrYBzcPlB6USx8OA.jpeg",
        description: "Use linear programming to minimize the difference between required and scheduled resources.",
        target: "_blank"
    },
    {
        id: "blog-7",
        title: "Adaptive Parameters Methods for Machine Learning",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/adaptive-parameters-methods-for-machine-learning-6f7101a9a71",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/max/700/1*DeZYSLcMdF58BeqemGhUhg.jpeg",
        description: "Let's explore some methods to adapt your parameters over time.",
        target: "_blank"
    },
    {
        id: "blog-6",
        title: "Evolutionary Feature Selection for Machine Learning",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/evolutionary-feature-selection-for-machine-learning-7f61af2a8c12",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/max/1400/1*hgFe2YFnwzt_K2TfE7aSrQ.jpeg",
        description: "Learn how to make feature selection for machine learning algorithms using evolutionary models.",
        target: "_blank"
    },
    {
        id: "blog-5",
        title: "Real-time anomaly detection with Apache Kafka and Python",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/real-time-anomaly-detection-with-apache-kafka-and-python-3a40281c01c9",
                icon: <SiMedium/>
            },
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",
                icon: <AiFillGithub/>
            }
        ],
        image: "https://miro.medium.com/max/1400/1*Xem1rbG0Fa8DAhtez7mvsA.jpeg",
        description: "Learn how to make predictions over streaming data coming from Kafka using Python.",
        target: "_blank"
    },
    {
        id: "blog-4",
        title: "Serve a machine learning model using Sklearn, FastAPI, and Docker",
        links: [
            {
                name: "article",
                url: "https://medium.com/analytics-vidhya/serve-a-machine-learning-model-using-sklearn-fastapi-and-docker-85aabf96729b",
                icon: <SiMedium/>
            },
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/fast-ml-deploy",
                icon: <AiFillGithub/>
            }
        ],
        image: fastapiSklearn,
        description: "Get your model machine learning model to production as a containerized API.",
        target: "_blank"
    },
    {
        id: "blog-3",
        title: "Are You Still Using Grid Search for Hyperparameters Optimization?",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/hyperparameters-tuning-from-grid-search-to-optimization-a09853e4e9b8",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/max/1400/0*ZYC4nQw8g2dv7GCp",
        description: "Let's discuss the ideas behind how to search in a smart fashion the hyperparameters for your machine learning models.",
        target: "_blank"
    },
    {
        id: "blog-2",
        title: "Tune Your Scikit-learn Model Using Evolutionary Algorithms",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/tune-your-scikit-learn-model-using-evolutionary-algorithms-30538248ac16",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/max/1400/1*gmNunOZ86_URtnzuOA7oNg.jpeg",
        description: "Scikit-learn hyperparameters tuning with evolutionary algorithms and cross-validation.",
        target: "_blank"
    },
    {
        id: "blog-1",
        title: "Manage your machine learning life cycle with MLflow in Python",
        links: [
            {
                name: "article",
                url: "https://medium.com/analytics-vidhya/manage-your-machine-learning-lifecycle-with-mlflow-in-python-d678d5f3c682",
                icon: <SiMedium/>
            },
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/mlflow-basics",
                icon: <AiFillGithub/>
            }
        ],
        image: "https://miro.medium.com/max/1400/1*FhKrMpcUPeZxNsZpKNv4BA.png",
        description: "Enable collaboration across data scientists; gain control over different models versions, " +
            "multiple experiments within the same problem, and models management and deployment.",
        target: "_blank"
    },
    {
        id: "blog-0",
        title: "Workforce planning optimization using Python",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/workforce-planning-optimization-using-python-69af0ef9011a",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
        description: "Learn how to find the optimal number of positions needed to manage incoming traffic.",
        target: "_blank"
    }
]

export default blogConfig