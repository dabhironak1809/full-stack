import React from 'react'


function ChildComponent(props) {
    return (
      <h1> {props.name}</h1>
    );
  }

export default function admin() {
    const name = "Brij";
  return (
      <div id="">
        
        <div className="card bg-white rounded-lg shadow-md">
        
            <div className="card-body p-6">
            <h1 className="font-bold text-2xl text-zinc-600 mt-7">Admin Tabel</h1>
                <table className="table-auto w-full text-left border-collapse mt-4">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">#</th>
                            <th className="px-4 py-2 border border-gray-300">Admin Name</th>
                            <th className="px-4 py-2 border border-gray-300">Gender</th>
                            <th className="px-4 py-2 border border-gray-300">Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300 space-x-2 ">
                            1
                            </td>
                            <td className="px-4 py-2 border border-gray-300 space-x-2 ">
                            <ChildComponent name={name} />
                            </td>
                            <td className="px-4 py-2 border border-gray-300 space-x-2 ">
                            Male
                            </td>
                            <td className="px-4 py-2 border border-gray-300 space-x-2 ">
                            94945824956
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}
