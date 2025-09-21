
async function findResult(title) {
    try { 
        const result = await fetch(title)
        const data = await result.json()
        const onlyTitle = data.map(data => data.title)
        console.log(onlyTitle.slice(1,5))

    } catch (e) {
        console.log(e)
    }
    
}
findResult('https://jsonplaceholder.typicode.com/posts')
