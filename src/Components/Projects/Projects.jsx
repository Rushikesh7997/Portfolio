import React from 'react';
import { FaGithub, FaLink, FaNodeJs } from 'react-icons/fa';
import {
    ProjectDiv,
    Row,
    ServiceBox,
    ServiceBoxHeader,
    ServiceBoxP,
    A,
    BoxDiv,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { AiFillGithub } from 'react-icons/ai';
import { FaHtml5, FaReact, FaJs, FaCss3 } from 'react-icons/fa';
import { SiMongodb, SiNodeDotJs, SiRedux, SiHeroku } from 'react-icons/si';
// import { SiExpress, SiMaterialui } from 'react-icons/si/SiExpress';

import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
    const projects = [
        {
            id: 1,
            project_name: 'Flipkart',
            image: 'https://github.com/Rushikesh7997/Sreenshots/blob/main/flipkart-1.PNG?raw=true',
            project_desc:
                'This is an E-Commerce website which speciaizes in selling clothes and styling products. The website provides 800 brands and 33,000 products of different types of clothes, watches, sunglasses, shoes etc.',
            deploy_link: 'https://flipkart01-clone.netlify.app/',
            repo_link: 'https://github.com/Rushikesh7997/Flipkart-Clone',
            tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs /> ,<AiFillGithub />,],
        },
        {
            id: 2,
            project_name: 'Tic-Tac-Toe',
            image: 'https://github.com/Rushikesh7997/Sreenshots/blob/main/Tie-tac-toe%20game%201.PNG?raw=true',
            project_desc:
                'Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players.It is Mind refreshing game It is created with the help of JavaScript Html and Css. ',
            deploy_link: 'https://dainty-semifreddo-4e54b0.netlify.app/',
            repo_link: 'https://github.com/Rushikesh7997/Tic-Tac-Toe',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                <FaNodeJs />,
                <AiFillGithub />,
            ],
        },
        {
            id: 3,
            project_name: 'To-Do-List',
            image: 'https://github.com/Rushikesh7997/Sreenshots/blob/main/to-do%201.PNG?raw=true',
            project_desc:
                "ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do. It is helpful in planning our daily schedules. It is created by JavaScript, Html, Css languages.",
            deploy_link: 'https://iridescent-granita-ec6794.netlify.app/',
            repo_link: 'https://github.com/Rushikesh7997/To-Do-List-App',
            tech_stack: [
                // <FaReact />,
                // <SiRedux />,
                // <SiMaterialui />,
                // <SiMongodb />,
                // <SiExpress />,
                <FaHtml5 />,
                <FaCss3 />,
                <AiFillGithub />,
                <FaJs />,
                <FaNodeJs />,
            ],
        },
    ];

    return (
        <Container className='projects'>
            <ProjectDiv>
                <Common>
                    <H1>Projects</H1>
                </Common>
                <Row>
                    {projects.map((item) => (
                        <BoxDiv key={uuidv4()}>
                            <ServiceBox>
                                <img
                                    src={item.image}
                                    alt='icon'
                                    style={{ width: '100%' }}
                                />
                                <div style={{ margin: '25px' }}>
                                    <ServiceBoxHeader
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.project_name}
                                    </ServiceBoxHeader>
                                    <ServiceBoxP>
                                        {item.project_desc}
                                    </ServiceBoxP>
                                    {/* <a href="">Read more</a> */}
                                    <div
                                        style={{
                                            margin: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.tech_stack.map((item) => (
                                            <div
                                                key={uuidv4()}
                                                className='iconsTechStack'
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <A
                                        href={item.repo_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaGithub /> Code
                                    </A>
                                    <A
                                        href={item.deploy_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaLink /> Demo
                                    </A>
                                </div>
                            </ServiceBox>
                        </BoxDiv>
                    ))}
                </Row>
            </ProjectDiv>
        </Container>
    );
};

export default Projects;
