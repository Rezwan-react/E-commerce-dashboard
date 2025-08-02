import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    BarElement,
    Tooltip,
    Legend,
    Filler // <-- Add this
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    BarElement,
    Tooltip,
    Legend,
    Filler // <-- And this
);

function Chart() {
    return (
        <section className="p-6 space-y-6 bg-gray-50 min-h-screen">
            {/*======================== Sales Performance and Best Sellers =============================*/}
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl col-span-2 shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-md font-semibold text-gray-700">Sales Performance</h3>
                        <div className="text-sm text-gray-500">Monthly</div>
                    </div>
                    <Bar
                        data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                            datasets: [
                                {
                                    label: 'Completed',
                                    data: [10, 40, 35, 80, 50, 70, 60],
                                    backgroundColor: '#f43f5e88',
                                    borderRadius: 6,
                                    barThickness: 20,
                                },
                                {
                                    label: 'Delivered',
                                    data: [5, 20, 15, 60, 40, 50, 70],
                                    backgroundColor: '#6366f188',
                                    borderRadius: 6,
                                    barThickness: 20,
                                }
                            ]
                        }}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                    labels: {
                                        color: '#374151',
                                        font: { size: 12 }
                                    }
                                }
                            },
                            scales: {
                                x: {
                                    grid: { display: false },
                                    ticks: { color: '#9CA3AF' }
                                },
                                y: {
                                    grid: { color: '#E5E7EB' },
                                    ticks: { color: '#9CA3AF' }
                                }
                            }
                        }}
                    />
                </div>
            </div>

            {/*======================== Recent Purchases =============================*/}
            <div className="bg-white rounded-xl shadow p-4">
    <h3 className="text-md font-semibold text-gray-700 mb-4">Recent Purchases</h3>
    <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
            <thead>
                <tr className="text-gray-500 border-b">
                    <th className="py-2 px-4">Product</th>
                    <th className="py-2 px-4">Order ID</th>
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Customer</th>
                    <th className="py-2 px-4">Status</th>
                    <th className="py-2 px-4">Amount</th>
                    <th className="py-2 px-4">Actions</th> 
                </tr>
            </thead>
            <tbody>
                {["MacBook Pro", "iPhone 11 Pro", "Oppo A20"].map((prod, idx) => (
                    <tr key={idx} className="border-b">
                        <td className="py-2 px-4">{prod}</td>
                        <td className="py-2 px-4">#2541{idx + 3}</td>
                        <td className="py-2 px-4">Aug 5th, 2021</td>
                        <td className="py-2 px-4">Customer {idx + 1}</td>
                        <td className="py-2 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${idx % 2 === 0
                                ? 'bg-green-100 text-green-600'
                                : 'bg-yellow-100 text-yellow-600'
                                }`}>
                                {idx % 2 === 0 ? 'Delivered' : 'Pending'}
                            </span>
                        </td>
                        <td className="py-2 px-4">${(200 + idx * 50).toFixed(2)}</td>
                        <td className="px-4 py-3">
                            <FiMoreVertical className="text-gray-400 cursor-pointer" />
                        </td> 
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

          

            {/*======================== Bottom Graphs =============================*/ }
    <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Market Overview</h3>
            <Bar
                data={{
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [
                        {
                            label: 'Sales',
                            data: [40, 60, 80, 60, 90, 70, 100],
                            backgroundColor: '#8b5cf6',
                            borderRadius: 6,
                            barThickness: 20,
                        }
                    ]
                }}
                options={{ responsive: true, plugins: { legend: { display: false } } }}
            />
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Visits by Source</h3>
            <Doughnut
                data={{
                    labels: ["Direct", "Social", "Email", "Other"],
                    datasets: [
                        {
                            data: [52, 20, 15, 13],
                            backgroundColor: ["#6366f1", "#f43f5e", "#facc15", "#10b981"]
                        }
                    ]
                }}
                options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }}
            />
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Total Revenue</h3>
            <Line
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                    datasets: [
                        {
                            label: 'Revenue',
                            data: [120, 190, 170, 220, 200],
                            borderColor: '#f43f5e',
                            backgroundColor: '#f43f5e44',
                            fill: true
                        }
                    ]
                }}
                options={{ responsive: true, plugins: { legend: { display: false } } }}
            />
        </div>
    </div>
        </section >
    );
}

export default Chart;
