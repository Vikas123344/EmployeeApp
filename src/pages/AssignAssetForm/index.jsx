import React,{useState} from "react"; 
 
 const employees1 = [
  { id: "emp001", name: "Amit Sharma", employeeId: "EMP1001" },
  { id: "emp002", name: "Priya Verma", employeeId: "EMP1002" },
];

 const assets2 = [
  { id: "asset001", name: "Dell Laptop", assetTag: "LAP-101" },
  { id: "asset002", name: "iPhone 13", assetTag: "MOB-202" },
];



const AssignAssetForm = () => {
  const [formData, setFormData] = useState({
  employee: "",
  asset: "",
  assignDate: "",
  returnDate: "",
  notes: "",
});

const [assignedCards, setAssignedCards] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleAssign(){
    if (!formData.employee || !formData.asset || !formData.assignDate) {
      alert("Please fill required fields");
      return;
    }

    setAssignedCards([...assignedCards, formData]);

    setFormData({
      employee: "",
      asset: "",
      assignDate: "",
      returnDate: "",
      notes: "",
    });
  };
return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl border shadow-sm p-6">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-800">
            Assign Asset to Employee
          </h1>
          <p className="text-sm text-gray-500">
            Select an employee and asset to create assignment
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Employee */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Employee <span className="text-red-500">*</span>
            </label>
            <select
  name="employee"
  value={formData.employee}
  onChange={handleChange}
  className="w-full rounded-lg border px-3 py-2 text-sm"
>
  <option value="">-- Choose Employee --</option>
  {employees1.map((emp) => (
    <option key={emp.id} value={emp.name}>
      {emp.name} ({emp.employeeId})
    </option>
  ))}
</select>


          </div>

          {/* Asset */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Asset <span className="text-red-500">*</span>
            </label>
            <select
  name="asset"
  value={formData.asset}
  onChange={handleChange}
  className="w-full rounded-lg border px-3 py-2 text-sm"
>
  <option value="">-- Choose Asset --</option>
  {assets2.map((asset) => (
    <option key={asset.id} value={asset.name}>
      {asset.name} - {asset.assetTag}
    </option>
  ))}
</select>


          </div>

          {/* Assign Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assign Date <span className="text-red-500">*</span>
            </label>
            <input
               type="date"
               name="assignDate"
               value={formData.assignDate}
               onChange={handleChange}
               className="w-full rounded-lg border px-3 py-2 text-sm"
            />

          </div>

          {/* Expected Return Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expected Return Date (Optional)
            </label>
           <input
             type="date"
             name="returnDate"
             value={formData.returnDate}
             onChange={handleChange}
             className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
           />

          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes (Optional)
            </label>
            <textarea
             rows="4"
             name="notes"
             value={formData.notes}
             onChange={handleChange}
             placeholder="Any additional notes..."
             className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm resize-none"
            />

          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4">
            
            <button
             type="button"
             className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg"
             onClick={handleAssign}
             
            >Assign Asset</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AssignAssetForm;
