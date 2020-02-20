(function () {
    console.log('hai');
    fetch('http://localhost:32714/api/getName').then(res => res.json()).then((data) => {
        console.log(data);
    });
})();