import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "material-icons/iconfont/material-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import StudentItem from './StudentItem';
import { useNavigate } from 'react-router-dom';


function StudentList({ students }) {
  const navigate = useNavigate();

  const handleDelete = (masv) => {
    if (window.confirm('Bạn có chắc muốn xoá sinh viên này?')) {
      let list = JSON.parse(localStorage.getItem('students')) || [];
      list = list.filter(sv => sv.masv !== masv);
      localStorage.setItem('students', JSON.stringify(list));
      navigate(0); // reload lại trang
    }
  };

  return (
    <div className="table-container">
      <h2>Danh sách sinh viên</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Hành động</th>
            <th>Ghi chú</th>
          </tr>
        </thead>
        <tbody id="studentTable">
          {students.map((sv, index) => (
            <StudentItem
             key={sv.masv}
              sv={sv}
              index={index}
              onEdit={(masv) => {
                navigate(`/edit/${masv}`);
              }}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
