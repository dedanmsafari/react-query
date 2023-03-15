import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:4000" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`; //probably fetch from local storage
  const onSuccess = (response) => response;
  const onError = (error) => {
    //what to do with errors
    //optionally catch errors and add additional loggins
    //optiuonally also redirect of status to login if  is 401
    return error; //dont forget to return the error
  };

  return client(options).then(onSuccess).catch(onError);
};
