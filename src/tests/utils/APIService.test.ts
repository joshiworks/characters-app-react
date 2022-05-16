
import axios from "axios";
import { API } from "../../constants/api";
import APIService from "../../utils/APIService";

describe('APIService Unit Tests',  ()=> {
    it('APIService.fetchUsers return response properly', async () => {
        const data = {
            "id": 1,
            "name": "John Doe",
            "username": "JohnDoe",
            "email": "johndoe@demo.com"
          };

           // set up mock for axios.get
          const mock = jest.spyOn(axios, 'get');
          mock.mockImplementationOnce(() => Promise.resolve({data }));
          
          const result = await APIService.fetchUsers();

          expect(mock).toHaveBeenCalledWith(`${API.user}`);
          expect(mock).toHaveBeenCalledTimes(1);
          expect(result).toBe(data);

          // restore axios.get
          mock.mockRestore();
    });


    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';
        
        const mock = jest.spyOn(axios, 'get');
        mock.mockImplementationOnce(() =>  Promise.reject(new Error(errorMessage)))
     
        await expect(APIService.fetchUsers()).rejects.toThrow(errorMessage);
      });
});

