import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PieChartComponent = ({ data }) => {
  const theme = useTheme();
  const COLORS = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    "#00C49F",
    "#FFBB28",
  ];

  return (
    <Card raised sx={{ margin: theme.spacing(2) }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Jumlah Keseluruhan
        </Typography>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={150}
            fill={theme.palette.primary.main}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </CardContent>
    </Card>
  );
};

export default PieChartComponent;
