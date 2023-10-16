const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}
]


const activeJobs = jobs.filter(function (job){return job.isActive})

// or 

// const activeJobs = jobs.filter(job => job.id)

console.log(activeJobs)
// output
// [
//     { id: 1, isActive: true },
//     { id: 2, isActive: true }
//   ]



// Map Function 

const ForMap = jobs.map(function(job){return job.id})
// or
// const ForMap = jobs.map(job => job.id)
console.log(ForMap)

// output
//[ 1, 2, 3 ]


