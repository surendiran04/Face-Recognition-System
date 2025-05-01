import { useState, useEffect } from "react";
const { VITE_BACKEND_URL } = import.meta.env;

const RegisteredUsers = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${VITE_BACKEND_URL}/registered_faces`, {
          method: "GET",
          credentials: 'include'
        });
        const data = await response.json();
        console.log(data);
        setRecords(data.registered_faces || []);
      } catch (error) {
        console.error("Error registered users :", error);
        setRecords([]);
      }finally{
        setLoading(false);
      }
    };
    // fetchData();
    setRecords([
      {
        "_id": "6803ac15e1b5be2c8e4f1840",
        "name": "vairaperumal",
        "photo_url": "/content/drive/My Drive/faces_db/vairaperumal.jpg"
      },
      {
        "_id": "6809f72725303be71387ba6b",
        "name": "Dummy",
        "photo_url": "/content/drive/My Drive/faces_db/Dummy.jpg"
      },
      {
        "_id": "680a6fd48d655292f3819567",
        "name": "kowsik",
        "photo_url": "/content/drive/My Drive/faces_db/kowsik.jpg"
      },
      {
        "_id": "680a71ca8d655292f3819569",
        "name": "vairaperumal",
        "photo_url": "/content/drive/My Drive/faces_db/vairaperumal.jpg"
      },
      {
        "_id": "680a8ec1b9d370b2fff90bc6",
        "name": "Elumalai",
        "photo_url": "/content/drive/My Drive/faces_db/Elumalai.jpg"
    }
    ])
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="p-5">
        <h2 className="text-2xl font-bold text-center mb-4">Loading Attendance Records...</h2>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-center mb-4">Attendance Records</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
            </tr>
          </thead>
          <tbody>
            {records.length > 0 ? (
              records.map((record, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{record.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="1" className="text-center p-4 text-gray-500">No records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredUsers;
