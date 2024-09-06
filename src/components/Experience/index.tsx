import { Timeline } from "antd";
import styled from "styled-components";

const StyledTimeline = styled(Timeline)`
  margin-top: 8%;
  
  @media (max-width: 768px) {
    margin-top: 5%;
  }
`;

const StyledTimelineItem = styled.div`
  h3 {
    font-size: 13px;
    margin-bottom: 8px;
  }

  h5 {
    font-size: 13px;
    margin-bottom: 4px;
  }

  p {
    margin: 0;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export function Experience() {
  return (
    <StyledTimeline
      items={[
        {
          children: (
            <StyledTimelineItem>
              <h5>Fevereiro 2021 -- Atual</h5>
              <p>Ligai</p>
              <p style={{ color: "black" }}>Desenvolvedor Full Stack</p>
              <p>Desenvolvo front end</p>
            </StyledTimelineItem>
          ),
        },
        {
          color: "gray",
          children: (
            <StyledTimelineItem>
              <h5>Fevereiro 2022 -- Agosto 2024</h5>
              <p>Martins Advogados</p>
              <p style={{ color: "black" }}>Desenvolvedor Full Stack</p>
              <p>Desenvolvo sistema de gerenciamento de processos</p>
            </StyledTimelineItem>
          ),
        },
        {
          color: "gray",
          children: (
            <StyledTimelineItem>
              <h5>Agosto 2019 -- Agosto 2020</h5>
              <p>Laboratório Inovação e Tecnologia IFCE</p>
              <p style={{ color: "black" }}>Desenvolvedor Mobile</p>
              <p>Desenvolvimento de um aplicativo mobile de mapeamento de árvores com React Native</p>
            </StyledTimelineItem>
          ),
        },
        {
          color: "gray",
          children: (
            <StyledTimelineItem>
              <h5>Julho 2018 -- Agosto 2018</h5>
              <p>Araújo Sat</p>
              <p style={{ color: "black" }}>Atendimento Técnico</p>
              <p>Atendimento para liberar conexão de cliente e instalação de internet domiciliar</p>
            </StyledTimelineItem>
          ),
        },
      ]}
    />
  );
}
