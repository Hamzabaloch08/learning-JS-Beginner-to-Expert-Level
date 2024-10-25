const requestUrl = 'https://api.github.com/users/Hamzabaloch08'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.responseText);
        console.log(`${data.followers} => userFollwers`);
    }
}
xhr.send()