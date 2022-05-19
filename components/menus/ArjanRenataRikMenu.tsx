import { Menu } from "./Menu";

export function ArjanRenataRikMenu() {
  return (
    <div
      className="w-full bg-yellow-800"
      style={{
        backgroundImage: "url(/img/tropical-illustration.jpg)",
      }}
    >
      <Menu
        className="font-bold bg-gradient-to-tr text-white bg-black bg-opacity-60"
        font="PermanentMarker"
      >
        <Menu.Title>Arjan, Renata & Rik</Menu.Title>
        <Menu.Divider />
        <Menu.Grid>
          <Menu.Item
            title="Jungle Bird"
            className="text-yellow-400"
            quote="Makes you sing like a bird"
            ingredients={["Brown rum", "Campari", "Pineapple", "Lime"]}
          ></Menu.Item>
          <Menu.Item
            title="Bramble"
            className="text-pink-400"
            quote="Ready to bramble rumble?"
            ingredients={["Gin", "Chambord", "Lime"]}
          ></Menu.Item>
          <Menu.Item
            title="Pink lady"
            className="text-pink-400"
            quote="An apple a day keeps the doctor away"
            ingredients={["Berry gin", "Chambord", "Lime", "Egg white"]}
          ></Menu.Item>
          <Menu.Item
            title="Strawberry daiquiri"
            className=" text-red-300"
            quote="In Hawaii, every season is strawberry daiquiri season"
            ingredients={["White rum", "Strawberry", "Limet"]}
          ></Menu.Item>
          <Menu.Item
            title="Limoncello Lemontree"
            className="text-green-300"
            quote="I'll have three..."
            ingredients={["Limoncello", "Elderflower", "Lime", "Egg white"]}
          ></Menu.Item>
          <Menu.Item
            title="Tequila Sunrise"
            className="text-yellow-400"
            quote="Won't hel you make it till the sunrise"
            ingredients={["Tequila", "Orange", "Grenadine"]}
          ></Menu.Item>
          <Menu.Item
            title="Disguised pornstar martini"
            className="text-yellow-400"
            quote="Ik ging alleen voor een massage - Bert"
            ingredients={["Tequila", "Triple Sec", "Passionfruit", "Lime"]}
          ></Menu.Item>
          <Menu.Item
            title="Watermelon Cosmopolitan"
            className=" text-red-300"
            quote="No need to spit but might make you have to throw up"
            ingredients={["Vodka", "Watermelon", "Cranberry", "Lime"]}
          ></Menu.Item>
        </Menu.Grid>
      </Menu>
    </div>
  );
}
