import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { storage, db } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

import {
  CreateEventWrapper,
  FormWrapper,
  BackBtn,
  BackLink,
  TitleInput,
  Form,
  InputWrapper,
  Input,
  Textarea,
  Select,
  Label,
  Option,
  SubmitBtn,
} from "./CreateEvent.styled";

export default function CreateEvent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    data: "",
    time: "",
    locations: "",
    category: "No category",
    priority: "None",
    createAt: "",
  });

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
    const dateCreatePOst = new Date();
    const dateCreate = dateCreatePOst.toLocaleString();

    const createEvent = await addDoc(collection(db, "events"), {
      title: formData.title,
      description: formData.description,
      data: formData.data,
      time: formData.time,
      locations: formData.locations,
      category: formData.category,
      priority: formData.priority,
      createAt: dateCreate,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    load();

    setFormData({
      title: "",
      description: "",
      data: "",
      time: "",
      locations: "",
      category: "No category",
      priority: "high",
    });
    navigate("/");
  };

  return (
    <CreateEventWrapper>
      <BackBtn>
        <BackLink to={goBack}>&larr; &nbsp; Back</BackLink>
      </BackBtn>
      <TitleInput>Create new event</TitleInput>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="data">Select Date</Label>
            <Input
              type="date"
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
              placeholder="Select Date"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="time">Select Time</Label>
            <Input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="locations">Location</Label>
            <Input
              type="text"
              id="locations"
              name="locations"
              value={formData.locations}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="category">Category</Label>
            <Select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <Option value=""></Option>
              <Option value="Art">Art</Option>
              <Option value="Music">Music</Option>
              <Option value="Business">Business</Option>
              <Option value="Conference">Conference</Option>
              <Option value="Workshop">Workshop</Option>
              <Option value="Party">Party</Option>
              <Option value="Sport">Sport</Option>
            </Select>
          </InputWrapper>
          {/* <div>
          <input type="file" />
        </div> */}
          <InputWrapper>
            <Label htmlFor="priority">Priority</Label>
            <Select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <Option value=""></Option>
              <Option value="High">High</Option>
              <Option value="Medium">Medium</Option>
              <Option value="Low">Low</Option>
            </Select>
          </InputWrapper>

          <SubmitBtn type="submit">Add event</SubmitBtn>
        </Form>
      </FormWrapper>
    </CreateEventWrapper>
  );
}
