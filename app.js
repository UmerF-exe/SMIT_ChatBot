
var display = document.getElementById("display");
var typing = document.getElementById("typing");

function message(){
    if(event.keyCode == 13){
        var inputMessage = event.target.value;
        display.innerHTML += "<p class='right'>" + inputMessage + "</p>"
        typing.style.display = 'block';
        if(['hi', 'hello', 'hey','moye'].indexOf(inputMessage.toLowerCase()) !== -1){
            setTimeout(function(){
                display.innerHTML += "<p class = 'left'>Hello! This is SMIT registration chatbot, how can I help you?</p>";
            }, 2000);
            setTimeout(function(){
                display.innerHTML += "<button>Information about Saylani</button><button>Information about SMIT</button><button>Campuses Info</button><button>Courses Info</button><button>Registration Process</button><button>Registration Form</button><button>Fees Information</button><button>Fees Payment</button><button>Result Check</button><button>Download ID Card</button>";
                typing.style.display = "none";
            }, 4000);
        }
        else if(['salam', 'assalam u alaikum'].indexOf(inputMessage.toLowerCase()) !== -1){
            setTimeout(function(){
                display.innerHTML += "<p class = 'left'>W Salam! This is SMIT registration chatbot, if you have any query, let's solve.!</p>";
            }, 2000);
            setTimeout(function(){
                display.innerHTML += "<button>Information about Saylani</button><button>Information about SMIT</button><button>Campuses Info</button><button>Courses Info</button><button>Registration Process</button><button>Registration Form</button><button>Fees Information</button><button>Fees Payment</button><button>Result Check</button><button>Download ID Card</button>";
                typing.style.display = "none";
            }, 4000);
        }
        else if(['information about saylani','about saylani','information of saylani','what is saylani.?','what is saylani?','what is saylani ?','what is saylani.'].indexOf(inputMessage.toLowerCase()) !== -1){
            setTimeout(function(){
                display.innerHTML += "<p class = 'left'>Saylani is the largest charity organization, whose founder is Hazrat Molana Bashir Ahmed Farooqi Sahib.</p>";
                typing.style.display = "none";
            }, 2000);
        }
        else if(['course','courses','course information','courses info'].indexOf(inputMessage.toLowerCase()) !== -1){
            setTimeout(function(){
                display.innerHTML += "<p class = 'left'>Following courses are offered at SMIT currently.</p>";
                display.innerHTML += "<button>Web & App</button><button>UI/UX Design</button><button>Graphic Design</button><button>Digital Marketing</button>";
                typing.style.display = "none";
            }, 2000);
        }
        else if(['Web and app','web','app','web & app','web development','frontend development','app development','backend development'].indexOf(inputMessage.toLowerCase()) !== -1){
            setTimeout(function(){
                display.innerHTML += "<p class = 'left'>It is a 12 months long course, consisting of 05 modules in which you will learn following Tech stacks:</p>";
                display.innerHTML += "<ul><li>HTML</li><li>CSS</li><li>Git and Github</li><li>JavaScript</li><li>TypeScript</li><li>Tailand CSS</li><li>React.js</li><li>Firebase</li><li>Next.js</li><li>Node.js</li><li>Express.js</li><li>ReactNative.js</li><li>MongoDB</li></ul>";
                display.innerHTML += "<p class = 'left'>The detailed course outline can be downloaded from the link given below.</p>";
                typing.style.display = "none";
            }, 2000);
        }
        else if(['web and app'].indexOf(inputMessage.toLowerCase()) !== -1){
            setTimeout(function(){
                display.innerHTML += "<p class = 'left'>This is a 12 months long</p>";
                typing.style.display = "none";
            }, 2000);
        }
        else{
            setTimeout(function(){
                display.innerHTML += "<p class = 'left'>Sorry! I don't understand your query. Kindly explain in better way.</p>";
                typing.style.display = "none";
            }, 2000);
        }
        event.target.value = "";
    }
}