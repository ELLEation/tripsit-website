import { useEffect, useState } from 'react';
import Link from 'next/link'
import Select from 'react-select'

const Form = ({ type, drug, setDrug, submitting, handleSubmit }) => {

    // State to store categories fetched from the API
    const [categories, setCategories] = useState([]);
    
    // State to store effects from the API
    const [effects, setEffects] = useState([]);

    // State to store effects from the API
    const [overdose_effects, setOverdoseEffects] = useState([]);



    // Fetch categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('/api/categories');
            const data = await response.json();
            const options = data.map(cat => ({ value: cat.category_id, label: cat.category }));
            setCategories(options);
        };

        fetchCategories();
    }, []);

    // Handler to update selected categories in the drug state
    const handleCategoryChange = (selectedOptions) => {
        const selectedIds = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setDrug({ ...drug, categories: selectedIds });
        console.log(selectedOptions)
    };
    
    //TODO: Insert handler for effects
    const handleEffectChange = (selectedOptions) => {};

    //TODO: Insert handler for overdose_effects
    const handleOverdoseEffectChange = (selectedOptions) => {};

    //TODO: Insert handler for methods
    const handleMethodsChange = (selectedOptions) => {};

    // Map the selected category IDs back to the format expected by react-select
    const selectedValue = drug.categories.map(catId => {
        const categoryObj = categories.find(cat => cat.value === catId);
        return categoryObj ? { value: categoryObj.value, label: categoryObj.label } : null;
    }).filter(cat => cat !== null);
  

    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className='blue_gradient'>{type} Drug</span>
            </h1>
            <p className='desc text-left max-w-md'>
                {type} A Drug In The Database
            </p>

            <form
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
            >
                <section className="section-block">
                    <h2 className="section-title">Overview</h2>
                    <label>
                        <span className="font-satoshi font-semibold text-base text-gray-700">
                            Drug Name
                        </span>
                        <input
                            value={drug.name}
                            onChange={(e) => setDrug({...drug,
                                name: e.target.value})}
                            placeholder="(ex. MDMA, Ketamine, Adderall)"
                            required
                            className='form_input'
                        />
                    </label>

                    <label>
                        <span className="font-satoshi font-semibold text-base text-gray-700">
                            Aliases
                        </span>
                        <input
                            value={drug.aliases}
                            onChange={(e) => setDrug({...drug,
                                name: e.target.value})}
                            placeholder="(ex. Molly, Ket, Addi)"
                            required
                            className='form_input'
                        />
                    </label>
                    
                    <label>
                        <span className="font-satoshi font-semibold text-base text-gray-700">
                            Summary
                        </span>

                        <textarea
                            value={drug.summary}
                            onChange={(e) => setDrug({...drug,
                                summary: e.target.value})}
                            placeholder="Enter your summary here!"
                            required
                            className='form_textarea'
                        />
                    </label>

                    <label>
                        <span className="font-satoshi font-semibold text-base text-gray-700">
                            Warnings
                        </span>

                        <textarea
                            value={drug.warnings}
                            onChange={(e) => setDrug({...drug,
                                summary: e.target.value})}
                            placeholder="Enter your summary here!"
                            required
                            className='form_textarea'
                        />
                    </label>

                    <label>
                        <span className="font-satoshi font-semibold text-base text-gray-700">
                            Categories
                        </span>

                        <Select
                            isMulti
                            name="categories"
                            options={categories}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={selectedValue}
                            onChange={handleCategoryChange}
                        />
                    </label>

                    <label>
                        <span className="font-satoshi font-semibold text-base text-gray-700">
                            Effects
                        </span>

                        <Select
                            isMulti
                            name="effects"
                            options={categories}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={selectedValue}
                            onChange={handleEffectChange}
                        />
                    </label>

                    <label>
                        <span className="font-satoshi font-semibold text-base text-gray-700">
                            Overdose Effects
                        </span>

                        <Select
                            isMulti
                            name="overdose_effects"
                            options={categories}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={selectedValue}
                            onChange={handleOverdoseEffectChange}
                        />
                    </label>

                    <label>
                        <span className="font-satoshi font-semibold text-base text-gray-700">
                            Methods Of Absorbtion
                        </span>

                        <Select
                            isMulti
                            name="methods"
                            options={categories}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={selectedValue}
                            onChange={handleMethodsChange}
                        />
                        
                    </label>
                </section>
            
                <div className='flex-end mx-3 mb-5 gap-4'>
                    <Link href="/" className='text-gray-500 text-sm'>
                        Cancel
                    </Link>
                    <button 
                        type="submit"
                        disabled={submitting}
                        className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
                    >
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form