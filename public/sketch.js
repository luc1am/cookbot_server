let input; 
let button;
let userStr;

function setup(){
    createCanvas(500,500);
    input = createInput();
    input.position(100,100);
    background(100);
    //let userStr;  //should define later?
    //let botStr;
    // console.log(userStr);
    button = document.getElementById('submit');
    button.addEventListener('click', async event => {
      let data = { "message": userStr };
      //object for using server
      console.log(userStr);
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        //remove body, leave other
      };
      //"/send/"+userStr
      const response = await fetch('/send', options); //new endpoint
      const json = await response.json();
      console.log(json);
    });
}

function draw(){
  userStr  = input.value();
  //console.log(userStr);
}

//.gitignore node_modules
