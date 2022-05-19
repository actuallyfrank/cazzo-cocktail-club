import { Menu } from "./Menu";

export function WouterEnJeroen() {
  return (
    <Menu className="font-bold bg-gradient-to-tr" font="OpenSans">
      <Menu.Title>Wouter & Jeroen</Menu.Title>
      <Menu.Divider />
      <Menu.Grid>
        <Menu.Item
          title="Basil Smash"
          quote="Please don't break your glass"
          ingredients={["Gin", "Citroensap", "Suikerstroop"]}
        ></Menu.Item>
        <Menu.Item
          title="Basil Smash"
          quote="Please don't break your glass"
          ingredients={["Gin", "Citroensap", "Suikerstroop"]}
        ></Menu.Item>
        <Menu.Item
          title="Basil Smash"
          quote="Please don't break your glass"
          ingredients={["Gin", "Citroensap", "Suikerstroop"]}
        ></Menu.Item>
      </Menu.Grid>
    </Menu>
  );
}
