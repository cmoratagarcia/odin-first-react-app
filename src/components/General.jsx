import { useState } from "react";

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true); //tell the component whether it's in Editing or Display mode
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  return <div>General Info</div>;
}

export default GeneralInfo;
