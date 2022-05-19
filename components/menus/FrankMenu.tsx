import { Menu } from "./Menu";

export function FrankMenu() {
  return (
    <Menu className="font-bold bg-gradient-to-tr" font="Caveat">
      <Menu.Title>Frank & Frank</Menu.Title>
      <Menu.Divider />
      <Menu.Grid>
        <Menu.Item
          title="Basil Smash"
          quote="Please don't break your glass"
          ingredients={["Gin", "Citroensap", "Suikerstroop"]}
        ></Menu.Item>
        <Menu.Item
          title="Limoncello spritz"
          quote="Doctor away"
          ingredients={["Cava", "Limoncello", "Spa rood"]}
        ></Menu.Item>
        <Menu.Item
          title="Paloma"
          quote="Heeft meer haar dan een Palopa"
          ingredients={["Tequila", "Spa grapefruit", "Limoensap"]}
        ></Menu.Item>
        <Menu.Item
          title="Blue kontiki"
          quote="Doctor away"
          ingredients={[
            "Blue curacao",
            "Bacardi",
            "Meloenlikeur",
            "Ananassap",
            "Limoensap",
          ]}
        ></Menu.Item>
        <Menu.Item
          title="Long island iced tea"
          quote="Doctor away"
          ingredients={[
            "Wodka",
            "Gin",
            "Bacardi",
            "Tequila",
            "Triple sec",
            "Cola",
          ]}
        ></Menu.Item>
        <Menu.Item
          title="Passion scroppino"
          quote="Doctor away"
          ingredients={["Wodka", "Cava", "Mangoijs", "Passievrucht"]}
        ></Menu.Item>
        <Menu.Item
          title="Agua valencia"
          quote="3x raden welke Frank deze erin wou"
          ingredients={["Gin", "Wodka", "Cava", "Jus d'orange"]}
        ></Menu.Item>
        <Menu.Item
          title="Watermelon sling"
          quote="Beter dan ik zing"
          ingredients={["Gin", "Limoensap", "Suikersiroop", "Spa rood"]}
        ></Menu.Item>
      </Menu.Grid>
    </Menu>
  );
}
