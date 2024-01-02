// import React from "react";

// function Alert(props) {
//   const capitalize = (word) => {
//     const lower = word.toLowerCase();
//     return lower.charAt(0).toUpperCase() + lower.slice(1);
//   };
//   return (
//     <div style={{ height: "50px" }}>
//       {props.alert && (
//         <div
//           className={`alert alert-${props.alert.type} alert-dismissible fade show`}
//           role="alert"
//         >
//           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Alert;

import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className="relative">
      {props.alert && (
        <div
          className={`rounded-none p-4 ${
            props.alert.type === "success" ? "bg-green-700" : "bg-red-800"
          } text-white`}
        >
          <span className="font-semibold">{capitalize(props.alert.type)}:</span>{" "}
          {props.alert.msg}
          <button
            className="absolute top-0 right-0 p-4"
            onClick={() => props.setAlert(null)}
          >
            <span className="text-lg">&times;</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Alert;
