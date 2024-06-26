import CustomeDataTable from "@/app/components/backend/CustomeDataTable";
import DashboardCharts from "@/app/components/backend/DashboardCharts";
import Heading from "@/app/components/backend/Heading";
import LargeCards from "@/app/components/backend/LargeCards";
import SmallCards from "@/app/components/backend/SmallCards";


export default function Dashboard() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Lagre Card */}
      <LargeCards />
      {/* Small Card */}
      <SmallCards />
      {/* Charts */}
      <DashboardCharts />
      {/* Recent Order Table */}
      <CustomeDataTable />
    </div>
  );
}
