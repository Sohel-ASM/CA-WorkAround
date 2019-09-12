let Employee = {
    salary: 100000
};

let payGrades = {
    entryLevel: {
        taxMultiplier: .05,
        benefits: ['health'],
        minSalary: 10000,
        maxSalary: 49999
    },
    midLevel: {
        taxMultiplier: .1,
        benefits: ['health', 'housing'],
        minSalary: 50000,
        maxSalary: 99999
    },
    seniorLevel: {
        taxMultiplier: .2,
        benefits: ['health', 'housing', 'wellness', 'gym'],
        minSalary: 100000,
        maxSalary: 200000
    }
};
