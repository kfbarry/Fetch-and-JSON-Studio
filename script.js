window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json()
    })
    .then(function(response){
        response.sort((a,b) => (a.hoursInSpace > b.hoursInSpace) ? 1 : -1)
        console.log(response);
        containerHTML = document.getElementById("container")
        for (let i = 0; i < response.length; i++){
        containerHTML.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${response[i].firstName} ${response[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${response[i].hoursInSpace}</li>
                        <li id="active">Active: ${response[i].active}</li>
                        <li>Skills: ${response[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${response[i].picture}" />
            </div>
        `;
            let status = document.getElementById("active");
            if (status.innerHTML === "Active: true"){
                status.id = "activeTrue";
            };
        }
        let astroCount = this.document.getElementById("astroCount");
        astroCount.innerHTML = `Astronaut Count: ${response.length}`;
    });
});

