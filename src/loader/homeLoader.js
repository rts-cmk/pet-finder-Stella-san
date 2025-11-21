export default async function homeLoader(){

    const result = {};
    const petData = fetch("http://localhost:4000/dogs").then(response => response.json());
    const userData = fetch("http://localhost:4000/user").then(response => response.json());

    
    [result.pets, result.user] = await Promise.all([petData, userData])
    return result
}