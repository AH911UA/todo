export default async function getTodos(quantity = 1) {
    return fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(data => {
            if(data.ok && data.status === 200)
                return data.json();
            // eslint-disable-next-line no-throw-literal
            throw({
                code: data.code,
                error_msg: "Can't find data"
            })
        })
        .then(data => 
                data && data.length >= quantity 
                ? data.map(d => ({
                    id: d.id,
                    title: d.title
                })).slice(0, quantity) 
                : [] 
            )
}