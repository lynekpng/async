document.getElementById("button").addEventListener("click", function() {
    fetch("localstorage.json")
        .then(response => response.json())
        .then (data => {
            const rulesList = document.getElementById("rulesList");
            rulesList.innerHTML = "";
            data.forEach(rule => {
                const ListItem = document.createElement("li") ;
                ListItem.textContent = rule ;
                rulesList.appendChild(ListItem);
                
            });
        })
        .catch(error => {console.error('Error fetching JSON: ', error);

    });
});