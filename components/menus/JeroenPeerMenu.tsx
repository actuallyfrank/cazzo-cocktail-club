import { Menu } from "./Menu";

export function JeroenPeerMenu() {
  return (
    <div
      className="bg-gray-600"
      style={{
        backgroundImage: "url(/img/transparanent-snowflakes.webp)",
      }}
    >
      <Menu className="font-bold text-yellow-500" font="OpenSans">
        <Menu.Title className="text-red-500">Jeroen & Peer</Menu.Title>
        <Menu.Divider />
        <Menu.Grid>
          <Menu.Item
            title="Winter Mojito"
            quote="Let’s do the Mojito"
            ingredients={["Rum", "Licor 43", "Spa rood"]}
          />
          <Menu.Item
            title="Peanut butter caramel Martini"
            quote="Ik heb net pindakaas gegeten - Sjors Peters"
            ingredients={["Gin", "Kahlua", "Pindakaas"]}
          />
          <Menu.Item
            title="Jack frosties"
            quote="The cold is a noble force - Wim Hof"
            ingredients={[
              "Vodka",
              "Prosecco",
              "Blue curacao",
              "Lemonade",
              "Ice",
            ]}
          />
          <Menu.Item
            title="Mulled wine"
            quote="Red red wine, you make me feel so fine - UB40"
            ingredients={["Rode wijn", "Kaneel", "Anijs"]}
          />
          <Menu.Item
            title="White Christmas Magarita"
            quote="Let it snow - Frank Sinatra"
            ingredients={["Tequila", "Grand Marnier", "Kokosmelk"]}
          />
          <Menu.Item
            title="Jagermeister Mule"
            quote="Schnitzelenn!"
            ingredients={["Jagermeister", "Ginger beer", "Limoensap"]}
          />
          <Menu.Item
            title="Espresso Limoncelle"
            quote="Wanneer je het nog nooit geproefd hebt, kun je niet weten of het niet smaakt - Jeroen"
            ingredients={["Limoncello", "Baileys", "Espresso"]}
          />
          <Menu.Item
            title="Snowflake Martini"
            quote="Wordt dit de sneeuwvlok die jouw emmer laat overlopen?"
            ingredients={["Vodka", "Witte chocolade likeur", "Room"]}
          />
        </Menu.Grid>
      </Menu>
    </div>
  );
}
