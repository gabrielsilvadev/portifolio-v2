import styles from "./styles";
import { useSpring } from "react-spring";
import profile from "../../assets/img/profile.png";
import { FaNode, FaReact, FaVuejs, FaPython } from "react-icons/fa";
import { SiTypescript, SiSqlite, SiPostgresql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { Experience } from "../../components/Experience";
import empresa from "../../assets/img/logo-blue-128px.png";
import { Education } from "../../components/Education";
import ProjectList from "../../components/Projects";
import {   FaInstagram, FaLinkedin, FaBlog, FaGithub, FaWhatsapp} from "react-icons/fa";

const { Container, Section, Image, Title, Description, IconContainer, Icon, Card, SocialContainer, SocialIcon } = styles;

export default function Home() {
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,-30px,0)' },
        to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
        config: { duration: 1000 },
    });

    const socialNetworks = [
        { name: 'GitHub', link: 'https://github.com/gabrielsilvadev', icon: <FaGithub size={20} /> },
        { name: 'Whatsapp', link: 'https://wa.me/5588993369546', icon: <FaWhatsapp size={20} /> },
        { name: 'Blog', link: 'https://ligai.netlify.app/', icon: <FaBlog size={20} /> },
        { name: 'Instagram', link: 'https://www.instagram.com/gabriel.silva.mllo/', icon: <FaInstagram size={20} /> },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/gabriel-silva-48052916b/', icon: <FaLinkedin size={20} /> },
    ];

    const projects = [
        {
            video: 'https://youtu.be/Mm0fURcD9DY',
            title: 'Martins Gerenciamento de Processos',
            url: "https://martins-gestao-processo.vercel.app/active-processes",
            description: 'O sistema de gerenciamento da Martins foi desenvolvido em Node.js com TypeScript, PostgreSQL, React com TypeScript, e integrações com as APIs do Google, além de utilizar a Gemini como assistente jurídico. Esse sistema auxilia o escritório de advocacia no registro de clientes e documentos, na gestão da agenda dos advogados, na emissão de documentos, e no registro de novos processos, tanto manualmente quanto por meio de um robô que automatiza a captura de processos no ESAJ. Além disso, o sistema monitora as movimentações processuais usando a API governamental (CNJ) e envia alertas por e-mail sobre novos processos e compromissos da agenda aos responsáveis.',
            stacks: ["NodeJS", "React", "TypeScript", "PostGres", "SqlLite", "Express", "Gemini", "Drive", "Docs"]
        },
        {
            video: "https://youtu.be/xkh0eQMCkjA",
            title: 'Blog Ligai',
            url: "https://ligai.netlify.app/",
            description: 'O blog "Se Ligai" foi desenvolvido em Node.js, React e Express, com artigos voltados para a área de programação. O conteúdo abrange desde arquiteturas até outros tópicos que estudo e crio, tanto para meu próprio aprendizado quanto para compartilhar com outras pessoas.',
            stacks: ["NodeJS", "React", "TypeScript", "SqlLite"]
        },
        {
            video: 'https://youtu.be/vJKbNJTiVCo',
            title: 'Portifolio Martins Advogados',
            url: "https://github.com/gabrielsilvadev/portifolio-martins",
            description: 'O portfólio do escritório Martins, desenvolvido em React com TypeScript, tem como objetivo apresentar os serviços disponíveis aos clientes, além de destacar a equipe e o escritório. Dessa forma, os clientes se sentem mais à vontade para escolher a especialidade que desejam.',
            stacks: ["React", "TypeScript", "Vite"]
        },
        {
            video: 'https://youtu.be/MHpbLbl0db8',
            title: 'Portifolio',
            url: "https://github.com/gabrielsilvadev/portifolio-v2",
            description: 'Portfólio pessoal desenvolvido em React e Vite, criado para me apresentar e compartilhar minha trajetória e projetos.',
            stacks: ["React", "TypeScript", "Vite"]
        }
    ];

    return (
        <Container>
            <Section style={{ ...fadeIn, background: "#f5f5f5" }} color="black">
                <div style={{ flex: 1, padding: "30px" }}>
                    <Title>Olá, Eu sou Gabriel Silva.<br /> Prazer em conhecê-lo!</Title>
                    <Description>
                        Atualmente, sou desenvolvedor pleno full stack na Ligai Integrações Inteligentes, atuando no desenvolvimento do principal produto da empresa com Node.js e Vue.js, focado na integração de sistemas para a área de turismo.
                    </Description>
                    <img src={empresa} style={{ height: "30px" }} />
                    <p>Minhas Stack de Tecnologia</p>
                    <IconContainer>
                        <Icon bgColor="#E8F5E9" iconColor="#68A063" hoverBgColor="#C8E6C9"><FaNode /></Icon>
                        <Icon bgColor="#E0F7FA" iconColor="#61DBFB" hoverBgColor="#B2EBF2"><FaReact /></Icon>
                        <Icon bgColor="#E8F5E9" iconColor="#4FC08D" hoverBgColor="#C8E6C9"><FaVuejs /></Icon>
                        <Icon bgColor="#E3F2FD" iconColor="#007ACC" hoverBgColor="#BBDEFB"><SiTypescript /></Icon>
                        <Icon bgColor="#FFFDE7" iconColor="#F7DF1E" hoverBgColor="#FFF9C4"><IoLogoJavascript /></Icon>
                        <Icon bgColor="#E3F2FD" iconColor="#306998" hoverBgColor="#BBDEFB"><FaPython /></Icon>
                        <Icon bgColor="#E3F2FD" iconColor="#4479A1" hoverBgColor="#BBDEFB"><SiSqlite /></Icon>
                        <Icon bgColor="#E3F2FD" iconColor="#4479A1" hoverBgColor="#BBDEFB"><SiPostgresql /></Icon>
                        <Icon bgColor="#E3F2FD" iconColor="#4479A1" hoverBgColor="#BBDEFB"><DiMsqlServer /></Icon>
                    </IconContainer>
                </div>
                <div style={{flex: 1, flexDirection: 'column', justifyContent: "space-between"}}>
                <Image src={profile} alt="Profile" />
                <SocialContainer>
                    {socialNetworks.map(network => (
                        <a key={network.name} href={network.link} target="_blank" rel="noopener noreferrer">
                            <SocialIcon>{network.icon}</SocialIcon>
                        </a>
                    ))}
                    
                </SocialContainer>
                </div>
            </Section>
            <Section style={{ ...fadeIn, background: "#f5f5f5" }}>
                <Card>
                    <Title>Sobre mim</Title>
                    <Description className="text">
                        Atualmente, sou desenvolvedor full stack no produto Ligai, um sistema de integração de inteligência artificial. Participo ativamente das reuniões e decisões relacionadas à implementação e aprimoramento de funcionalidades, tanto no front-end quanto no back-end. Contribuo para a criação de novos conectores, como Uber, Inter, entre outros. Além disso, colaboro com as equipes de comercial e produto, auxiliando na construção de robôs e na compreensão das necessidades dos clientes.
                    </Description>
                </Card>
                <Card>
                    <Title>Experiências</Title>
                    <Experience />
                </Card>
                <Card>
                    <Title>Educação</Title>
                    <Education />
                </Card>
            </Section>
            <Section style={{ ...fadeIn, background: "#f5f5f5" }}>
                <ProjectList projects={projects} />
            </Section>
        </Container>
    );
}
