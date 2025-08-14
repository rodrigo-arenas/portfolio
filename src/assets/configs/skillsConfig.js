import {
  SiPython,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiReact,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiSnowflake,
  SiApacheairflow,
  SiApachekafka
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloudIcon from "@mui/icons-material/Cloud";

const ICON_SIZE = 50;

const skillsConfig = {
  mainSkills: [
    { id: "skills-main-python", className: "skill-icon", icon: <SiPython size={ICON_SIZE} />, text: "Python" },
    { id: "skills-main-postgres", className: "skill-icon", icon: <SiPostgresql size={ICON_SIZE} />, text: "Postgres" },
    { id: "skills-main-mssql", className: "skill-icon", icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />, text: "MSSQL" },
    { id: "skills-main-docker", className: "skill-icon", icon: <SiDocker size={ICON_SIZE} />, text: "Docker" },
    { id: "skills-main-azure", className: "skill-icon", icon: <CloudIcon sx={{ fontSize: ICON_SIZE }} />, text: "Azure" },
    { id: "skills-main-git", className: "skill-icon", icon: <FaGitAlt size={ICON_SIZE} />, text: "Git" }
  ],
  complementarySkills: [
    { id: "skills-comp-mysql", className: "skill-icon", icon: <GrMysql size={ICON_SIZE} />, text: "MySQL" },
    { id: "skills-comp-redis", className: "skill-icon", icon: <SiRedis size={ICON_SIZE} />, text: "Redis" },
    { id: "skills-comp-bash", className: "skill-icon", icon: <TerminalIcon sx={{ fontSize: ICON_SIZE }} />, text: "Bash / Terminal" },
    { id: "skills-comp-snowflake", className: "skill-icon", icon: <SiSnowflake size={ICON_SIZE} />, text: "Snowflake" },
    { id: "skills-comp-airflow", className: "skill-icon", icon: <SiApacheairflow size={ICON_SIZE} />, text: "Airflow" },
    { id: "skills-comp-js", className: "skill-icon", icon: <SiJavascript size={ICON_SIZE} />, text: "JS" },
    { id: "skills-comp-css", className: "skill-icon", icon: <SiCss3 size={ICON_SIZE} />, text: "CSS 3" },
    { id: "skills-comp-html", className: "skill-icon", icon: <SiHtml5 size={ICON_SIZE} />, text: "HTML 5" },
    { id: "skills-comp-react", className: "skill-icon", icon: <SiReact size={ICON_SIZE} />, text: "React" },
    { id: "skills-comp-kafka", className: "skill-icon", icon: <SiApachekafka size={ICON_SIZE} />, text: "Kafka" },
    { id: "skills-comp-powerbi", className: "skill-icon", icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />, text: "Power BI" }
  ]
};

export default skillsConfig;





