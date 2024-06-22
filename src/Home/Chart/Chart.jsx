import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer } from "recharts";
import UseAxiosPublic from "../../CustomHook/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const Chart = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: featured = [] } = useQuery({
    queryKey: ["featured-test"],
    queryFn: async () => {
      const res = await axiosPublic.get("/featured-tests");
      return res.data;
    },
  });

  // Custom shape for barChart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const data = featured.map((item, index) => ({
    name: item.testName,
    uv: item.count,
    fill: colors[index % colors.length],
  }));
  const pieData = [
    { name: "Delivered", value: 41 },
    { name: "Pending", value: 59 },
  ];

  return (
    <div className="w-full h-full my-10 lg:px-10 lg:flex gap-20">
      <div className="w-full lg:w-3/5">
        <h2 className="text-xl text-center font-poppins mb-6">Most Booked</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: 'top' }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full lg:w-2/5">
        <h2 className="text-xl text-center font-poppins mb-6">Service Ratio</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
