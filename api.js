const endpoint = 'http://date.jsontest.com'

const endpointFunction = async () => {
    try{
        const response = await fetch(endpoint)
        if(response.ok){
            const jsonData = await response.json()
            console.log(jsonData)


        }

        throw new Error('Request has failed!')

    }catch(e){
        console.error(e)
    }
}