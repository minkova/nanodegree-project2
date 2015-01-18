var bio = {
	"name" : "Tania Minkova",
	"role" : "WebDeveloper",
	"welcomeMessage" : "Stories of Galadriel's life prior to The Lord of the Rings appear in both The Silmarillion and Unfinished Tales. Galadriel was the only daughter and youngest child of Finarfin, prince of the Noldor, and of Eärwen, who was cousin to Lúthien. Her elder brothers were Finrod Felagund, Angrod, and Aegnor. She was born in Valinor during the Years of the Trees.", 
	"image" : "images/ava.jpg",
	"contacts" : [{
		"mobile" : "555-55-55",
		"skype" : "minkova.tanya", 
		"location" : "Kiev",
		"email" : "t.minkova@live.com"
	}],	
	"skills" : ["Beauty","Patience","Honesty","Might"]
};

var work = {
	"jobs" : [
	{
		"employer" : "Peter Jackson", 
		"title" : "Web-developer",
		"dates" : "2013 - 2015",
		"location" : "Kiev",
		"description" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
	},
	{
		"employer" : "Astound Commerce", 
		"title" : "Web-developer",
		"dates" : "2011 - 2013",
		"location" : "Paris",
		"description" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring. "	
	}]
};

var projects = {
	"project" : [{
		"title" : "The Hobbit: The Desolation of Smaug ",
		"dates" : "2013", 
		"description" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.", 
		"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
	},
	{
		"title" : "The Hobbit: The Battle of the Five Armies",
		"dates" : "2014", 
		"description" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.", 
		"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
	}]
};

var education = {
	"schools" : [
	{
		"name" : "Donetsk State Institute of Artificial Intelligence",
		"location" : "Donetsk, Ukraine",
		"degree" : "bachelor", 
		"majors" : "computer science",
		"dates" : "2001 - 2005",
		"url" : "donntu.edu.ua"
	},
	{
		"name" : "Donetsk State Institute of Artificial Intelligence",
		"location" : "Donetsk, Ukraine",
		"degree" : "master", 
		"majors" : "computer science",
		"dates" : "2005 - 2006",
		"url" : "donntu.edu.ua"
	}],
	"online courses" : [{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "udacity",
		"dates" : "2014 - 2015",
		"url" : "https://www.udacity.com/course/nd001"
	}]
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
	};
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
		

		
	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

	return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);