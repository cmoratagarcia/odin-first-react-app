import { useState } from "react";

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true); //tell the component whether it's in Editing or Display mode
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    setIsEditing(false);
  }

  return <div>General Info</div>;
}

export default GeneralInfo;
