import footerConfig from "../../assets/configs/footerConfig";
import React from "react";
import "./Footer.css"

const FooterItems = () => {
    return (
        <div className={"social-icons"}>
            {footerConfig.icons.map((item) => (
                    <div className={item.className} key={item.id}>
                        <a href={item.url}
                           style={{color: "#f5f5f5"}}
                           target={item.target}
                           rel={"noopener noreferrer"}>
                            {item.icon}
                        </a>
                    </div>

                )
            )}
        </div>
    )

}

export default FooterItems