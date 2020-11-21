export const fetchTrips = async (url) => {
    const request = buildRequest();
    const response = await fetch(`/api/${url}`, request);
    if (response.status !== 200) throw new Error('Data could not be retrieved');
    return await response.json();
};

const buildRequest = () => {
    const headers = {
        Accept: 'application/json',
        'Accept-Language': 'fr',
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
    };
    return { headers, method: 'GET' };
};