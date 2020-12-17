let main = document.getElementById('main');
let margin = 16 + 8;

setInterval(() => {
    main.style.transform = `scale(${(innerHeight - margin) / (margin + (48 + margin) * 7)})`;
}, 1000);

function addTile(content, x, y, xSpan, type = 'class') {
    let tile = document.createElement('div');
    if (type === 'class') {
        tile.className = 'tileClass';
        tile.style.height = '48px';
        tile.style.width = `${128 * xSpan + margin * (xSpan - 1)}px`;
        tile.style.position = 'absolute';
        tile.style.top = `${(48 + margin) * y}px`;
        tile.style.left = `${(128 + margin) * x}px`;
        tile.innerHTML = String(content);
        main.appendChild(tile);
    }
    else if (type === 'head') {
        tile.className = 'tileHead';
        tile.style.height = '48px';
        tile.style.width = `${128 * xSpan + margin * (xSpan - 1)}px`;
        tile.style.position = 'absolute';
        tile.style.top = `${(48 + margin) * y}px`;
        tile.style.left = `${(128 + margin) * x}px`;
        tile.innerHTML = String(content);
        main.appendChild(tile);
    }
    else if (type === 'time') {
        tile.className = 'tileTime';
        tile.style.height = '48px';
        tile.style.width = `${128 * xSpan + margin * (xSpan - 1)}px`;
        tile.style.position = 'absolute';
        tile.style.top = `${(48 + margin) * y}px`;
        tile.style.left = `${(128 + margin) * x}px`;
        tile.innerHTML = String(content);
        main.appendChild(tile);
    }
    else if (type === 'day') {
        tile.className = 'tileDay';
        tile.style.height = '48px';
        tile.style.width = `${128 * xSpan + margin * (xSpan - 1)}px`;
        tile.style.position = 'absolute';
        tile.style.top = `${(48 + margin) * y}px`;
        tile.style.left = `${(128 + margin) * x}px`;
        tile.innerHTML = String(content);
        main.appendChild(tile);
    };
};

addTile('Monday', 0, 1, 1, 'day');
addTile('Tuesday', 0, 2, 1, 'day');
addTile('Wednesday', 0, 3, 1, 'day');
addTile('Thursday', 0, 4, 1, 'day');
addTile('Friday', 0, 5, 1, 'day');
addTile('Saturday', 0, 6, 1, 'day');

let timeIndex = 0;

let addTime = (time) => {
    timeIndex++;
    addTile(time, timeIndex, 0, 1, 'time');
}

let setTitle = (title) => {
    addTile(String(title), 0, 0, 1, 'head');
    document.getElementById('title').innerHTML = String(title);
};
let addLecture = (lectureName, weekDay, lectureNumber, lectureSpan) => addTile(lectureName, weekDay, lectureNumber, lectureSpan, 'class');

