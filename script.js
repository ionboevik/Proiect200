const requestURL = "https://www.googleapis.com/books/v1/volumes?q=harry+potter"


const request = async() =>{
    const response = await fetch(requestURL)
    try {
        if(!response.ok){
            throw new Error('Error fetching data')
        }
    } catch (error) {
        const convertionJson = await response.json()
        const convertor = convertionJson

        convertor.forEach(element => {
            console.log(element);
            
        });
    }
}