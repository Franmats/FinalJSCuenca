fetch("../data/promos.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })