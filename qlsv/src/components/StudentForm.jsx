// src/components/StudentForm.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function StudentForm({ editMode }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    masv: '',
    hoten: '',
    email: '',
    gioitinh: 'Nam',
    ngaysinh: '',
    ghichu: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editMode && id) {
      const students = JSON.parse(localStorage.getItem('students')) || [];
      const found = students.find(s => s.masv === id);
      if (found) setStudent(found);
    }
  }, [editMode, id]);

  const validate = () => {
    const e = {};
    if (!student.masv) e.masv = 'Mã sinh viên không được để trống';
    if (!student.hoten) e.hoten = 'Họ tên không được để trống';
    if (!student.email || !/\S+@\S+\.\S+/.test(student.email)) e.email = 'Email không hợp lệ';
    if (!student.ngaysinh) e.ngaysinh = 'Ngày sinh không được để trống';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const students = JSON.parse(localStorage.getItem('students')) || [];
    if (editMode) {
      const index = students.findIndex(s => s.masv === id);
      students[index] = student;
    } else {
      students.push(student);
    }
    localStorage.setItem('students', JSON.stringify(students));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-12">
        <label className="form-label">Mã sinh viên</label>
        <input
          type="text"
          className="form-control"
          value={student.masv}
          onChange={e => setStudent({ ...student, masv: e.target.value })}
          disabled={editMode}
        />
        {errors.masv && <div className="text-danger small">{errors.masv}</div>}
      </div>

      <div className="col-12">
        <label className="form-label">Họ tên</label>
        <input
          type="text"
          className="form-control"
          value={student.hoten}
          onChange={e => setStudent({ ...student, hoten: e.target.value })}
        />
        {errors.hoten && <div className="text-danger small">{errors.hoten}</div>}
      </div>

      <div className="col-12">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={student.email}
          onChange={e => setStudent({ ...student, email: e.target.value })}
        />
        {errors.email && <div className="text-danger small">{errors.email}</div>}
      </div>

      <div className="col-12">
        <label className="form-label">Giới tính</label>
        <div>
          <label className="me-3">
            <input
              type="radio"
              name="gioitinh"
              value="Nam"
              checked={student.gioitinh === 'Nam'}
              onChange={e => setStudent({ ...student, gioitinh: e.target.value })}
            /> Nam
          </label>
          <label>
            <input
              type="radio"
              name="gioitinh"
              value="Nữ"
              checked={student.gioitinh === 'Nữ'}
              onChange={e => setStudent({ ...student, gioitinh: e.target.value })}
            /> Nữ
          </label>
        </div>
      </div>

      <div className="col-12">
        <label className="form-label">Ngày sinh</label>
        <input
          type="date"
          className="form-control"
          value={student.ngaysinh}
          onChange={e => setStudent({ ...student, ngaysinh: e.target.value })}
        />
        {errors.ngaysinh && <div className="text-danger small">{errors.ngaysinh}</div>}
      </div>

      <div className="col-12">
        <label className="form-label">Ghi chú</label>
        <textarea
          className="form-control"
          value={student.ghichu}
          onChange={e => setStudent({ ...student, ghichu: e.target.value })}
        ></textarea>
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-success">
          {editMode ? 'Cập nhật sinh viên' : 'Thêm sinh viên'}
        </button>
      </div>
    </form>
  );
}
