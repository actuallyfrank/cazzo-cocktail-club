import { Menu } from "./Menu";

export function KatjaEnMelanieMenu() {
  return (
    <div className="w-full bg-black">
      <Menu className="font-bold bg-gradient-to-tr" font="OpenSans">
        <Menu.Title className="text-shadow shadow-purple-500 text-purple-500">
          Katja & Melanie
        </Menu.Title>
        <Menu.Divider />
        <Menu.Grid>
          <Menu.Item
            title="PORNSTAR MARTINI"
            quote="EEN ECHTE WAS TE DUUR, DUS'T IS MAR TINI #LekkerEnSimpel"
            className="text-shadow text-yellow-500 shadow-yellow-600"
            ingredients={["VanilleVodka", "Passievrucht", "Limoen", "Eiwit"]}
          ></Menu.Item>
          <Menu.Item
            title="ESPRESSO MARTINI"
            quote="HIJ IS ESPRES SO GEMAAKT #WhatElse?"
            className="text-shadow text-yellow-600 shadow-red-500"
            ingredients={["Koffielikeur", "Vodka", "Espresso"]}
          ></Menu.Item>
          <Menu.Item
            title="GIN TONIC"
            quote="DRINK GIN TONIC, GE KUNT BITTER LEMON VATTER #HierKomJeTonicsTekort"
            className="text-shadow text-gray-100 shadow-yellow-500"
            ingredients={["Gin", "Tonic"]}
          ></Menu.Item>
          <Menu.Item
            title="GIN GINGER"
            quote="GIN GINGERS TOEGESTAAN #GingersHaveNoSoul"
            className="text-shadow text-pink-500 shadow-red-500"
            ingredients={["Gin", "Ginger Ale", "Citroen", "Sinaasappel"]}
          ></Menu.Item>
          <Menu.Item
            title="PURPLE RAIN"
            quote="VOEL JE PRINCE OP HET WITTE PAARS"
            className="text-shadow text-purple-500 shadow-blue-500"
            ingredients={["BLUE CURACAO", "VODKA", "CRANBERRY"]}
          ></Menu.Item>
          <Menu.Item
            title="COSMOPOLITAN"
            quote="VRIENDIN!?! #Ik Heb Gezoend Ben Ik Nu Zwanger?"
            className="text-shadow text-pink-500 shadow-pink-400"
            ingredients={["Vodka", "Triple Sec", "Cranberry", "Limoen"]}
          ></Menu.Item>
          <Menu.Item
            title="MOSCOW MULE"
            quote="ZUIPEN EN JE MULE HOUDEN"
            className="text-shadow text-orange-500 shadow-red-400"
            ingredients={["Vodka", "Gingerbeer", "Limoen"]}
          ></Menu.Item>
          <Menu.Item
            title="MOJITO"
            quote="ITS MINT TO BE #BlurredLimes"
            className="text-shadow text-green-300 shadow-green-500"
            ingredients={["Gin", "Spa Rood", "Munt", "Limoen", "Suiker"]}
          ></Menu.Item>
        </Menu.Grid>
      </Menu>
    </div>
  );
}
