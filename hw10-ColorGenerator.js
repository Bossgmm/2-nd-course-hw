 function changeColor() {
            const block = document.querySelector('.mini-games');
            block.style.backgroundColor = getRandomColor();
        }

        // Функция для генерации случайного цвета
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }