import CompanyDetails from "./details";
import { useState } from "react";

export default function Company({ _id, name, employees = [] }) {
  // some of the strange things (_company) we did prior begins to melt away as we find the right place for them to sit
  const [company, setCompany] = useState({ _id, name, employees });
  return <CompanyDetails {...company} onChange={setCompany} />;
}
