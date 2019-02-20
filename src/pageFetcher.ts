import axios from 'axios';

export const imageFetcher =  async (bonjourURL: string) => {
    const htmlResponse =  await axios.get(bonjourURL);
    return htmlResponse.data;
}