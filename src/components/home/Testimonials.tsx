const Testimonials = ({}) => {

    // In future this can be pulled from an API endpoint and then show random ones on each render.
    const Testimonials = [
        {
            name: 'loki_queen333',
            quote: `I wanted to give a big kudos and air five...you know, covid haha...to everyone on the TripSit team. Even the community helpers. I've been watching for a bit and so happy even people who don't know each other make people feel safe and loved. Everyone is going through so much! This is a fun, safe, and helpful environment that I am proud to witness first hand. So thank you so much for keeping this network around when the rest of the world keeps turning to shit. People come and go but this truly feels like a network family. So awesome job everyone. If you haven't been told in awhile, well then I am so proud of you! ❤️`,
            type: 'Discord Member'
        },
        {
            name: 'Misted',
            quote: `I just want to give huge hugs to every member of the TripSit Team for being so active member here ❤️ I love you guys for being here, helping people and giving your free time to grow a positive community for everyone to share their stories and lives that are surrounded by drugs. Places like this make the world a better place when you aren't demonized by anyone, which is amazing!`,
            type: 'Discord Member'
        },
        {
            name: 'Squonk',
            quote: `I admire everyone's commitment to #TriPSiT throughout the years. And i am immensely proud and glad for the assistance\social ground\venting possibility~.., throughout the many many years. The educative vigor\interests\additions, in regards to advancement of both the www-site, Discord, and especially the IRC, in assisting and informing, is amazing. And i know a lot of people have had real life-altering\life-saving, experiences throughout the many years. I thank you kindly, warmly, and genuinely lovingly, for being. Having this use of a truly humane service, is fabulous and joyfully positive in regards to aiding humans on this spinball of a planet`,
            type: 'Discord Member'
        }
    ]


    return (
        <section id='testimonials' className="w-full flex-center flex-col mt-16">
            <div className="text-center">
                <h1 className="section-title">Testimonials</h1>
                <span className="desc">We are so proud of our volunteer force and the work they do! The amount of empathy, compassion and knowledge they bring to the table is astounding. We are so lucky to have them!</span>
            </div>
            <div className="grid grid-cols-1 gap-16 w-full mt-6 md:grid-cols-3">
                {
                Testimonials.map( item => (
                    <div className="text-center">
                        <p className="glassmorphism">
                            {item.quote}
                        </p>
                        <h4 className="mt-3 list-title">
                            {item.name}
                        </h4>
                        <span>
                            {item.type}
                        </span>
                    </div>
                ))
                }
            </div>
        </section>
    )

}

export default Testimonials