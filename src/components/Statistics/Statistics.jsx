import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { getLocalStorageData } from "../../utilities/localStorage";

const Statistics = () => {
  const getLocalData = getLocalStorageData();
  const totalDonation = getLocalData.length;

  const data = [
    { name: "Total Donation", value: 12 },
    { name: "Your Donation", value: totalDonation },
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const COLORS = ["#FF444A", "#00C49F"];
  return (
    <div className="container mx-auto px-8 pt-12 pb-24">
      <div>
        <ResponsiveContainer width="100%" height={500}>
          <PieChart width={500} height={500}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={`md:220`}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  style={{
                    margin: "10px",
                  }}
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-16 text-[#0B0B0B] text-lg">
        <div className="flex items-center">
          <h5 className="">Your Donation </h5>
          <span className="w-24 h-3 bg-[#00C49F] rounded-sm ml-4 md:mr-14"></span>
        </div>
        <div className="flex items-center">
          <h5>Total Donation</h5>
          <span className="w-24 h-3 bg-[#FF444A] rounded-sm ml-4"></span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
