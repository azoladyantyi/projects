// console.log(document.querySelector('#tableTemplate'));
var tableTemplate = document.querySelector('#tableTemplate').innerHTML;
if (tableTemplate) {
    var tableTemplateInst = Handlebars.compile(tableTemplate);

    var JobData = [{
            id: "1",
            jobTitle: 'back end developer',
            JobType: 'Permanent',
            jobLocation: 'waterfront',
            NameOfCompany: 'Codex',
            Age: '18 - 35 years',
            Appy: 'Apply',
            applications: []
        },
        {
            id: "2",
            jobTitle: 'Associate Developer',
            JobType: '1 year contract',
            jobLocation: 'Sea Point ',
            NameOfCompany: 'Nedbank',
            Age: '18 - 35 years',
            Appy: 'Apply'
        },

        {
            id: "3",
            jobTitle: 'Application Developer',
            JobType: 'Permanent',
            jobLocation: 'Cape Town',
            NameOfCompany: 'Media24',
            Age: '18 - 35 years',
            Appy: 'Apply'
        }, {
            id: "3",
            jobTitle: 'Associate Developer',
            JobType: '1 year contract',
            jobLocation: 'Sea Point ',
            NameOfCompany: 'Nedbank',
            Age: '18 - 35 years',
            Appy: 'Apply'
        }, {
            id: "4",
            jobTitle: 'Application Support Analyster',
            JobType: 'Permanent',
            jobLocation: 'Cape Town ',
            NameOfCompany: 'Amazon',
            Age: '18 - 35 years',
            Appy: 'Apply'
        },
    ];


    var tableTemplateInst = Handlebars.compile(tableTemplate);

    var displayTableResults = tableTemplateInst({
        job: JobData
    });
    var tableDisplay = document.querySelector('#tableDisplay');
    tableDisplay.innerHTML = displayTableResults;
}
var formData = [{
    jobTitle: '1',
    submit: 'submit'
}, ];

var textBox = document.querySelector('#input');

function submitFunction(jobTitle) {
    var tableTemplateInst = Handlebars.compile(tableTemplate);

    var displayTableResults = tableTemplateInst({
        job: JobData
    });
    tableDisplay.innerHTML = displayTableResults;
    applicationForm.innerHTML = ""
    applicant.innerHTML = ""
    backToApp.innerHTML = ""

}

//set up my empty div
var applicationForm = document.querySelector('#applicationForm');
//
// //setup the application template
var applicationTemplate = document.querySelector("#applicationTemplate").innerHTML;
// //compile the applicationForm
var applicationInst = Handlebars.compile(applicationTemplate);
var displayForm = applicationInst({})
//show results
applicationForm.innerHTML = ""


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


    applicationForm.innerHTML = displayForm
}


var applicant = document.querySelector("#applicant");
var candidateTemplate = document.querySelector("#candidateTemplate").innerHTML;
var candidateInst = Handlebars.compile(candidateTemplate);

var FullDetail = [{
    name: "azola",
    surname: "Dyantyi",
    Age: 25,
    email: "aizydyantyi@gmail.com",
    applications: []
}, ];
var candiatateDetails = candidateInst({
    title: FullDetail

})

var saveBtn = document.querySelector('#saveBtn');

saveBtn.addEventListener('click', function() {
  var name = document.getElementById("name");
  var surname = document.getElementById("surname");
  var Age = document.getElementById("Age");
  var email = document.getElementById("email");
if (name !== undefined && surname !== undefined && Age!== undefined && email !== undefined) {
    FullDetail.push({
        name: name.value,
        surname: surname.value,
        Age: Number(Age.value),
        email: email.value
    })
}
applicant(FullDetail)
});

function applicantFunction() {
  var candidateInst = Handlebars.compile(candidateTemplate);;

  var candiatateDetails = candidateInst({
      title: FullDetail
  })
    applicant.innerHTML = candiatateDetails
    tableDisplay.innerHTML = ""
    applicationForm.innerHTML = ""
}
var backToApp = document.querySelector("#backToApp");
function backToAppFunction() {
  applicationForm.innerHTML =   displayForm
  tableDisplay.innerHTML = ""
  applicant.innerHTML = ""
}
backToApp.innerHTML = ""
