import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import imagen from '../../../img/banner/imagen_banner.jpg'
import AdminNavBar from "../../AdminNavBar/AdminNavBar";

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
        <AdminNavBar/>
      </div>
      <div className="pt-[150px]">
        <h1 className="text-[40px] text-center">
          <strong> Create New</strong>
        </h1>
        <div className="text-left mt-[20px] justify-between flex mx-[50px] items-center">
          <div className="w-[50%]">
            <img src={imagen}alt="" />
          </div>
          <div className="w-[50%] justify-center px-[100px] items-center">
          <form onSubmit={handleSubmit}>
            <div className="my-[10px] ">
              <div className="mb-[5px]">
              <label className="mr-[10px]">Name</label>
              </div>
              <div>
              <input
                className="border-2 w-full"
                  type="text"
                  value={name}
                  bgColor="#fff"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="my-[10px]">
              <div className="mb-[5px]">
              <label className="mr-[10px]" fontSize="18px">Description</label>
              </div>
              <div>
              <textarea
                  className="border-2 w-full"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="my-[10px]" >
              <div className="mb-[5px]">
              <label className="mr-[10px]">Image</label>
              </div>
              <div>
              <input
                  className="w-full text-center justify-center mx-auto"
                  type="file"
                  bgColor="#fff"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
                <div className="text-center mt-[20px]">
                <button className="bg-blue-500 py-[2px] px-[10px] rounded-md" type="submit">Create</button>
                </div>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateNotice;