//When the content is loaded, run the visitcount
window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = ''; 

const getVisitCount = () => {
    //Grab this count
    let count = 30;
    
    //The API Call
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API")
        //Assign count to the json response
        count = response.count;
        //Go into the document, find the element that has counter as its ID, grab the innertext and set as count
        document.getElementById("counter").innerText = count;
    })
}