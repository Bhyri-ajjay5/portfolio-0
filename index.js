
let counterContainer = document.getElementById('counterContainer');
let counterValue = document.getElementById('counterValue');
let rightDiv = document.getElementById('rightDiv')
let leftDiv = document.getElementById('leftDiv')
let headerEl = document.getElementById('header')
let homeCoEl = document.getElementById('homeCo')
let textContentEl = document.getElementById('textContent')
let aboutSectionEl = document.getElementById('about')
let servicesSectionEl = document.getElementById('services')
let educationSectionEl = document.getElementById('education')
let projectEl = document.getElementById('project')
let contactEl = document.getElementById('contact')

counterContainer.classList.add('d-flex','flex-column','justify-content-center','text-center')

let counter = 3;
let uniqueId = setInterval(function(){
    counter = counter - 1;
    // counterValue.textContent = counter 
    if(counter === 0){
        clearInterval(uniqueId)
        homeCoEl.removeChild(counterContainer)
        rightDiv.classList.remove('show')
        leftDiv.classList.remove('show')
        headerEl.classList.remove('show')
        textContentEl.classList.remove('show')
        aboutSectionEl.classList.remove('show')
        servicesSectionEl.classList.remove('show')
        educationSectionEl.classList.remove('show')
        projectEl.classList.remove('show')
        contactEl.classList.remove('show')
    }
},1000)





// getting elements 
let EducationInfo = document.getElementById('education_info');

// education details object list 
let Education_details =[
    {
        education_name :'B V RAJU INSTITUTE OF TECHNOLOGY - BTECH',
        education_year : '2015 - 2019'
    },
    {
        education_name :'NARAYANA JUNIOUR COLLEGE - INTERMEDIATE',
        education_year : '2013 - 2015'
    },
    {
        education_name :'KRISHNAVENI TALLENT SCHOOL - SSC',
        education_year : '2003 - 2013'
    }
]

function addEducationDetails(item){
    //creating div element 
    let div = document.createElement('div');
    div.classList.add('col-12','d-flex','flex-row','justify-content-around','p-5')
    EducationInfo.appendChild(div);
    //creating paragraph element
    let paragraph_1 = document.createElement('p');
    paragraph_1.classList.add('text-white')
    paragraph_1.textContent = item.education_name
    div.appendChild(paragraph_1);
    let paragraph_2 = document.createElement('p');
    paragraph_2.classList.add('text-white')
    paragraph_2.textContent = item.education_year;
    div.appendChild(paragraph_2);
    
}
console.log(EducationInfo)

for (let item of Education_details){
    addEducationDetails(item)
}

// project section object details 

let projects = [
    {
        // project_image : 'https://assets.turbologo.com/blog/en/2019/12/19084721/Verizon-logo.png',
        // project_title :'NSP(Network Service Provider)',
        // project_info : 'NSP Nothing but a application which is used by the technical team of a network team to manitor or reslove and many more for a nework outage happened in an area.',
        // project_url : '#'
        // project_image : 'https://assets.turbologo.com/blog/en/2019/12/19084721/Verizon-logo.png',
        project_title :'BOOKMARK MAKE',
        project_info : 'To pursue my career in an organization with performance-oriented environment for achievement of personal advancement.Being ambitious and hardworking, I am looking forward to challenging my potential and be worthy of Management trust and confidence',
        project_url : '#',
        project_image : 'images/bookmark.png',
    },
    {
        // project_image : 'images/arkafoods.png',
        // project_title :'ARKA FOODS',
        // project_info : 'ARKA FOODS is a website which promotes there product which is Basmathi rice which gives good taste and making the grain  more fluffy ever. it is known for its fragrance and taste which satisfies the customers.',
        // project_url : 'images/arkafoods.png'
        // project_image : 'images/arkafoods.png',
        project_title :'TODOS APPLICATION',
        project_info : ' Developed persistent todo application with CRUD operations to the tracklist of tasks.The displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap',
        project_url : 'images/todoslist.png',
        project_image : 'images/todoslist.png'
    }
]

let projectImage = document.getElementById('projectImage');
let projectInfo = document.getElementById('projectInfo');
//creating img void element 
let img = document.createElement('img');
img.src = projects[0].project_image
img.classList.add('w-100','project_image')
projectImage.appendChild(img)
// creating h3 and p element 
let headingtitle = document.createElement('h3');
headingtitle.textContent = projects[0].project_title;
headingtitle.classList.add('p-3','text-left')
projectInfo.appendChild(headingtitle);
// creating paragaraph Element
let paragraphEl = document.createElement('p');
paragraphEl.textContent = projects[0].project_info;
paragraphEl.classList.add('project-info','text-white','py-5')
projectInfo.appendChild(paragraphEl);
// creating div Element
let divEl = document.createElement('div'); 
divEl.classList.add('text-center');
let anchorEl = document.createElement('a')
anchorEl.setAttribute('href',projects[0].project_url)
anchorEl.textContent = 'View Project'
anchorEl.style.fontSize = '12px'
divEl.appendChild(anchorEl);
projectInfo.appendChild(divEl);

// for 2nd project creating dynamically

let projectImage1 = document.getElementById('projectImage1');
let projectInfo1 = document.getElementById('projectInfo1');
//creating img void element 
let img1 = document.createElement('img');
img1.src = projects[1].project_image
img1.classList.add('w-100','project_image')
projectImage1.appendChild(img1)
// creating h3 and p element 
let headingtitle1 = document.createElement('h3');
headingtitle1.textContent = projects[1].project_title;
headingtitle1.classList.add('p-3','text-left')
projectInfo1.appendChild(headingtitle1);
// creating paragaraph Element
let paragraphE2 = document.createElement('p');
paragraphE2.textContent = projects[1].project_info;
paragraphE2.classList.add('project-info','text-white','py-5')
projectInfo1.appendChild(paragraphE2);
// creating div Element
let divEl1 = document.createElement('div'); 
divEl1.classList.add('text-center');
let anchorEl1 = document.createElement('a')
anchorEl1.setAttribute('href',projects[1].project_url)
anchorEl1.textContent = 'View Project'
anchorEl1.style.fontSize = '12px'
divEl1.appendChild(anchorEl1);
projectInfo1.appendChild(divEl1);


// contactUs  sending email

let inputUserEl = document.getElementById('inputUser');
let inputEmailEl = document.getElementById('inputEmail');
let inputPhoneEl = document.getElementById('inputPhone');
let inputTextAreaEl = document.getElementById('inputTextArea');
let ShowMessageEl = document.getElementById('ShowMessage');

let userData = {
    name : '',
    email : '',
    phoneNo : '',
    textArea : ''
}

inputUserEl.addEventListener('change',function(event){
    userData.name = event.target.value
})
inputEmailEl.addEventListener('change',function(event){
    userData.email = event.target.value
})
inputPhoneEl.addEventListener('change',function(event){
    userData.phoneNo = event.target.value
})
inputTextAreaEl.addEventListener('change',function(event){
    userData.textArea = event.target.value
})


function onFormValidation(userData){
    if(userData.name === ''){
        inputUserEl.style.border= '3px solid red'
    }else{
        inputUserEl.style.border= '3px solid green'
    }
    if(userData.email === ''){
        inputEmailEl.style.border= '3px solid red'
    }else{
        inputEmailEl.style.border= '3px solid green'
    }
    if(userData.phoneNo === ''){
        inputPhoneEl.style.border= '3px solid red'
    }else{
        inputPhoneEl.style.border= '3px solid green'
    }
    if(userData.textArea === ''){
        inputTextAreaEl.style.border= '3px solid red'
    }else{
        inputTextAreaEl.style.border= '3px solid green'
    }
}

console.log(userData);

function sendEmail(){
    console.log(userData.email)
    if(userData.email === ''){
        onFormValidation(userData)
    }
    else{
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "bhyriajaykumar55@gmail.com",
            Password : "7DA7B08F4BEF4DD3DE79D5A645BA140BDBF7",
            To : 'bhyriajaykumar55@gmail.com',
            From : "bhyriajaykumar55@gmail.com",
            Subject : "Mail From Portfolio",
            Body : "<b>Name </b>: " + inputUserEl.value + '<br/> <b>Email</b> : ' + inputEmailEl.value +
                '<br/> <b>Contact Number</b> :' + inputPhoneEl.value + '<br/> <b>Message</b> : ' + inputTextAreaEl.value
        }).then(function(message){
            console.log(message)
            if(message === 'OK'){
                ShowMessageEl.textContent = 'Message Sent Successfully'
                ShowMessageEl.style.color = 'green'
            }
            else if(message === 'Failure sending mail.'){
                ShowMessageEl.textContent = 'Message Sent Failure'
                ShowMessageEl.style.color = 'red'
            }
        });
    }
    
    
}

















