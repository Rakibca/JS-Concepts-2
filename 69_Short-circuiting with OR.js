const jobHunter = {
  name: 'Tom Chant',
  jobSearchArea: 'Europe',
};

/*METHOD 1*/
/***** if else *****/
// if (jobHunter.jobSearchArea) {
//   console.log(
//     `${jobHunter.name}'s work location is ${jobHunter.jobSearchArea}`
//   );
// } else {
//   console.log(`${jobHunter.name}'s work location is Worldwide`);
// }

/*METHOD 2*/
/***** Ternary *****/
// const workLocation = jobHunter.jobSearchArea
//   ? jobHunter.jobSearchArea
//   : 'Worldwide';
// console.log(`${jobHunter.name}'s work location is ${workLocation}`);

/*METHOD 3*/
/***** Short-circuiting with OR (||) *****/
const workLocation = jobHunter.jobSearchArea || 'Worldwide';
console.log(`${jobHunter.name}'s work location is ${workLocation}`);
