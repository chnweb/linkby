function pickItem() {
    let random = Math.random();
    let i = 0;
    while (random >= projects[i].probability) {
        random -= projects[i].probability;
        i ++;
    }
    return i;
}

const projects = [
    { id: 1, name: 'Option 1', probability: 0.3 },
    { id: 2, name: 'Option 2', probability: 0.5 },
    { id: 3, name: 'Option 3', probability: 0.15 },
    { id: 4, name: 'Option 4', probability: 0.05 }
];
projects.sort((a, b) => (b.probability - a.probability));

let counts = new Array(projects.length).fill(0);
for (let i = 0; i < 500; i ++) {
    let index = pickItem();
    counts[index] ++;
    document.write(projects[index].name + '<br/>');
}

document.write('<br/><br/>');

for (let i = 0; i < projects.length; i ++) {
    document.write('ID ' + projects[i].id + ' = ' + counts[i] + '<br/>');
}