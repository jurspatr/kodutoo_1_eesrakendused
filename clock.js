class ClockApp {
    constructor() {
        this.fontSize = 25;
        this.clockColor = '#ffffff';
        this.bgColor = '#000000';
        this.position = 'center';
        this.is12Hour = false;
        this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.bindEvents();
        this.updateClock();
        this.updateDate();
        this.updateStyle();
        setInterval(() => this.updateClock(), 1000);
        setInterval(() => this.updateDate(), 60000);
    }

    updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        if (this.is12Hour) hours = hours % 12 || 12;
        if (hours < 10) hours = `0${hours}`;
        if (minutes < 10) minutes = `0${minutes}`;
        if (seconds < 10) seconds = `0${seconds}`;

        document.getElementById('hours').textContent = `${hours}:`;
        document.getElementById('minutes').textContent = `${minutes}:`;
        document.getElementById('seconds').textContent = seconds;
    }

    updateDate() {
        const now = new Date();
        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();
        const weekday = this.weekdays[now.getDay()];

        document.getElementById('weekday').textContent = weekday;
        document.getElementById('day').textContent = `${day}.`;
        document.getElementById('month').textContent = `${month}.`;
        document.getElementById('year').textContent = year;
    }

    updateStyle() {
        const clockContainer = document.getElementById('clockContainer');
        const dateContainer = document.getElementById('dateContainer');
        const container = document.getElementById('container');

        clockContainer.style.color = this.clockColor;
        dateContainer.style.color = this.clockColor;
        document.body.style.backgroundColor = this.bgColor;
        clockContainer.style.fontSize = `${this.fontSize}px`;
        dateContainer.style.fontSize = `${this.fontSize}px`;

        container.style.justifyContent = 
            this.position === 'top' ? 'flex-start' : 
            this.position === 'bottom' ? 'flex-end' : 'center';
    }

    // TÄISETI JUHUSLIK VÄRV (HSL)
    //JS HSL random color generator 0-360 hue, 60-100% saturation, 40-80% lightness
    changeColor() {
        const hue = Math.floor(Math.random() * 360);        // 0-360 = igasugused värvid
        const saturation = 60 + Math.floor(Math.random() * 40); // 60-100%
        const lightness = 40 + Math.floor(Math.random() * 40);  // 40-80%
        this.clockColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        this.updateStyle();
    }

    changeBg() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = 20 + Math.floor(Math.random() * 30); // tumedad taustad
        const lightness = 10 + Math.floor(Math.random() * 20);  // 10-30%
        this.bgColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        this.updateStyle();
    }

    changeSize() {
        this.fontSize = this.fontSize > 20 ? this.fontSize - 5 : 60;
        this.updateStyle();
    }

    changePosition() {
        this.position = this.position === 'center' ? 'top' :
                       this.position === 'top' ? 'bottom' : 'center';
        this.updateStyle();
    }

    toggleFormat() {
        this.is12Hour = !this.is12Hour;
        document.getElementById('formatBtn').textContent = this.is12Hour ? '24h' : '12h';
        this.updateClock();
    }

    toggleTheme() {
        document.body.classList.toggle('night-theme');
    }

    bindEvents() {
        // Nupud
        document.getElementById('colorBtn').addEventListener('click', () => this.changeColor());
        document.getElementById('bgBtn').addEventListener('click', () => this.changeBg());
        document.getElementById('sizeBtn').addEventListener('click', () => this.changeSize());
        document.getElementById('posBtn').addEventListener('click', () => this.changePosition());
        document.getElementById('formatBtn').addEventListener('click', () => this.toggleFormat());
        document.getElementById('themeBtn').addEventListener('click', () => this.toggleTheme());

        // COLOR PICKER (kasutaja valib ise)
        document.getElementById('picker').addEventListener('input', (e) => {
            this.clockColor = e.target.value;
            this.updateStyle();
        });

        // Keyboard shortcuts
        window.addEventListener('keydown', (e) => {
            switch(e.key.toLowerCase()) {
                case 'c': this.changeColor(); break;
                case 'b': this.changeBg(); break;
                case 's': this.changeSize(); break;
                case 'p': this.changePosition(); break;
                case 'h': this.toggleFormat(); break;
                case 't': this.toggleTheme(); break;
            }
        });
    }
}

new ClockApp();


