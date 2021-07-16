import axios, { CancelToken } from "axios";
import { setProgressUploadImage } from "../redux/actions/messagesActions";

export const registerUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN}/api/loginOrRegister`,
        {

        },
        {
          headers: {
            appKey: '31b584e00a0d22f01f30ac06a10360ef8728b21fdf7eb32762697300d8db',
            appSecret: '$2b$10$cfaqWhLYFeQ0nqC4DevwA.Bc2gxTPOrkbAkG5NHEikivmMKdgZ8xy'
          }
        }
      );
      const res = await response.data;
      resolve(res);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const createChatRoom = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN}/api/room`,
        data,
        {
          headers: {
            appKey: '31b584e00a0d22f01f30ac06a10360ef8728b21fdf7eb32762697300d8db',
            appSecret: '$2b$10$cfaqWhLYFeQ0nqC4DevwA.Bc2gxTPOrkbAkG5NHEikivmMKdgZ8xy'
          }
        }
      );
      const res = await response.data;
      resolve(res);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const loadMessages = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN}/api/load_messages`,
        data,
        {
          headers: {
            appKey: '31b584e00a0d22f01f30ac06a10360ef8728b21fdf7eb32762697300d8db',
            appSecret: '$2b$10$cfaqWhLYFeQ0nqC4DevwA.Bc2gxTPOrkbAkG5NHEikivmMKdgZ8xy'
          }
        }
      );
      const res = await response.data;
      resolve(res);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const postMessages = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN}/api/messages`,
        data,
        {
          headers: {
            appKey: '31b584e00a0d22f01f30ac06a10360ef8728b21fdf7eb32762697300d8db',
            appSecret: '$2b$10$cfaqWhLYFeQ0nqC4DevwA.Bc2gxTPOrkbAkG5NHEikivmMKdgZ8xy'
          }
        }
      );
      const res = await response.data;
      resolve(res);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const uploadImage = (data, cancelFileUpload) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const config = {
        onUploadProgress: (progressEvent) =>
          dispatch(
            setProgressUploadImage(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          ),
        cancelToken: new CancelToken(
          (cancel) => (cancelFileUpload.current = cancel)
        ),
        headers: {
          appKey: '31b584e00a0d22f01f30ac06a10360ef8728b21fdf7eb32762697300d8db',
          appSecret: '$2b$10$cfaqWhLYFeQ0nqC4DevwA.Bc2gxTPOrkbAkG5NHEikivmMKdgZ8xy'
        }
      };
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN}/api/upload`,
        data,
        config
      );
      const res = await response.data;
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const getClientWidget = (key) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_MAIN}/api/clientWidget/${key}`,
        {
          headers: {
            appKey: '31b584e00a0d22f01f30ac06a10360ef8728b21fdf7eb32762697300d8db',
            appSecret: '$2b$10$cfaqWhLYFeQ0nqC4DevwA.Bc2gxTPOrkbAkG5NHEikivmMKdgZ8xy'
          }
        });
      const res = await response.data;
      resolve(res);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const createRating = (data, key) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN}/api/clientWidget/${key}/rate`,
        data,
        {
          headers: {
            appKey: '31b584e00a0d22f01f30ac06a10360ef8728b21fdf7eb32762697300d8db',
            appSecret: '$2b$10$cfaqWhLYFeQ0nqC4DevwA.Bc2gxTPOrkbAkG5NHEikivmMKdgZ8xy'
          }
        }
      );
      const res = await response.data;
      resolve(res);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const logoutUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN}/api/logoutUser`,
        data,
        {
          headers: {
            appKey: '31b584e00a0d22f01f30ac06a10360ef8728b21fdf7eb32762697300d8db',
            appSecret: '$2b$10$cfaqWhLYFeQ0nqC4DevwA.Bc2gxTPOrkbAkG5NHEikivmMKdgZ8xy'
          }
        }
      );
      const res = await response.data;
      resolve(res);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const getRecomendationMessages = (key) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_MAIN}/api/clientWidget/${key}/recomendMessage`,
        {
          headers: {
            appKey: '31b584e00a0d22f01f30ac06a10360ef8728b21fdf7eb32762697300d8db',
            appSecret: '$2b$10$cfaqWhLYFeQ0nqC4DevwA.Bc2gxTPOrkbAkG5NHEikivmMKdgZ8xy'
          }
        }
      );
      const res = await response.data;
      resolve(res);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const autoResponder = (data, key) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN}/api/auto_responder/${key}`,
        data,
        {
          headers: {
            appKey: '31b584e00a0d22f01f30ac06a10360ef8728b21fdf7eb32762697300d8db',
            appSecret: '$2b$10$cfaqWhLYFeQ0nqC4DevwA.Bc2gxTPOrkbAkG5NHEikivmMKdgZ8xy'
          }
        }
      );
      const res = await response.data;
      resolve(res);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const getContents = (key) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_MAIN}/api/clientWidget/${key}/content`,
        {
          headers: {
            appKey: '31b584e00a0d22f01f30ac06a10360ef8728b21fdf7eb32762697300d8db',
            appSecret: '$2b$10$cfaqWhLYFeQ0nqC4DevwA.Bc2gxTPOrkbAkG5NHEikivmMKdgZ8xy'
          }
        }
      );
      const res = await response.data;
      resolve(res);
    } catch (error) {
      reject(error.response);
    }
  });
};
