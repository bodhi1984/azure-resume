window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterjs3.azurewebsites.net/api/GetResumeCounter?code=-l_8HIS_FsksJKFVpOdMVj_I4r3epFeJ5obUSD6aBxQVAzFumhpUxg==';
const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const  getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}