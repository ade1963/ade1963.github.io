const Telegram = {
    initData: null,
    chatId: null,
    username: null,

    initData() {
        const initData = this.getQueryParam('initDataUnsafe');
        if (initData) {
            this.initData = JSON.parse(decodeURIComponent(initData));
            this.chatId = this.initData.user?.id;
            this.username = this.initData.user?.username;
        }
    },

    getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
};
