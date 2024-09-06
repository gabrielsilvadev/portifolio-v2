import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube'

export default {
  ProjectCard: styled.div`
    display: flex;
    width: 100%; 
    min-height: 30vw; 
    align-items: center;
    padding: 0;  
    margin: 0 0 20px 0;  
    box-sizing: border-box;

    @media (max-width: 800px) {
      flex-direction: column;
      height: auto;
      padding: 0;
    }
  `,

  ProjectVideo: styled(ReactPlayer)`
    width: 45%;
    border-radius: 20px;

    @media (max-width: 800px) {
      width: 100%;
      height: auto;
    }
  `,

  ProjectText: styled.div`
    width: 55%;  /* Ajusta a largura do texto para dar mais espaço ao vídeo */
    margin-left: 15px;  /* Adiciona uma pequena margem esquerda */

    @media (max-width: 800px) {
      width: 100%;
      margin-left: 0;
      margin-top: 15px;
      text-align: center;
    }
  `,

  IconContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px; /* Adiciona espaço entre os ícones */

    @media (max-width: 800px) {
      justify-content: center;
      margin-top: 10px;
    }
  `,

  Icon: styled.div`
    background-color: ${(props) => props.bgColor};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.hoverBgColor};
    }

    @media (max-width: 800px) {
      width: 30px;
      height: 30px;
    }
  `,
};
