let main = document.getElementById('main');

function addTile(content, x, y, xSpan, type = 'class') {
    let margin = 16 + 8;
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
    }
}

addTile('Electronics & Communication', 0, 0, 1, 'head');

addTile('Monday', 0, 1, 1, 'day');
addTile('Tuesday', 0, 2, 1, 'day');
addTile('Wednesday', 0, 3, 1, 'day');
addTile('Thursday', 0, 4, 1, 'day');
addTile('Friday', 0, 5, 1, 'day');
addTile('Saturday', 0, 6, 1, 'day');

addTile('8:00 to 9:00', 1, 0, 1, 'time');
addTile('9:00 to 10:00', 2, 0, 1, 'time');
addTile('10:00 to 11:00', 3, 0, 1, 'time');
addTile('11:00 to 12:00', 4, 0, 1, 'time');
addTile('12:00 to 13:00', 5, 0, 1, 'time');
addTile('13:00 to 14:00', 6, 0, 1, 'time');
addTile('14:00 to 15:00', 7, 0, 1, 'time');
addTile('15:00 to 16:00', 8, 0, 1, 'time');
addTile('16:00 to 17:00', 9, 0, 1, 'time');

addTile('Environmental Engineering And Disasters', 1, 3, 1 , 'class');
addTile('Environmental Engineering And Disasters', 1, 4, 1 , 'class');
addTile('Environmental Engineering And Disasters', 1, 5, 1 , 'class');

addTile('English', 2, 2, 1 , 'class');
addTile('Calculus & Differential Equations', 2, 3, 1 , 'class');
addTile('Workshop Practices', 2, 4, 1 , 'class');
addTile('Semiconductor Physics', 2, 5, 1 , 'class');
addTile('English', 2, 6, 1 , 'class');

addTile('Calculus & Differential Equations', 3, 1, 1 , 'class');
addTile('Calculus & Differential Equations', 3, 2, 1 , 'class');
addTile('Semiconductor Physics Tutorial', 3, 3, 1 , 'class');
addTile('Engineering Graphics & Design', 3, 4, 1 , 'class');
addTile('Calculus & Differential Equations', 3, 6, 1 , 'class');

addTile('Calculus & Differential Equations', 4, 1, 2, 'class');
addTile('Calculus & Differential Equations', 4, 2, 2, 'class');
addTile('Semiconductor Physics Tutorial', 4, 3, 1 , 'class');
addTile('Semiconductor Physics', 4, 6, 1 , 'class');

addTile('Calculus & Differential Equations Tutorial', 5, 3, 1 , 'class');

addTile('Semiconductor Physics Practical', 8, 2, 2, 'class');
addTile('Workshop Practices', 8, 3, 2, 'class');
addTile('English Practical', 8, 4, 2, 'class');
addTile('Workshop Practices', 8, 5, 2, 'class');
