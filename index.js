const circle = {
    radius: 3,
    draw () {
        console.log (Draw);
    }
}

for (let key of Object.keys(circle)) {
    console.log (circle[key]);
}

if ('radius' in circle) console.log ('yes');