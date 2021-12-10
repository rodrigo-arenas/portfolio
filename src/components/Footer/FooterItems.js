import footerConfig from "../../assets/configs/footerConfig";
import React from "react";
import "./Footer.css"

const FooterItems = () => {
    return (
        <ul className={"social-icons"}>
            {footerConfig.icons.map((item) => (
                    <li className={item.className} key={item.id}>
                        <a href={item.url}
                           style={{color: "#f5f5f5"}}
                           target={item.target}
                           rel={"noopener noreferrer"}>
                            {item.icon}
                        </a>
                    </li>

                )
            )}
        </ul>
    )

}

export default FooterItems