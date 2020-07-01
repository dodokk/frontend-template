// -- setAxios function --
import setAxios from "./base";

// -- [POST] /sample --

interface SamplePostType {
  data1: string;
  data2: string;
  images: File[];
}
export const samplePostAPI = (inputData: SamplePostType) => {
  const formData = new FormData();
  formData.append("data1", inputData.data1);
  formData.append("data2", inputData.data2);
  inputData.images.forEach(image => {
    formData.append("images", image);
  });
  return setAxios()
    .post(`/sample`, formData)
    .then(res => res)
    .catch(res => res);
};

// -- [GET] /sample/:id --

interface SampleIdGetType {
  data1: string;
  data2: string;
}
export const sampleIdGetAPI = (id: string, inputData: SampleIdGetType) => {
  const queries = {
    data1: inputData.data1,
    data2: inputData.data2
  };
  return setAxios()
    .get(`/sample/${id}`, { params: queries })
    .then(res => res)
    .catch(res => res);
};

// -- [PUT] /sample/:id --

interface SampleIdPutType {
  data1: string;
  data2: string;
}
export const sampleIdPutAPI = (id: string, inputData: SampleIdPutType) => {
  const formData = new FormData();
  formData.append("data1", inputData.data1);
  formData.append("data2", inputData.data2);
  return setAxios()
    .put(`/sample/${id}`, formData)
    .then(res => res)
    .catch(res => res);
};

// -- [DELETE] /sample/:id --

export const sampleIdDeleteAPI = (id: string) => {
  return setAxios()
    .delete(`/sample/${id}`)
    .then(res => res)
    .catch(res => res);
};
