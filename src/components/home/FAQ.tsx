import Accordion from "@components/utilities/Accordion"

const FAQ = ({}) => {

    return (
        <section id='faq' className="w-full flex-center flex-col mt-16">
            <div className="text-center">
                <h1 className="section-title">Frequently Asked Questions</h1>
                <p className="desc">Answers to our most commonly asked questions. Is your question not here? Contact us using a method below!</p>
            </div>
            <div className="w-full mt-4">
                <Accordion title={`Can I print the combo chart?`}>
                    <p className="my-3 desc">TripSit hereby grants you a non-exclusive, non-transferable license to use, reproduce, distribute, and display images and content from TripSit, in accordance with the following conditions:</p>
                    <p className="my-3"><h1 className="list-title">Non-commercial Use Only: </h1>You are permitted to use our images and content for purposes other than commercial exploitation. This entails that you may print, distribute, or display the images and content, but you are prohibited from selling them or using them in any manner from which you might derive direct or indirect monetary benefit.</p>
                    <p className="my-3"><h1 className="list-title">Attribution: </h1>Any reproduction or distribution of our images or content must attribute credit to TripSit. This can be done by placing our logo with URL in proximity to the image or content.</p>
                    <p className="my-3"><h1 className="list-title">No Derivative Works: </h1>You are free to use our images and content in their original form. However, you are restricted from modifying, altering, or creating derivative versions unless you obtain express written consent from TripSit.</p>
                    <p className="my-3"><h1 className="list-title">No Warranty: </h1>Our images and content are provided "as is" without any form of warranty. TripSit shall not bear any liability for losses, damages, or claims stemming from your utilization of the images and content.</p>
                    <p className="my-3"><h1 className="list-title">Termination: </h1>Breaching any term of this agreement will result in the immediate revocation of your license to use our images and content. Furthermore, TripSit retains the right to terminate this license at its discretion and at any time. This clause is a standard legal provision, and we do not anticipate enacting it arbitrarily.</p>
                    <p className="my-3"><h1 className="list-title">Reservation of Rights: </h1>All rights not explicitly conferred by this agreement remain the property of TripSit. We also reserve the right to amend the conditions of this license as circumstances dictate.</p>
                    <p className="my-3 desc">By leveraging our images and content, you are confirming your acceptance of and compliance with the terms delineated above. We earnestly hope our materials prove beneficial for your non-commercial ventures.</p>
                    <p className="my-3 desc">For inquiries or if you wish to seek permissions beyond the scope of this license, please reach out through one of our contact methods below.</p>
                </Accordion>
                <Accordion title={`What happened to the IRC?`}>
                    <p className="my-3">Over a decade, we faced numerous challenges with IRC that remained unresolved. Given our resource constraints, ensuring a high-quality chat experience on IRC became untenable.</p>
                    <p className="my-3">Turning to Discord, we found the security and user-friendly features that we had longed for with IRC. Furthermore, our Discord bot has already made significant positive impacts in the harm reduction communities of Bluelight and r/Drugs.</p>
                    <p className="my-3">While the IRC remains accessible, its use is limited to those with pre-existing accounts. We may consider new account creation on a selective basis, but we currently have no intentions of reopening the IRC to the general public. Importantly, the IRC is fully integrated with Discord, ensuring that no conversation is missed. Additionally, we're in the process of setting up a Matrix server, which aims to address any privacy concerns associated with Discord and our reservations about relying on older software platforms.</p>
                </Accordion>
                <Accordion title={`Can I interview TripSit?`}>
                    <p className="my-3">TripSit operates as a volunteer-driven organization, and many of our members are engaged in full-time commitments. While our availability for formal interviews might be limited, we're always open to addressing questions and engaging in discussions. The most effective way to reach out to our team is via our Discord.</p>
                </Accordion>
                <Accordion title={`I sent an email and you didn't respond, what gives?`}>
                    <p className="my-3">We apologize for the oversight. As a tight-knit volunteer team, we occasionally struggle to keep up with the influx of emails. We're striving to improve our response time. For a quicker response or more direct engagement, reaching out to us on Discord is highly recommended.</p>
                </Accordion>
            </div>
        </section>
    )
}

export default FAQ