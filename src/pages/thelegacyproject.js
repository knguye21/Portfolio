import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import Tag from '../components/Tag';
const TheLegacyProject = () => {
  return (
    <div className="font-sans mx-auto w-full max-w-screen-sm px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
        <Nav />
        <div className='text-sm p-10 rounded-lg space-y-10 text-neutral-900 bg-neutral-50 leading-normal'>
            <div className='flex flex-col'>
                <h1 className='font-serif text-3xl font-thin md:text-6xl'>The Legacy Project</h1>
                <Tag list={['web programming', 'PM', 'CSS']}/>
                <h3 className='text-2xl font-semibold pb-1.5'>[Context]</h3>
                <p><span className='text-stone-600'><a href='https://www.thelegacyproj.org/public' target='_blank'>The Legacy Project</a></span>
                    , Inc. (TLP) connects college students with local elders in their community with the purpose of building strong 
                    intergenerational relationships and documenting the life histories of seniors, ensuring that their legacies are preserved for years to 
                    come. The Legacy Project started as a Tufts University Club. However, they had a vision to expand it to multiple universities. When I 
                    picked up the project in August 2023, the product was built on a short time, was bloated with features, and was lacking an effortless 
                    user experience. As a product designer, it was my role to work alongside the client and the team to significantly improve the user 
                    experience of the product. Additionally, I was tasked with designing a hierarchy of distinct user types for the website. As a project manager, 
                    it was my role to oversee the project, coordinate the team, and delegate tasks to ensure the successful implementation of the project within 
                    the defined scope and timeline. The goal is to have it ready in 7 months.
                    <br/><br/>
                    <span>Frontend Developer</span>
                    Throughout the project, I worked as both a PM and frontend developer!!! 
                </p>
            </div>
            <div className='mb-5'>
                <h3 className='text-2xl font-semibold pb-1.5'>[The Challenge]</h3>
                <p>As a small recognized non-profit organization in Fall 2023, there were limited resources for the client to escalate 
                    the scale of their organization. The general feedback from the client was that the product was "too confusing." The product and development team 
                    focused on delivering a functional site rather than investing in the user experience. The design below shows The Legacy Project when it was a club 
                    and how it looked when developed as an application in previous year. 
                    <br/> <br/>
                    The images below shows The Legacy Project when it was a Tufts club and how it looked when developed as an application in 2022-2023.
                </p>
                <div className='flex flex-wrap mb-4 justify-center gap-10 mt-6'>
                    <div className='flex flex-col'>
                        <img src='/projects/thelegacyproject/lp1.png' className='rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md h-auto' alt="Design 1"/>
                        <p className='py-2'>Interface of all seniors. The same interface applies for Students tab.</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src='/projects/thelegacyproject/lp2.png' className='rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md h-auto' alt="Design 2"/>
                        <p className='py-2'>Interface for pending students who request to join club.</p>
                    </div>
                </div>
                <div className='flex flex-wrap mb-4 justify-center gap-10 mt-6'>
                    <div className='flex flex-col'>
                        <img src='/projects/thelegacyproject/lp3.png' className='rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md h-auto' alt="Design 3"/>
                        <p className='py-2'>Interface for adding a senior to the club.</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src='/projects/thelegacyproject/lp4.png' className='rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md h-auto' alt="Design 4"/>
                        <p className='py-2'>Interface for all the files that belong to that senior. <br/>
                        *Note that each senior gets one student*</p>
                    </div>
                </div>
                <p className='font-semibold pt-5'>WHAT DID THEY WANT?</p>
                <p>‍The client requested that I redesign the application to reflect the organization's expansion 
                    from a single chapter at Tufts University to including multiple chapters across different universities. 
                    This required redesigning the application to accommodate the growth from a localized club to a multi-chapter structure.
                    <br/> <br/>Here is a more concise and clear way to present the user functionality of three different roles:
                </p>
                <img src='/projects/thelegacyproject/admin.png' alt='admin flow' className='rounded-lg w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-auto py-5 mx-auto'/>
                <img src='/projects/thelegacyproject/chapterleader.png' alt='chapter leader flow' className='rounded-lg w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-auto py-5 mx-auto'/>
                <img src='/projects/thelegacyproject/member.png' alt='member flow' className='rounded-lg w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-auto py-5 mx-auto'/>
            </div>
            <div className='mb-5'>
                <h3 className='text-2xl font-semibold pb-1.5'>[Project Management]</h3>
                <p className='pb-2'>After thorough discussions with the client to understand their needs, I assembled a project team consisting of a tech 
                    lead and 11 student developers. To best suit the project's requirements, I adapted an Agile methodology. This allowed for iterative development, 
                    frequent feedback loops, and the flexibility to respond to changing priorities.
                    <br/> <br/>
                    The Agile (Scrum) approach enabled us to:
                </p>
                <ul className='list-disc pl-6 text-gray-700'>
                    <li>Quickly prototype and test design concepts with users.</li>
                    <li>Implement features in manageable sprints.</li>
                    <li>Incorporate client feedback throughout the process.</li>
                    <li>Adapt the roadmap as new requirements emerged.</li>
                </ul>
                <p className='pt-2'>This collaborative, iterative process ensured the final product aligned with the client's vision and provided an exceptional user experience.</p>
                <h6 className='font-semibold pt-5'>WHY AGILE?</h6>
                <p className='pb-2'>
                The project involved redesigning the hierarchy and developing a complex TypeScript-based React web application, which needed to incorporate some existing UI components from previous work. <br/><br/>
                The reason I adapted this project management methodology:
                </p>
                <ul className='list-disc pl-6 text-gray-700'>
                    <li>The original site was implemented with only React. I decided to then add Typescript. The use of TypeScript provided a robust type system that would help the team catch errors early and maintain code quality, especially when integrating with existing components. 
                        The iterative nature of Agile allowed us to gradually introduce TypeScript into the codebase, ensuring a smooth transition without disrupting the overall development pace.</li>
                    <li>The existing codebase contained component-based architecture. Emphasizing the concept of modularity, I intend to break down the user interface 
                        into reusable components, some of which were already available from previous development team. The Agile sprints enabled us to strategically plan the integration of these existing components, while also designing and implementing new features as needed.</li>
                    <li>The client's requirements were expected to evolve over the course of development. The Agile framework's emphasis on adaptability and continuous improvement was crucial 
                        in this regard. We were able to regularly review and adjust the product roadmap, adding, modifying, or deprioritizing features based on the client's changing needs and feedback.</li>
                    <li>The Agile methodology provided an effective way to manage the project's milestones and feature implementation. By dividing the work into short, time-boxed sprints, 
                        we could closely monitor progress, identify and resolve blockers, and ensure the team remained focused on the most valuable deliverables. 
                        Regular retrospectives also allowed us to reflect on our processes and make iterative improvements throughout the project.
                    </li>
                </ul>
            </div>
            <div className='mb-5'>
                <h3 className='text-2xl font-semibold pb-1.5'>[Schedule]</h3>
                <ul className='list-none pl-5 space-y-1'>
                    <li><span className='font-semibold'>Client Meeting</span>: Weekly Sprint</li>
                    <li><span className='font-semibold'>Planning with Tech Lead</span>: Weekly</li>
                    <li><span className='font-semibold'>Development Meeting</span>: 2x Weekly</li>
                    <li><span className='font-semibold'>Check-In with Developers (1-on-1)</span>: Biweekly</li>
                </ul>
            </div>
            <div className='mb-5'>
                <h3 className='text-2xl font-semibold pb-1.5'>[Tech Stack]</h3>
                <ul className='list-none pl-5 space-y-1 text-gray-700'>
                    <li><span className='font-semibold'>MongoDB</span>: database</li>
                    <li><span className='font-semibold'>Prisma</span>: the ORM to interact with documents in the database</li>
                    <li><span className='font-semibold'>Zod</span>: schema validation for RESTful API requests</li>
                    <li><span className='font-semibold'>Next.js 13</span>: React framework for routing</li>
                    <li><span className='font-semibold'>Typescript</span>: adds static typing</li>
                    <li><span className='font-semibold'>Google API</span>: how users document stories</li>
                    <li><span className='font-semibold'>Vercel</span>: deployment framework for Next.js app</li>
                    <li><span className='font-semibold'>GitHub Actions</span>: enforce code quality and status checks on pull requests</li>
                    <li><span className='font-semibold'>Vitest</span>: unit testing framework for Typescript application</li>
                </ul>
            </div>
            <div className='mb-5'>
                <h3 className='text-2xl font-semibold pb-1.5'>[Timeline]</h3>
                <p>During the first few months, I heavily prioritized the design work to keep it one step ahead of development. 
                    This way, as the developers completed each feature, I had the next set of designs ready to seamlessly transition 
                    into the upcoming sprint. <br/><br/>For unforeseen situations, I was quick to adapt and define a solution. Sometimes the 
                    solution is straightforward and gets us back on the timeline. Sometimes the solution requires the timeline to be pushed 
                    back a bit, but then I would consider how to readjust my plan for the future sprints.
                </p>
                <img src='/projects/thelegacyproject/timeline.png' alt='member flow' className='w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-auto mx-auto'/>
            </div>
            <div className='mb-5'>
                <h3 className='text-2xl font-semibold pb-1.5'>[Sprint Review & Retrospective]</h3>
                <p>During and after each sprint, I had the developers fill out a reflection, as shown below, on the progress update, what went well, what could be 
                    improved, and key takeaways. We'd then review these retrospectives as a team, allowing us to identify areas for improvement. I also regularly 
                    checked in with the tech lead to discuss what went well and what we could improve to help the developers. Maintaining open communication with 
                    the developers was crucial - I wanted them to feel empowered to apply their knowledge and continuously learn. Encouraging pair programming 
                    enabled the team to share skills and tackle problems collaboratively. This culture of feedback and shared learning helped me steadily improve 
                    the processes and deliver an exceptional product. <br/><br/>To foster a positive and engaging work environment, I always encouraged the developers and 
                    made an effort to keep the atmosphere upbeat and enjoyable. Whether it was sharing words of encouragement or organizing team-building activities, 
                    I wanted the developers to feel motivated and excited to come into the workspace each day. Also, each meeting had a different snacks!!! 
                    Have to keep the brain fuel going!!!
                </p>
                <div className='flex flex-wrap'>
                    <img src='/projects/thelegacyproject/sprint1.png' alt='member flow' className='rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md h-auto py-5 mx-auto'/>
                    <img src='/projects/thelegacyproject/sprint2.png' alt='member flow' className='rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md h-auto py-5 mx-auto'/>
                </div>
            </div>
            <div className='mb-5'>
                <h3 className='text-2xl font-semibold pb-1.5'>[Testing]</h3>
                <p>It's crucial to have a well-defined audit guideline and ensure that the development team conducts thorough testing and documentation. The audit identifies 
                    opportunities to improve regarding user interface testing, functionality testing, and usability testing. It is a great way to double check on any issues 
                    ranging from inconsistent UI to a broken button. I have written an audit guideline that serves as a framework to ensure a comprehensive assessment of the 
                    application's functionality, usability, security, and overall quality. By providing this guidance, the project team can systematically address the key 
                    areas of concern and document their findings effectively, and maybe uncover any other unknown test cases. <br/><br/>I used this for the development team to go 
                    through the web application and test. The feedbacks allowed me to plan and make any changes before handing it over to the client. I have also written 
                    an audit guideline for the client the application.
                </p>
                <div className='flex items-center justify-center space-x-10'>
                    <a href='https://docs.google.com/document/d/1n7jm5qdZsgw-CPEvZa5ZfpYncPy_-uHfRDcXShK0RWI/edit?usp=sharing' 
                    className='px-4 py-2 bg-stone-400 text-white rounded-lg font-semibold hover:bg-stone-600 transition duration-300'>
                        View Development Audit Guideline
                    </a>
                    <a href='https://docs.google.com/document/d/1pwD5Bwr1QatEy8FNuvNan1Dltt-7KARXAXbQOiqrkpU/edit?usp=sharing' 
                    className='px-4 py-2 bg-stone-400 text-white rounded-lg font-semibold hover:bg-stone-600 transition duration-300'>
                        View Client Audit Guideline
                    </a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default TheLegacyProject;
