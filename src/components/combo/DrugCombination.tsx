'use client'

//Import JS Dependancies
import Link from 'next/link'


function DrugCombination({ combos, drug_1, drug_2 }) {

    const decodeCombos = (id_1, id_2) => {

        //Ensure lowest ID is first as that is how it's stored in the database
        const lowerId = Math.min(id_1, id_2);
        const higherId = Math.max(id_1, id_2);

        //Find combo matching the substance ID as defined in the DB
        const result = combos.find(item => item.substance_1 === lowerId && item.substance_2 === higherId);
        
        //console.log(result)

        return result
    }

    const comboDetails = decodeCombos(drug_1.id, drug_2.id);

    let statusClass = 'combo-undefined'
    let comboId = 'undefined'

    if(typeof comboDetails !== 'undefined'){
        comboId = comboDetails.combo_id
    }

    if(typeof comboDetails !== 'undefined'){
        switch(comboDetails.status)
        {
            case 0:
                statusClass = 'combo-significant-risk'
                break;
            case 1:
                statusClass = 'combo-greater-risk'
                break;
            case 2:
                statusClass = 'combo-minor-risk'
                break;
            case 3:
                statusClass = 'combo-low-risk-synergy'
                break;
            case 4:
                statusClass = 'combo-low-risk-decrease'
                break;
            case 5:
                statusClass = 'combo-low-risk-no-synergy'
                break;
            default:
                statusClass = 'combo-undefined'

        }
    }
    return (
        <td className={`px-3 ${statusClass}`}>
            <Link href={`/combo/${comboId}`}>
                {drug_1.name} + {drug_2.name}
            </Link>
        </td>
    );
}

export default DrugCombination