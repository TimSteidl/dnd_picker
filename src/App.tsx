import { Card } from "@/components/ui/card.tsx";
import { Masonry } from "@mui/lab";
import { Grid } from "@mui/material";
import { sourceData } from "@/sources.ts";
import React from "react";
import { Slider } from "@/components/ui/slider.tsx";

function App() {
  const [data, setData] = React.useState(sourceData);
  const [slider, setSlider] = React.useState([2]);
  return (
    <div className={"pt-10 bg-cyan-950"}>
      <div className={"justify-center flex pb-4"}>
        <h1 className={"text-4xl text-card"}>Was wollt ihr spielen?</h1>
      </div>
      <Slider
        value={slider}
        max={6}
        step={1}
        className={"w-1/3 mx-auto p-4"}
        onValueChange={(v) => setSlider(v)}
        min={1}
      ></Slider>
      <Grid container>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={9}>
          <Masonry columns={slider[0]}>
            {data.map((source) => (
              <button
                key={source.image}
                onClick={() => {
                  source.details = !source.details;
                  setData([...data]);
                }}
              >
                <Card
                  className={
                    "border p-0.5 bg-card-foreground border-card-foreground"
                  }
                >
                  {source.details ? (
                    <img src={source.image} alt={source.description} />
                  ) : (
                    <div className={"flex flex-col"}>
                      <h1 className={"text-2xl text-card"}>{source.name}</h1>
                      <p className={"text-card"}>{source.description}</p>
                    </div>
                  )}
                </Card>
              </button>
            ))}
          </Masonry>
        </Grid>
        <Grid item xs={1.5}></Grid>
      </Grid>
    </div>
  );
}

export default App;
