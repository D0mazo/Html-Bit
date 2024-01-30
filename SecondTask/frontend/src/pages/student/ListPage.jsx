import useApiData from "../../hooks/useApiData.jsx";
import {baseApiUrl} from "../../helper.js";

export default function ListPage() {
    const [studentList, setStudentList] = useApiData(`${baseApiUrl}students`);

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-4xl'>Studentu sarasas</h1>

            <div className='mt-5'>
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-600 text-white">
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Vardas</th>
                        <th className="px-4 py-2">Pavardė</th>
                        <th className="px-4 py-2">El. paštas</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentList.map((studentas) => (
                        <tr key={studentas.id} className="bg-gray-200">
                            <td className="border px-4 py-2">{studentas.id}</td>
                            <td className="border px-4 py-2">{studentas.firstname}</td>
                            <td className="border px-4 py-2">{studentas.lastname}</td>
                            <td className="border px-4 py-2">{studentas.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
