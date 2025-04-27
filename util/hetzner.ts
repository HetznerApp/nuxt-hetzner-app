import { useLocalStorage } from '@vueuse/core';

const token = useLocalStorage('token', '', {})

export const useHetzner = async (endpoint: string) => {
    let response = await fetch('https://api.hetzner.cloud/v1/' + endpoint, {
        headers: {
            'Authorization': `Bearer ${token.value}`,
            'Content-Type': 'application/json',
        },
    });
    let json = await response.json();
    console.log('debug response',json);
    return json;
};