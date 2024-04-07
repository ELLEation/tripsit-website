'use client'
import DXMCalculator from "@components/calculators/DXMCalculator"

const DXM = () => {

    return (
        <section>
            <div className="mb-16">
                <h1 className="head_text orange_gradient text-center pb-8">
                    DXM Dosage Calculator
                </h1>

                <p className="desc">This is a simple calculator designed to help you discern how much DXM you need to take reach each plateau of experience, depending on variable factors such as your weight and concentration of the product you're using. For a description of the plateau model, and the effects you can expect at each level, click here.</p>
                <p className="desc">DXM-containing products may also contain several potentially dangerous adulterants; you must make sure that your product contains only DXM as its active ingredient. For more information about DXM adulterants, see here.</p>
                <p className="desc">For information about combining DXM with other drugs, check out our Combo Chart. Make sure to read the label and research the product thoroughly before using it.</p>
            </div>
            <DXMCalculator />
            <div className="mt-16">
                <p className="mb-3">Note: You should always start low and work your way up untill you find the doses that are right for you.</p>
                <p className="mb-3">Please note, these tools were developed and tested to the best possible ability by the TripSit team, and the greatest effort has been made not to produce incorrect or misleading results, though for unforeseen reasons these may occur. Always check your maths, and be careful. If you have any questions, suggestions or error reports on this tool, you can contact us here .</p>
                <p>See a product not listed? Contact us here with a link to your product.</p>
            </div>
        </section>
    )
}

export default DXM