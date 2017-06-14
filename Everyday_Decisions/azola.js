// console.log(document.querySelector('#tableTemplate'));
var tableTemplate = document.querySelector('#tableTemplate').innerHTML;
var tableTemplateInst = Handlebars.compile(tableTemplate);



var JobData = [{
        id: "1",
        jobTitle: 'back end developer',
        JobType: 'Permanent',
        jobLocation: 'waterfront',
        NameOfCompany: 'Codex',
        Age: '18 - 35 years',
        Appy: 'Apply',
        ViewApplicant: 'ViewApplicant'
    },
    {
        id: "2",
        jobTitle: 'Associate Developer',
        JobType: '1 year contract',
        jobLocation: 'Sea Point ',
        NameOfCompany: 'Nedbank',
        Age: '18 - 35 years',
        Appy: 'Apply',
        ViewApplicant: 'ViewApplicant'
    },

    {
        id: "3",
        jobTitle: 'Application Developer',
        JobType: 'Permanent',
        jobLocation: 'Cape Town',
        NameOfCompany: 'Media24',
        Age: '18 - 35 years',
        Appy: 'Apply',
        ViewApplicant: 'ViewApplicant'
    }, {
        id: "3",
        jobTitle: 'Associate Developer',
        JobType: '1 year contract',
        jobLocation: 'Sea Point ',
        NameOfCompany: 'Nedbank',
        Age: '18 - 35 years',
        Appy: 'Apply',
        ViewApplicant: 'ViewApplicant'
    }, {
        id: "4",
        jobTitle: 'Application Support Analyster',
        JobType: 'Permanent',
        jobLocation: 'Cape Town ',
        NameOfCompany: 'Amazon',
        Age: '18 - 35 years',
        Appy: 'Apply',
        ViewApplicant: 'ViewApplicant'
    },
];

function showJobs(){
  var displayTableResults = tableTemplateInst({
      job: JobData
  });

  var tableDisplay = document.querySelector('#tableDisplay');
  tableDisplay.innerHTML = displayTableResults;





};

showJobs();

var viewApplicantBtn = document.querySelector("#viewApplicant");
function submitFunction(jobTitle) {
  var personalDetails = [];
  for (var i = 0; i < JobData.length; i++) {

  if ( viewApplicantBtn.dataset.jobsJobTitle===JobData[i].jobTitle ) {
      personalDetails.push({
        name
      })


  }
  }

    var tableTemplateInst = Handlebars.compile(tableTemplate);

    var displayTableResults = tableTemplateInst({
        job: JobData
    });

    tableDisplay.innerHTML = displayTableResults;
    // tableDisplay.innerHTML = ""
    // applicant.innerHTML = ""
    // backToApp.innerHTML = ""

}

//set up my empty div
var tableDisplay = document.querySelector('#tableDisplay');

// //setup the application template
var applicationTemplate = document.querySelector("#applicationTemplate").innerHTML;

// //compile the tableDisplay
const applicationInst = Handlebars.compile(applicationTemplate);
//show results
//tableDisplay.innerHTML = ""

function formFunction(jobId) {
    var itJob = JobData.find(function(f) {
        return f.id === jobId;
    });

    if (itJob.viewCounter) {
        itJob.viewCounter++;
    } else {
        itJob.viewCounter = 1
    }

    var tableDisplay = document.querySelector('#tableDisplay');
    tableDisplay.innerHTML = "";

    tableDisplay.innerHTML = "This job has been viewed " + itJob.viewCounter + " time(s)."

    var displayForm = applicationInst(itJob)

    tableDisplay.innerHTML = displayForm
}


var applicant = document.querySelector("#applicant");

var candidateTemplate = document.querySelector("#candidateTemplate").innerHTML;
var candidateInst = Handlebars.compile(candidateTemplate);

var FullDetail = [{
    name: "azola",
    surname: "Dyantyi",
    Age: 25,
    email: "aizydyantyi@gmail.com",

}, ];
var candiatateDetails = candidateInst({
    title: FullDetail

})



var candidateInst = Handlebars.compile(candidateTemplate);

function canditateFunction(jobId) {

    var itJob = JobData.find(function(f) {
      return f.id === jobId;
    });

    var candiatateDetails = candidateInst({
        title: FullDetail
    })
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var Age = document.getElementById("age");
    var email = document.getElementById("email");

    if (name !== undefined && surname !== undefined && Age !== undefined && email !== undefined) {

        if (!itJob.applications){
          itJob.applications = [];
        }

        itJob.applications.push({
            name: name.value,
            surname: surname.value,
            Age: Number(Age.value),
            email: email.value
        });

        showJobs();


    }

}

var candidateInst = Handlebars.compile(candidateTemplate);

function applicantFunction(jobId) {

    var itJob = JobData.find(function(f) {
      return f.id === jobId;
    });

    var candiatateDetails = candidateInst({
        title: itJob.applications
    })
    applicant.innerHTML = candiatateDetails
    tableDisplay.innerHTML = ""
    tableDisplay.innerHTML = ""
}

// var backToApp = document.querySelector("#backToApp");

function backToAppFunction() {

    showJobs();

}
