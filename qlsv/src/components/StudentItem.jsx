export default function StudentItem({ sv, index, onEdit, onDelete }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{sv.masv}</td>
      <td>{sv.hoten}</td>
      <td>{sv.email}</td>
      <td>{sv.gioitinh}</td>
      <td>{sv.ngaysinh}</td>
      <td>
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => onEdit(sv.masv)}
        >
          <i className="fas fa-edit"></i>
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(sv.masv)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </td>
      <td>{sv.ghichu}</td>
    </tr>
  );
}
