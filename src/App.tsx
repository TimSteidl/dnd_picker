import { Grid } from "@mui/material";
import { Card } from "@/components/ui/card.tsx";

function App() {
  const sources = [
    "src/assets/city_of_cats.png",
    "src/assets/beware_yulecat.png",
    "src/assets/chentoufi_eye.png",
    "src/assets/chentoufi_heart.png",
    "src/assets/chentoufi_fate.png",
    "src/assets/crypt_of_the_crimson_king.png",
    "src/assets/dwarven_fiasco.png",
    "src/assets/enigma_in_the_maze.png",
    "src/assets/fires_of_war.png",
    "src/assets/forgotten_oasis.png",
    "src/assets/fungus.png",
    "src/assets/garden_of_statuary.png",
    "src/assets/gods_of_the_empires.png",
    "src/assets/heresy.png",
    "src/assets/lake_of_dust.png",
    "src/assets/path_of_the_vanished.png",
    "src/assets/rat_kings_sewer.png",
    "src/assets/rule_of_three.png",
    "src/assets/search_for_darwahs_temple.png",
    "src/assets/secrets_of_the_vault.png",
    "src/assets/spears_in_ice.png",
    "src/assets/splinters_of_faith.png",
    "src/assets/spring_rites.png",
    "src/assets/the_dogs_of_orcus.png",
    "src/assets/tomb_of_mercy.png",
    "src/assets/tomb_of_tiberesh.png",
    "src/assets/triptych.png",
    "src/assets/warlock_grimoire.png",
    "src/assets/witch_of_wilderlands.png",
    "src/assets/wizards_wake.png",
    "src/assets/zoo_mafia.png",
  ];
  return (
    <div className={"p-10 bg-cyan-950"}>
      <Grid container spacing={2}>
        {sources.map((source) => (
          <Grid key={source} item xs={6} className={"flex justify-center"}>
            <Card className={"border p-1 bg-card-foreground"}>
              <img src={source} alt={source} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
