import Header from '../components/Header';
import PersonInformation from '../components/PersonInformation';
import Education from '../components/Education';
import About from '../components/About';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import { PersonCircle ,Tools, CodeSlash , Book } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';



let wExpDesc1="As a software engineer in training my primary responsibility was to acquire the necessary technical skills and knowledge required I worked on assigned coding tasks or in-house projects to practice writing code, writing test cases, performing unit tests, and ensuring code quality through debugging and collaborating with more experienced engineers to gain hands-on experience in software development."
let wExpDesc2="As a Junior Software Developer, you will play an integral role in the development and maintenance of software applications under the guidance of senior developers. You will contribute to the design, implementation, testing, and debugging of code while collaborating with cross-functional teams to deliver high-quality software solutions."
let wExpDesc3="As a software developer, you will be responsible for designing, coding, testing, and maintaining software applications. You will work closely with a team of developers, software engineers, and stakeholders to create high-quality software solutions that meet the needs of the organization. Your primary focus will be on developing efficient and scalable code using programming languages, frameworks, and tools."



let workExp=[{title:"Software Engineer in training", company:"Mediaverge", EmploymentPeriod:"2019-2020" , desc:wExpDesc1} ,
{title:"Junior Software Engineer", company:"Mediaverge", EmploymentPeriod:"2020-2021" , desc:wExpDesc2},
{title:"Software Engineer", company:"Mediaverge", EmploymentPeriod:"2021-2023" , desc:wExpDesc3}]


//default landing page of app.
let indexPage=()=>{
      return (
       <div className='container'>
            <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='column column-60' >
                        <aside>
                        {/* Add your content for the aside element here */}
                        <Header name="Calvin" surname="Govindsamy"></Header>
                            <Header sectionTitle={true} name="Software Developer"></Header>  
                            <PersonInformation Name="Calvin" Surname="Govindsamy" Email="calvinsg777@gmail.com" Phone="0726164382" ID="9410125101081" Nationality="SA" DL="code 14" githubLink="https://github.com/CalvinG21/punk-brewery-app.git">

                        </PersonInformation>
                        </aside>
                    </div>
                    <div className='column column-60'>
                        <main>
                        <div>
                            <div className='row'>
                                <h3> About</h3>
                            </div>
                            <div className='row'>
                            <About></About>
                            </div>
                        </div>
                        
                        </main>
                    </div>
                    <div className='column column-60' >
                       
                            <img src="/static/PngItem_2378106.png" width="20%" alt="my image" />
                       
                    </div>    
                </div>
            </div>  
            <div className='container'>
                <div className='row'>
                    <h3>Work experience</h3>
                </div>
                
                <div className='row' md={3}>             
                    <WorkExperience workExp={workExp}></WorkExperience>           
                </div>
            </div>

            <style jsx>{`
            h3 {
            color: blue;
            }
            div {
            background: white;
            }
            @media (max-width: 600px) {
            
            }
            `}</style>
            <style global jsx>{`
            body {
            background: lightgrey;
            }
            `}</style>

            </Layout>
        </div>    
            
            
            );
            }
export default indexPage