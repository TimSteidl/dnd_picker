import { Card } from "@/components/ui/card.tsx";
import { sources } from "@/sources.ts";
import { Masonry } from "@mui/lab";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className={"pt-10 bg-cyan-950"}>
      <div className={"justify-center flex pb-4"}>
        <h1 className={"text-4xl text-card"}>Was wollt ihr spielen?</h1>
      </div>
      <Grid container>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={9}>
          <Masonry columns={2}>
            {sources.map((source) => (
              <Card
                key={source}
                className={
                  "border p-0.5 bg-card-foreground border-card-foreground"
                }
              >
                <img src={source} alt={source} />
              </Card>
            ))}
          </Masonry>
        </Grid>
        <Grid item xs={1.5}></Grid>
      </Grid>
    </div>
  );
}

export default App;
