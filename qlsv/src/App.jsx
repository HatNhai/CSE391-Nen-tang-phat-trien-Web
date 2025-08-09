import { useState, useEffect } from 'react';
import './App.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import StudentsData from './data';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {   
  const [ready, setReady] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Nạp data.js vào localStorage nếu chưa có
    const existing = localStorage.getItem('students');
    if (!existing) {
      localStorage.setItem('students', JSON.stringify(StudentsData));
      setStudents(StudentsData);
    } else {
      setStudents(JSON.parse(existing));
    }
    setReady(true);
  }, []);

  if (!ready) {
    return <div>Đang khởi tạo dữ liệu…</div>;
  }

  return (

    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Quản lý Sinh Viên</Link>
          <div>
            <Link className="btn btn-outline-primary me-2" to="/">Danh sách</Link>
            <Link className="btn btn-primary" to="/add">Thêm sinh viên</Link>
          </div>
        </div>
      </nav>
     

      <Routes>
        <Route path="/" element={<StudentList students={students} />} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/edit/:id" element={<StudentForm editMode={true}/>} />
      </Routes>
    </div>
  );
}

export default App;
