import { Menu } from "./Menu";

export function JessieJordyMenu() {
  return (
    <div
      className="w-full "
      style={{
        backgroundImage: "url(/img/disco.jpg)",

      }}
    >
      <Menu
        className="font-bold bg-opacity-70 bg-black text-white text-center "
        font="TitanOne"
      >
        <Menu.Title>Jessie & Jordy</Menu.Title>
        <Menu.Divider />
        <Menu.Grid>
          <Menu.Item
            title="Matcha Mojito"
            className="text-green-300"
            quote="Let's get this par-tea started."
            ingredients={["vodka", "witte rum", "suiker", "match", "munit", "spa rood"]}
          ></Menu.Item>
          <Menu.Item
            title="Dirty Shirley Temple"
            className="text-red-600"
            quote="My body is a temple, my liver is a battlefield."
            ingredients={["wodka", "grenadine", "sprite", "ginge ale"]}
          ></Menu.Item>
          <Menu.Item
            title="Purple Rain"
            className="text-purple-300"
            quote="I only wanna see you laughing in the purple rain."
            ingredients={["wodka", "blue curacao", "limoensap", "grenadine"]}
          ></Menu.Item>
          <Menu.Item
            title="Rum Punch"
            className="text-pink-400"
            quote="Rum, Forest, Rum."
            ingredients={["witte + bruine rum", "ananassap", "sinaasappelsap", "limoensap", "grenadine"]}
          ></Menu.Item>
          <Menu.Item
            title="Aperol Spritz"
            className="text-orange-400"
            quote="They see me aperolin', they hatin'."
            ingredients={["prosecco", "aperol", "sinaasappel", "spa rood"]}
          ></Menu.Item>
          <Menu.Item
            title="Disco Ginferno"
            className="text-gray-400"
            quote="Let's light up the dancefloor."
            ingredients={["gin", "tonic", "vlierbloesemsiroop", "aardbeien"]}
          ></Menu.Item>
          <Menu.Item
            title="Blue Hawan"
            className="text-sky-300"
            quote="And that, kids, is hawaii met your mother"
            ingredients={["rum", "blue curacao", "ananassap", "kokosmelk", "limoensap"]}
          ></Menu.Item>
          <Menu.Item
            title="Banana Colada"
            className="text-yellow-300"
            quote="A banana a day keeps the doctor away."
            ingredients={["bruine rum", "banaan", "kokosmelk", "ananassap"]}
          ></Menu.Item>
        </Menu.Grid>
      </Menu>
    </div>
  );
}
