import React from "react";
import StatCard from "../../components/core/Cards/StatCard";
import { FaUsers, FaChartLine, FaUserPlus, FaServer } from "react-icons/fa";
import { chartData, BarData, pieData } from '../../data/chartdata/Linedata'
import BarChartdata from "../../components/chart/Barchart";
import Piechart from "../../components/chart/Piechart";
import LineChartdata from "../../components/chart/Linechart";
import { Link } from "react-router-dom";
import PieChartData from "../../components/chart/Piechart";
import {
  CubeIcon,
  WrenchScrewdriverIcon,
  ArrowTrendingUpIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  return (
  <div className="p-6">
      {/* Header */}
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-blue-600">
          Welcome back, Amit Patel! 🙏
      </h1>
      <p className="text-gray-500">
          Here's what's happening with your assets today.
      </p>
    </div>

      {/* Horizontal Scroll Cards */}
    <div className="relative">
      <div className="flex gap-6 overflow-y-auto scroll-smooth pb-2">
          
        <StatCard title="Total Assets" value="1,248" percentage="+12.5% vs last month" icon={<FaUsers />} />
        <StatCard title="Total Value" value="₹2.4 Cr" percentage="+8.2% vs last month" icon={<FaChartLine />} />
        <StatCard title="Assigned Assets" value="1,156" percentage="+5.1% vs last month" icon={<FaUserPlus />} />
        <StatCard title="Total Employees" value="245" percentage="+3.4% vs last month" icon={<FaServer />} />
      </div>
    </div>
    {/*linechart*/}
    <div className="grid grid-cols-2 gap-6 p-6">
      <div className="grid">
      <LineChartdata
        title="Asset Growth Trend"
        data={chartData}
        xKey="month"
        dataKey="value"
        dataKey2="profit"
      />
      </div>
    {/*PieChart*/}
    
      <div className="grid">
      <PieChartData
        title="Asset Growth Trend"
        data={pieData}
        dataKey="value"
        nameKey="name"/>
      </div>
    {/*BarChart*/}
     <div className="grid">
      <BarChartdata
        title="Asset Growth Trend"
      />
      </div>
   <div className="bg-white rounded-xl border p-5 shadow-sm w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Quick Overview</h2>
    <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 mb-3">
      <div>
        <p className="text-sm text-gray-600">Available Assets</p>
        <p className="text-lg font-semibold">92 Items</p>
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
          <CubeIcon className="w-5 h-5 text-blue-600" />
      </div>
    </div>
     <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 mb-3">
      <div>
        <p className="text-sm text-gray-600">Under Maintaince</p>
        <p className="text-lg font-semibold">24 Items</p>
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
          <WrenchScrewdriverIcon className="w-5 h-5 text-blue-600" />
      </div>
    </div>
    <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 mb-3">
      <div>
        <p className="text-sm text-gray-600">New This Month</p>
        <p className="text-lg font-semibold">15 Items</p>
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
          <ArrowTrendingUpIcon className="w-5 h-5 text-blue-600" />
      </div>
    </div>
    <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 mb-3">
      <div>
        <p className="text-sm text-gray-600">Total Deparments</p>
        <p className="text-lg font-semibold">8 Departs</p>
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
          <BuildingOffice2Icon className="w-5 h-5 text-blue-600" />
      </div>
    </div>
    
    </div>

    </div>
    </div>
  );
};

export default Dashboard;
