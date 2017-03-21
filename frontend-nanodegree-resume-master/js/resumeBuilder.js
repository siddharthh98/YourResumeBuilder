/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
	"jobs" : [
		{
			"employer" : "Front End Web Developer",
			"title" : "ReadersCrib",
			"location" : "Dwarka,Delhi",
			"dates" : "Dec,2016 to Feb,2017",
			"description" : "At ReadersCrib my work was to develope the front end of the main website"
		}
	]
};
var	projects ={
		"projects":[
		{
			"title" : "Quaker",
			"dates" : "Jan,2017 to Feb,2017",
			"description" : "Quaker is an app that generate the past history of the earthquakes happened near a particular location"
		},
		{
			"title" : "Locate",
			"dates" : "Jan,2017 to Feb, 2017",
			"description" : "Locate is an app that helps you find the historical events that happened around you using your gps location"
		},
		{
			"title" : "YourCcompiler",
			"dates" : "March,2017 to April, 2017",
			"description" : "A complier for your C and C++ projects"
		},
		{
			"title" : "DTool",
			"dates" : "March,2017 to April, 2017",
			"description" : " A debug tool to check your code syntactical errors"
		}
	]
};
var bio={
	"name":"Siddharth Singh Gaur",
	"role":"Front End Developer",
	"welcomeMessage":"Welcome to ResumeBuilder of Siddharth",
	"biopic":"images/profileimage.jpg",
	"contacts": {
		"mobile":"8860684294",
		"email":"siddharthh.gaurr@gmail.com",
		"github":"siddharthh98",
		"location":"Dwarka Sector 3, New Delhi"},
	"skills":["C++","Java","C","HTML","CSS","JavaScript","Python"]
};
var education = {
	"schools" : [
		{
			"name" : "Air Force School, Hindan",
			"degree" : "10th"
		},
		{
			"name" : "DAV Sreshtha Vihar",
			"degree" : "12th"
		}
	],
	"online courses" : [
		{
			"name" : "Algorithms and Data Structures",
			"place" : "Coursera"
		},
		{
			"name" : "Introduction to Android Development",
			"place" : "Udacity"
		},
		{
			"name" : "Full Stack Web Development",
			"place" : "Udacity"
		}
	]
};

 function displayWork(){
 	var i;
	for(i in work.jobs){
	    $("#workExperience").append(HTMLworkStart);
	    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
	    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
	    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
	    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
	    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
	    var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
	    $(".work-entry:last").append(formattedEmployerTitle);
  }
}

displayWork();
projects.display = function(){
	//code goes here.
	for(var project =0;project< projects.projects.length;project++){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDate = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDate);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
	}
}
projects.display();
function displayBio(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").append(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").append(formattedRole);
	var formattedwelMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedwelMessage);
	var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedImage);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}
displayBio();
function displayEducation(){

	for(var school = 0;school<education.schools.length;school++){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name) + HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedName);
	}
}
displayEducation();