import api from "./api";

const courseService = {

  getAllCourses: async () => {
    const response = await api.get("/courses");
    return response.data;
  },

  getCourseById: async (id) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  },

  createCourse: async (courseData) => {
    const response = await api.post("/courses", courseData);
    return response.data;
  },

};

export default courseService;