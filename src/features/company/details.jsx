import TextField from "@/ui/text-field";
import Employee from "@/features/employee";

export default function CompanyDetails({
  _id,
  name,
  employees = [],
  onChange = () => {},
}) {
  return (
    <div className="flex flex-col gap-2 border border-blue-400 p-8">
      <div>ID: {_id}</div>
      <div>
        Name:{" "}
        <TextField
          value={name}
          onChange={(name) =>
            onChange({
              _id,
              name,
              employees,
            })
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        {employees.map((employee, i) => (
          <div key={i} className="border border-green-400 p-4">
            <h2>Employee</h2>
            <Employee
              {...employee}
              onChange={(employee) =>
                onChange({
                  _id,
                  name,
                  employees: employees.map((_employee, j) =>
                    i === j ? employee : _employee
                  ),
                })
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
