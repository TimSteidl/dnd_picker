import { Grid } from "@mui/material";
import { Card } from "@/components/ui/card.tsx";

function App() {
  return (
    <div className={"p-10"}>
      <Grid container spacing={2}>
        <Grid item xs={6} className={"flex justify-center"}>
          <Card>Überschrift</Card>
        </Grid>
        <Grid item xs={6} className={"flex justify-center"}>
          <Card>Überschrift</Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
