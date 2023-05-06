import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function CreateNotice() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: '¡Success!',
      text: 'The product has been created',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Continue'
    })
    


    // Subir imagen a Cloudinary
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "i5hof6um");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dlqnb6csq/image/upload",
      formData
    );
    const imageUrl = response.data.secure_url;

    // Guardar el resto de los datos en la base de datos en MongoDB

    const data = {
      name,
      description,
      image: imageUrl,
    };

    const response2 = await fetch(
      "http://localhost:3001/news",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const result = await response2.json();

    setName("");
    setDescription("");
    setImage("");
  };



  return (
    <div>
      <div>
        <h1>
          Create Product
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
                <label >Name</label>
                <input
                  type="text"
                  value={name}
                  bgColor="#fff"
                  onChange={(e) => setName(e.target.value)}
                />



                <label fontSize="18px">Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
  

              <button
                type="submit"
              >
                Create
              </button>
            </div>


                <label>Image</label>
                <input
                  type="file"
                  bgColor="#fff"
                  onChange={(e) => setImage(e.target.files[0])}
                />
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateNotice;