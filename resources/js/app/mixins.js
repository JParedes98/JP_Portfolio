const mixins = {
    methods: {
        go_to_url(url, newTab = true) {
            if (newTab) {
                window.open(url, '_blank');
            } else {
                window.open(url, '_self');
            }
        },
        backend_url(endpoint) {
            return import.meta.env.VITE_APP_URL + '/' + endpoint
        }
    }
}

export default mixins
