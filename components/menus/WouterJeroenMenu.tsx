import { Menu } from "./Menu";

export function WouterEnJeroen() {
  return (
    <Menu className="font-bold bg-gradient-to-tr" font="OpenSans">
      <Menu.Title>Wouter & Jeroen</Menu.Title>
      <Menu.Divider />
      <Menu.Grid>
        <Menu.Item
          title="TOPPERTJE"
          quote="En een breezer ananas"
          ingredients={["Vodka, vigor bebio"]}
        ></Menu.Item>
        <Menu.Item
          title="MOJITO"
          quote="Wollah, wat zei je over mijn JITO!?!?"
          ingredients={["White Rum", "Spa Red", "Mint", "Lime", "Sugar"]}
        ></Menu.Item>
        <Menu.Item
          title="LIMON FIZZ"
          quote="Het leven is een Fizzje, je moet alleen jezelf ophangen"
          ingredients={["Limoncello", "Prosecco"]}
        ></Menu.Item>
        <Menu.Item
          title="TEQUILA SUNRISE"
          quote="Ohh heerlijk"
          ingredients={["Tequila", "Orange Juice", "Grenadine(Kemper)"]}
        ></Menu.Item>
        <Menu.Item
          title="GIN TONIC"
          quote="Ik had Gin tonic!"
          ingredients={["Gin", "Tonic", "Fruits"]}
        ></Menu.Item>
        <Menu.Item
          title="PINA COLADA"
          quote="Liedje van K3 - altijd 5 reeten!"
          ingredients={["Malibu", "Pineapple", "Juice", "Coconut Milk"]}
        ></Menu.Item>
        <Menu.Item
          title="AQUA DE VALENCIA"
          quote="Orange Juice, Cava, Vodka, Gin, Sugar"
          ingredients={["Orange Juice", "Cava", "Vodka", "Gin", "Sugar"]}
        ></Menu.Item>
        <Menu.Item
          title="WHISKY SOUR"
          quote="Mij niet beffe nie!"
          ingredients={["Whisky", "Lemon", "Sugar"]}
        ></Menu.Item>
        <Menu.Item
          title="SEX ON THE BEACH"
          quote="Overal zat zand!"
          ingredients={["Vodka", "Peachtree", "Orange Juice", "Cranberry"]}
        ></Menu.Item>
      </Menu.Grid>
    </Menu>
  );
}
