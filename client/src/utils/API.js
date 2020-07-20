import axios from "axios";

export default {
	// Gets all books
  getLogin: function(userdata) {
    return axios.post("/api/auth/login", userdata);
	},
	// Gets all books
  getUserData: function() {
    return axios.get("/api/auth/user_data");
	},
	// Gets all books
  getLogout: function() {
    return axios.get("/api/auth/logout");
  },
  // Gets all books
  getMeds: function() {
    return axios.get("/api/medications");
  },
  // Gets the book with the given id
  getMedsId: function(id) {
    return axios.get("/api/medications/" + id);
  },
  // Deletes the book with the given id
  deleteMeds: function(id) {
    return axios.delete("/api/medications/" + id);
  },
  // Saves a book to the database
  saveMeds: function(medData) {
    return axios.post("/api/medications", medData);
  },
  // Gets all doctors
  getDocs: function() {
    return axios.get("/api/doctors");
  },
  // Gets the book with the given id
  getDocsId: function(id) {
    return axios.get("/api/doctors/" + id);
  },
  // Deletes the book with the given id
  deleteDocs: function(id) {
    return axios.delete("/api/doctors/" + id);
  },
  // Saves a book to the database
  saveDocs: function(docData) {
    return axios.post("/api/doctors", docData);
  },
  // Gets all doctors
  getAppts: function() {
    return axios.get("/api/appointments");
  },
  // Gets the book with the given id
  getApptsId: function(id) {
    return axios.get("/api/appointments/" + id);
  },
  // Deletes the book with the given id
  deleteAppts: function(id) {
    return axios.delete("/api/appointments/" + id);
  },
  // Saves a book to the database
  saveAppts: function(apptData) {
    return axios.post("/api/appointments", apptData);
  }

};