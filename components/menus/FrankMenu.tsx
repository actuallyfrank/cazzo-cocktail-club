import { Menu } from "./Menu";

export function FrankMenu() {
  return (
    <div className="bg-gradient-to-tr from-yellow-500 to-pink-600">
      <Menu className="font-bold text-white" font="Caveat">
        <Menu.Title>Frank & Frank</Menu.Title>
        <Menu.Divider />
        <Menu.Grid>
          <Menu.Item
            title="Limoncello spritz"
            quote="Speciaal voor naar België gereden - Pinokio"
            ingredients={["Cava", "Limoncello", "Spa rood"]}
          ></Menu.Item>
          <Menu.Item
            title="Basil Smash"
            quote="Please don't break your glass"
            ingredients={["Gin", "Citroensap", "Suikerstroop"]}
          ></Menu.Item>
          <Menu.Item
            title="Blue kontiki"
            quote="Ik zocht een grap maar het stond niet op wiki"
            ingredients={[
              "Blue curacao",
              "Bacardi",
              "Meloenlikeur",
              "Ananassap",
              "Limoensap",
            ]}
          ></Menu.Item>
          <Menu.Item
            title="Paloma"
            quote="Geen palm, maar wel voor een oma"
            ingredients={["Tequila", "Spa grapefruit", "Limoensap"]}
          ></Menu.Item>

          <Menu.Item
            title="Long island iced tea"
            quote="Bij gebrek aan ice tea"
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
            quote="Deze drink ik altijd voor de show - Pino"
            ingredients={["Wodka", "Cava", "Mangoijs", "Passievrucht"]}
          ></Menu.Item>
          <Menu.Item
            title="Agua valencia"
            quote="3x raden welke Frank deze erin wou"
            ingredients={["Gin", "Wodka", "Cava", "Jus d'orange"]}
          ></Menu.Item>
          <Menu.Item
            title="Watermelon sling"
            quote="Beter dat ik vanavond niet zing"
            ingredients={["Gin", "Limoensap", "Suikersiroop", "Spa rood"]}
          ></Menu.Item>
        </Menu.Grid>
      </Menu>
    </div>
  );
}
