import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

interface DataProps {
  name: string;
  value: string | number;
}

interface TableHeroProps {
  data: DataProps[];
}

export const TableHero = ({ data }: TableHeroProps) => (
  <div className="overflow-x-auto w-full">
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm w-full">
      {/* <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
      </tr>
    </thead> */}

      <tbody className="divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr key={index} className="odd:bg-gray-50">
            <td className="whitespace-nowrap p-4 font-medium text-gray-900">
              {item.name}
            </td>
            <td className="whitespace-nowrap p-4 text-gray-700">
              {item.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
