import styles from './styles'; 
import stylesIcons from "../../pages/Home/styles"
import { FaNode, FaReact, FaVuejs, FaPython, FaGoogleDrive } from "react-icons/fa";
import { SiTypescript, SiMysql, SiPostgresql, SiSqlite, SiExpress, SiVite, SiGooglegemini, SiGoogledocs} from "react-icons/si";
import ReactPlayer from 'react-player/youtube'

const { ProjectCard, ProjectVideo, ProjectText } = styles
const {Icon, IconContainer} = stylesIcons

const ProjectList = ({ projects }) => {
  const stacks ={
   NodeJS: <FaNode size={20} title='NodeJS'/>,
   React: <FaReact size={20} title='React'/>,
   Vue: <FaVuejs size={20} title='Vue'/>,
   Python: <FaPython size={20} title='Python'/>,
   TypeScript: <SiTypescript size={20} title='TypeScript'/>,
   PostGres: <SiPostgresql size={20} title='PostgresSQL'/>,
   SqlLite: <SiSqlite size={20} title='SqlLite'/>,
   Express: <SiExpress size={20} title="Express"/>,
   Vite: <SiVite size={20} title='Vite'/>,
   Gemini: <SiGooglegemini size={20} title='Gemini'/>,
   Drive: <FaGoogleDrive size={20} title='Drive'/>,
   Docs: <SiGoogledocs size={20} title='Docs'/>
  }
    return (
      <div >
        {projects.map((project, index) => (
          <ProjectCard key={index}>
           <ProjectVideo url={project.video} controls  width={500}height={250}  />
            <ProjectText>
              <h2><a href={project.url} target="_blank">{project.title}</a></h2>
              <p>{project.description}</p>
              <IconContainer>
                {project.stacks.map(stack => (
                  <Icon bgColor="#E3F2FD" hoverBgColor="#E3F2FD" width="35px" height="35px">
                    {stacks[stack]}
                  </Icon>
                ))}
              </IconContainer>
            </ProjectText>
          </ProjectCard>
        ))}
      </div>
    );
  };
  
  export default ProjectList;
