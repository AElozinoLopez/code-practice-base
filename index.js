// const circle = {
//     radius: 3,
//     draw () {
//         console.log (Draw);
//     }
// }

// for (let key of Object.keys(circle)) {
//     console.log (circle[key]);
// }

// if ('radius' in circle) console.log ('yes');

const circle = {
    radius: 3,
    draw () {
        console.log (Draw);
    }
}

// for (let key of Object.entries(circle)) {
//     console.log (circle);
// }



const another = Object.assign({}, circle);
console.log (another);