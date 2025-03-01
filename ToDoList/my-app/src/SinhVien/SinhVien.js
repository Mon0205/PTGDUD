import React, { useState, useEffect, useRef, useMemo, useReducer } from 'react';
import "./SinhVien.css";
const studentReducer = (state, action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            return [...state, action.payload];
        case "EDIT_STUDENT":
            return state.map((student) =>
                student.id === action.payload.id ? action.payload : student
            );
        case "DELETE_STUDENT":
            return state.filter((student) => student.id !== action.payload);
        default:
            return state;
    }
};

const SinhVien = () => {
    const [students, dispatch] = useReducer(
        studentReducer,
        JSON.parse(localStorage.getItem("students")) || []
    );
    const [name, setName] = useState("");
    const [math, setMath] = useState("");
    const [history, setHistory] = useState("");
    const [editingStudent, setEditingStudent] = useState(null);
    const nameRef = useRef();

    // Lưu danh sách sinh viên vào localStorage
    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

    // Hàm reset input
    const resetForm = () => {
        setName("");
        setMath("");
        setHistory("");
        setEditingStudent(null);
        nameRef.current.focus();
    };

    // Hàm tính điểm trung bình
    const calculateAverage = (math, history) => ((math + history) / 2).toFixed(2);

    // Hàm thêm sinh viên
    const addStudent = () => {
        if (!name.trim() || isNaN(math) || isNaN(history)) return alert("Vui lòng nhập đủ và đúng dữ liệu!");
        const mathScore = parseFloat(math);
        const historyScore = parseFloat(history);
        if (mathScore < 0 || historyScore < 0) return alert("Điểm không thể âm!");

        dispatch({
            type: "ADD_STUDENT",
            payload: {
                id: Date.now(),
                name: name.trim(),
                math: mathScore,
                history: historyScore,
                average: calculateAverage(mathScore, historyScore),
            },
        });

        resetForm();
    };

    // Hàm chỉnh sửa sinh viên
    const editStudent = () => {
        if (!name.trim() || isNaN(math) || isNaN(history)) return alert("Vui lòng nhập đủ và đúng dữ liệu!");
        const mathScore = parseFloat(math);
        const historyScore = parseFloat(history);
        if (mathScore < 0 || historyScore < 0) return alert("Điểm không thể âm!");

        dispatch({
            type: "EDIT_STUDENT",
            payload: {
                ...editingStudent,
                name: name.trim(),
                math: mathScore,
                history: historyScore,
                average: calculateAverage(mathScore, historyScore),
            },
        });

        resetForm();
    };

    // Hàm xoá sinh viên
    const deleteStudent = (id) => {
        if (window.confirm("Bạn có chắc muốn xoá sinh viên này không?")) {
            dispatch({ type: "DELETE_STUDENT", payload: id });
        }
    };

    // Tính điểm trung bình của toàn bộ danh sách sinh viên
    const classAverage = useMemo(() => {
        if (students.length === 0) return 0;
        const total = students.reduce((acc, student) => acc + parseFloat(student.average), 0);
        return (total / students.length).toFixed(2);
    }, [students]);

    return (
        <div className='container'>
            <h2>Quản lý Sinh Viên</h2>
            <input
                ref={nameRef}
                type="text"
                placeholder="Tên sinh viên"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Điểm toán"
                value={math}
                onChange={(e) => setMath(e.target.value)}
                min="0"
            />
            <input
                type="number"
                placeholder="Điểm lịch sử"
                value={history}
                onChange={(e) => setHistory(e.target.value)}
                min="0"
            />
            {editingStudent ? (
                <button onClick={editStudent}>Cập nhật</button>
            ) : (
                <button onClick={addStudent}>Thêm sinh viên</button>
            )}
            <h3>Danh sách sinh viên</h3>
            <table>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Toán</th>
                        <th>Lịch sử</th>
                        <th>Điểm trung bình</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.math}</td>
                            <td>{student.history}</td>
                            <td>{student.average}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setEditingStudent(student);
                                        setName(student.name);
                                        setMath(student.math);
                                        setHistory(student.history);
                                        nameRef.current.focus();
                                    }}
                                >
                                    Sửa
                                </button>
                                <button onClick={() => deleteStudent(student.id)}>Xoá</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Điểm trung bình của lớp: {classAverage}</h3>
        </div>
    );
};

export default SinhVien;
