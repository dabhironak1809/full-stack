import React from 'react'

export default function H1() {
      const count = 500;
  const name = "mani";
  return (
    //   <div>
    //   {[...Array(count)].map((_, index) => (
    //     <p key={index}>
    //       {index + 1}. {name}
    //     </p>
    //   ))}
    // </div>
    <>
     
 {/* google map place a react js code impliment */}
 <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="google-map"
        src="https://www.google.com/maps?q=Ahmedabad,Gujarat&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
 
    </>
  )
}
