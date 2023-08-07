import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { storage, db } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    data: "",
    time: "",
    location: "",
    category: "No category",
    priority: "None",
  });
  // const history = useHistory();
  const navigate = useNavigate();

  const location = useLocation();
  const goBack = location.state?.from ?? "/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const load = async () => {
    const createEvent = await addDoc(collection(db, "events"), {
      title: formData.title,
      description: formData.description,
      data: formData.data,
      time: formData.time,
      location: formData.location,
      category: formData.category,
      priority: formData.priority,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    load();
    setFormData({
      title: "",
      description: "",
      data: "",
      time: "",
      location: "",
      category: "No category",
      priority: "high",
    });
    navigate("/");
  };

  return (
    <div>
      <button>
        <Link to={goBack}>&larr; Back</Link>
      </button>
      <h3>Create new event</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            // pattern="/^([A-Za-zА-Яа-яІіЇїЄєҐґ-\s]{2,16})+$/"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="data">Select Data:</label>
          <input
            type="date"
            id="data"
            name="data"
            value={formData.data}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">Select Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Art">Art</option>
            <option value="Music">Music</option>
            <option value="Business">Business</option>
            <option value="Conference">Conference</option>
            <option value="Workshop">Workshop</option>
            <option value="Party">Party</option>
            <option value="Sport">Sport</option>
          </select>
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
        </div>
        <div>
          <button type="submit">Create Event</button>
        </div>
      </form>
    </div>
  );
}
