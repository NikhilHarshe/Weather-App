import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
// import { TypeAnimation } from 'react-type-animation';
import CTAButton from "../Components/HomeComponents/Button"
import CodeBlocks from '../Components/HomeComponents/CodeBlock';
import HighlightText from '../Components/HomeComponents/HighlightText';
import Timeline from "../Components/HomeComponents/Timeline"
import Member from '../Components/HomeComponents/Member';
// import { TeamMembersData } from '../data/TeamMembersData';
// import { FacultyMembersData } from '../data/FacultyMembersData';
import { memberEndpoints } from '../services/apis';
import { setLoading } from '../slices/authSlice';
import { apiConnector } from '../services/apiConnector';


const Home = () => {

    const [TeamMembersData, setTeamMembersData] = useState([]);
    const [FacultyMembersData, setFacultyMembersData] = useState([]);

    
    useEffect(() => {
        const fetchData = async (accountType) => {
            let response = null;
            setLoading(true)
            try {
                // console.log("accoutType in Home ", accountType);
                response = await apiConnector("POST", memberEndpoints.GET_ALL_MEMBERS_DETAILS, {accountType})
    
                // setTeamMembersData(res?.data?.data);
                // console.log("This is event data1...", eventsData)
            } catch (error) {
                console.log("Could not fetch Events.", error)
            }
            setLoading(false)
            return response;
        }
        const fetchDataAndSetState = async () => {
            const team = await fetchData("TeamMember");
            setTeamMembersData(team?.data?.data);
            // setTeamMembersData(team);
            const faculty = await fetchData("Faculty");
            setFacultyMembersData(faculty?.data?.data);
        };
    
        fetchDataAndSetState();
    }, []);

    // console.log("TeamMemberData1 ", TeamMembersData);
    // console.log("FacultyMembersData1 ", FacultyMembersData);


    return (
        <div className=' text-gray-600  body-font'>
            {/* section 1 */}
            <div className=' w-10/12 mx-auto'>
                <CodeBlocks
                    position={"lg:flex-row"}
                    heading={
                        <div className="text-4xl font-semibold h-[85px] overflow-hidden">
                            Empower Your
                            <HighlightText text={"Soft Skills"} /> with Our PICSEL Community!
                        </div>
                    }
                    subheading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    ctabtn1={{
                        btnText: "Try it Yourself",
                        link: "/signup",
                        active: true,
                    }}
                    ctabtn2={{
                        btnText: "Learn More",
                        link: "/signup",
                        active: false,
                    }}
                    codeColor={"text-yellow-400"}
                    codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                    backgroundGradient={<div className="codeblock1 absolute"></div>}
                />
            </div>

            {/* section 2 */}
            <section className=' bg-gray-900 '>
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
                    {/* Job that is in Demand - Section 1 */}
                    <div className="mb-10 w-11/12 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                        <div className="text-4xl font-semibold lg:w-[45%] text-blue-50">
                            Learn teamwork essentials for {" "}
                            <HighlightText text={"effective collaboration"} />
                        </div>
                        <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                            <div className="text-[16px] text-gray-400">
                                The modern Picsel is the dictates its own terms. Today, to
                                be a competitive specialist requires more than professional
                                skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="">Learn More</div>
                            </CTAButton>
                        </div>
                    </div>

                    {/* Timeline Section - Section 2 */}
                    <Timeline />

                    {/* Learning Language Section - Section 3 */}
                    {/* <LearningLanguageSection /> */}
                </div>
            </section>

            {/* section 3 */}
            <section className="bg-white">
                <div className=' w-10/12 mx-auto'>
                    <div class=" px-5 pt-24 py-4 ">
                        <div class="flex flex-col text-center w-full mb-20">
                            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                        </div>
                        <div className=' flex flex-wrap -m-4 mx-auto'>
                            <Member membersData={TeamMembersData} />
                        </div>
                        {/* <div className=' flex justify-end mt-6'>
                            <CTAButton active={true} linkto={"#"}>
                                <div className=" ">Know More</div>
                            </CTAButton>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <section className="bg-white">
                <div className=' w-10/12 mx-auto'>
                    <div class=" px-5 pt-24 py-24 ">
                        <div class="flex flex-col text-center w-full mb-20">
                            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR FACULTY</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                        </div>
                        {/* <div class="flex flex-wrap -m-4 mx-auto">
                            {
                                membersData.map((member) => (
                                    <Member key={member.id} member={member} />
                                ))
                            }
                        </div> */}

                        <div className=' flex flex-wrap mx-auto'>
                            <Member membersData={FacultyMembersData} />
                        </div>


                        {/* <div className=' flex justify-end mt-6'>
                            <CTAButton active={true} linkto={"#"}>
                                <div className=" ">Know More</div>
                            </CTAButton>
                        </div> */}
                    </div>
                </div>
            </section >

            {/* Footer */}
            < Footer />
        </div >
    )
}

export default Home
