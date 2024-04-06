const Resources = ({}) => {

    return (
        <section id='resources' className="w-full flex-center flex-col mt-16">
            <div className="text-center">
                <h1 className="section-title">RESOURCES</h1>
                <span className="mt-3 desc">TripSit offers various resources, all free of charge, and maintained by the community.</span>
            </div>
            <div className="grid grid-cols-1 gap-16 w-full mt-6 text-center md:grid-cols-3">
                <div className="glassmorphism hover:scale-110">
                    <h1 className='list-title'>Combo App</h1>
                    <p>Explore our innovative Combo Chart, a must-see resource for informed substance combinations. Dive in now!</p>
                </div>
                <div className="glassmorphism hover:scale-110">
                    <h1 className='list-title'>Drug Factsheets</h1>
                    <p>Dive into our comprehensive Drug Factsheets for concise and essential insights on various substances.</p>                    
                </div>
                <div className="glassmorphism hover:scale-110">
                    <h1 className='list-title'>Substance Wiki</h1>
                    <p>Immerse yourself in our extensive Substance Wiki, brimming with detailed insights on drugs and herbal remedies. We invite you to register and contribute informed edits. Eager to collaborate? Connect with our team in the Discord #content room!</p>                    
                </div>
                <div className="glassmorphism hover:scale-110">
                    <h1 className='list-title'>Benzo Converter</h1>
                    <p>Utilize our Benzo Converter for approximate conversions between different types of benzodiazepines.</p>
                </div>
                <div className="glassmorphism hover:scale-110">
                    <h1 className='list-title'>DXM Calculator</h1>
                    <p>Determine the optimal safe DXM dosage tailored to your body weight with our intuitive calculator.</p>                    
                </div>
                <div className="glassmorphism hover:scale-110">
                    <h1 className='list-title'>Volumetric Converter</h1>
                    <p>For powders with microgram-level potency, ensuring safe dosage can be challenging. Our Volumetric Converter aids in creating a uniform solution, ensuring precise and safer dosing of these potent substances.</p>                    
                </div>
                <div className="glassmorphism hover:scale-110">
                    <h1 className='list-title'>Learning Platform</h1>
                    <p>Elevate your knowledge with our Learning Platform, a dedicated space for community members to undertake courses and demonstrate expertise. Embracing an open-source ethos, we invite enthusiasts to contribute by crafting their own courses.</p>
                </div>
                <div className="glassmorphism hover:scale-110">
                    <h1 className='list-title'>TripSit Discord Bot</h1>
                    <p>Introducing our multifunctional Discord Bot, designed to seamlessly blend moderation capabilities with TripSit-session management. Perfect not just for TripSit, but adaptable for any Discord guild. Interested in launching your own TripSit-inspired initiative? Our tools are at your disposal. With an open-source development approach, we continually welcome contributions!</p>                    
                </div>
                <div className="glassmorphism hover:scale-110">
                    <h1 className='list-title'>Android Mobile App</h1>
                    <p>Stay informed anytime, anywhere with our Android Mobile App. Enjoy offline access to comprehensive drug factsheets and essential combination data at your fingertips.</p>                    
                </div>
            </div>
        </section>
    )

}

export default Resources