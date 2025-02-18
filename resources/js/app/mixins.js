import { useToast } from "vue-toastification";

const mixins = {
    methods: {
        go_to_url(url, newTab = true) {
            if (newTab) {
                window.open(url, '_blank');
            } else {
                window.open(url, '_self');
            }
        },
        send_http_request(endpoint, method, headers, params, data = null) {
            return new Promise((resolve, reject) => {
                axios({
                    url: endpoint,
                    method: method,
                    headers: headers,
                    params: params,
                    data: data
                }).then(response => {
                    resolve(response)
                })
                    .catch(error => {
                        reject(error)
                    });
            })
        },
        backend_url(endpoint) {
            return import.meta.env.VITE_APP_URL + endpoint
        },
        toast_notification(
            { message = "", type = "success" }
        ) {
            const toast = useToast();

            toast(
                message,
                {
                    type: type,
                    position: "top-right",
                    maxToasts: 2,
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: true,
                    hideProgressBar: false,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                }
            )
        },
    }
}

export default mixins
