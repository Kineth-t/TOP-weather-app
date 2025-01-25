const apiKey = process.env.API_KEY;

export function search(){
    console.log("Inside search function");
    const searchInput = document.querySelector(".searchInput").value;

    async function getResponse(searchInput) {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput}?unitGroup=metric&key=${apiKey}&contentType=json`;

        try{
            const response = await fetch(url);

            if (!response.ok) {
                console.log("Fetch error:", response.status, response.statusText);
                return null; 
            }

            const data = await response.json();
            console.log("API Data:", data);
            return data;
        }
        catch(err){
            alert("Error!");
        }
    }

    if (searchInput) {
        getResponse(searchInput);
    }
}