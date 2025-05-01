import { useEffect, useState } from "react";
const { VITE_BACKEND_URL } = import.meta.env;

const Records = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${VITE_BACKEND_URL}/attendance`, {
          method: "GET",
          credentials: 'include' 
        });
  
        const data = await response.json(); 
        console.log(data);
        setRecords(data.attendance_records || []); 
      } catch (error) {
        console.error("Error fetching attendance:", error);
        setRecords([]); 
      }
    };
  
    // fetchData();
    setRecords( [

      {
        "course_id": "16",
        "name": "vairaperumal",
        "student_id": "2",
        "timestamp": "2025-04-19T13:58:55.770000"
    },
       
        {
          "course_id": "16",
          "name": "vairaperumal",
          "student_id": "2",
          "timestamp": "2025-04-19T13:58:55.770000"
      },
        {
            "course_id": "16",
            "name": "vairaperumal",
            "student_id": "2",
            "timestamp": "2025-04-19T13:58:55.770000"
        },
          
          {
            "course_id": "15",
            "name": "Dummy",
            "student_id": "14",
            "timestamp": "2025-04-24T08:33:08.405000"
        },

        {
          "course_id": "15",
          "name": "Dummy",
          "student_id": "14",
          "timestamp": "2025-04-24T08:33:08.405000"
      },
          {
              "course_id": "26",
              "name": "kowsik",
              "student_id": "11",
              "timestamp": "2025-04-24T17:08:31.698000"
          },
         
       
          {
            "course_id": "26",
            "name": "kowsik",
            "student_id": "11",
            "timestamp": "2025-04-24T17:08:31.698000"
        },
        {
          "course_id": "16",
          "name": "vairaperumal",
          "student_id": "2",
          "timestamp": "2025-04-24T17:16:28.290000"
      },
        {
          "course_id": "16",
          "name": "Elumalai",
          "student_id": "56",
          "timestamp": "2025-04-24T19:21:54.838000"
      },
      {
        "course_id": "16",
        "name": "vairaperumal",
        "student_id": "2",
        "timestamp": "2025-04-25T05:27:18.048000"
    },
    {
        "course_id": "16",
        "name": "vairaperumal",
        "student_id": "2",
        "timestamp": "2025-04-25T05:26:48.084000"
    },

      ]
  )
  }, []);
  

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-center mb-4">Attendance Records</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {records.length > 0 ? (
              records.map((record, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{record.name}</td>
                  <td className="border p-2">
                    {new Date(record.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">No records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Records;
