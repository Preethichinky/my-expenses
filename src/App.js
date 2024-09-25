import { axisClasses, BarChart } from "@mui/x-charts";
import "./App.css";
import { dataset, valueFormatter } from "./data/dataset";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { useState } from "react";

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}) {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{ width: "100%" }}>
      <FormControl>
        <FormLabel id="tick-placement-radio-buttons-group-label">
          tickPlacement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="tick-placement-radio-buttons-group-label"
          name="tick-placement"
          value={tickPlacement}
          onChange={(event) => setTickPlacement(event.target.value)}>
          <FormControlLabel value="start" control={<Radio />} label="start" />
          <FormControlLabel value="end" control={<Radio />} label="end" />
          <FormControlLabel value="middle" control={<Radio />} label="middle" />
          <FormControlLabel
            value="extremities"
            control={<Radio />}
            label="extremities"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="label-placement-radio-buttons-group-label">
          tickLabelPlacement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="label-placement-radio-buttons-group-label"
          name="label-placement"
          value={tickLabelPlacement}
          onChange={(event) => setTickLabelPlacement(event.target.value)}>
          <FormControlLabel value="tick" control={<Radio />} label="tick" />
          <FormControlLabel value="middle" control={<Radio />} label="middle" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  series: [{ dataKey: "seoul", label: "Seoul rainfall", valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

function App() {
  const [tickPlacement, setTickPlacement] = useState("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = useState("middle");
  return (
    <div className="App">
      <p>Preethi</p>
      {/* <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[{ dataKey: "seoul", label: "Seoul rainfall", valueFormatter }]}
        layout="vertical"
      /> */}
      <div style={{ width: "100%" }}>
        <TickParamsSelector
          tickPlacement={tickPlacement}
          tickLabelPlacement={tickLabelPlacement}
          setTickPlacement={setTickPlacement}
          setTickLabelPlacement={setTickLabelPlacement}
        />
        <BarChart
          dataset={dataset}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "month",
              tickPlacement,
              tickLabelPlacement,
            },
          ]}
          {...chartSetting}
        />
      </div>
    </div>
  );
}

export default App;
