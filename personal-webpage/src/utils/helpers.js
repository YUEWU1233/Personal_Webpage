function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

function truncateText(text, length) {
    if (text.length > length) {
        return text.substring(0, length) + '...';
    }
    return text;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

export { formatDate, truncateText, validateEmail };