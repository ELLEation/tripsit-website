const Stats = ({}) => {

    //Make the counts dynamic

    return (
        <section id='about' className="w-full flex-center flex-col mt-16">
            <div className='grid grid-cols-1 gap-16 w-full md:grid-cols-4'>
                <div className="text-center">
                    <h1>12</h1>
                    <span className="list-title">Years of Service</span>
                </div>
                <div className="text-center">
                    <h1>8,888</h1>
                    <span className="list-title">Discord Members</span>
                </div>
                <div className="text-center">
                    <h1>780</h1>
                    <span className="list-title">Drugs in our Database</span>
                </div>
                <div className="text-center">
                    <h1>57,468</h1>
                    <span className="list-title">Subreddit Subscribers</span>
                </div>
            </div>
        </section>
    )
}

export default Stats