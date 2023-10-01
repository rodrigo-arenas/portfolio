import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Abhimanyu Sangitrao</strong>
        </h1>,
    titles: [
        "Data Scientist",
        "Machine Learning Enthusiast",
        "Python Backend Developer",
    ],
    about: {
        start: "I'm a passionate Data Scientist with over 4 years of experience working in the tech industry." +
            " Having worked with internationl clients, I possess strong communication," +
            " problem-solving, time management and leadereship skills." + 
            " What sets me apart is my relentless pursuit of innovation and my entrepreneurial mindset." +
            " I thrive on disrupting conventional methodologies and crafting data-driven solutions that drive tangible business impact." + 
            " My ability to communicate complex technical concepts and tell compelling data stories makes me a valuable asset in any team.",
        exit: " I'm fluent at Python, SQL, BI tools, and more, " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-3",
            title: "Data Scientist",
            company: "Amex (On-Site)",
            description: "Automated business processes using ML, built NLP based python applications," +
                " recognized for taking POC projects to production at a fast pace.",
            date: "2020-2022",
            icon: <DiCodeigniter/>,
            tags: ["ml", "python", "docker", "NLP", "SQL","automl"]
        },
        {
            id: "work-2",
            title: "Data Scientist",
            company: "IBM India Pvt. Ltd.",
            description: "Kick-started career in Data Science, developed core skills like Data preparation, pre-processing, " +
                "Exploratory Data Analysis, Data Visualization, Predictive Modelling, and building a full ML pipeline.",
            date: "2019-2022",
            icon: <FaMobileAlt/>,
            tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
        },
        {
            id: "work-1",
            title: "Data Science Internship",
            company: "Avianca",
            description: "Tech leader of a BI, Data Science and DBA team. " +
                "Build forecast models, data warehouse and Power BI dashboards.",
            date: "2018-2019",
            icon: <GiCommercialAirplane/>,
            tags: ["ml", "mssql", "python", "docker", "pbi", "azure"]
        },
        {
            id: "work-0",
            title: "BI Analyst",
            company: "Onelink BPO",
            description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
            date: "2016-2018",
            icon: <BsClipboardData/>,
            tags: ["python", "mssql", "pbi", "excel"]
        }
    ]
}


export default homeConfig