import VolumetricCalculator from '@components/calculators/VolumetricCalculator'

const Volumetric = () => {

    return (
        <section>
            <div className="mb-16">
                <h1 className="head_text orange_gradient text-center pb-8">
                    Volumetric Dosing Calculator
                </h1>
                <p className='desc'>These are three simple tools to help you calculate volumetric doses. Dissolve a known amount of substance in a known amount of solvent (usually water), then you can relatively accurately measure a dose by measuring the solution. You can find out more about volumetric dosing, and how to do it here. Please label your solutions with their substance and concentration.</p>
            </div>
            <VolumetricCalculator />
            <div className='mt-16'>
                <p>Please note, these tools were developed and tested to the best possible ability by the TripSit team, and the greatest effort has been made not to produce incorrect or misleading results, though for unforeseen reasons these may occur. Always check your maths, and be careful. If you have any questions, suggestions or error reports on this tool, you can contact us here.</p>
            </div>
        </section>
    )
}

export default Volumetric