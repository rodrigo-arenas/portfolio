import footerConfig from "../../assets/configs/footerConfig";
import React from "react";
import "./Footer.css"

const FooterItems = () => {
    return (
        <div className={"social-icons"}>
            {footerConfig.icons.map((item) => (
                <a href={item.url}
                    className={item.className} key={item.id}
                    style={{color: "#f5f5f5"}}
                    target={item.target}
                    rel={"noopener noreferrer"}>
                    {item.icon}
                </a>

                )
            )}
        </div>
    )

}

export default FooterItems