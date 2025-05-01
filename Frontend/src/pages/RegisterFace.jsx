import { useRef, useState } from "react";
import Webcam from "react-webcam";
const { VITE_BACKEND_URL } = import.meta.env;

const Register = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
const [courseId, setCourseId] = useState('');
const [studentId, setStudentId] = useState('');


  const [message, setMessage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const dataURLtoFile = (dataUrl, filename) => {
    let arr = dataUrl.split(",");
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(bstr.length);
    for (let i = 0; i < bstr.length; i++) {
      u8arr[i] = bstr.charCodeAt(i);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleSubmit = async () => {
    if (!image || !name) {
      alert("Please enter a name and capture an image.");
      return;
    }
    else if(!email){
      alert("Please enter a email.");
      return;
    }
    else if (!courseId) {
      alert("Please enter a course_id.");
      return;
    } else if (!studentId) {
      alert("Please enter a student_id.");
      return;
    }
    

    const imageFile = dataURLtoFile(image, "register.jpg");
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("course_id", courseId);
    formData.append("student_id", studentId);


    try {
      const response = await fetch(`${VITE_BACKEND_URL}/register_face`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error registering face:", error);
    }
  };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
//       <h2 className="text-3xl font-semibold text-green-900 mb-6">Register a New Face</h2>

//       <div className="grid grid-cols-2 gap-4">
//   <input
//     type="text"
//     placeholder="Enter Name"
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//     className="p-2 border rounded"
//   />
//   <input
//     type="email"
//     placeholder="Enter Email"
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//     className="p-2 border rounded"
//   />
//   <input
//     type="number"
//     placeholder="Enter Course ID"
//     value={courseId}
//     onChange={(e) => setCourseId(e.target.value)}
//     className="p-2 border rounded"
//   />
//   <input
//     type="number"
//     placeholder="Enter Student ID"
//     value={studentId}
//     onChange={(e) => setStudentId(e.target.value)}
//     className="p-2 border rounded"
//   />
// </div>



//       <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="w-80 h-60 rounded-lg shadow-md border-2" />
//       <button onClick={capture} className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-md hover:bg-blue-700 transition">
//         Capture Image
//       </button>

//       {image && <img src={image} alt="Captured" className="mt-4 w-40 h-40 border-2 rounded-lg shadow-md" />}
      
//       <button onClick={handleSubmit} className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg text-lg shadow-md hover:bg-green-700 transition">
//         Register Face
//       </button>

//       {message && (
//         <div className="mt-6 p-4 bg-white shadow-lg rounded-lg text-center text-blue-800 font-semibold">
//           {message}
//         </div>
//       )}
//     </div>
//   );



return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl space-y-6">
      <h2 className="text-3xl font-semibold text-center text-green-800">Register a New Face</h2>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border rounded w-full"
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Enter Course ID"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          className="p-3 border rounded w-full"
        />
        <input
          type="number"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="p-3 border rounded w-full"
        />
      </div>

      {/* Webcam */}
      <div className="flex justify-center">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="w-80 h-60 rounded-lg shadow-md border"
        />
      </div>

      {/* Capture + Register Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={capture}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow hover:bg-blue-700"
        >
          Capture Image
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg shadow hover:bg-green-700"
        >
          Register Face
        </button>
      </div>

      {/* Captured Image Preview */}
      {image && (
        <div className="flex justify-center">
          <img
            src={image}
            alt="Captured"
            className="w-40 h-40 border-2 rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Message Display */}
      {message && (
        <div className="mt-4 p-4 bg-blue-100 text-blue-800 rounded text-center font-semibold shadow">
          {message}
        </div>
      )}
    </div>
  </div>
);

};

export default Register;
