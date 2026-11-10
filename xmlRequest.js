const xhttpr = new XMLHttpRequest();

xhttpr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

xhttpr.send();

xhttpr.onload = ()=> {
    if (xhttpr.status === 200){
        const response = JSON.parse(xhttpr.response);
        console.log(response.title);
    }
    else{
        console.log("Failed!");
    }
}