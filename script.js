const requestURL = "https://www.googleapis.com/books/v1/volumes?q=harry+potter"


const request = async() =>{
    const response = await fetch(requestURL)
    try {
        if(!response.ok){
            throw new Error('Error fetching data')
        }else{
            const convertireJSON = await response.json()
            const convertor = convertireJSON
            console.log(convertor);
            
           
        }
    } catch (err) {
        console.error('An error ocurred',err)
    }
}

request()