export const pushToDataLayer = (data) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
};

export const trackPageView = (url, title) => {
    pushToDataLayer({
        event: "pageview",
        page: {
            url: url,
            title: title || document.title,
        },
    });
};
