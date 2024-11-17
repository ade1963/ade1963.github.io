const Telegram = {
    initData: null,
    chatId: 'undef',
    username: null,

    initData() {
        this.chatId = 'undefined';
        //const initData = this.getQueryParam('initData');
        Telegram.WebApp.ready()
        try {
            const initData = Telegram.WebApp.initData;
    
            console.log('initData:', initData); // Debug log
            if (initData) {
                this.chatId = initData;
                try {
                    this.initData = JSON.parse(decodeURIComponent(initData));
                    console.log('Parsed initData:', this.initData); // Debug log
    
                    if (this.initData.user) {
                        this.chatId = this.initData.user.id;
                        this.username = this.initData.user.username;
                    } else {
                        console.error('User data not found in initData:', this.initData);
                    }
                } catch (error) {
                    console.error('Error parsing initData:', error);
                }
            } else {
                console.error('initData is not provided');
                this.chatId = 'initData is not provided';
            }
        } catch (error) {
            this.chatId = 'initData is not READY';
        }
    },

    getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
};
