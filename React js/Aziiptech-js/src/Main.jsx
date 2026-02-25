import React from 'react'

import './Style.css';
import "./Utility.css";
import "./Media.css";
export default function Main() {
    return (
        <div>
            <nav>
                <div class="logo-box">
                    <img class="logo" src="image/azzip-blue1.png" />
                </div>
                <div class="btn1 btn-group">
                    <button type="button" class="b1 btn btn11 tbold">Home</button>

                    <div class="btn-group dropdown">
                        <button type="button" class="b1 btn btn11 tbold dropdown-toggle" data-bs-toggle="dropdown">
                            About US
                        </button>
                        <ul class="dropdown-menu">
                            <li><a href="#" class="dropdown-item tbold text-dark p-2">About us</a></li>
                            <li><a href="#" class="dropdown-item tbold text-dark p-2">CEO</a></li>
                            <li><a href="#" class="dropdown-item tbold text-dark p-2">Social Activity</a></li>
                            <li><a href="#" class="dropdown-item tbold text-dark p-2">team </a></li>
                            <li><a href="#" class="dropdown-item tbold text-dark p-2">Customer</a></li>
                        </ul>
                    </div>

                    <div class="btn-group dropdown">
                        <button type="button" class="b1 btn btn11 tbold dropdown-toggle" data-bs-toggle="dropdown">
                            Services
                        </button>
                        <ul class="dropdown-menu">
                            <li><a href="#" class="dropdown-item text-dark tbold p-2">eLogbook</a></li>
                            <li><a href="#" class="dropdown-item text-dark tbold p-2">App Development</a></li>
                            <li><a href="#" class="dropdown-item text-dark tbold p-2">Software Development</a></li>
                            <li><a href="#" class="dropdown-item text-dark tbold p-2">Dedicated Developer</a></li>
                            <li><a href="#" class="dropdown-item text-dark tbold p-2">SEO</a></li>
                        </ul>
                    </div>

                    <div class="btn-group dropdown">
                        <button type="button" class="b1 tbold btn btn11 dropdown-toggle" data-bs-toggle="dropdown">
                            Technologies
                        </button>
                        <ul class="dropdown-menu">
                            <li><a href="#" class="tbold dropdown-item text-dark p-2">React Native</a></li>
                            <li><a href="#" class="tbold dropdown-item text-dark p-2">Next.js</a></li>
                            <li><a href="#" class="tbold dropdown-item text-dark p-2">React.js</a></li>
                            <li><a href="#" class="tbold dropdown-item text-dark p-2">Node.js</a></li>
                            <li><a href="#" class="tbold dropdown-item text-dark p-2">Gallery</a></li>
                            <li><a href="#" class="tbold dropdown-item text-dark p-2">Blogs</a></li>
                        </ul>
                    </div>

                    <button type="button" class="b1 btn b1 tbold">Gallery</button>
                    <button type="button" class="b1 btn b1 tbold">Blogs</button>
                    <button type="button" class="b1 bm1 btn m b1 tbold">contact</button>
                </div>

                <div class="ham-box">
                    <img src="sign/hamburger1.svg" class="hamburger" />
                </div>
            </nav>
            {/* --  */}
            {/* navigation end  */}

            <div class="border"></div>

            {/* first container   */}
            <div class="con up-con container-fluid text-white  flex  main-container con1-1">

                <div class="left ">

                    <div class="row">
                        <div class="line">
                            <h1 class="tex  col-heading mt-4 gap-5 text-dark texbold">Web Development Company In India<span
                                class="text-primary">AzzipTech</span></h1>

                            <p class="con text-dark t1 tbold col-s-9 t-adjust">The Best Service For Our Precious Client</p>

                            <p class="align col-s-9  main-text text-dark t1 text-justify ">Namaste from AzzipTech! Where
                                innovation
                                meets integrity, and teamwork drives
                                success! At AzzipTech, we are not just another IT service provider, we are your strategic
                                partners
                                in navigating the ever-evolving landscape of technology. With a relentless commitment to
                                excellence
                                and a passion for pushing boundaries, we are here to turn your digital dreams into reality.
                            </p>

                            <p class="t1 align  main-text text-dark col-s-9">We are an IT company that loves working with
                                Reactjs,
                                Nodejs,
                                React
                                Native, and Nextjs. Whether you are here in India or across the globe, we are dedicated to
                                serving you with our tech skills.</p>
                        </div>

                    </div>
                </div>

                <div class="right">
                    <img src="image/hqdefault.jpg" class="thumbnail mimg" />
                </div>

            </div>

            {/* ====  */}
            {/* ===================  */}
            <div class="main">


                <div class="secondcon main ">


                    <div class="text-center introtext ">

                        <p class="font text-dark ">Our<span class="text-primary introtext font"> &nbsp;Products</span> </p>

                        <div class="manage">

                            <div class="sepration text-primary"></div>
                            <div class="sepration1 text-primary"></div>
                            <div class="sepration2 text-primary"></div>
                        </div>
                    </div>

                    <div class="flex1 con2-1 main-container2  ">

                        <div class="left1 ">

                            <p class=" fsize  text-block t1 text-justify heading texbold ">LMS with eLogBook for
                                Medical
                                College</p>

                            <p class="align col-s1  text-block t1 text-justify t2 main-text text-dark">Our advanced Learning
                                Management
                                System (LMS)
                                is a
                                comprehensive digital solution designed for educational institutions seeking to streamline
                                academic
                                delivery, assessments, and administration. Fully aligned with competency-based education and
                                adaptable
                                for both medical and non-medical colleges, it includes robust features such as course and
                                subject
                                management, eLogBook integration, MOOC support, attendance tracking, assignments, offline and
                                online
                                exams, student-teacher communication, and automated certification.</p>

                            <p class="align col-s1  text-block t1 text-justify t2 main-text text-dark">The platform supports
                                admin,
                                faculty, and
                                student
                                workflows with real-time data access, seamless communication tools, and built-in analytics —
                                making
                                it
                                the ideal solution for institutions aiming to digitize operations and enhance learning outcomes
                                in
                                line
                                with NMC and UGC guidelines.</p>

                            <button class="btn btn12 btn-primary">Book Your Appointment!</button>
                        </div>

                        <div class="right1">
                            <img src="image/LMS with eLogBook for Medical College.png" class="simg" />
                        </div>

                    </div>


                    {/* ======[ third container  ]=====  */}
                    <div class="thirdcon flex">

                        <div class="left2">
                            <img src="image/Logo.png" class="timg" />
                        </div>

                        <div class="right2">

                            <div class="th-line">



                                <p class=" fsize2  text-block t1 t3-1 text-justify texbold ">Med e-Logbook</p>
                                <p class="main-text text-dark align col-s1 t3-1">Med-eLogbook is a smart, student-friendly
                                    digital
                                    logbook
                                    solution for medical
                                    colleges, fully compliant with NMC (National Medical Commission) guidelines. Designed to
                                    simplify
                                    record-keeping and evaluation, it allows students to independently log competencies,
                                    maintain an
                                    ePortfolio, and track academic progress — all accessible anytime, from anywhere.</p>

                                <p class="main-text text-dark align col-s1 t3-1">Colleges can adopt it at zero cost, while
                                    students
                                    get
                                    affordable lifetime
                                    access with seamless teacher-student integration. With preloaded skills, real-time
                                    approvals,
                                    automated scoring, and secure access for faculty, this elogbook platform eliminates
                                    paperwork
                                    and
                                    brings transparency, efficiency, and convenience to modern medical education.</p>

                                <button class="btn btn1 btn-primary">Book Your Appointment!</button>
                            </div>
                        </div>
                    </div>

                    {/* === four container starting =  */}

                    <div class="forcon  mt-5 con4-1 ">
                        <div class="flex1">

                            <div class="left4">
                                <div class="for-line">
                                    <p class=" fsize  text-block  text-justify  texbold t-adjust1 heding-size">LMS for
                                        Autonomous
                                        colleges and LMS for Institutes </p>

                                    <p class="align main-text text-dark col-s4">Our custom-built Learning Management System for
                                        autonomous colleges
                                        is
                                        designed to simplify
                                        academic operations and enhance digital learning experiences. The platform supports
                                        curriculum mapping, internal assessments, attendance tracking, and student performance
                                        analytics, offering complete control over course delivery and evaluation.</p>

                                    <p class="align main-text text-dark col-s4">Ideal for institutions with academic autonomy,
                                        it enables seamless
                                        exam
                                        management, gradebook
                                        integration, and digital resource sharing, ensuring transparency, scalability, and
                                        improved
                                        academic outcomes. Trusted by leading autonomous institutions, it’s a smart solution for
                                        colleges aiming to digitize and streamline their education systems.</p>
                                    <button class="btn btn1 btn-primary f-btn">Book Your Appointment!</button>
                                </div>

                            </div>

                            <div class="right4">
                                <img src="image/e-logbook-and-lms.png" class="fimg" />
                            </div>

                        </div>

                    </div>

                    {/* ==  */}


                    {/* =four container ending   */}


                    {/* card Description starting here   */}

                    <div class="container-fluid con-fl1 ">

                        <div class="text-center introtext  ">

                            <p class="font text-dark  mt">Our<span class="text-primary introtext font">
                                &nbsp;Products</span>
                            </p>

                            <div class="manage ">

                                <div class="sepration text-primary"></div>
                                <div class="sepration1 text-primary"></div>
                                <div class="sepration2 text-primary"></div>
                            </div>

                        </div>

                        <div class="card-container card-block ">


                            <div class="flex-1 c-flex">

                                {/* card 1  */}
                                <div class="card mt-5 img-rounded">
                                    <img src="card/i1.avif" style={{ width: "100%;" }} />

                                    <div class="card-body">
                                        <div class="card-title text-dark h4">Web <span class="text-primary">Development</span>
                                        </div>
                                        <div class="card-text text-dark ">We Help Identify the best way to improve your business
                                        </div>

                                        <a href="#" class="text-secondary py-5">Learn more</a>
                                    </div>
                                </div>

                                {/*card 2   */}
                                <div class="card mt-5 img-rounded">
                                    <img src="card/i2.avif" style={{width: "100%;"}} />

                                    <div class="card-body">
                                        <div class="card-title text-dark h4">APP <span class="text-primary">Development</span>
                                        </div>
                                        <div class="card-text text-dark">We Help Identify the best way to improve your business
                                        </div>

                                        <a href="#" class="text-secondary py-5">Learn more</a>
                                    </div>
                                </div>
                            </div>
                            {/*card 3   */}


                            <div class="flex-1 c-flex ">


                                <div class="card mt-5 img-rounded">
                                    <img src="card/i3.avif" style={{width: "100%;"}} />

                                    <div class="card-body">
                                        <div class="card-title text-dark h4">Dedicated <span
                                            class="text-primary">Development</span>
                                        </div>
                                        <div class="card-text text-dark">Where We Meet You, Where Talent Meets Opportunity</div>

                                        <a href="#" class="text-secondary py-5">Learn more</a>
                                    </div>
                                </div>

                                {/* card 4  */}
                                <div class="card mt-5 img-rounded">
                                    <img src="card/i4.avif" style={{width: "100%;"}} />

                                    <div class="card-body">
                                        <div class="card-title text-dark h4">Software <span
                                            class="text-primary">Development</span>
                                        </div>
                                        <div class="card-text text-dark">Get Your Hands On The Latest Technology</div>

                                        <a href="#" class="text-secondary py-5">Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* card Ending here -----------------  */}



                    {/*   */}
                    <div class="container-fluid con-fl2 ">
                        <div class="text-center introtext  ">

                            <p class="font text-dark ">Why<span class="text-primary introtext font"> &nbsp;AzzipTech
                                ?</span>
                            </p>

                            <div class="manage ">

                                <div class="sepration text-primary"></div>
                                <div class="sepration1 text-primary"></div>
                                <div class="sepration2 text-primary"></div>
                            </div>

                        </div>

                        {/*   {/* ==  */}
                        <div class=" ccon ccon-flex mt-5 ccon-fl">

                            <div class="ccon-flex ccon-block ">


                                <div class="cardimg ccon-flex ">
                                    <div class="cright"><img class="yimg" src="sign/yes-svgrepo-com.svg" /></div>
                                    <div class="cleft co">
                                        <p class="adjust  tbold1">50+ Successful</p>
                                        <p class="tbold-c">Projects</p>
                                    </div>
                                </div>

                                <div class="cardimg ccon-flex cm-2">
                                    <div class="cright"><img class="yimg" src="sign/yes-svgrepo-com.svg" /></div>
                                    <div class="cleft co">
                                        <p class="adjust  tbold1">Trusted by</p>
                                        <p class="tbold-c">Medical collage</p>
                                    </div>
                                </div>
                            </div>


                            <div class="ccon-block ccon-flex p2 ">

                                <div class="cardimg ccon-flex">
                                    <div class="cright"><img class="yimg" src="sign/yes-svgrepo-com.svg" /></div>
                                    <div class="cleft co">
                                        <p class="adjust  tbold1">Built with</p>
                                        <p class="tbold-c">Next.js, Node.js, React Native</p>
                                    </div>
                                </div>

                                <div class="cardimg ccon-flex cm-4">
                                    <div class="cright"><img class="yimg" src="sign/yes-svgrepo-com.svg" /></div>
                                    <div class="cleft co">
                                        <p class="adjust  tbold1">Fast Delivery</p>
                                        <p class="tbold-c">Strong Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*   */}


                        <div class="text-center introtext mar ">

                            <p class="font text-dark mt">we are happy to<span class="text-primary introtext font">
                                &nbsp;work with our clients</span>
                            </p>

                            <div class="manage ">

                                <div class="sepration text-primary"></div>
                                <div class="sepration1 text-primary"></div>
                                <div class="sepration2 text-primary"></div>
                            </div>
                        </div>
                        <div class="con-photo ">
                            <div class="img1"><img src="card/1-GMCB-Azziptech.jpg" /></div>
                            <div class="img1"><img src="card/11-NHL.jpg" /></div>
                            <div class="img1"><img src="card/2-aj-institute.jpg" /></div>
                            <div class="img1"><img src="card/5-business-insider.png" /></div>
                            <div class="img1"><img src="card/6-ima-bhavnagar.png" /></div>
                            <div class="img1"><img src="card/7-orrery-drugs.png" /></div>
                            <div class="img1"><img src="card/8-gjmedphc1.png" /></div>
                            <div class="img1"><img src="card/GMC Azziptech.png" /></div>



                        </div>

                    </div>
                    {/*   */}


                    <div class="container-fluid con-fl2  f-con-color">
                        <div class="text-center introtext  ">

                            <p class="font tbold ">What clients
                                <span class="text-primary introtext font"> &nbsp;saying</span>
                            </p>

                            <div class="manage ">

                                <div class="sepration text-primary"></div>
                                <div class="sepration1 text-primary"></div>
                                <div class="sepration2 text-primary"></div>
                            </div>

                        </div>


                        <div class="fcon">
                            <div id="demo" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
                                </div>

                                <div class="carousel-inner">

                                    <div class="carousel-item active  fimg " style={{width: "90%;"}}>
                                        <img src="fcon img/Business Insider Azziptech.jpg" class="d-block" />
                                        <div class="carousel-caption ">
                                            <h4>Web Development / App Development</h4>
                                            <p class="img-text">Working with Azziptech on the development of our website was an
                                                exceptional
                                                experience. Their expertise in Next.js and Node.js was evident throughout the
                                                project, resulting in a seamless and efficient platform. Azziptechs dedication
                                                to
                                                understanding our needs and delivering high-quality solutions surpassed our
                                                expectations. Their professionalism and collaborative approach made the entire
                                                process smooth and enjoyable. We highly recommend Azziptech for any web
                                                development
                                                needs and look forward to future collaborations.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item  fimg " style={{width: "90%;"}}>
                                        <img src="fcon img/Devarshi LMS Azziptech.png" class="d-block" />
                                        <div class="carousel-caption ">
                                            <h4>Web Development / App Development</h4>
                                            <p class="img-text">Devarshi Edutech is immensely grateful to Azziptech for their
                                                outstanding work on
                                                our
                                                website development. Their expertise in Next.js and Node.js has transformed our
                                                vision into a seamless and dynamic online platform. Azziptechs dedication,
                                                professionalism, and attention to detail have made the entire process smooth and
                                                efficient. We highly recommend Azziptech for their exceptional skills and
                                                commitment
                                                to excellence. Thank you for helping us elevate our online presence!</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item fimg " style={{width: "90%;"}}>
                                        <img src="fcon img/gjmedph azziptech.png" class="d-block" />
                                        <div class="carousel-caption ">
                                            <h4>Web Development</h4>
                                            <p class="img-text">GJMEDPH is delighted to commend Azziptech for their exceptional
                                                work in crafting
                                                our
                                                website. Through their mastery of PHP, Azziptech delivered a seamlessly
                                                functional
                                                platform that perfectly aligns with our requirements. Their professionalism,
                                                attention to detail, and timely delivery have been commendable. We highly
                                                recommend
                                                Azziptech for their outstanding performance and commitment to excellence. Thank
                                                you
                                                for helping us establish a robust online presence!</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item fimg " style={{width: "90%;"}}>
                                        <img src="fcon img/GMCB Azziptech.png" class="d-block" />
                                        <div class="carousel-caption ">
                                            <h4>Web Development / App Development</h4>
                                            <p class="img-text">EGMCB couldnt be happier with Azziptechs outstanding work on our
                                                website
                                                development.
                                                Their expertise in Next.js and Node.js truly shone through, delivering a
                                                top-notch
                                                platform that exceeded our expectations. Azziptechs professionalism, attention
                                                to
                                                detail, and proactive approach made the entire process seamless and enjoyable.
                                                We
                                                highly recommend Azziptech for their exceptional skills and dedication to client
                                                satisfaction. Looking forward to future collaborations!</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item fimg " style={{width: "90%;"}}>
                                        <img src="fcon img/IMA Bhavangar Azziptech.jpg" class="d-block" />
                                        <div class="carousel-caption ">
                                            <h4>Web Development / App Development</h4>
                                            <p class="img-text">IMA Bhavnagar is immensely grateful to Azziptech for their
                                                exceptional work in
                                                developing our website. With their expertise in PHP, Azziptech created a
                                                seamlessly
                                                functional platform that perfectly aligns with our organizations needs. Their
                                                professionalism, attention to detail, and timely delivery have been commendable.
                                                We
                                                highly recommend Azziptech for their outstanding performance and dedication to
                                                excellence. Thank you for helping us enhance our online presence!</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item fimg " style={{width: "90%;"}}>
                                        <img src="fcon img/Yuvraj of Bhavnagar azziptech.png" class="d-block" />
                                        <div class="carousel-caption ">
                                            <h4>Web Development / App Development</h4>
                                            <p class="img-text">YBFS extends its sincere gratitude to Azziptech for their
                                                exceptional work in
                                                creating our website. With their expertise in PHP, Azziptech delivered a
                                                seamless
                                                and functional platform tailored to our needs. Their professionalism, attention
                                                to
                                                detail, and efficient delivery exceeded our expectations. We highly recommend
                                                Azziptech for their stellar performance and dedication to client satisfaction.
                                                Thank
                                                you for helping us establish a strong online presence!</p>
                                        </div>
                                    </div>

                                </div>

                                <button class="carousel-control-prev svg " type="button" data-bs-target="#demo"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon sp"></span>
                                </button>
                                <button type="button" class="carousel-control-next svg" data-bs-target="#demo"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon sp"></span>
                                </button>

                            </div>

                        </div>
                        {/* ======= end   */}

                        {/* =======  */}
                        <div class="ficon">

                            <div class="fi-img">
                                <div class="d-color">
                                    <div class="fi-content text-white t-bold        text-center">
                                        <h1 class="h1text">Do You Need Custom <span class="text-primary">Development?</span>
                                        </h1>
                                        <h3 class="h3text">Our Services Cover A Wide Spectrum Sf Slatforms Snd Sechnologies.
                                        </h3>
                                        <h3 class="h3text">Call Us <span class="text-primary pnumber ">+917016115489</span> or
                                            You
                                            Can Mail To Reach US</h3>
                                        <button class="btn btn-primary">Book Your Appointment !</button>
                                    </div>
                                </div>
                            </div>

                            {/* sepration define  */}

                            <div class="border1 "></div>

                            {/* sepration define  */}

                            <div class="fotter-con  mt-5">
                                <div class="footer-left">
                                    <img src="image/azzip-blue1.png" class="fotter-log" />
                                    <p class="f-con">412, Meridian Square,Parimal Chowk Beside Home School, Waghawadi Road
                                        Bhavnagar, Gujarat, 364001</p>

                                    <div class="social-icon">
                                        <a href="https://www.instagram.com/azzip.tech"><img class="sicon "
                                            src="sign/instagram-svgrepo-com.svg" /></a>

                                        <a href="https://www.facebook.com/azzip.technologies"><img class="sicon"
                                            src="sign/facebook-svgrepo-com.svg" /></a>

                                        <a href="https://www.linkedin.com/company/azziptech"> <img class="sicon"
                                            src="sign/linkedin-svgrepo-com.svg" /></a>
                                        <a
                                            href="https://www.google.com/search?q=azziptech&rlz=1C1RXQR_enIN1021IN1021&oq=azziptech+&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGIAEMgcIAhAAGIAEMgYIAxBFGDsyBggEEEUYPDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPNIBCDI5OTFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x395f5a770ae3c23b:0x26addbc0cefafdeb,1,,,,"><img
                                                class="sicon" src="sign/google-plus-alt-svgrepo-com.svg" /></a>
                                    </div>
                                </div>

                                <div class="footer-right  gap-4 ">

                                    <div class="col-s-1">
                                        <h7 class="h5-color">USEFUL LINKS</h7><br />
                                        <a href="" class="text-dark t-size m-b">Home</a>
                                        <a href="" class="text-dark t-size">About Us</a>
                                        <a href="" class="text-dark t-size">Contact Us</a>
                                    </div>

                                    <div class="col-s-2">
                                        <h7 class="h5-color">OUR SERVICES</h7>
                                        <a href="" class="text-dark t-size m-b">Web Development</a>
                                        <a href="" class="text-dark t-size">App Development</a>
                                        <a href="" class="text-dark t-size">Software Development</a>
                                    </div>

                                    <div class="col-s-3">
                                        <h7 class="h5-color">CONTACTS</h7>
                                        <a href="" class="text-dark t-size m-b">+91 7016115489</a>
                                        <a href="" class="text-dark t-size">+91 8799401233</a>
                                        <a href="" class="text-dark t-size">azziptechnology@gmail.com</a>
                                    </div>

                                    <div class="col-s-4">
                                        <h7 class="h5-color">OUR POLICY</h7>
                                        <a href="" class="text-dark t-size m-b">Shipping policy</a>
                                        <a href="" class="text-dark t-size">terms and Conditions</a>
                                        <a href="" class="text-dark t-size">Cancellation and Refunds</a>
                                        <a href="" class="text-dark t-size">Privacy Policy</a>
                                    </div>

                                </div>
                            </div>
                            <div class="border1 "></div>
                            <p class="text-center text-gray-500 dark:text-gray-400 mt-3">© AzzipTech - All rights reserved</p>

                        </div>
                        {/* =======  */}
                    </div>
                    {/* =====================  */}
                    {/* -------------------------------------------  */}
                </div>
            </div>
        </div>
    )
}
