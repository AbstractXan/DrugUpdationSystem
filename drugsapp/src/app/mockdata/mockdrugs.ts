import { isNull } from '@angular/compiler/src/output/output_ast';


export const titles = [
    'Article',
    'Name',
    'Scientific Name',
    'Class',
    'Mechanism Of Action',
    'AdverseEffects',
    'Interactions',
    'Uses',
    'LastUpdated'
];

//Class based Drug datatype
export class Drug {
    constructor(
            public article: string,
            public name: string,
            public scientisficName: string,
            public med_class: string,
            public mechanismOfAction: string,
            public adverseEffects: string[],
            public interactions: string[],
            public uses: string[],
            public lastUpdated: Date
        ) {}
    
    public asArray(){
        let outarray=[];
        outarray.push(
            [this.article],
            [this.name],
            [this.scientificName],
            [this.med_class],
            [this.mechanismOfAction],
            this.adverseEffects,
            this.interactions,
            this.uses,
            [this.lastUpdated]);
        return outarray;
    }
}

export const Drugs = []

// HARD CODED DRUG DATATYPE
const mockdate = new Date;
mockdate.setFullYear(2010,9,3);
Drugs.push(
    new Drug(
        //article
        'Quam pariatur omnis repellat id. Consequatur facere cumque dolorem delectus recusandae ipsa. Blanditiis consequatur dolore et magni est. Sit ipsum ducimus repudiandae vero ipsam beatae hic quas. Adipisci consequuntur aliquid provident distinctio sint accusamus nesciunt.',
        //name
        'phenytoin',
        //scientificName
        'diphenylhydantion',
        //class
        'antiepileptic',
        //mechanismOfAction
        'Phenytoin prevents repetitive detonation of normal brain cells. This is achieved by prolonging the inactivated state of voltage sensitive neuronal Na+ channel that governs the refractory period of the neurone. As a result high frequency discharges are inhibited with little effect on normal low frequency discharges.',
        [ // AdverseEffects
            'Gum Hypertrophy', 
            'Hirutism',],
        [//Interactions
            'Phenobarbitome competitively inhibits phenytoin metabolism',
            'Carbamazepine and phenytoin induce each other\'s metabolism',
            'Valproate displaces protein bound phenytoin and decreases its metabolism: plasma level of inbound phenytoin increases',
            'Chloremphenicol, isoniazid, cimetidine and warfarine inhibit phenytoin metabolism- can precipitate toxicity',
            'Phenytoin increases degradation of steroids, doxycycline, theophylline.',
            'Sucralfate binds to phenytoin in git and decreases absorption.'
        ],
        [//Uses
            'Phenytoin has been a standard drug for GTCS and partial seizures, but is now only used when better tolerated when newer drugs cannot be used. It produces frequent side effects and numerous drug interactions.',
            'It is second choice of drug to carbamazepine in trigeminal neuralgia'
        ],
        //LastUpdated
        mockdate
        )
);

mockdate.setFullYear(2010,9,5);
Drugs.push(
    new Drug(
        //article
        'Quam pariatur omnis repellat id. Consequatur facere cumque dolorem delectus recusandae ipsa. Blanditiis consequatur dolore et magni est. Sit ipsum ducimus repudiandae vero ipsam beatae hic quas. Adipisci consequuntur aliquid provident distinctio sint accusamus nesciunt.',
        //name
        'blue meth',
        //scientificName
        'methica indica',
        //class
        'antistress',
        //mechanismOfAction
        'Phenytoin prevents repetitive detonation of normal brain cells. This is achieved by prolonging the inactivated state of voltage sensitive neuronal Na+ channel that governs the refractory period of the neurone. As a result high frequency discharges are inhibited with little effect on normal low frequency discharges.',
        [ // AdverseEffects
            'Gum Hypertrophy', 
            'Hirutism',],
        [//Interactions
            'Phenobarbitome competitively inhibits phenytoin metabolism',
            'Carbamazepine and phenytoin induce each other\'s metabolism',
            'Valproate displaces protein bound phenytoin and decreases its metabolism: plasma level of inbound phenytoin increases',
            'Chloremphenicol, isoniazid, cimetidine and warfarine inhibit phenytoin metabolism- can precipitate toxicity',
            'Phenytoin increases degradation of steroids, doxycycline, theophylline.',
            'Sucralfate binds to phenytoin in git and decreases absorption.'
        ],
        [//Uses
            'Phenytoin has been a standard drug for GTCS and partial seizures, but is now only used when better tolerated when newer drugs cannot be used. It produces frequent side effects and numerous drug interactions.',
            'It is second choice of drug to carbamazepine in trigeminal neuralgia'
        ],
        //LastUpdated
        mockdate
        )
);