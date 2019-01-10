import call from 'isomorphic-fetch';

const API_BASE = 'http://0.0.0.0:9999/api';

const api = (path, options) => fetch(path, options).then(res => {
  if(res.status > 200) {
    throw {msg: 'error'};
  }
  return res;
})

const API = {
  get: path => api(`${API_BASE}${path}`),
  post: (path, data) => { // eslint-disabel-line
    return api(`${API_BASE}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
  patch: (path, data) => { // eslint-disabel-line
    return api(`${API_BASE}${path}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
  delete: (path) => { // eslint-disabel-line
    return api(`${API_BASE}${path}`, {
      method: 'DELETE',
    });
  },
};

export const Template = {
  getAll: () => API.get('/templates'),
  get: id => API.get(`/templates/${id}`),
  getBy: (by, value) => API.get(`/templates/${by}/${value}`),
  deleteAll: () => API.delete('/templates'),
  create: data => API.post('/templates', data),
  update: data => API.patch('/templates', data),
};


export const Page = {
  getAll: () => API.get('/pages'),
  get: id => API.get(`/pages/${id}`),
  getBy: (by, value) => API.get(`/pages/${by}/${value}`),
  deleteAll: () => API.delete('/pages'),
  create: data => API.post('/pages', data),
  update: data => API.patch('/pages', data),
};

export default API;
