import { json } from "stream/consumers";


const button = document.getElementById('enter') as HTMLButtonElement
button.addEventListener('click', main)
const textContent = document.getElementById('textbox') as HTMLTextAreaElement;


//pass to the back end to process
//store what the user entered and the response and store that in the database


function main()
{
    if(textContent != null)
    {
        //send data
        //take in response and set to variable send back to user
        //store in database

        //need to setup python(or whatever the desired programming language is ) http server to recieve the data and than transform it
        //can also handle the data and everything

        const userInput = textContent.value;
        const data = {
            userInput: userInput
        };
        fetch{
            //python http server
        }



    }
}
