import styled from 'styled-components';
import { Divider } from 'antd';

export function Education() {
    return (
        <EducationContainer>
            <Divider />
            <EducationItem>
                <h3>Sistema de Informações IFCE Campus Crato</h3>
                <h6>Agosto 2019 -- Janeiro 2025</h6>
            </EducationItem>
            <Divider />
            <EducationItem>
                <h3>Técnico em Informática IFCE Campus Crato</h3>
                <h6>Janeiro 2016 -- Dezembro 2018</h6>
            </EducationItem>
            <Divider />
        </EducationContainer>
    );
}

const EducationContainer = styled.div`
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const EducationItem = styled.div`
    margin-bottom: 20px;

    h3 {
        font-size: 1.5em;
    }

    h6 {
        font-size: 1em;
        color: #555;
    }

    @media (max-width: 768px) {
        h3 {
            font-size: 1.2em;
        }

        h6 {
            font-size: 0.9em;
        }
    }
`;
