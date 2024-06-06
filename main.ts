
const button = document.getElementById('enter') as HTMLButtonElement
button.textContent = 'enter';
const textContent = document.getElementById('textbox') as HTMLTextAreaElement;


//pass to the back end to process
//store what the user entered and the response and store that in the database

const send_data = {
message: textContent.value
}


function main()
{
if(textContent.value != null)
    {
        const url = "http://localhost:3000/api"

        fetch (url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(send_data)
        })

    }
}
button.addEventListener('click', main)
