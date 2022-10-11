//When the content is loaded, run the visitcount
window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://bsl-getresumecounter.azurewebsites.net/api/GetResumeCounter?code=QKUeeMHZjGVP3noO_ys_GcOT2BMDdmfFIZUqUu4LAVXGAzFuXCclPg==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter'; 

const getVisitCount = () => {
    //Grab this count
    let count = 30;
    
    //The API Call
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API")
        //Assign count to the json response
        count = response.count;
        //Go into the document, find the element that has counter as its ID, grab the innertext and set as count
        document.getElementById("counter").innerText = count;
    })
}