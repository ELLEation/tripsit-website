//Import JS Dependancies
import Link from 'next/link'

//Import Component
import Accordion from "@components/utilities/Accordion"

const Volunteer = ({}) => {

    return (
        <section id='volunteer' className="w-full flex-center flex-col mt-16">
            <div className="text-center mb-4">
                <h1 className="section-title">Join Our Mission</h1>
                <p className="desc">At TripSit, we're a close-knit, volunteer-driven community. Whether you bring technical prowess, a knack for research, or simply a friendly spirit to chat in the lounge, there's a place for you here. Our ongoing development projects always welcome an extra pair of hands, and our drug databases eagerly await updates with the latest substances. Every piece of information benefits from meticulous review and proofreading. No contribution is too small, and every effort is deeply valued!</p>
            </div>
            {/* Accordion items will go here. */}
            <div className="w-full">
                <Accordion title={`Join the community!`}>
                    <p className="mb-3">Dive into our vibrant community, brimming with positive and like-minded individuals. Beyond our shared passions, we celebrate diverse interests, from gaming in our Steam community to showcasing our beloved pets, culinary adventures, and artistic endeavors. The heart and soul of our existence? Our phenomenal community! Take the leap, join our Discord, introduce yourself, and immerse in the camaraderie. It's an experience you'll cherish!</p>
                    <p>Our Discord also serves as the hub for project collaborations and open-source development endeavors. Whether you're keen to contribute or simply observe the evolution, Discord is your go-to platform!</p>
                </Accordion>
                <Accordion title={`Become a helper!`}>
                    <p className="mb-3">Do you share our passion for assisting others? You might be the perfect fit for our team. We're always on the lookout for enthusiastic additions to the TripSit Team. Begin your journey with the "Intro to TripSitting" course on our learning platform. This complimentary course equips you with the foundational skills to excel as a TripSitter and integrates your Discord account with your course progress.</p>
                    <p>Upon course completion, you'll have the opportunity to join us as a Helper, actively participating in TripSit sessions. Display consistent dedication and contribution, and we'll be thrilled to welcome you as a full-fledged TripSitter!</p>
                </Accordion>
                <Accordion title={`Help with research!`}>
                    <p className="mb-3">Interested in collaborating on our research projects? We'd love to have you on board. Start by joining our Discord and heading over to the #content room where all the brainstorming and discussions take place.</p>
                    <p className="mb-3">The realm of substances is continually expanding, and there's a constant need to refresh and augment our wiki. If you have expertise or insights, registration is open for contributions. All updates and new entries are channeled through our Discord for collaborative review and refinement.</p>
                    <p>Our learning platform is at the forefront of disseminating harm reduction knowledge. If you have ideas or content for new courses, we're all ears. And if you have a flair for data and details, our drug factsheet database beckons. Dive deeper into the Development section for a clearer picture of how you can play a part.</p>
                </Accordion>
                <Accordion title={`Assist with development!`}>
                    <div className="my-3">
                        <h1 className="text-center list-title">Services</h1>
                        <p className="my-1">All of our development is public on GitHub, and everything is coded in Javascript:</p>
                        <ul>
                            <li className="mb-1">- <Link className='text-blue-500' href='https://github.com/TripSit/TripBot/tree/main/src/api'>API</Link></li>
                            <li className="mb-1">- <Link className='text-blue-500' href='https://github.com/TripSit/webchat/'>Webchat</Link></li>
                            <li className="mb-1">- <Link className='text-blue-500' href='https://github.com/TripSit/TripBot'>TripBot</Link></li>
                            <li className="mb-1">- <Link className='text-blue-500' href='https://github.com/TripSit/tripbot-website'>TripBot's Website</Link></li>
                        </ul>
                    </div>
                    <div className="my-3">
                        <p className="mb-1">These projects have been converted to docker containers, but more work is needed to add some standard functionality to each container to make each project more uniform. Tasks include:</p>
                        <ul className="mb-4">
                            <li className="mb-1">- Add Sonar linting.</li>
                            <li className="mb-1">- Add Sentry error monitoring.</li>
                            <li className="mb-1">- Add Google Analytics.</li>
                            <li className="mb-1">- Add Donation buttons (Patreon/Kofi).</li>
                            <li className="mb-1">- Add Github actions (CodeQL).</li>
                            <li className="mb-1">- Add CI (Drone).</li>
                            <li className="mb-1">- Convert to TypeScript.</li>
                            <li className="mb-1">- Convert to Github pages (when possible).</li>
                            <li className="mb-1">- Integrate new website.</li>
                        </ul>
                        <p className="mb-4">Keep in mind that TripSit has a rich history spanning over a decade, built on legacy systems and a mosaic of documentation and code. Navigating and contributing might present its challenges initially. However, with perseverance, a willingness to learn, and a dash of patience, you'll find that no task is insurmountable.</p>
                        <h1 className="list-title">We're also open to new project ideas!</h1>
                    </div>
                    <div className="my-3">
                        <h1 className="text-center list-title">Android App</h1>
                        <p>Our Android app is functional, but we believe there's room for enhancement. If you have the skills and vision to elevate its performance and design, wev'd love to see your touch. Dive into the codebase and contribute: <Link className='text-blue-500' href={`https://github.com/TripSit/tripsit-mobile`}>Here</Link></p>
                    </div>
                    <div className="my-3">
                        <h1 className="text-center list-title">Main Website</h1>
                        <p>Our main website, built on NextJS, is envisioned as a unified platform, seamlessly integrating our diverse services. We welcome contributions of all sizes to enhance its functionality and user experience. Dive in and make a difference: <Link className='text-blue-500' href={`https://github.com/TripSit/website`}>Here</Link></p>
                    </div>
                </Accordion>
            </div>
        </section>
    )

}

export default Volunteer