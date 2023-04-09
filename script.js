const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ce04d65523msh51bef89bb6632d9p145ddejsn432a529d3914',
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
};
const meaning = (name) => {
   
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + name, options)
        .then(response => response.json())

        .then(response => {
            console.log(response);
            
            let define = response.definition;
            definition.innerHTML = define;
            word.innerHTML = response.word;
            if (response.valid) {valid.innerHTML="Word Available"}
            else {valid.innerHTML="Word Not Available"}
        })
        .catch(err => console.error(err));
}
meaning("Football");

submit.addEventListener("click", (e)=>{
    
    e.preventDefault();
    meaning(term.value);
})

