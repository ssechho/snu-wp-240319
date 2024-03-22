const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        const clearButton = document.getElementById('clearButton');

        let isDrawing = false;

        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', endPosition);
        canvas.addEventListener('mousemove', draw);
        clearButton.addEventListener('click', clearCanvas);

        function startPosition(event) {
            isDrawing = true;
            draw(event);
        }

        function endPosition() {
            isDrawing = false;
            context.beginPath();
        }

        function draw(event) {
            if (!isDrawing) return;

            context.lineWidth = 5;
            context.lineCap = 'round';
            context.strokeStyle = 'lime';

            context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            context.stroke();
            context.beginPath();
            context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        }

        function clearCanvas() {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }