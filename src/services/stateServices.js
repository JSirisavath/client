import axios from 'axios';

// Axios listening to our client interacting with our data and sending that request to express for a response back
// Practically Axios is the middleman between our requests to the servers and servers to us
export default {
  // Axios Getting all the states from our server to us/clients
  getAllStates() {
    return axios.get('/api/states').then((response) => {
      return response.data;
    });
  },

  // Axios listening if we visited a certain state or not

  setVisitedOrNot(stateName, visited) {
    let requestVisitedData = { visited: visited };
    // e.g url will look like this api/states/wisconsin
    return axios.patch('/api/states/' + stateName, requestVisitedData).then(
      (response) => response.data // Axios will respond back if status code 200 is returned backed from server, else will be handled with a catch block
    );
  },
};
