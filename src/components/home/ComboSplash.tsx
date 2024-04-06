//Import JS Dependancies
import Image from 'next/image'

//Import Assets
import comboChart from '/public/assets/img/comboChart.png'

const ComboSplash = ({}) => {


    return (
        <section id='combochart' className="w-full flex-center flex-col mt-16">
            <div className='text-center'>
                <h1 className='section-title'>Combo Chart</h1>
            </div>
            <div className="grid grid-cols-1 gap-16 w-full mt-6 md:grid-cols-2">
                <div>
                    <Image
                        src={comboChart}
                        alt="Combo Chart"
                    >
                    </Image>
                </div>
                <div>
                    <h1 className='list-title'>Our Combo Chart is a cornerstone of the HR scene!</h1>
                    <p className='mt-3'>We give permissions to print and distribute our chart for non-profit usage. Full details of usage rights are in our FAQ below, but it boils down to:</p>
                    <ul className=''>
                        <li className='mt-1'> - Do not make a profit off our work. We don't do this for profit and neither should you.</li>
                        <li className='mt-1'> - Keep our logo on the chart. We don't ask for money, but we deserve the recognition.</li>
                        <li className='mt-1'> - Do not change the data. We worked hard on this and can't verify adjustments.</li>
                    </ul>
                    <p className='mt-3'>Otherwise, we give permission to print out and distribute this chart to whoever wants to. Make your own posters, print it on a t-shirt, or even make a giant banner and display it as a festival! We just want the information out there where it can help people.</p>
                </div>
            </div>
        </section>
    )
}

export default ComboSplash