const Telegram = {
    initData: null,
    chatId: null,
    username: null,

    initData() {
        const initDataUnsafe = this.getQueryParam('initDataUnsafe');
        console.log('initDataUnsafe:', initDataUnsafe); // Debug log
        this.chatId = initDataUnsafe
        if (initDataUnsafe) {
            try {
                this.initData = JSON.parse(decodeURIComponent(initDataUnsafe));
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
            console.error('initDataUnsafe is not provided');
        }
    },

    getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
};
