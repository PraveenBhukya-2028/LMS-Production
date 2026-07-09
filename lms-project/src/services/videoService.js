import api from "./api";

const videoService = {

    // Get Videos By Course
    getVideosByCourse: async (courseId) => {
        const response = await api.get(`/videos/course/${courseId}`);
        return response.data;
    },

    // Get Video By Id
    getVideoById: async (id) => {
        const response = await api.get(`/videos/${id}`);
        return response.data;
    }

};

export default videoService;