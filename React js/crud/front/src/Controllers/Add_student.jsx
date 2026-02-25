import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

export default function Add_student() {

    const [student_name, setname] = useState();
    const [student_email, setemail] = useState();
    const [student_mobile, setmobile] = useState();

    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        // alert(id)
        showdata();
    }, [])

    const showdata = async () => {
        const res = await axios.get("http://localhost:1111/student/" + id)
        setname(res.data.student_name);
        setemail(res.data.student_email);
        setmobile(res.data.student_mobile);
    }

    const studet_add_update = async (e) => {
        e.preventDefault();

        if (id) {
            const res = await axios.put("http://localhost:1111/student/" + id, {
                student_name, student_email, student_mobile
            })
            alert("data updated")
            navigate("/Table_student");
        }
        else {
            const res = await axios.post("http://localhost:1111/student", {
                student_name, student_email, student_mobile
            })
            alert("data inserted")
            navigate("/Table_student")
        }

    }

    return (
        <main id="main" class="main">
            <form class="row g-3">
                <div class="col-12">
                    <label for="inputNanme4" class="form-label"> Name</label>
                    <input type="text" class="form-control" id="inputNanme4" defaultValue={student_name} onChange={(e) => setname(e.target.value)} />
                </div>
                <div class="col-12">
                    <label for="inputNanme4" class="form-label"> email</label>
                    <input type="text" class="form-control" id="inputNanme4" defaultValue={student_email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div class="col-12">
                    <label for="inputNanme4" class="form-label"> mobile</label>
                    <input type="text" class="form-control" id="inputNanme4" defaultValue={student_mobile} onChange={(e) => setmobile(e.target.value)} />
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary" onClick={studet_add_update} >Submit</button>
                    <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
            </form>
        </main>
    )
}
