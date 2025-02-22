import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Usercontext } from "../context/Usercontext";

const RecommendedDoc = () => {
    const { open, setiSopen } = useContext(Usercontext);
    const [recommendedDoctors, setRecommendedDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState("doctors");

    useEffect(() => {
        if (selectedOption === "doctors") {
            fetchRecommendedDoctors();
        }
    }, [selectedOption]);

    const fetchRecommendedDoctors = async () => {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem("access");

        try {
            const response = await axios.get("/api/recommend-doctors/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            console.log("Fetched Doctors:", response.data);
            setRecommendedDoctors(response.data.recommended_doctors || []);
        } catch (err) {
            console.error("Failed to fetch recommended doctors:", err);
            setError("Failed to load recommendations.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 text-gray-200 bg-gray-900 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recommended Doctors</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && recommendedDoctors.length === 0 && (
                <p>No recommended doctors available.</p>
            )}
            <ul>
                {recommendedDoctors.map((doctor) => (
                    <li key={doctor.id} className="p-2 border-b border-gray-700">
                        {doctor.name} - {doctor.specialization}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendedDoc 
