//import axios from 'axios';
import data from '../data/data.json';

export const useAxios = () => {

    const get = async () => {
        try {
            return data;
        } catch (err) {
            return err;
        }
    };

    return {
        get
    };
};
