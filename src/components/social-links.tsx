import { IconsSocial } from "./sub-components/icons-social";

export function SocialLinks (){
    return (
        <div id="social-links">
            <a href="https://api.whatsapp.com/send?phone=5544991142300&text=Ol%C3%A1%20*Felipe*%2C%20" target="_blank">
                <IconsSocial text="logo-whatsapp"/>
            </a>
            <a href="https://www.instagram.com/feebrgs" target="_blank">
                <IconsSocial text="logo-instagram" />
            </a>
            <a href="https://youtube.com.br" target="_blank">
                <IconsSocial text="logo-youtube" />
            </a>
            <a href="https://br.linkedin.com/in/felipe-borges-65b668223" target="_blank">
                <IconsSocial text="logo-linkedin" />
            </a>
        </div>
    );
}