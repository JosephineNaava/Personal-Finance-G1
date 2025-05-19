
export function Card({ title, children, className }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-200 ${className}`}>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <div className="mt-2">
        {children}
      </div>
    </div>
  )
}

// export function Card({ title, value, icon }) {
//     return (
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <div className="flex items-center gap-3">
//           {icon && <div className="text-blue-500">{icon}</div>}
//           <h3 className="font-medium text-gray-900">{title}</h3>
//         </div>
//         <p className="text-2xl font-semibold mt-2">{value}</p>
//       </div>
//     );
//   }