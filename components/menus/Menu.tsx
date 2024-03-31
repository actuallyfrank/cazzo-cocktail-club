import { motion } from "framer-motion";
import React from "react";
import { Container } from "../Container";

interface ItemInterface {
  title: string;
  quote: string;
  ingredients: string[];
  className?: string;
}

interface MenuInterface {
  font: string;
  children: React.ReactNode;
  className?: string;
}

function Divider() {
  return <hr className="w-full border-t py-4"></hr>;
}

export function Menu({ children, font, className }: MenuInterface) {
  return (
    <Container>
      <div
        className={"pb-32 " + className}
        style={{
          fontFamily: font,
        }}
      >
        {children}
      </div>{" "}
    </Container>
  );
}

function Title({ children, className = "" }) {
  return (
    <div className={"w-full text-6xl font-bold py-12 " + className}>
      <h1>{children}</h1>
    </div>
  );
}

function Item({ title, quote, ingredients, className = "" }: ItemInterface) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.3 }}
      className={
        "hover:scale-105 transition-transform duration-300 " + className
      }
    >
      <h2 className="text-4xl">{title}</h2>
      <h3 className="text-2xl italic">"{quote}"</h3>

      <h5 className="text-lg">
        {ingredients.map((ingredient, index) => (
          <label key={index}>
            {ingredient} {index != ingredients.length - 1 ? " | " : ""}
          </label>
        ))}
      </h5>
    </motion.div>
  );
}

function Grid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">{children}</div>
  );
}

Menu.Item = Item;
Menu.Title = Title;
Menu.Grid = Grid;
Menu.Divider = Divider;
