const getMembers = (count) => new Promise( (resolves, rejects) => {
    const request = new XMLHttpRequest();
    const url = `https://api.randomuser.me/?nat=US&results=${count}`;    
    request.open('GET', url);
    request.onload = () => (request.status === 200)? resolves(JSON.parse(request.response).results) : rejects(Error(request.statusText));
    request.onerror = error => rejects(error);
    request.send();
});

export default getMembers;